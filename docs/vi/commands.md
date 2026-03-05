# Tham khảo Lệnh

## Tổng quan

SkillOps cung cấp một bộ lệnh toàn diện để quản lý AI agent skills trên nhiều Agentic IDE (Claude, Antigravity, OpenCode, v.v.). Tất cả các lệnh đều tuân theo một mẫu nhất quán và cung cấp trải nghiệm terminal tương tác phong phú.

## Quản lý Skills

## Cấu hình Dự án

### `skillops agentic`

Mở TUI checklist để bật/tắt các môi trường Agentic IDE trong thư mục gốc dự án của bạn.

```bash
skillops agentic
```

**Tính năng:**
- Giao diện checklist tương tác để quản lý nhiều IDE
- Cập nhật trạng thái thời gian thực
- Thao tác bật/tắt hàng loạt
- Lời nhắc xác nhận để đảm bảo an toàn

**Ví dụ:**
```bash
cd /path/to/your/project
skillops agentic
# Mở TUI để chọn IDE nào sẽ bật trong dự án này
```

### `skillops agentic manage <name>`

Quản lý skills tương tác hoặc xóa môi trường cho một agentic IDE cụ thể.

```bash
# Quản lý Claude IDE skills
skillops agentic manage claude

# Quản lý Windsurf IDE skills
skillops agentic manage windsurf
```

**Tính năng:**
- Bật/tắt từng skill riêng lẻ
- Xem chi tiết và mô tả skill
- Xóa tất cả skills cho IDE
- TUI tương tác để chọn skill

### `skillops agentic remove-skill <agent> <skill>`

Xóa một symlink skill cụ thể khỏi agentic IDE.

```bash
# Xóa skill 'logger' khỏi Claude
skillops agentic remove-skill claude logger

# Xóa 'debug-helper' khỏi Windsurf
skillops agentic remove-skill windsurf debug-helper
```

### `skillops agentic remove-skills <agent>`

Xóa tất cả symlinks skill cho một agentic IDE cụ thể.

```bash
# Xóa tất cả skills khỏi Claude
skillops agentic remove-skills claude

# Xóa tất cả skills khỏi Windsurf
skillops agentic remove-skills windsurf
```

## Quản lý Skill

### `skillops pull <url>`

Tải xuống một skill repository mới từ GitHub.

```bash
# Kéo toàn bộ repository
skillops pull https://github.com/user/my-agent-skills

# Kéo một skill cụ thể (Tiết kiệm dung lượng)
skillops pull https://github.com/user/my-agent-skills --skill logger
```

**Định dạng URL được hỗ trợ:**
- `https://github.com/user/repo`
- `github.com/user/repo`
- `git@github.com:user/repo.git` (nếu đã cấu hình SSH key)

**Tùy chọn:**
- `--skill <name>`: Chỉ tải một skill cụ thể thay vì toàn bộ repository

**Ví dụ:**
```bash
# Kéo toàn bộ repository
skillops pull https://github.com/leodinhsa/awesome-skills

# Chỉ kéo skill 'git-helper'
skillops pull https://github.com/leodinhsa/awesome-skills --skill git-helper
```

### `skillops list`

Hiển thị tất cả tên skills đã tải xuống và trạng thái của chúng trên các IDE.

```bash
skillops list
```

**Tính năng:**
- Giao diện TUI (Terminal User Interface) trực quan
- Duyệt danh sách repository và skill
- Sao chép nhanh tên skill vào clipboard bằng phím `Space`
- Xem trạng thái hoạt động của từng skill

**Chỉ báo trạng thái:**
- Active: Skill được symlink đến một hoặc nhiều IDE
- Inactive: Skill đã tải xuống nhưng không được link đến IDE nào

### `skillops remove <name>`

Xóa một skill repository đã kéo một cách an toàn sau khi kiểm tra các liên kết hoạt động.

