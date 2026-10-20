---
description: Commit current changes without attribution
---

Create a git commit for the current changes following these rules:

1. Check `git status` to see what changed
2. Stage all relevant files with `git add`
3. Write a clear, descriptive commit message:
   - Use conventional commit format (feat:, fix:, docs:, refactor:, etc.)
   - First line should summarize the change (under 72 chars)
   - Add bullet points for details if needed
   - NO emojis
   - NO "Co-Authored-By: Claude" attribution
   - NO "Generated with Claude Code" messages
4. Run `git commit -m "message"` using HEREDOC format
5. After successful commit, ask: "Push to remote?"
6. If user says yes, run `git push` immediately

Example format:
```
git commit -m "$(cat <<'EOF'
Add new feature X

- Implement Y functionality
- Update Z configuration
- Add tests for feature
EOF
)"
```

Keep it clean and professional.
