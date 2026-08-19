---
name: GitHub API push fallback
description: When HTTPS git push rejects credentials, use the connected GitHub integration and Git Database API.
---

When GitHub HTTPS push fails because no usable credential helper is available, the connected GitHub integration can safely synchronize the repository without handling a token. Confirm the target ref first, upload changed file contents as blobs, create a tree from the remote base, create a commit, and update the branch ref with `force: false`.

**Why:** Replit's GitHub connector provides authenticated API access even when the local git remote cannot authenticate, while preserving normal branch safety checks.

**How to apply:** Prefer this for a user-requested push after the GitHub connection is accepted; verify the final branch SHA and changed asset/content through the API.