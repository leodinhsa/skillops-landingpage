# Requirements Document

## Introduction

Cập nhật toàn bộ nội dung landing page SkillOps để đồng bộ với tài liệu sản phẩm mới nhất (DOC_GUIDE.md và AGENTS_backend.md). Các thay đổi bao gồm: sửa terminal demo trong Hero và CTA, cập nhật i18n labels cho installation steps, viết lại docs (commands, configuration, overview, workflows, troubleshooting) bằng cả tiếng Anh và tiếng Việt, và cập nhật danh sách IDE được hỗ trợ trong messages.

Phạm vi thay đổi: `components/Hero.tsx`, `components/CTA.tsx`, `messages/en.json`, `messages/vi.json`, và toàn bộ 10 file Markdown trong `docs/en/` và `docs/vi/`.

## Glossary

- **SkillOps**: CLI tool viết bằng Go để quản lý AI agent skills.
- **Skill**: Thư mục chứa file `SKILL.md`, được nhận diện theo định dạng `repo_name/skill_name`.
- **Agentic / IDE**: Môi trường agent có đường dẫn skill riêng (ví dụ: `kiro` → `.kiro/skills`).
- **Global store**: `~/.skillops/skills/` — nơi lưu tập trung tất cả skill đã pull.
- **Local config**: `.skillops/config.json` trong thư mục dự án — nguồn sự thật cho project, nên commit vào git.
- **Symlink**: Liên kết tượng trưng từ `.<ide>/skills/<skill-name>` trỏ đến `~/.skillops/skills/<repo>/<skill>`.
- **Hero_Terminal**: Terminal demo trong `components/Hero.tsx`.
- **CTA_Terminal**: Terminal demo trong `components/CTA.tsx`.
- **Installation_Labels**: Các chuỗi i18n `installation.step1/step2/step3` trong `messages/en.json` và `messages/vi.json`.
- **Commands_Doc**: File `docs/en/commands.md` và `docs/vi/commands.md`.
- **Configuration_Doc**: File `docs/en/configuration.md` và `docs/vi/configuration.md`.
- **Overview_Doc**: File `docs/en/overview.md` và `docs/vi/overview.md`.
- **Workflows_Doc**: File `docs/en/workflows.md` và `docs/vi/workflows.md`.
- **Troubleshooting_Doc**: File `docs/en/troubleshooting.md` và `docs/vi/troubleshooting.md`.

---

## Requirements

### Requirement 1: Sửa Hero Terminal Demo

**User Story:** As a developer visiting the landing page, I want to see accurate CLI commands in the hero terminal demo, so that I can trust the documentation and learn the correct syntax from the first impression.

#### Acceptance Criteria

1. WHEN the Hero section renders, THE Hero_Terminal SHALL display `skillops pull <url> --skill <name>` (using `--skill` flag, not `-s`).
2. WHEN the Hero section renders, THE Hero_Terminal SHALL NOT display any `skillops agentic manage` command, as this command no longer exists.
3. WHEN the Hero section renders, THE Hero_Terminal SHALL display the new workflow sequence: `skillops init` followed by `skillops add`.
4. THE Hero_Terminal SHALL display output lines that accurately reflect the behavior of the commands shown (e.g., init TUI prompt, add confirmation).

---

### Requirement 2: Sửa CTA Terminal Demo

**User Story:** As a developer reading the "Get Started in Seconds" section, I want to see the correct installation method, so that I can follow the instructions without confusion.

#### Acceptance Criteria

1. WHEN the CTA section renders, THE CTA_Terminal SHALL display the Homebrew installation flow: `brew tap leodinhsa/skillops` then `brew install skillops`.
2. THE CTA_Terminal SHALL NOT display any `curl`, `chmod`, or `sudo mv` commands, as these are not the documented installation methods.
3. WHEN the CTA section renders, THE CTA_Terminal SHALL display a final verification step using `skillops --help` or `skillops version`.

---

### Requirement 3: Cập nhật Installation i18n Labels

**User Story:** As a developer reading the installation steps, I want the step labels to match the Homebrew installation flow, so that the UI text and the commands shown are consistent.

#### Acceptance Criteria

1. THE Installation_Labels SHALL set `installation.step1` to "Add Homebrew tap" (EN) and "Thêm Homebrew tap" (VI).
2. THE Installation_Labels SHALL set `installation.step2` to "Install SkillOps" (EN) and "Cài đặt SkillOps" (VI).
3. THE Installation_Labels SHALL set `installation.step3` to "Start managing skills" (EN) and "Bắt đầu quản lý skills" (VI).
4. THE Installation_Labels SHALL NOT contain labels referencing "Download the latest release" or "Make it executable", as these belong to the old curl-based flow.

---

### Requirement 4: Cập nhật danh sách IDE trong Features section

**User Story:** As a developer evaluating SkillOps, I want to see the correct list of supported IDEs, so that I know whether my IDE is supported before installing.

#### Acceptance Criteria

1. THE Installation_Labels SHALL set `features.multiIde.description` (EN) to reference Claude Code, Kiro, Cursor, and Windsurf as the supported IDEs.
2. THE Installation_Labels SHALL set `features.multiIde.description` (VI) to reference the same four IDEs: Claude Code, Kiro, Cursor, Windsurf.
3. THE Installation_Labels SHALL NOT reference Antigravity, OpenCode, or Vercel in the `features.multiIde.description` field.

