# Product: SkillOps Landing Page

This is the marketing and documentation website for **SkillOps** — a lightweight Go CLI tool that manages AI agent skills across multiple Agentic IDEs (Kiro, Claude Code, Cursor, Windsurf, etc.) using a symlink-first approach.

## Core Product Concepts

- **Skills**: Directories containing a `SKILL.md` file, identified as `repo_name/skill_name`
- **Global store**: `~/.skillops/skills/` — centralized skill storage
- **Symlink approach**: Skills are stored once and symlinked into project folders — no file duplication
- **Local config**: `.skillops/config.json` per project (should be committed to git)
- **Agentics**: IDE/agent environments with their own skill path mappings (e.g., `kiro` → `.kiro/skills`)

## Site Purpose

- Landing page showcasing SkillOps features
- Integrated documentation (rendered from Markdown files)
- Multilingual support (English and Vietnamese)
- Links to GitHub and installation instructions

## Target Audience

Developers using AI-powered IDEs who want to manage and share agent skills efficiently across projects.
