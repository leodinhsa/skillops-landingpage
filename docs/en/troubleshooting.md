# Troubleshooting Guide

## Common Issues and Solutions

### Installation Issues

#### Command Not Found

**Problem:** After installation, running `skillops` shows "command not found"

**Solutions:**

1. Check if SkillOps is in your PATH:
```bash
which skillops
echo $PATH
```

2. Add to your shell profile:
```bash
# For bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# For zsh
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

3. Verify the binary location:
```bash
ls -la /usr/local/bin/skillops
```

#### Permission Denied

**Problem:** Cannot execute skillops binary

**Solution:**
```bash
# Make the binary executable
chmod +x /usr/local/bin/skillops

# If you need sudo access
sudo chmod +x /usr/local/bin/skillops
```

### TUI (Terminal User Interface) Issues

#### Error: "open /dev/tty: no such device or address"

**Problem:** SkillOps cannot open interactive TUI

**Causes:**
- Running in a non-interactive environment (CI/CD, scripts)
- Terminal emulator doesn't support TTY

**Solutions:**

1. Run in a real terminal (not through pipes or scripts)
2. If using SSH, ensure you have a proper TTY:
```bash
ssh -t user@host skillops list
```

3. Check if your terminal supports TTY:
```bash
tty
# Should output something like /dev/ttys001
```

#### TUI Display Issues

**Problem:** TUI interface looks broken or garbled

**Solutions:**

1. Update your terminal emulator
2. Set proper TERM environment variable:
```bash
export TERM=xterm-256color
```

3. Try a different terminal emulator (iTerm2, Alacritty, etc.)

### Skill Management Issues

#### Skill Not Found After Pull

**Problem:** Pulled a repository but skills don't appear in `skillops list`

**Causes:**
- Repository doesn't contain `SKILL.md` file
- Incorrect repository structure

**Solutions:**

1. Check if `SKILL.md` exists in repository root:
```bash
ls ~/.skillops/skills/repo-name/SKILL.md
```

2. Verify repository structure:
```bash
tree ~/.skillops/skills/repo-name
```

3. Manually create `SKILL.md` if needed:
```bash
echo "# My Skill" > ~/.skillops/skills/repo-name/SKILL.md
```

#### Git Clone Failures

**Problem:** Cannot pull skills from GitHub

**Solutions:**

1. Check internet connection
2. Verify GitHub URL is correct
3. For private repositories, ensure SSH keys are configured:
```bash
ssh -T git@github.com
```

4. Try HTTPS instead of SSH:
```bash
# Instead of git@github.com:user/repo.git
skillops pull https://github.com/user/repo
```

### Symlink Issues

#### Broken Symlinks

**Problem:** Symlinks point to non-existent locations

**Causes:**
- Skill was removed from global directory
- Directory was moved or renamed

**Solutions:**

1. Check symlink status:
```bash
ls -la .agents/skills/
```

2. Remove broken symlinks:
```bash
find .agents/skills -type l ! -exec test -e {} \; -delete
```

3. Re-manage skills:
```bash
skillops agentic manage claude
```

#### Permission Issues with Symlinks

**Problem:** Cannot create symlinks in project directory

**Solutions:**

1. Check directory permissions:
```bash
ls -la .agents/
```

2. Fix permissions:
```bash
chmod 755 .agents/skills/
```

3. On Windows, ensure Developer Mode is enabled or run as Administrator

### Configuration Issues

#### Configuration File Not Found

**Problem:** SkillOps cannot find configuration file

**Solutions:**

1. Create config directory:
```bash
mkdir -p ~/.skillops/config
```

2. Run SkillOps to auto-generate config:
```bash
skillops list
```

3. Manually create configuration:
```bash
cat > ~/.skillops/config/agentics.yaml << EOF
agentics:
  - name: "claude"
    path: ".agents/skills"
EOF
```

#### Invalid Configuration Format

**Problem:** Configuration file is corrupted or invalid

**Solution:**

1. Backup current config:
```bash
cp ~/.skillops/config/agentics.yaml ~/.skillops/config/agentics.yaml.bak
```

2. Validate YAML syntax:
```bash
# Using Python
python -c "import yaml; yaml.safe_load(open('~/.skillops/config/agentics.yaml'))"
```

3. Reset to default configuration:
```bash
rm ~/.skillops/config/agentics.yaml
skillops list  # Will regenerate default config
```

### Project-Specific Issues

#### Skills Not Appearing in IDE

**Problem:** Linked skills don't show up in IDE

**Solutions:**

1. Verify symlinks exist:
```bash
ls -la .agents/skills/
```

2. Restart your IDE
3. Check IDE's skill directory configuration
4. Verify IDE supports the skill format

#### Multiple Projects Conflict

**Problem:** Skills from one project affect another

**Explanation:** This shouldn't happen as SkillOps uses project-specific symlinks

**Solutions:**

1. Verify each project has its own skill directories
2. Check for global IDE configurations that might override project settings
3. Ensure you're running `skillops agentic` in the correct project directory

### Update Issues

#### Update Fails

**Problem:** `skillops update` fails to update skills

**Solutions:**

1. Check internet connection
2. Verify Git is installed:
```bash
git --version
```

3. Manually update:
```bash
cd ~/.skillops/skills/repo-name
git pull origin main
```

4. Remove and re-pull the skill:
```bash
skillops remove skill-name
skillops pull https://github.com/user/repo
```

### Performance Issues

#### Slow Operations

**Problem:** SkillOps commands are slow

**Solutions:**

1. Check disk space:
```bash
df -h ~/.skillops
```

2. Clean up unused skills:
```bash
skillops remove-all  # Be careful!
```

3. Check for large repositories:
```bash
du -sh ~/.skillops/skills/*
```

## Getting Help

### Verbose Output

Enable verbose logging for debugging:

```bash
# Set environment variable
export SKILLOPS_DEBUG=true
skillops list
```

### Collecting Debug Information

When reporting issues, include:

1. SkillOps version:
```bash
skillops --version
```

2. Operating system:
```bash
uname -a
```

3. Configuration:
```bash
cat ~/.skillops/config/agentics.yaml
```

4. Directory structure:
```bash
tree -L 2 ~/.skillops
```

### Community Support

- GitHub Issues: Report bugs and request features
- Documentation: Check the latest docs for updates
- Examples: Look at example repositories for reference

## Preventive Measures

### Regular Maintenance

1. Update skills regularly:
```bash
skillops update
```

2. Clean up unused skills:
```bash
skillops list  # Review what you have
skillops remove unused-skill
```

3. Backup configuration:
```bash
cp -r ~/.skillops ~/skillops-backup-$(date +%Y%m%d)
```

### Best Practices

1. Always run `skillops list` before making changes
2. Use `skillops agentic manage` instead of manual symlink creation
3. Keep skill repositories small and focused
4. Document custom configurations
5. Test in a single project before applying globally

## Still Having Issues?

If you're still experiencing problems:

1. Check the GitHub repository for known issues
2. Search existing issues for similar problems
3. Create a new issue with detailed information:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - System information
   - Configuration files
   - Error messages