```bash
# Xóa một skill (với kiểm tra an toàn)
skillops remove copilot-docs
```

**Tính năng an toàn:**
- Kiểm tra symlinks hoạt động trước khi xóa
- Liệt kê các IDE bị ảnh hưởng
- Yêu cầu xác nhận để đảm bảo an toàn

### `skillops remove-all`

Xóa tất cả skill repositories cục bộ.

```bash
# Xóa tất cả skills (với xác nhận)
skillops remove-all
```

**Cảnh báo:** Điều này sẽ xóa tất cả skills đã tải xuống từ thư mục `~/.skillops/skills/`.

### `skillops update`

Đồng bộ hóa các skill của bạn với phiên bản mới nhất từ remote repository.

```bash
# Cập nhật tất cả skills
skillops update

# Cập nhật một skill cụ thể
skillops update --skill logger
```

**Tính năng:**
- Tự động kiểm tra cập nhật từ GitHub
- Cập nhật hàng loạt hoặc từng skill
- Giữ nguyên cấu hình symlink hiện tại

## Cấu hình Agentic

### `skillops config add-agentic -n <name> -p <path>`

Đăng ký một loại IDE mới toàn cục.

```bash
# Thêm cấu hình IDE mới
skillops config add-agentic -n "cursor" -p "~/.cursor/skills"

# Thêm cấu hình VSCode
skillops config add-agentic -n "vscode" -p "~/.vscode/extensions/skills"
```

### `skillops config update-agentic -n <name>`

Cập nhật ánh xạ IDE hiện có với lựa chọn đường dẫn tương tác.

```bash
# Cập nhật cấu hình Claude
skillops config update-agentic -n claude
```

Điều này mở lời nhắc tương tác để thay đổi đường dẫn thư mục skills.

### `skillops config remove-agentic -n <name>`

Xóa ánh xạ IDE đã đăng ký.

```bash
# Xóa cấu hình IDE
skillops config remove-agentic -n cursor
```

## Ví dụ Quy trình Hoàn chỉnh

Đây là quy trình hoàn chỉnh từ cài đặt đến quản lý skills:

```bash
# 1. Kéo một skill repository
skillops pull https://github.com/github/copilot-docs

# 2. Kiểm tra những gì có sẵn
skillops list

# 3. Điều hướng đến dự án của bạn
cd /path/to/your/project

# 4. Cấu hình IDEs cho dự án hiện tại
skillops agentic
# Chọn IDE nào sẽ bật (Claude, Windsurf, v.v.)

# 5. Quản lý skills cho IDE cụ thể
skillops agentic manage claude
# Bật/tắt skills trong TUI

# 6. Xóa skill không sử dụng
skillops remove old-skill
```

## Thiết lập IDE Mới

```bash
# 1. Thêm IDE mới vào cấu hình toàn cục
skillops config add-agentic -n "neovim" -p "~/.config/nvim/skills"

# 2. Điều hướng đến dự án của bạn
cd /path/to/your/project

# 3. Bật nó trong dự án hiện tại
skillops agentic

# 4. Thêm skills vào nó
skillops agentic manage neovim
```

## Mẹo và Thực hành Tốt nhất

1. **Sử dụng `skillops list` thường xuyên** để kiểm tra trạng thái skills của bạn
2. **Luôn chạy `skillops agentic`** khi thiết lập dự án mới
3. **Skills được nhận diện bởi file `SKILL.md`** trong thư mục gốc repository
4. **Giữ cấu hình toàn cục sạch sẽ** bằng cách xóa các cấu hình IDE không sử dụng
5. **Symlinks được sử dụng** để tránh sao chép file trên các dự án

## File Cấu hình

Tất cả cấu hình được lưu trữ trong:
```
~/.skillops/config/agentics.yaml
```

File này chứa:
- Các loại IDE đã đăng ký và đường dẫn của chúng
- Cài đặt toàn cục
- Vị trí skill repository