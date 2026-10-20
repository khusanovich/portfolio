# Auto Commit Skill

When the user completes a task or makes changes that should be committed, automatically create a git commit without requiring explicit instruction.

## Commit Rules

1. **Never include co-authorship attribution**: Do NOT add "Co-Authored-By: Claude" or "Generated with Claude Code" messages
2. **Commit message format**:
   - Use clear, descriptive commit messages
   - Follow conventional commit format when appropriate
   - Keep first line under 72 characters
   - Add detailed description if needed
3. **When to commit**:
   - After completing a feature or bug fix
   - After making significant changes
   - When the user explicitly says to commit
   - After completing a todo/task list

## Example Commit Messages

Good:
```
Add Learning Hub with article system

- Create article listing page with filtering
- Add dynamic article pages with rich content
- Support for sources and references
```

Bad (don't do this):
```
Add Learning Hub

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

## Workflow

1. Check `git status` to see what changed
2. Stage relevant files with `git add`
3. Create commit with descriptive message (no attribution)
4. Ask user if they want to push

## Important

- Keep commits clean and professional
- No emojis unless user explicitly requests
- No attribution footers
- Focus on what changed and why
