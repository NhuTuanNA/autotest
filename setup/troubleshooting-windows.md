# Troubleshooting môi trường Automation trên Windows

Dùng tài liệu này khi setup không chạy như hướng dẫn.

## 1. `node` is not recognized

Lỗi:

```text
'node' is not recognized as an internal or external command
```

Kiểm tra:

```powershell
where.exe node
```

Nếu không ra đường dẫn:

1. Kiểm tra Node.js đã được cài.
2. Đóng toàn bộ PowerShell/VS Code.
3. Mở lại terminal.
4. Chạy lại `node -v`.

Nếu vẫn lỗi, cài lại **Node.js LTS** và đảm bảo installer thêm Node vào PATH.

---

## 2. `npm.ps1 cannot be loaded`

Lỗi thường gặp trên PowerShell:

```text
npm.ps1 cannot be loaded because running scripts is disabled
```

Cách đơn giản nhất: dùng **Command Prompt**.

Hoặc cho phép script ở CurrentUser:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Sau đó đóng/mở PowerShell.

---

## 3. `npm install` chạy ở sai thư mục

Trước khi chạy:

```powershell
npm install
```

hãy kiểm tra:

```powershell
Get-Location
Get-ChildItem
```

Bạn phải đang ở:

```text
...\autotest\exercises\playwright
```

và nhìn thấy:

```text
package.json
playwright.config.ts
```

Nếu không, chạy:

```powershell
cd D:\Learning\autotest\exercises\playwright
```

---

## 4. Playwright báo không tìm thấy browser

Ví dụ lỗi:

```text
Executable doesn't exist
browserType.launch...
```

Chạy:

```powershell
npx playwright install chromium
```

Sau đó:

```powershell
npm test
```

---

## 5. `npx` hỏi cài package lạ

Nếu đang trong `exercises\playwright` nhưng chưa chạy:

```powershell
npm install
```

thì hãy chạy nó trước.

Thứ tự đúng:

```powershell
cd exercises\playwright
npm install
npx playwright install chromium
npm test
```

---

## 6. Test starter FAIL

Không phải lúc nào FAIL cũng là lỗi môi trường.

Ví dụ:

```text
tests\starter\04-debug-me.spec.ts
```

**được thiết kế cố tình FAIL** để luyện debug.

Để kiểm tra môi trường, dùng:

```powershell
npm test
```

Lệnh này chỉ chạy `tests/solutions`.

---

## 7. Không chạy được lệnh `code .`

Không ảnh hưởng khóa học.

Mở thủ công:

```text
VS Code
-> File
-> Open Folder
-> chọn thư mục autotest
```

---

## 8. Postman không gửi được request

Kiểm tra:

1. Internet có hoạt động không.
2. URL có đúng không.
3. Method GET/POST có đúng không.
4. Nếu POST, Body có phải JSON hợp lệ không.
5. Thử API demo bằng browser:

```text
https://jsonplaceholder.typicode.com/posts/1
```

Nếu browser cũng không vào được thì khả năng là vấn đề mạng/proxy.

---

## 9. JSON body báo lỗi

JSON đúng:

```json
{
  "title": "bank transfer",
  "userId": 1
}
```

Các lỗi phổ biến:

- dùng nháy đơn không đúng chỗ
- thiếu dấu phẩy
- thừa dấu phẩy cuối
- thiếu dấu ngoặc `}`

Có thể hỏi AI:

```text
Hãy kiểm tra JSON này có hợp lệ không.
Nếu sai, chỉ ra chính xác ký tự/dòng sai trước khi đưa bản sửa.
```

---

## 10. Test timeout

Trước tiên không tăng timeout ngay.

Kiểm tra:

- website demo có mở được trên browser không
- locator có đúng không
- text expected có đúng không
- internet có chậm không

Chạy headed:

```powershell
npx playwright test <file-test> --headed
```

Hoặc debug:

```powershell
npx playwright test <file-test> --debug
```

---

## 11. Prompt AI chuẩn khi gặp lỗi

```text
Tôi đang học Automation Testing trên Windows.

Mục tiêu tôi đang làm:
<mô tả>

Lệnh:
<copy nguyên lệnh>

Error:
<copy nguyên error, không chỉ chụp một dòng>

File liên quan:
<dán code nếu có>

Đừng viết lại toàn bộ project.
Hãy:
1. Xác định nhóm lỗi.
2. Giải thích nguyên nhân dễ hiểu.
3. Cho tôi bước kiểm tra đầu tiên.
4. Chỉ đưa bước tiếp theo sau khi bước trước hợp lý.
```

> Khi hỏi AI về lỗi, **copy nguyên error text** thường tốt hơn chỉ gửi ảnh.