---

### Requirement 5: Viết lại Commands Doc

**User Story:** As a developer learning SkillOps, I want the commands reference to document only the commands that actually exist, so that I don't waste time running commands that fail.

#### Acceptance Criteria

1. THE Commands_Doc SHALL document the following commands: `init`, `pull` (with `--skill` flag), `add` (with `--all` and `--tool` flags), `status`, `sync`, `list`, `update`, `remove` (with `--all` and `--tool` flags), `config add-agentic`, `config update-agentic`, `config remove-agentic`, `version`.
2. THE Commands_Doc SHALL NOT document `skillops agentic`, `skillops agentic manage`, `skillops agentic remove-skill`, or `skillops agentic remove-skills`, as these commands no longer exist.
3. WHEN documenting `skillops pull`, THE Commands_Doc SHALL specify `--skill` as the correct flag name (not `-s`).
4. THE Commands_Doc SHALL include a complete workflow example using the sequence: `init` → `pull` → `add` → `status` → `sync`.
5. THE Commands_Doc SHALL exist in both `docs/en/commands.md` and `docs/vi/commands.md` with equivalent content in each language.

---

### Requirement 6: Cập nhật Configuration Doc

**User Story:** As a developer configuring SkillOps for a new project, I want the configuration guide to document the local config file, so that I know what to commit to git and how the project config works.

#### Acceptance Criteria

1. THE Configuration_Doc SHALL document the local config file at `.skillops/config.json` as the source of truth for a project, and state that it should be committed to git.
2. THE Configuration_Doc SHALL document the local config JSON schema: `{ "version": "1", "tools": { "<ide-name>": ["<repo>/<skill>", ...] } }`.
3. THE Configuration_Doc SHALL document the project directory structure using `.<ide>/skills/<skill-name>` symlink paths (e.g., `.kiro/skills/`, `.claude-code/skills/`), replacing the outdated `.agents/` and `.agent/` paths.
4. THE Configuration_Doc SHALL document the global config at `~/.skillops/config/agentics.yaml` as the IDE registry mapping names to relative paths.
5. THE Configuration_Doc SHALL exist in both `docs/en/configuration.md` and `docs/vi/configuration.md` with equivalent content in each language.

---

### Requirement 7: Cập nhật Overview Doc

**User Story:** As a developer reading the overview, I want an accurate description of the architecture and supported IDEs, so that I understand how SkillOps works before diving into commands.

#### Acceptance Criteria

1. THE Overview_Doc SHALL list the supported IDEs as: Claude Code, Kiro, Cursor, Windsurf — and SHALL NOT list Antigravity, OpenCode, or Vercel.
2. THE Overview_Doc SHALL include an architecture diagram reflecting the correct directory layout from AGENTS_backend.md: global store at `~/.skillops/skills/<repo>/<skill>/SKILL.md`, symlinks at `.<ide>/skills/<skill-name>`, and local config at `.skillops/config.json`.
3. THE Overview_Doc SHALL describe the workflow overview as: `init` → `pull` → `add` → `status` → `sync`.
4. THE Overview_Doc SHALL exist in both `docs/en/overview.md` and `docs/vi/overview.md` with equivalent content in each language.

---

### Requirement 8: Viết lại Workflows Doc

**User Story:** As a developer setting up a new project, I want workflow examples that use the current commands, so that I can follow them step-by-step without hitting errors.

#### Acceptance Criteria

1. THE Workflows_Doc SHALL include a "New Project Setup" workflow using the sequence: `skillops init` → `skillops pull` → `skillops add` → `skillops status` → `skillops sync`.
2. THE Workflows_Doc SHALL include a "Team Collaboration" workflow that demonstrates committing `.skillops/config.json` to git and using `skillops sync` to restore links on a new machine.
3. THE Workflows_Doc SHALL NOT contain any workflow steps using `skillops agentic`, `skillops agentic manage`, `skillops agentic remove-skill`, or `skillops agentic remove-skills`.
4. THE Workflows_Doc SHALL exist in both `docs/en/workflows.md` and `docs/vi/workflows.md` with equivalent content in each language.

---

### Requirement 9: Cập nhật Troubleshooting Doc

**User Story:** As a developer encountering an error, I want the troubleshooting guide to cover errors from the current command set, so that I can resolve issues without searching elsewhere.

#### Acceptance Criteria

1. THE Troubleshooting_Doc SHALL include a section for the error "No local config found" with the resolution: run `skillops init` then `skillops sync`.
2. THE Troubleshooting_Doc SHALL include a section for skill name conflicts, explaining that SkillOps warns and skips rather than silently overwriting when two repos have a skill with the same short name.
3. WHEN documenting broken symlinks, THE Troubleshooting_Doc SHALL instruct users to run `skillops sync` to recreate them, replacing the outdated `skillops agentic manage` instruction.
4. WHEN documenting broken symlinks, THE Troubleshooting_Doc SHALL reference `.<ide>/skills/` paths (e.g., `.kiro/skills/`) instead of the outdated `.agents/skills/` path.
5. THE Troubleshooting_Doc SHALL exist in both `docs/en/troubleshooting.md` and `docs/vi/troubleshooting.md` with equivalent content in each language.
