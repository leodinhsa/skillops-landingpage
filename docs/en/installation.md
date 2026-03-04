# Installation Guide

## Quick Installation

### Homebrew (macOS & Linux)

```bash
brew tap leodinhsa/skillops
brew install skillops
```

### Manual Installation (from source)

```bash
# Build from source
go build -o skillops main.go

# Move to PATH
sudo mv skillops /usr/local/bin/

# Verify installation
skillops --help
```

## Verification

After installation, verify that SkillOps is working correctly:

```bash
# View help and available commands
skillops --help

# Check if skillops is in your PATH
which skillops
```

## Configuration

SkillOps stores its configuration in `~/.skillops/config/agentics.yaml`. The configuration file is created automatically on first run.

### Configuration File Location

- **All Config**: `~/.skillops/config/agentics.yaml`

### Skill Identification

Skill folders are identified by the presence of a `SKILL.md` file in the repository root.

## Troubleshooting

### Permission Denied

If you encounter permission issues:

```bash
# Make sure the binary is executable
chmod +x /usr/local/bin/skillops

# Check if /usr/local/bin is in your PATH
echo $PATH
```

### Command Not Found

If `skillops` command is not found:

```bash
# Add to your shell profile (.bashrc, .zshrc, etc.)
export PATH="/usr/local/bin:$PATH"

# Reload your shell
source ~/.bashrc  # or ~/.zshrc
```

## Next Steps

Once installed, you can:

1. [Pull your first skill](./commands.md#skillops-pull)
2. [Configure agentic IDEs](./commands.md#agentic-configuration)
3. [Start managing skills](./commands.md#project-configuration)

For more detailed usage instructions, see the [Commands Reference](./commands.md).