# Hướng dẫn Cài đặt

## Cài đặt Nhanh

### Homebrew (macOS & Linux)

```bash
brew tap leodinhsa/skillops
brew install skillops
```

### Cài đặt Thủ công (từ source)

```bash
# Build từ source
go build -o skillops main.go

# Di chuyển vào PATH
sudo mv skillops /usr/local/bin/

# Xác minh cài đặt
skillops --help
```

## Xác minh

Sau khi cài đặt, xác minh rằng SkillOps hoạt động chính xác:

```bash
# Xem trợ giúp và các lệnh có sẵn
skillops --help

# Kiểm tra xem skillops có trong PATH không
which skillops
```

## Cấu hình

SkillOps lưu trữ cấu hình của nó trong `~/.skillops/config/agentics.yaml`. File cấu hình được tạo tự động khi chạy lần đầu.

### Vị trí File Cấu hình

- **Tất cả Cấu hình**: `~/.skillops/config/agentics.yaml`

### Nhận diện Skill

Các thư mục skill được nhận diện bởi sự hiện diện của file `SKILL.md` trong thư mục gốc của repository.

## Khắc phục Sự cố

### Lỗi Quyền truy cập

Nếu bạn gặp vấn đề về quyền:

```bash
# Đảm bảo binary có thể thực thi
chmod +x /usr/local/bin/skillops

# Kiểm tra xem /usr/local/bin có trong PATH không
echo $PATH
```

### Không tìm thấy Lệnh

Nếu lệnh `skillops` không được tìm thấy:

```bash
# Thêm vào shell profile (.bashrc, .zshrc, etc.)
export PATH="/usr/local/bin:$PATH"

# Tải lại shell
source ~/.bashrc  # hoặc ~/.zshrc
```

## Bước tiếp theo

Sau khi cài đặt, bạn có thể:

1. [Kéo skill đầu tiên của bạn](./commands.md#skillops-pull)
2. [Cấu hình agentic IDEs](./commands.md#cấu-hình-agentic)
3. [Bắt đầu quản lý skills](./commands.md#cấu-hình-dự-án)

Để biết hướng dẫn sử dụng chi tiết hơn, xem [Tham khảo Lệnh](./commands.md).