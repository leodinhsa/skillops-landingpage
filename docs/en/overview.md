# SkillOps: Complete User Guide

SkillOps is a powerful, high-performance CLI tool developed in Go that helps you manage "skills" (AI-supporting capabilities/scripts) for various Agentic IDEs (like Claude Desktop, Antigravity, OpenCode, Vercel, etc.) through a **symlink-first** mechanism.

Instead of manually copying skills into each IDE's directory, SkillOps stores them centrally and creates intelligent symlinks, making synchronization effortless.

## Core Concepts

### Global Skills Directory
The central directory (`~/.skillops/skills`) where all downloaded skill repositories are stored.

### Agentic IDE
Code editors or agent environments (Claude, Antigravity, etc.) that support AI-powered skills.

### Symlinking
SkillOps creates links from the global directory to your project directories (e.g., `.agents/skills`), avoiding file duplication and ensuring consistency across projects.

## Key Features

- **Centralized Management**: Store all skills in one location
- **Symlink-Based**: No file duplication across projects
- **Multi-IDE Support**: Manage skills for multiple IDEs simultaneously
- **Interactive TUI**: Beautiful terminal interfaces for all operations
- **Git Integration**: Pull skills directly from GitHub repositories
- **Selective Downloads**: Download entire repos or specific skills
- **Safe Operations**: Confirmation prompts and safety checks

## Architecture

```
~/.skillops/
├── skills/              # Global skills storage
│   ├── repo-1/
│   │   └── SKILL.md    # Skill identifier
│   └── repo-2/
│       └── SKILL.md
└── config/
    └── agentics.yaml   # IDE configurations

Your Project/
├── .agents/            # Claude Desktop
│   └── skills/         # Symlinks to global skills
├── .agent/             # Antigravity
│   └── skills/
└── .skillops/          # Other IDEs
    └── skills/
```

## Workflow Overview

1. **Install** SkillOps on your system
2. **Pull** skills from GitHub repositories
3. **Configure** which IDEs you want to use in your project
4. **Manage** which skills are active for each IDE
5. **Update** skills to get the latest versions

## Supported IDEs

SkillOps comes pre-configured with support for popular Agentic IDEs:

- Claude Desktop
- Antigravity
- OpenCode
- Windsurf
- Cursor
- And more...

You can also add custom IDE configurations to support any tool that uses a skills directory.

## Next Steps

- [Installation Guide](./installation.md) - Get SkillOps up and running
- [Commands Reference](./commands.md) - Learn all available commands
- [Configuration Guide](./configuration.md) - Customize SkillOps for your workflow
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
