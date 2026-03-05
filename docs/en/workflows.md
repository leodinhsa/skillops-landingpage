# Workflow Examples

## Complete Workflows

### Setting Up a New Project with Claude and Antigravity

This workflow demonstrates how to set up a new project with multiple IDEs.

**Step 1: Initialize the Environment**
```bash
cd my-new-project
skillops agentic
# Select 'claude' and 'antigravity' from the checklist
```

**Step 2: Pull Required Skills**
```bash
skillops pull https://github.com/leodinhsa/awesome-skills --skill git-helper
```

**Step 3: Link Skills to IDEs**
```bash
skillops agentic manage claude
# Select 'git-helper' from the TUI and press Enter
```

**Result:**
- `.agents/skills/` directory created for Claude
- `.agent/skills/` directory created for Antigravity
- `git-helper` skill symlinked to Claude

### Daily Development Workflow

**Morning Setup:**
```bash
# Update all skills to latest versions
skillops update

# Check what skills are available
skillops list
```

**Starting a New Feature:**
```bash
# Navigate to project
cd ~/projects/my-app

# Check which IDEs are configured
ls -la | grep "^\."

# Add a new skill for the feature
skillops pull https://github.com/user/testing-skills --skill unit-test-helper
skillops agentic manage claude
```

**End of Day:**
```bash
# Review active skills
skillops list

# Remove skills no longer needed
skillops agentic remove-skill claude old-skill
```

### Team Collaboration Workflow

**Team Lead Setup:**
```bash
# Create a shared skills repository
# (on GitHub: create repo 'team-skills')

# Pull team skills
skillops pull https://github.com/company/team-skills

# Document the setup
echo "Team Skills Setup" > SKILLS_SETUP.md
echo "Run: skillops pull https://github.com/company/team-skills" >> SKILLS_SETUP.md
```

**Team Member Setup:**
```bash
# Follow team documentation
skillops pull https://github.com/company/team-skills

# Configure for your IDE
cd project
skillops agentic
skillops agentic manage claude
```

## Use Case Specific Workflows

### Web Development

**Initial Setup:**
```bash
# Pull web development skills
skillops pull https://github.com/user/web-dev-skills
skillops pull https://github.com/user/react-skills
skillops pull https://github.com/user/css-skills

# Configure IDEs
cd ~/projects/web-app
skillops agentic
# Select: vscode, cursor
```

**Managing Skills:**
```bash
# Enable React skills for current project
skillops agentic manage vscode
# Select: react-component-generator, react-hooks-helper

# Enable CSS skills
skillops agentic manage vscode
# Select: tailwind-helper, css-optimizer
```

### Backend Development

**Initial Setup:**
```bash
# Pull backend skills
skillops pull https://github.com/user/api-skills
skillops pull https://github.com/user/database-skills
skillops pull https://github.com/user/testing-skills

# Configure project
cd ~/projects/api-server
skillops agentic
# Select: claude, windsurf
```

**Managing Skills:**
```bash
# Enable API development skills
skillops agentic manage claude
# Select: api-generator, swagger-helper, auth-helper

# Enable database skills
skillops agentic manage claude
# Select: sql-optimizer, migration-helper
```

### Data Science

**Initial Setup:**
```bash
# Pull data science skills
skillops pull https://github.com/user/data-science-skills
skillops pull https://github.com/user/ml-skills
skillops pull https://github.com/user/visualization-skills

# Configure Jupyter environment
skillops config add-agentic -n "jupyter" -p ".jupyter/skills"
```

**Project Setup:**
```bash
cd ~/projects/ml-project
skillops agentic
# Select: jupyter, vscode

# Enable ML skills
skillops agentic manage jupyter
# Select: data-cleaner, model-trainer, visualization-helper
```

### DevOps

**Initial Setup:**
```bash
# Pull DevOps skills
skillops pull https://github.com/user/docker-skills
skillops pull https://github.com/user/kubernetes-skills
skillops pull https://github.com/user/ci-cd-skills

# Configure project
cd ~/projects/infrastructure
skillops agentic
```

