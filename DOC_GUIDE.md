# 🛠️ SkillOps: Hướng Dẫn Sử Dụng Chi Tiết

SkillOps là một công cụ CLI mạnh mẽ, hiệu năng cao được phát triển bằng ngôn ngữ Go, giúp bạn quản lý các "skills" (khả năng/script hỗ trợ AI) cho các Agentic IDE khác nhau (như Claude Desktop, Antigravity, OpenCode, Vercel, v.v.) thông qua cơ chế **symlink-first**.

Thay vì phải sao chép thủ công các skill vào từng thư mục của IDE, SkillOps lưu trữ chúng tập trung và tạo các liên kết (symlink) một cách thông minh, giúp đồng bộ hóa dễ dàng.

---

## 🚀 1. Cài đặt (Installation)

### Sử dụng Homebrew (macOS & Linux)
```bash
brew tap leodinhsa/skillops
brew install skillops
```

### Cài đặt thủ công (Từ mã nguồn)
Yêu cầu bạn đã cài đặt Go (phiên bản 1.25 trở lên).
```bash
go build -o skillops main.go
mv skillops /usr/local/bin/
```

---

## 📁 2. Khái niệm Cốt lõi (Core Concepts)

- **Global Skills Directory**: Thư mục trung tâm (`~/.skillops/skills`) nơi lưu trữ tất cả các repository chứa skill bạn tải về.
- **Agentic IDE**: Các trình soạn thảo hoặc môi trường chạy Agent (Claude, Antigravity, v.v.).
- **Symlinking**: SkillOps sẽ tạo link từ thư mục global vào thư mục dự án của bạn (ví dụ: `.agents/skills`).

---

## ⚙️ 3. Quản lý Skills (Skill Management)

### Tải Skill từ GitHub (`pull`)
Bạn có thể tải toàn bộ repository hoặc chỉ một skill cụ thể.

- **Tải toàn bộ repo:**
  ```bash
  skillops pull https://github.com/user/my-agent-skills
  ```

- **Tải một skill cụ thể (Tiết kiệm dung lượng):**
  ```bash
  skillops pull https://github.com/user/my-agent-skills --skill logger
  ```
  > [!TIP]
  > SkillOps hỗ trợ cả URL HTTPS và SSH (nếu bạn đã cấu hình SSH key).

### Xem danh sách skills đã tải (`list`)
Giao diện TUI (Terminal User Interface) giúp bạn duyệt danh sách repo và skill một cách trực quan.
```bash
skillops list
```
*Dùng phím `Space` để sao chép nhanh tên skill vào clipboard.*

### Cập nhật Skills (`update`)
Đồng bộ hóa các skill của bạn với phiên bản mới nhất từ remote repository.
```bash
skillops update          # Cập nhật tất cả
skillops update --skill logger  # Cập nhật riêng skill 'logger'
```

---

## 🏗️ 4. Quản lý Dự án (Project Configuration)

### Kích hoạt Agentic cho dự án (`agentic`)
Khi bạn đang ở thư mục gốc (root) của dự án, hãy chạy lệnh này để chọn các IDE bạn muốn hỗ trợ.
```bash
skillops agentic
```
- Sử dụng phím `Space` để chọn (Check/Uncheck).
- Phím `Enter` để áp dụng. SkillOps sẽ tự động tạo thư mục tương ứng (ví dụ: `.agents/`, `.agent/`).

### Quản lý Skill cho từng Agent (`agentic manage`)
Sau khi đã kích hoạt agentic, bạn có thể chọn chính xác skill nào sẽ được link vào IDE đó.
```bash
skillops agentic manage antigravity
```
- Giao diện TUI hiện ra, liệt kê tất cả skills có sẵn.
- Chọn skill bạn muốn -> `Enter`. Link sẽ được tạo ngay lập tức.

### Xóa Skill khỏi Agent (`agentic remove-skill`)
Nếu không muốn dùng một skill cụ thể cho một agent:
```bash
skillops agentic remove-skill antigravity logger
```

---

## 🔧 5. Cấu hình Toàn cục (Global Config)

Tất cả cấu hình được lưu tại: `~/.skillops/config/agentics.yaml`.

Bạn có thể thêm mới hoặc cập nhật đường dẫn mặc định của các IDE:
```bash
# Thêm một IDE mới
skillops config add-agentic -n my-cool-ide -p .cool-ide/skills

# Cập nhật đường dẫn
skillops config update-agentic -n claude-code
```

---

## 🛠️ 6. Ví dụ Quy trình làm việc (Workflows)

### Trường hợp: Setup dự án mới hỗ trợ Claude và Antigravity

1. **Khởi tạo môi trường:**
   ```bash
   cd my-new-project
   skillops agentic
   # (Chọn 'claude' và 'antigravity' trong danh sách)
   ```

2. **Tải skill cần thiết:**
   ```bash
   skillops pull https://github.com/leodinhsa/awesome-skills --skill git-helper
   ```

3. **Gắn skill vào IDE:**
   ```bash
   skillops agentic manage claude
   # (Chọn 'git-helper' -> Enter)
   ```

---

## ❓ 7. Xử lý sự cố (Troubleshooting)

- **Lỗi "open /dev/tty":** SkillOps sử dụng TUI tương tác, do đó cần chạy trong một terminal thực sự (không chạy được trong các môi trường non-interactive như CI đơn giản).
- **Symlink bị hỏng:** Nếu bạn xóa thủ công thư mục trong `~/.skillops/skills`, hãy dùng lệnh `skillops agentic manage` để refresh lại các link.

---

*Tài liệu được cập nhật dựa trên phiên bản v0.2.0-dev*
