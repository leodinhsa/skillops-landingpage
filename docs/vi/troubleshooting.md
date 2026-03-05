# Hướng dẫn Khắc phục Sự cố

## Các Vấn đề Phổ biến và Giải pháp

### Vấn đề Cài đặt

#### Không tìm thấy Lệnh

**Vấn đề:** Sau khi cài đặt, chạy `skillops` hiển thị "command not found"

**Giải pháp:**

1. Kiểm tra xem SkillOps có trong PATH không:
```bash
which skillops
echo $PATH
```

2. Thêm vào shell profile:
```bash
# Cho bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Cho zsh
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

3. Xác minh vị trí binary:
```bash
ls -la /usr/local/bin/skillops
```

#### Lỗi Quyền truy cập

**Vấn đề:** Không thể thực thi binary skillops

**Giải pháp:**
```bash
# Làm cho binary có thể thực thi
chmod +x /usr/local/bin/skillops

# Nếu cần quyền sudo
sudo chmod +x /usr/local/bin/skillops
```

### Vấn đề TUI (Terminal User Interface)

#### Lỗi: "open /dev/tty: no such device or address"

**Vấn đề:** SkillOps không thể mở TUI tương tác

**Nguyên nhân:**
- Chạy trong môi trường không tương tác (CI/CD, scripts)
- Terminal emulator không hỗ trợ TTY

**Giải pháp:**

1. Chạy trong terminal thực (không qua pipes hoặc scripts)
2. Nếu sử dụng SSH, đảm bảo bạn có TTY phù hợp:
```bash
ssh -t user@host skillops list
```

3. Kiểm tra xem terminal của bạn có hỗ trợ TTY không:
```bash
tty
# Nên xuất ra như /dev/ttys001
```

#### Vấn đề Hiển thị TUI

**Vấn đề:** Giao diện TUI trông bị hỏng hoặc lộn xộn

**Giải pháp:**

1. Cập nhật terminal emulator của bạn
2. Đặt biến môi trường TERM phù hợp:
```bash
export TERM=xterm-256color
```

3. Thử terminal emulator khác (iTerm2, Alacritty, v.v.)

### Vấn đề Quản lý Skill

#### Không tìm thấy Skill sau khi Pull

**Vấn đề:** Đã kéo repository nhưng skills không xuất hiện trong `skillops list`

**Nguyên nhân:**
- Repository không chứa file `SKILL.md`
- Cấu trúc repository không đúng

**Giải pháp:**

1. Kiểm tra xem `SKILL.md` có tồn tại trong thư mục gốc repository không:
```bash
ls ~/.skillops/skills/repo-name/SKILL.md
```

2. Xác minh cấu trúc repository:
```bash
tree ~/.skillops/skills/repo-name
```

3. Tạo `SKILL.md` thủ công nếu cần:
```bash
echo "# My Skill" > ~/.skillops/skills/repo-name/SKILL.md
```

#### Lỗi Git Clone

**Vấn đề:** Không thể kéo skills từ GitHub

**Giải pháp:**

1. Kiểm tra kết nối internet
2. Xác minh URL GitHub đúng
3. Đối với repositories riêng tư, đảm bảo SSH keys được cấu hình:
```bash
ssh -T git@github.com
```

4. Thử HTTPS thay vì SSH:
```bash
# Thay vì git@github.com:user/repo.git
skillops pull https://github.com/user/repo
```

### Vấn đề Symlink

#### Symlinks Bị hỏng

**Vấn đề:** Symlinks trỏ đến vị trí không tồn tại

**Nguyên nhân:**
- Skill đã bị xóa khỏi thư mục toàn cục
- Thư mục đã được di chuyển hoặc đổi tên

**Giải pháp:**

1. Kiểm tra trạng thái symlink:
```bash
ls -la .agents/skills/
```

2. Xóa symlinks bị hỏng:
```bash
find .agents/skills -type l ! -exec test -e {} \; -delete
```

3. Quản lý lại skills:
```bash
skillops agentic manage claude
```

#### Vấn đề Quyền với Symlinks

**Vấn đề:** Không thể tạo symlinks trong thư mục dự án

**Giải pháp:**

1. Kiểm tra quyền thư mục:
```bash
ls -la .agents/
```

2. Sửa quyền:
```bash
chmod 755 .agents/skills/
```

3. Trên Windows, đảm bảo Developer Mode được bật hoặc chạy với quyền Administrator

### Vấn đề Cấu hình

#### Không tìm thấy File Cấu hình

**Vấn đề:** SkillOps không thể tìm thấy file cấu hình

**Giải pháp:**

1. Tạo thư mục config:
```bash
mkdir -p ~/.skillops/config
```

2. Chạy SkillOps để tự động tạo config:
```bash
skillops list
```

3. Tạo cấu hình thủ công:
```bash
cat > ~/.skillops/config/agentics.yaml << EOF
agentics:
  - name: "claude"
    path: ".agents/skills"
