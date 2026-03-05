# Configuration Guide

## Overview

SkillOps stores all configuration in a YAML file at `~/.skillops/config/agentics.yaml`. This file is automatically created when you first run SkillOps.

## Configuration File Structure

```yaml
agentics:
  - name: "claude"
    path: ".agents/skills"
  - name: "antigravity"
    path: ".agent/skills"
  - name: "windsurf"
    path: ".skillops/skills"
  - name: "cursor"
    path: ".cursor/skills"
```

## Managing IDE Configurations

### Adding a New IDE

To add support for a new IDE:

```bash
skillops config add-agentic -n "my-ide" -p ".my-ide/skills"
```

**Parameters:**
- `-n, --name`: Name of the IDE (will be used in commands)
- `-p, --path`: Relative path from project root to skills directory

**Examples:**
```bash
# Add support for Neovim
skillops config add-agentic -n "neovim" -p "~/.config/nvim/skills"

# Add support for VSCode
skillops config add-agentic -n "vscode" -p "~/.vscode/extensions/skills"
```

### Updating IDE Configuration

To change the path of an existing IDE:

```bash
skillops config update-agentic -n "claude"
```

This command opens an interactive prompt for you to enter the new path.

### Removing IDE Configuration

To remove an IDE from configuration:

```bash
skillops config remove-agentic -n "cursor"
```

**Note:** This only removes the configuration, not any existing skills or symlinks.

## Project Configuration

### Directory Structure

When you run `skillops agentic` in a project, SkillOps creates directories based on IDE configurations:

```
your-project/
├── .agents/              # Claude Desktop
│   └── skills/
│       ├── skill-1 -> ~/.skillops/skills/repo/skill-1
│       └── skill-2 -> ~/.skillops/skills/repo/skill-2
├── .agent/               # Antigravity
│   └── skills/
│       └── skill-1 -> ~/.skillops/skills/repo/skill-1
└── .skillops/            # Windsurf
    └── skills/
        └── skill-3 -> ~/.skillops/skills/repo/skill-3
```

### Skill Identification

SkillOps identifies a directory as a skill if it contains a `SKILL.md` file in the repository root.

**Skill Repository Structure:**
```
my-skills-repo/
├── SKILL.md              # Required identifier file
├── README.md
├── skill-1/
│   └── main.py
└── skill-2/
    └── script.js
```

## Advanced Configuration

### Environment Variables

SkillOps supports the following environment variables:

- `SKILLOPS_CONFIG_DIR`: Override config directory location (default: `~/.skillops/config`)
- `SKILLOPS_SKILLS_DIR`: Override global skills directory location (default: `~/.skillops/skills`)

**Example:**
```bash
export SKILLOPS_CONFIG_DIR="/custom/config/path"
export SKILLOPS_SKILLS_DIR="/custom/skills/path"
```

### Custom Paths

You can use both absolute and relative paths in configuration:

```bash
# Relative path (from project root)
skillops config add-agentic -n "local-ide" -p ".local/skills"

# Absolute path
skillops config add-agentic -n "global-ide" -p "~/.global-ide/skills"
```

## Best Practices

### Organizing Skills

1. **Group by Function**: Organize skills by purpose (debugging, testing, documentation, etc.)
2. **Clear Naming**: Use descriptive names for skills and repositories
3. **Documentation**: Always include a `SKILL.md` file with clear descriptions

### Configuration Management

1. **Keep Config Clean**: Remove unused IDEs from configuration
2. **Use Consistent Paths**: Follow naming conventions for IDE paths
3. **Backup Configuration**: Regularly backup your `agentics.yaml` file

### Project Management

1. **Selective IDEs**: Only enable IDEs you actually use in each project
2. **Selective Skills**: Only link necessary skills for each project
3. **Regular Updates**: Run `skillops update` to keep skills current

## Example Configurations

### Web Development Setup

```bash
# Add IDEs for web development
skillops config add-agentic -n "vscode" -p ".vscode/skills"
skillops config add-agentic -n "cursor" -p ".cursor/skills"

# Pull web-related skills
skillops pull https://github.com/user/web-dev-skills
skillops pull https://github.com/user/react-skills
```

### Data Science Setup

```bash
# Add IDEs for data science
skillops config add-agentic -n "jupyter" -p ".jupyter/skills"
skillops config add-agentic -n "pycharm" -p ".pycharm/skills"

# Pull data science skills
skillops pull https://github.com/user/data-science-skills
skillops pull https://github.com/user/ml-skills
```

## Viewing Current Configuration

To view your current configuration:

```bash
# View configuration file
cat ~/.skillops/config/agentics.yaml

# Or use your favorite editor
vim ~/.skillops/config/agentics.yaml
```

## Migrating Configuration

If you need to migrate configuration to a new machine:

```bash
# On old machine
cp -r ~/.skillops /path/to/backup/

# On new machine
cp -r /path/to/backup/.skillops ~/
```

**Note:** Ensure paths in the configuration are still valid on the new machine.
