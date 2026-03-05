# SkillOps: Hướng Dẫn Sử Dụng Chi Tiết

SkillOps là một công cụ CLI mạnh mẽ, hiệu năng cao được phát triển bằng ngôn ngữ Go, giúp bạn quản lý các "skills" (khả năng/script hỗ trợ AI) cho các Agentic IDE khác nhau (như Claude Desktop, Antigravity, OpenCode, Vercel, v.v.) thông qua cơ chế **symlink-first**.

Thay vì phải sao chép thủ công các skill vào từng thư mục của IDE, SkillOps lưu trữ chúng tập trung và tạo các liên kết (symlink) một cách thông minh, giúp đồng bộ hóa dễ dàng.

## Khái niệm Cốt lõi

### Thư mục Skills Toàn cục
Thư mục trung tâm (`~/.skillops/skills`) nơi lưu trữ tất cả các repository chứa skill bạn tải về.

### Agentic IDE
Các trình soạn thảo hoặc môi trường chạy Agent (Claude, Antigravity, v.v.) hỗ trợ các skills được hỗ trợ bởi AI.

### Symlinking
SkillOps tạo link từ thư mục global vào thư mục dự án của bạn (ví dụ: `.agents/skills`), tránh sao chép file và đảm bảo tính nhất quán giữa các dự án.

## Tính năng Chính

- **Quản lý Tập trung**: Lưu trữ tất cả skills ở một vị trí
- **Dựa trên Symlink**: Không sao chép file giữa các dự án
- **Hỗ trợ Nhiều IDE**: Quản lý skills cho nhiều IDE cùng lúc
- **Giao diện TUI Tương tác**: Giao diện terminal đẹp mắt cho mọi thao tác
- **Tích hợp Git**: Kéo skills trực tiếp từ GitHub repositories
- **Tải xuống Có chọn lọc**: Tải toàn bộ repo hoặc chỉ các skills cụ thể
- **Thao tác An toàn**: Lời nhắc xác nhận và kiểm tra an toàn

## Kiến trúc

```
~/.skillops/
├── skills/              # Lưu trữ skills toàn cục
│   ├── repo-1/
│   │   └── SKILL.md    # Định danh skill
│   └── repo-2/
│       └── SKILL.md
└── config/
    └── agentics.yaml   # Cấu hình IDE

Dự án của bạn/
├── .agents/            # Claude Desktop
│   └── skills/         # Symlinks đến skills toàn cục
├── .agent/             # Antigravity
│   └── skills/
└── .skillops/          # Các IDE khác
    └── skills/
```

## Tổng quan Quy trình

1. **Cài đặt** SkillOps trên hệ thống của bạn
2. **Kéo** skills từ GitHub repositories
3. **Cấu hình** IDE nào bạn muốn sử dụng trong dự án
4. **Quản lý** skills nào đang hoạt động cho mỗi IDE
5. **Cập nhật** skills để có phiên bản mới nhất

## IDE được Hỗ trợ

SkillOps được cấu hình sẵn với hỗ trợ cho các Agentic IDE phổ biến:

- Claude Desktop
- Antigravity
- OpenCode
- Windsurf
- Cursor
- Và nhiều hơn nữa...

Bạn cũng có thể thêm cấu hình IDE tùy chỉnh để hỗ trợ bất kỳ công cụ nào sử dụng thư mục skills.

## Bước tiếp theo

- [Hướng dẫn Cài đặt](./installation.md) - Cài đặt và chạy SkillOps
- [Tham khảo Lệnh](./commands.md) - Tìm hiểu tất cả các lệnh có sẵn
- [Hướng dẫn Cấu hình](./configuration.md) - Tùy chỉnh SkillOps cho quy trình làm việc của bạn
- [Khắc phục Sự cố](./troubleshooting.md) - Các vấn đề phổ biến và giải pháp