EOF
```

#### Định dạng Cấu hình Không hợp lệ

**Vấn đề:** File cấu hình bị hỏng hoặc không hợp lệ

**Giải pháp:**

1. Sao lưu cấu hình hiện tại:
```bash
cp ~/.skillops/config/agentics.yaml ~/.skillops/config/agentics.yaml.bak
```

2. Xác thực cú pháp YAML:
```bash
# Sử dụng Python
python -c "import yaml; yaml.safe_load(open('~/.skillops/config/agentics.yaml'))"
```

3. Đặt lại cấu hình mặc định:
```bash
rm ~/.skillops/config/agentics.yaml
skillops list  # Sẽ tạo lại config mặc định
```

### Vấn đề Cụ thể cho Dự án

#### Skills Không xuất hiện trong IDE

**Vấn đề:** Skills đã link không hiển thị trong IDE

**Giải pháp:**

1. Xác minh symlinks tồn tại:
```bash
ls -la .agents/skills/
```

2. Khởi động lại IDE của bạn
3. Kiểm tra cấu hình thư mục skill của IDE
4. Xác minh IDE hỗ trợ định dạng skill

#### Xung đột Nhiều Dự án

**Vấn đề:** Skills từ một dự án ảnh hưởng đến dự án khác

**Giải thích:** Điều này không nên xảy ra vì SkillOps sử dụng symlinks cụ thể cho từng dự án

**Giải pháp:**

1. Xác minh mỗi dự án có thư mục skills riêng
2. Kiểm tra cấu hình IDE toàn cục có thể ghi đè cài đặt dự án
3. Đảm bảo bạn đang chạy `skillops agentic` trong thư mục dự án đúng

### Vấn đề Cập nhật

#### Cập nhật Thất bại

**Vấn đề:** `skillops update` không thể cập nhật skills

**Giải pháp:**

1. Kiểm tra kết nối internet
2. Xác minh Git đã được cài đặt:
```bash
git --version
```

3. Cập nhật thủ công:
```bash
cd ~/.skillops/skills/repo-name
git pull origin main
```

4. Xóa và kéo lại skill:
```bash
skillops remove skill-name
skillops pull https://github.com/user/repo
```

### Vấn đề Hiệu suất

#### Thao tác Chậm

**Vấn đề:** Các lệnh SkillOps chậm

**Giải pháp:**

1. Kiểm tra dung lượng đĩa:
```bash
df -h ~/.skillops
```

2. Dọn dẹp skills không sử dụng:
```bash
skillops remove-all  # Cẩn thận!
```

3. Kiểm tra repositories lớn:
```bash
du -sh ~/.skillops/skills/*
```

## Nhận Trợ giúp

### Đầu ra Chi tiết

Bật logging chi tiết để debug:

```bash
# Đặt biến môi trường
export SKILLOPS_DEBUG=true
skillops list
```

### Thu thập Thông tin Debug

Khi báo cáo vấn đề, bao gồm:

1. Phiên bản SkillOps:
```bash
skillops --version
```

2. Hệ điều hành:
```bash
uname -a
```

3. Cấu hình:
```bash
cat ~/.skillops/config/agentics.yaml
```

4. Cấu trúc thư mục:
```bash
tree -L 2 ~/.skillops
```

### Hỗ trợ Cộng đồng

- GitHub Issues: Báo cáo lỗi và yêu cầu tính năng
- Tài liệu: Kiểm tra tài liệu mới nhất để cập nhật
- Ví dụ: Xem các repository ví dụ để tham khảo

## Biện pháp Phòng ngừa

### Bảo trì Thường xuyên

1. Cập nhật skills thường xuyên:
```bash
skillops update
```

2. Dọn dẹp skills không sử dụng:
```bash
skillops list  # Xem lại những gì bạn có
skillops remove unused-skill
```

3. Sao lưu cấu hình:
```bash
cp -r ~/.skillops ~/skillops-backup-$(date +%Y%m%d)
```

### Thực hành Tốt nhất

1. Luôn chạy `skillops list` trước khi thực hiện thay đổi
2. Sử dụng `skillops agentic manage` thay vì tạo symlink thủ công
3. Giữ skill repositories nhỏ và tập trung
4. Tài liệu hóa các cấu hình tùy chỉnh
5. Kiểm tra trong một dự án trước khi áp dụng toàn cục

## Vẫn Gặp Vấn đề?

Nếu bạn vẫn gặp vấn đề:

1. Kiểm tra GitHub repository để biết các vấn đề đã biết
2. Tìm kiếm các vấn đề hiện có cho các vấn đề tương tự
3. Tạo issue mới với thông tin chi tiết:
   - Các bước để tái tạo
   - Hành vi mong đợi
   - Hành vi thực tế
   - Thông tin hệ thống
   - Files cấu hình
   - Thông báo lỗi
