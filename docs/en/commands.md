# Commands Reference

## Overview

SkillOps provides a comprehensive set of commands for managing AI agent skills across multiple Agentic IDEs (Claude, Antigravity, OpenCode, etc.). All commands follow a consistent pattern and provide rich interactive terminal experiences.

## Skill Management

## Project Configuration

### `skillops agentic`

Open a checklist TUI to enable/disable Agentic IDE environments in your project root.

```bash
skillops agentic
```

**Features:**
- Interactive checklist interface for managing multiple IDEs
- Real-time status updates
- Bulk enable/disable operations
- Confirmation prompts for safety

**Example:**
```bash
cd /path/to/your/project
skillops agentic
# Opens TUI to select which IDEs to enable in this project
```

### `skillops agentic manage <name>`

Interactively manage skills or remove the environment for a specific agentic IDE.

```bash
# Manage Claude IDE skills
skillops agentic manage claude

# Manage Windsurf IDE skills
skillops agentic manage windsurf
```

**Features:**
- Toggle individual skills on/off
- View skill details and descriptions
- Remove all skills for the IDE
- Interactive TUI for skill selection

### `skillops agentic remove-skill <agent> <skill>`

Remove a specific skill symlink from an agentic IDE.

```bash
# Remove 'logger' skill from Claude
skillops agentic remove-skill claude logger

# Remove 'debug-helper' from Windsurf
skillops agentic remove-skill windsurf debug-helper
```

### `skillops agentic remove-skills <agent>`

Remove all skill symlinks for a specific agentic IDE.

```bash
# Remove all skills from Claude
skillops agentic remove-skills claude

# Remove all skills from Windsurf
skillops agentic remove-skills windsurf
```

## Skill Management

### `skillops pull <url>`

Download a new skill repository from GitHub.

```bash
# Pull entire repository
skillops pull https://github.com/user/my-agent-skills

# Pull a specific skill (saves space)
skillops pull https://github.com/user/my-agent-skills --skill logger
```

**Supported URL formats:**
- `https://github.com/user/repo`
- `github.com/user/repo`
- `git@github.com:user/repo.git` (if SSH key is configured)

**Options:**
- `--skill <name>`: Download only a specific skill instead of the entire repository

**Examples:**
```bash
# Pull entire repository
skillops pull https://github.com/leodinhsa/awesome-skills

# Pull only 'git-helper' skill
skillops pull https://github.com/leodinhsa/awesome-skills --skill git-helper
```

### `skillops list`

Show all downloaded skill names and their status across IDEs.

```bash
skillops list
```

**Features:**
- Interactive TUI (Terminal User Interface)
- Browse repository and skill lists
- Quick copy skill names to clipboard using `Space` key
- View active status of each skill

**Status indicators:**
- Active: Skill is symlinked to one or more IDEs
- Inactive: Skill is downloaded but not linked to any IDE

### `skillops remove <name>`

Safely delete a pulled skill repository after checking for active links.

```bash
# Remove a skill (with safety check)
skillops remove copilot-docs
```

**Safety features:**
- Checks for active symlinks before deletion
- Lists affected IDEs
- Requires confirmation for safety

### `skillops remove-all`

Clear all local skill repositories.

```bash
# Remove all skills (with confirmation)
skillops remove-all
```

**Warning:** This will remove all downloaded skills from `~/.skillops/skills/` directory.

### `skillops update`

Synchronize your skills with the latest versions from remote repositories.

```bash
# Update all skills
skillops update

# Update a specific skill
skillops update --skill logger
```

**Features:**
- Automatically checks for updates from GitHub
- Batch or individual skill updates
- Preserves existing symlink configurations

## Agentic Configuration

### `skillops config add-agentic -n <name> -p <path>`

Register a new IDE type globally.

```bash
# Add a new IDE configuration
skillops config add-agentic -n "cursor" -p "~/.cursor/skills"

# Add VSCode configuration
skillops config add-agentic -n "vscode" -p "~/.vscode/extensions/skills"
```

### `skillops config update-agentic -n <name>`

Update an existing IDE mapping with interactive path selection.

```bash
# Update Claude configuration
skillops config update-agentic -n claude
```

This opens an interactive prompt to change the skills directory path.

### `skillops config remove-agentic -n <name>`

Remove a registered IDE mapping.

```bash
# Remove an IDE configuration
skillops config remove-agentic -n cursor
```

## Complete Workflow Example

Here's a complete workflow from installation to managing skills:

```bash
# 1. Pull a skill repository
skillops pull https://github.com/github/copilot-docs

# 2. Check what's available
skillops list

# 3. Navigate to your project
cd /path/to/your/project

# 4. Configure IDEs for current project
skillops agentic
# Select which IDEs to enable (Claude, Windsurf, etc.)

# 5. Manage skills for specific IDE
skillops agentic manage claude
# Toggle skills on/off in the TUI

# 6. Remove unused skill
skillops remove old-skill
```

## Setting Up a New IDE

```bash
# 1. Add the new IDE to global config
skillops config add-agentic -n "neovim" -p "~/.config/nvim/skills"

# 2. Navigate to your project
cd /path/to/your/project

# 3. Enable it in current project
skillops agentic

# 4. Add skills to it
skillops agentic manage neovim
```

## Tips and Best Practices

1. **Use `skillops list` frequently** to check the status of your skills
2. **Always run `skillops agentic`** when setting up a new project
3. **Skills are identified by `SKILL.md` file** in the repository root
4. **Keep your global config clean** by removing unused IDE configurations
5. **Symlinks are used** to avoid file duplication across projects

## Configuration File

All configuration is stored in:
```
~/.skillops/config/agentics.yaml
```

This file contains:
- Registered IDE types and their paths
- Global settings
- Skill repository locations