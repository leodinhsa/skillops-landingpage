# Ví dụ Quy trình Làm việc

## Quy trình Hoàn chỉnh

### Thiết lập Dự án Mới với Claude và Antigravity

Quy trình này minh họa cách thiết lập một dự án mới với nhiều IDE.

**Bước 1: Khởi tạo Môi trường**
```bash
cd my-new-project
skillops agentic
# Chọn 'claude' và 'antigravity' từ danh sách
```

**Bước 2: Kéo Skills Cần thiết**
```bash
skillops pull https://github.com/leodinhsa/awesome-skills --skill git-helper
```

**Bước 3: Liên kết Skills với IDEs**
```bash
skillops agentic manage claude
# Chọn 'git-helper' từ TUI và nhấn Enter
```

**Kết quả:**
- Thư mục `.agents/skills/` được tạo cho Claude
- Thư mục `.agent/skills/` được tạo cho Antigravity
- Skill `git-helper` được symlink đến Claude

### Quy trình Phát triển Hàng ngày

**Thiết lập Buổi sáng:**
```bash
# Cập nhật tất cả skills lên phiên bản mới nhất
skillops update

# Kiểm tra skills có sẵn
skillops list
```

**Bắt đầu Tính năng Mới:**
```bash
# Điều hướng đến dự án
cd ~/projects/my-app

# Kiểm tra IDE nào được cấu hình
ls -la | grep "^\."

# Thêm skill mới cho tính năng
skillops pull https://github.com/user/testing-skills --skill unit-test-helper
skillops agentic manage claude
```

**Cuối Ngày:**
```bash
# Xem lại skills đang hoạt động
skillops list

# Xóa skills không còn cần thiết
skillops agentic remove-skill claude old-skill
```

### Quy trình Cộng tác Nhóm

**Thiết lập Trưởng Nhóm:**
```bash
# Tạo repository skills chung
# (trên GitHub: tạo repo 'team-skills')

# Kéo team skills
skillops pull https://github.com/company/team-skills

# Tài liệu hóa thiết lập
echo "Team Skills Setup" > SKILLS_SETUP.md
echo "Run: skillops pull https://github.com/company/team-skills" >> SKILLS_SETUP.md
```

**Thiết lập Thành viên Nhóm:**
```bash
# Làm theo tài liệu nhóm
skillops pull https://github.com/company/team-skills

# Cấu hình cho IDE của bạn
cd project
skillops agentic
skillops agentic manage claude
```

## Quy trình Theo Use Case Cụ thể

### Phát triển Web

**Thiết lập Ban đầu:**
```bash
# Kéo web development skills
skillops pull https://github.com/user/web-dev-skills
skillops pull https://github.com/user/react-skills
skillops pull https://github.com/user/css-skills

# Cấu hình IDEs
cd ~/projects/web-app
skillops agentic
# Chọn: vscode, cursor
```

**Quản lý Skills:**
```bash
# Bật React skills cho dự án hiện tại
skillops agentic manage vscode
# Chọn: react-component-generator, react-hooks-helper

# Bật CSS skills
skillops agentic manage vscode
# Chọn: tailwind-helper, css-optimizer
```

### Phát triển Backend

**Thiết lập Ban đầu:**
```bash
# Kéo backend skills
skillops pull https://github.com/user/api-skills
skillops pull https://github.com/user/database-skills
skillops pull https://github.com/user/testing-skills

# Cấu hình dự án
cd ~/projects/api-server
skillops agentic
# Chọn: claude, windsurf
```

**Quản lý Skills:**
```bash
# Bật API development skills
skillops agentic manage claude
# Chọn: api-generator, swagger-helper, auth-helper

# Bật database skills
skillops agentic manage claude
# Chọn: sql-optimizer, migration-helper
```

### Khoa học Dữ liệu

**Thiết lập Ban đầu:**
```bash
# Kéo data science skills
skillops pull https://github.com/user/data-science-skills
skillops pull https://github.com/user/ml-skills
skillops pull https://github.com/user/visualization-skills

# Cấu hình môi trường Jupyter
skillops config add-agentic -n "jupyter" -p ".jupyter/skills"
```

**Thiết lập Dự án:**
```bash
cd ~/projects/ml-project
skillops agentic
# Chọn: jupyter, vscode

# Bật ML skills
skillops agentic manage jupyter
# Chọn: data-cleaner, model-trainer, visualization-helper
```

### DevOps

**Thiết lập Ban đầu:**
```bash
# Kéo DevOps skills
skillops pull https://github.com/user/docker-skills
skillops pull https://github.com/user/kubernetes-skills
skillops pull https://github.com/user/ci-cd-skills

# Cấu hình dự án
cd ~/projects/infrastructure
skillops agentic
```

