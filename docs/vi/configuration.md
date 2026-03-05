# Hướng dẫn Cấu hình

## Tổng quan

SkillOps lưu trữ tất cả cấu hình trong file YAML tại `~/.skillops/config/agentics.yaml`. File này được tạo tự động khi bạn chạy SkillOps lần đầu tiên.

## Cấu trúc File Cấu hình

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

## Quản lý Cấu hình IDE

### Thêm IDE Mới

Để thêm hỗ trợ cho một IDE mới:

```bash
skillops config add-agentic -n "my-ide" -p ".my-ide/skills"
```

**Tham số:**
- `-n, --name`: Tên của IDE (sẽ được sử dụng trong các lệnh)
- `-p, --path`: Đường dẫn tương đối từ thư mục gốc dự án đến thư mục skills

**Ví dụ:**
```bash
# Thêm hỗ trợ cho Neovim
skillops config add-agentic -n "neovim" -p "~/.config/nvim/skills"

# Thêm hỗ trợ cho VSCode
skillops config add-agentic -n "vscode" -p "~/.vscode/extensions/skills"
```

### Cập nhật Cấu hình IDE

Để thay đổi đường dẫn của một IDE đã tồn tại:

```bash
skillops config update-agentic -n "claude"
```

Lệnh này sẽ mở một prompt tương tác để bạn nhập đường dẫn mới.

### Xóa Cấu hình IDE

Để xóa một IDE khỏi cấu hình:

```bash
skillops config remove-agentic -n "cursor"
```

**Lưu ý:** Điều này chỉ xóa cấu hình, không xóa bất kỳ skill hoặc symlink nào đã tồn tại.

## Cấu hình Dự án

### Cấu trúc Thư mục

Khi bạn chạy `skillops agentic` trong một dự án, SkillOps tạo các thư mục dựa trên cấu hình IDE:

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

### Nhận diện Skill

SkillOps nhận diện một thư mục là skill nếu nó chứa file `SKILL.md` trong thư mục gốc của repository.

**Cấu trúc Repository Skill:**
```
my-skills-repo/
├── SKILL.md              # File nhận diện bắt buộc
├── README.md
├── skill-1/
│   └── main.py
└── skill-2/
    └── script.js
```

## Cấu hình Nâng cao

### Biến Môi trường

SkillOps hỗ trợ các biến môi trường sau:

- `SKILLOPS_CONFIG_DIR`: Ghi đè vị trí thư mục cấu hình (mặc định: `~/.skillops/config`)
- `SKILLOPS_SKILLS_DIR`: Ghi đè vị trí thư mục skills toàn cục (mặc định: `~/.skillops/skills`)

**Ví dụ:**
```bash
export SKILLOPS_CONFIG_DIR="/custom/config/path"
export SKILLOPS_SKILLS_DIR="/custom/skills/path"
```

### Đường dẫn Tùy chỉnh

Bạn có thể sử dụng cả đường dẫn tuyệt đối và tương đối trong cấu hình:

```bash
# Đường dẫn tương đối (từ thư mục gốc dự án)
skillops config add-agentic -n "local-ide" -p ".local/skills"

# Đường dẫn tuyệt đối
skillops config add-agentic -n "global-ide" -p "~/.global-ide/skills"
```

## Thực hành Tốt nhất

### Tổ chức Skills

1. **Nhóm theo Chức năng**: Tổ chức skills theo mục đích (debugging, testing, documentation, v.v.)
2. **Đặt tên Rõ ràng**: Sử dụng tên mô tả cho skills và repositories
3. **Tài liệu hóa**: Luôn bao gồm file `SKILL.md` với mô tả rõ ràng

### Quản lý Cấu hình

1. **Giữ Cấu hình Sạch**: Xóa các IDE không sử dụng khỏi cấu hình
2. **Sử dụng Đường dẫn Nhất quán**: Tuân theo quy ước đặt tên cho các đường dẫn IDE
3. **Sao lưu Cấu hình**: Định kỳ sao lưu file `agentics.yaml`

### Quản lý Dự án

1. **Chọn lọc IDE**: Chỉ kích hoạt các IDE bạn thực sự sử dụng trong mỗi dự án
2. **Chọn lọc Skills**: Chỉ link các skills cần thiết cho từng dự án
3. **Cập nhật Thường xuyên**: Chạy `skillops update` để giữ skills luôn mới

## Ví dụ Cấu hình

### Cấu hình Phát triển Web

```bash
# Thêm các IDE cho phát triển web
skillops config add-agentic -n "vscode" -p ".vscode/skills"
skillops config add-agentic -n "cursor" -p ".cursor/skills"

# Kéo skills liên quan đến web
skillops pull https://github.com/user/web-dev-skills
skillops pull https://github.com/user/react-skills
```

### Cấu hình Khoa học Dữ liệu

```bash
# Thêm IDE cho khoa học dữ liệu
skillops config add-agentic -n "jupyter" -p ".jupyter/skills"
skillops config add-agentic -n "pycharm" -p ".pycharm/skills"

# Kéo skills liên quan đến data science
skillops pull https://github.com/user/data-science-skills
skillops pull https://github.com/user/ml-skills
```

## Xem Cấu hình Hiện tại

Để xem cấu hình hiện tại của bạn:

```bash
# Xem file cấu hình
cat ~/.skillops/config/agentics.yaml

# Hoặc sử dụng editor yêu thích
vim ~/.skillops/config/agentics.yaml
```

## Di chuyển Cấu hình

Nếu bạn cần di chuyển cấu hình sang máy mới:

```bash
# Trên máy cũ
cp -r ~/.skillops /path/to/backup/

# Trên máy mới
cp -r /path/to/backup/.skillops ~/
```

**Lưu ý:** Đảm bảo các đường dẫn trong cấu hình vẫn hợp lệ trên máy mới.
