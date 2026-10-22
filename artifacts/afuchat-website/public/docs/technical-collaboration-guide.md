# Technical Collaboration Guide

**AfuChat Technologies Limited**

This guide describes the expected baseline for people contributing to AfuChat Technologies projects. A specific repository may have additional instructions; always read its README and contributor guidance first.

## Before starting

- Confirm the repository and product you have been invited to work on.
- Read the README, project setup instructions, issue descriptions and any repository-specific agent/developer instructions.
- Ask for the minimum access needed. Never share passwords, personal access tokens, private keys or production secrets in issues, commits or chat.
- Set up the documented development environment and verify that the project runs locally.

## Issues and planning

- Prefer an existing issue or agreed task before starting significant work.
- Explain the problem, intended outcome, scope and acceptance criteria.
- Break large changes into reviewable units.
- Flag blockers, risks and assumptions early instead of silently changing scope.

## Branches and pull requests

- Work on a dedicated feature or fix branch; do not push directly to the production branch unless specifically authorized by project policy.
- Keep changes focused and commits descriptive.
- Open a pull request with a summary, rationale, testing performed, screenshots for UI changes and any migration or deployment notes.
- Request review and address feedback respectfully.
- Do not merge or deploy changes without the required approval and checks.

## Code quality

- Follow the language, framework and conventions already used by the repository.
- Prefer clear, maintainable implementations over unnecessary rewrites.
- Add or update tests for meaningful behavior changes.
- Run available lint, type-check, test and build commands; state clearly when a check could not be run.
- Avoid unrelated formatting changes and accidental changes to generated files.

## Security and data protection

- Never commit secrets, credentials, personal data or production database exports.
- Use approved environment variables and secret-management mechanisms.
- Treat user data carefully and collect only what the feature needs.
- Review authorization, validation, rate limits and error handling when changing APIs.
- Do not run destructive database operations or production migrations without explicit approval, a verified backup and a rollback plan.

## Reviews and releases

- Explain trade-offs and risks in review discussions.
- Verify relevant CI checks before merge.
- Document schema changes, environment variables, deployment steps and rollback instructions.
- Confirm the intended environment before deployment; a successful preview is not proof of a production deployment.

## Ownership and access

Repository access does not by itself transfer ownership of a product, company, intellectual property or equity. Contributor roles, confidentiality, intellectual-property arrangements and any compensation should be clarified through the appropriate written agreements.

## Questions

Raise project-specific questions in the relevant repository issue or pull request, avoiding confidential information in public discussions.