**Quản lý Skills:**
```bash
# Bật Docker skills
skillops agentic manage claude
# Chọn: dockerfile-generator, docker-compose-helper

# Bật Kubernetes skills
skillops agentic manage claude
# Chọn: k8s-manifest-generator, helm-helper
```

## Quy trình Nâng cao

### Quản lý Nhiều Dự án

**Tình huống:** Làm việc trên nhiều dự án với yêu cầu skills khác nhau

```bash
# Dự án 1: Frontend
cd ~/projects/frontend-app
skillops agentic
skillops agentic manage vscode
# Chọn: react-skills, css-skills

# Dự án 2: Backend
cd ~/projects/backend-api
skillops agentic
skillops agentic manage claude
# Chọn: api-skills, database-skills

# Dự án 3: Mobile
cd ~/projects/mobile-app
skillops agentic
skillops agentic manage cursor
# Chọn: react-native-skills, mobile-testing-skills
```

### Quy trình Phát triển Skill

**Tạo Skills Riêng của Bạn:**

```bash
# Tạo repository mới cho skills của bạn
mkdir my-custom-skills
cd my-custom-skills

# Tạo file nhận diện SKILL.md
cat > SKILL.md << EOF
# My Custom Skills

Bộ sưu tập custom skills cho quy trình làm việc của tôi.
EOF

# Tạo thư mục skill
mkdir -p custom-helper
echo "#!/bin/bash" > custom-helper/script.sh

# Khởi tạo git và push lên GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/my-custom-skills
git push -u origin main

# Kéo vào SkillOps
skillops pull https://github.com/user/my-custom-skills
```

### Quy trình Kiểm thử Skill

**Kiểm thử Skills Mới:**

```bash
# Tạo dự án test
mkdir ~/test-project
cd ~/test-project

# Kéo skill để test
skillops pull https://github.com/user/new-skill

# Bật trong dự án test
skillops agentic
skillops agentic manage claude
# Chọn skill mới

# Test skill
# ... sử dụng IDE để test ...

# Nếu tốt, triển khai đến dự án thực
cd ~/projects/real-project
skillops agentic manage claude
# Chọn skill đã test
```

### Quy trình Dọn dẹp

**Bảo trì Thường xuyên:**

```bash
# Xem lại tất cả skills
skillops list

# Xóa skills không sử dụng
skillops remove old-skill-1
skillops remove old-skill-2

# Cập nhật skills còn lại
skillops update

# Kiểm tra dung lượng đĩa
du -sh ~/.skillops/skills/*
```

**Dọn dẹp Dự án:**

```bash
# Xóa tất cả skills khỏi một dự án
cd ~/projects/old-project
skillops agentic remove-skills claude
skillops agentic remove-skills windsurf

# Hoặc xóa skills cụ thể
skillops agentic remove-skill claude unused-skill
```

## Quy trình Khắc phục Sự cố

### Sửa Symlinks Bị hỏng

```bash
# Tìm symlinks bị hỏng
find .agents/skills -type l ! -exec test -e {} \; -print

# Xóa tất cả symlinks bị hỏng
find .agents/skills -type l ! -exec test -e {} \; -delete

# Liên kết lại skills
skillops agentic manage claude
```

### Khôi phục từ Lỗi

```bash
# Vô tình xóa một skill
skillops pull https://github.com/user/important-skill

# Liên kết lại đến tất cả dự án
cd ~/projects/project1
skillops agentic manage claude

cd ~/projects/project2
skillops agentic manage claude
```

### Di chuyển sang Máy Mới

```bash
# Trên máy cũ
tar -czf skillops-backup.tar.gz ~/.skillops

# Chuyển sang máy mới
scp skillops-backup.tar.gz newmachine:~/

# Trên máy mới
cd ~
tar -xzf skillops-backup.tar.gz

# Xác minh
skillops list
```

## Thực hành Tốt nhất

1. **Bắt đầu Nhỏ**: Bắt đầu với một hoặc hai skills và dần dần thêm nhiều hơn
2. **Cập nhật Thường xuyên**: Chạy `skillops update` hàng tuần
3. **Dọn dẹp Thường xuyên**: Xóa skills không sử dụng hàng tháng
4. **Tài liệu hóa Thiết lập**: Giữ file SKILLS_SETUP.md trong dự án của bạn
5. **Test Trước**: Test skills mới trong dự án riêng trước khi sử dụng trong production
6. **Sao lưu Config**: Thường xuyên sao lưu `~/.skillops/config/agentics.yaml`
7. **Sử dụng Selective Pull**: Dùng flag `--skill` để tiết kiệm dung lượng khi chỉ cần skills cụ thể
8. **Xem lại Thường xuyên**: Chạy `skillops list` để xem những gì bạn đã cài đặt
