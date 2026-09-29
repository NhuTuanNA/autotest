# Setup môi trường học trên Windows

Tài liệu này dành cho người **chưa có nền tảng IT**. Làm lần lượt từ trên xuống.

## 1. Cài Visual Studio Code

Tải tại:

https://code.visualstudio.com/

Trong lúc cài nên tick:

- Add "Open with Code" action
- Add to PATH
- Register Code as an editor

Sau khi cài, mở VS Code.

## 2. Cài Node.js LTS

Tải bản LTS tại:

https://nodejs.org/

Cài theo mặc định.

Sau đó mở **PowerShell mới** và chạy:

```powershell
node -v
npm -v
```

Ví dụ kết quả:

```text
v22.x.x
10.x.x
```

Nếu hiện phiên bản là đạt.

## 3. Nếu PowerShell chặn npm

Nếu gặp lỗi kiểu:

```text
npm.ps1 cannot be loaded because running scripts is disabled
```

Có 2 cách.

### Cách đơn giản
Dùng Command Prompt (cmd) thay cho PowerShell.

### Cách dùng PowerShell
Mở PowerShell bình thường và chạy:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Nhấn `Y` nếu được hỏi.

Sau đó đóng PowerShell và mở lại.

> Không cần chạy PowerShell bằng Administrator cho khóa học này.

## 4. Cài Postman

Tải:

https://www.postman.com/downloads/

Mở Postman sau khi cài.

Ở vòng đầu chưa bắt buộc đăng nhập tài khoản.

## 5. Cài Git — tùy chọn

Vòng 1 **không học Git**, nhưng nếu muốn clone repo dễ dàng có thể cài:

https://git-scm.com/download/win

Kiểm tra:

```powershell
git --version
```

Nếu chưa muốn cài Git, có thể tải repo bằng:

```text
GitHub -> Code -> Download ZIP
```

## 6. Lấy source khóa học

### Cách A — Download ZIP

Mở repo:

https://github.com/NhuTuanNA/autotest

Chọn:

```text
Code -> Download ZIP
```

Giải nén, ví dụ:

```text
D:\Learning\autotest
```

### Cách B — Clone bằng Git

```powershell
cd D:\Learning
git clone https://github.com/NhuTuanNA/autotest.git
cd autotest
```

Nếu đang học trên branch chưa merge:

```powershell
git checkout course-v1
```

## 7. Mở repo bằng VS Code

Trong PowerShell:

```powershell
cd D:\Learning\autotest
code .
```

Nếu lệnh `code` chưa chạy được:

```text
Mở VS Code -> File -> Open Folder -> chọn thư mục autotest
```

## 8. Kiểm tra Node bằng bài đơn giản

Tạo file hoặc dùng file:

```text
exercises/javascript/session-06/hello.js
```

Chạy:

```powershell
node exercises\javascript\session-06\hello.js
```

Expected:

```text
Environment OK
```

## 9. Khởi tạo Playwright

Đi tới project:

```powershell
cd exercises\playwright
```

Cài dependency:

```powershell
npm install
```

Cài browser Playwright:

```powershell
npx playwright install
```

Kiểm tra:

```powershell
npx playwright test
```

Nếu muốn nhìn browser chạy:

```powershell
npx playwright test --headed
```

UI mode:

```powershell
npx playwright test --ui
```

## 10. Extension VS Code nên cài

Không bắt buộc, nhưng nên có:

- Playwright Test for VSCode
- Prettier - Code formatter

Tìm trong tab Extensions của VS Code.

## 11. Checklist setup

- [ ] VS Code mở được
- [ ] `node -v` chạy được
- [ ] `npm -v` chạy được
- [ ] Postman mở được
- [ ] Repo đã tải về
- [ ] `node ...hello.js` in ra `Environment OK`
- [ ] `npm install` trong exercises/playwright chạy thành công
- [ ] `npx playwright test` chạy được

## 12. Prompt AI khi setup lỗi

```text
Tôi đang setup môi trường Automation Testing trên Windows.

Tôi dùng:
- Windows
- VS Code
- Node.js
- npm
- Playwright

Lệnh tôi chạy:
<dán lệnh>

Lỗi:
<dán toàn bộ lỗi>

Hãy:
1. Giải thích lỗi bằng ngôn ngữ dễ hiểu.
2. Chỉ cho tôi từng bước kiểm tra.
3. Không yêu cầu cài lại mọi thứ nếu chưa cần.
```
