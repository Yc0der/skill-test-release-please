# Contributing

## Branching

This project follows [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow): `main` is always deployable. All work happens on short-lived branches that merge back into `main` and get deleted.

Branch names:

- `feature/<short-description>` — new functionality
- `fix/<short-description>` — bug fix
- `hotfix/<short-description>` — urgent production fix

## Commits — Conventional Commits

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <description>
```

Examples:

- `feat: remember filter selection between sessions`
- `fix(auth): handle expired refresh token on login`
- `docs: clarify local setup steps in README`

Commit messages are checked automatically by commitlint via a git hook — a malformed commit message is rejected before it's created.

**The PR title matters as much as the commit message.** This project squash-merges PRs, so the PR title becomes the commit subject on `main` — and that's the text Release Please reads to build `CHANGELOG.md`. Write it as a human-readable summary of what changed, not a vague label:

- Good: `feat: remember filter selection between sessions`
- Bad: `feat: update store`

Nobody hand-writes the changelog — the PR title is where its quality gets decided.

## Pull requests

Every change goes through a PR, including your own solo work — it's the checkpoint where CI runs (typecheck, lint, test, build) before anything reaches `main`.

**Hotfixes are not an exception.** A hotfix takes the same path as everything else: branch from `main`, open a PR, wait for CI to go green, merge. It is not a shortcut around review or CI. A hotfix is written under time pressure against a system that's already misbehaving — exactly the condition where a change is most likely to introduce a second problem, and the CI run costs well under a minute. Skipping it trades a small, known delay for an unbounded one.

The one genuine exception: if CI itself is broken or unavailable, that's not "skipping verification," it's verification being unavailable — see the `enforce_admins` note in the repository's branch protection settings for the escape hatch that covers this case.

## Versions and changelog

Versioning and `CHANGELOG.md` are handled by [Release Please](https://github.com/googleapis/release-please), which watches `main` and keeps a single release PR up to date based on Conventional Commits (`fix` → patch, `feat` → minor, `!`/`BREAKING CHANGE` → major). Merging that PR is how a version gets cut — nothing needs to be done by hand.