**Managing Skills:**
```bash
# Enable Docker skills
skillops agentic manage claude
# Select: dockerfile-generator, docker-compose-helper

# Enable Kubernetes skills
skillops agentic manage claude
# Select: k8s-manifest-generator, helm-helper
```

## Advanced Workflows

### Multi-Project Management

**Scenario:** Working on multiple projects with different skill requirements

```bash
# Project 1: Frontend
cd ~/projects/frontend-app
skillops agentic
skillops agentic manage vscode
# Select: react-skills, css-skills

# Project 2: Backend
cd ~/projects/backend-api
skillops agentic
skillops agentic manage claude
# Select: api-skills, database-skills

# Project 3: Mobile
cd ~/projects/mobile-app
skillops agentic
skillops agentic manage cursor
# Select: react-native-skills, mobile-testing-skills
```

### Skill Development Workflow

**Creating Your Own Skills:**

```bash
# Create a new repository for your skills
mkdir my-custom-skills
cd my-custom-skills

# Create SKILL.md identifier
cat > SKILL.md << EOF
# My Custom Skills

Collection of custom skills for my workflow.
EOF

# Create skill directories
mkdir -p custom-helper
echo "#!/bin/bash" > custom-helper/script.sh

# Initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/my-custom-skills
git push -u origin main

# Pull into SkillOps
skillops pull https://github.com/user/my-custom-skills
```

### Skill Testing Workflow

**Testing New Skills:**

```bash
# Create a test project
mkdir ~/test-project
cd ~/test-project

# Pull skill to test
skillops pull https://github.com/user/new-skill

# Enable in test project
skillops agentic
skillops agentic manage claude
# Select the new skill

# Test the skill
# ... use your IDE to test ...

# If good, deploy to real projects
cd ~/projects/real-project
skillops agentic manage claude
# Select the tested skill
```

### Cleanup Workflow

**Regular Maintenance:**

```bash
# Review all skills
skillops list

# Remove unused skills
skillops remove old-skill-1
skillops remove old-skill-2

# Update remaining skills
skillops update

# Check disk usage
du -sh ~/.skillops/skills/*
```

**Project Cleanup:**

```bash
# Remove all skills from a project
cd ~/projects/old-project
skillops agentic remove-skills claude
skillops agentic remove-skills windsurf

# Or remove specific skills
skillops agentic remove-skill claude unused-skill
```

## Troubleshooting Workflows

### Fixing Broken Symlinks

```bash
# Find broken symlinks
find .agents/skills -type l ! -exec test -e {} \; -print

# Remove all broken symlinks
find .agents/skills -type l ! -exec test -e {} \; -delete

# Re-link skills
skillops agentic manage claude
```

### Recovering from Mistakes

```bash
# Accidentally removed a skill
skillops pull https://github.com/user/important-skill

# Re-link to all projects
cd ~/projects/project1
skillops agentic manage claude

cd ~/projects/project2
skillops agentic manage claude
```

### Migrating to New Machine

```bash
# On old machine
tar -czf skillops-backup.tar.gz ~/.skillops

# Transfer to new machine
scp skillops-backup.tar.gz newmachine:~/

# On new machine
cd ~
tar -xzf skillops-backup.tar.gz

# Verify
skillops list
```

## Best Practices

1. **Start Small**: Begin with one or two skills and gradually add more
2. **Regular Updates**: Run `skillops update` weekly
3. **Clean Regularly**: Remove unused skills monthly
4. **Document Setup**: Keep a SKILLS_SETUP.md in your project
5. **Test First**: Test new skills in a separate project before production use
6. **Backup Config**: Regularly backup `~/.skillops/config/agentics.yaml`
7. **Use Selective Pull**: Use `--skill` flag to save space when you only need specific skills
8. **Review Regularly**: Run `skillops list` to see what you have installed
