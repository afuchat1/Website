import { Router, type IRouter } from "express";
import {
  GetCommunityMembersQueryParams,
  GetCommunityMembersResponse,
  GetCommunityStatsResponse,
} from "@workspace/api-zod";
import { getSupabase } from "../lib/supabase";

const router: IRouter = Router();

// All queries here are read-only SELECTs against the `public_profiles` view
// (the AfuChat Supabase project's curated, public-safe profile view) using
// the anon key. Nothing in this router ever writes to the database.

router.get("/community/stats", async (_req, res, next) => {
  try {
    const supabase = getSupabase();

    const visibleProfiles = () =>
      supabase.from("public_profiles").select("id", { count: "exact", head: true }).eq("is_private", false).eq("is_banned", false);

    const [{ count: totalMembers, error: totalError }, { count: verifiedMembers, error: verifiedError }, { data: countryRows, error: countryError }] =
      await Promise.all([
        visibleProfiles(),
        visibleProfiles().eq("is_verified", true),
        supabase
          .from("public_profiles")
          .select("country")
          .eq("is_private", false)
          .eq("is_banned", false)
          .not("country", "is", null),
      ]);

    if (totalError) throw totalError;
    if (verifiedError) throw verifiedError;
    if (countryError) throw countryError;

    const countries = new Set((countryRows ?? []).map((row) => row.country)).size;

    const data = GetCommunityStatsResponse.parse({
      totalMembers: totalMembers ?? 0,
      verifiedMembers: verifiedMembers ?? 0,
      countries,
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/community/members", async (req, res, next) => {
  try {
    const { limit, sort } = GetCommunityMembersQueryParams.parse(req.query);
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("public_profiles")
      .select("handle, display_name, avatar_url, is_verified, country, current_grade")
      .eq("is_private", false)
      .eq("is_banned", false)
      .not("display_name", "is", null)
      .order(sort === "newest" ? "created_at" : "xp", { ascending: false })
      .limit(limit);

    if (error) throw error;

    const members = (data ?? []).map((row) => ({
      handle: row.handle,
      displayName: row.display_name,
      avatarUrl: row.avatar_url,
      isVerified: row.is_verified ?? false,
      country: row.country,
      grade: row.current_grade,
    }));

    const response = GetCommunityMembersResponse.parse({ members });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

export default router;
