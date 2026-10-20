# Project Instructions for Claude

## Git Commit Policy

When creating git commits in this project:

1. **NEVER include attribution messages** such as:
   - "🤖 Generated with [Claude Code]..."
   - "Co-Authored-By: Claude <noreply@anthropic.com>"
   - Any similar AI generation attribution

2. **Commit message format**:
   - Use clear, conventional commit messages
   - Format: `<type>: <description>` or multi-line with details
   - Types: feat, fix, docs, refactor, style, test, chore
   - Keep first line under 72 characters
   - Add bullet points for detailed changes if needed

3. **Example good commit**:
   ```
   feat: Add article sources support

   - Add Source interface with 7 types
   - Create sources section in article pages
   - Update article template with examples
   ```

4. **When to commit**:
   - Only when user explicitly requests it
   - After completing significant features
   - When user says "commit" or similar

5. **After committing**:
   - Always ask: "Push to remote?" or "Would you like me to push?"
   - Wait for user approval (yes/no)
   - If yes, immediately run `git push`
   - Keep it simple and efficient

## General Guidelines

- Keep code clean and professional
- Follow existing code style in the project
- Test changes before committing
- Ask for clarification when requirements are unclear
