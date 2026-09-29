# Playwright Exercises

## 1. Chuẩn bị

Mở PowerShell tại repo:

```powershell
cd exercises\playwright
```

Cài dependency:

```powershell
npm install
```

Cài Chromium:

```powershell
npx playwright install chromium
```

## 2. Chạy test

Tất cả test:

```powershell
npm test
```

Nhìn browser:

```powershell
npm run test:headed
```

UI mode:

```powershell
npm run test:ui
```

Debug:

```powershell
npm run test:debug
```

## 3. Starter và Solution

```text
tests/starter/
```

là bài chưa hoàn thành.

```text
tests/solutions/
```

là đáp án tham khảo.

> Không mở solution ngay. Hãy thử starter trước.

## 4. Chạy riêng starter

Ví dụ:

```powershell
npx playwright test tests\starter\01-add-todo.spec.ts --headed
```

Nếu starter còn TODO thì test có thể fail. Đó là bình thường.

## 5. Chạy solution

```powershell
npx playwright test tests\solutions\01-add-todo.spec.ts --headed
```

## 6. Codegen

```powershell
npm run codegen
```

Thử:
- add todo
- complete todo
- quan sát code sinh ra

## 7. Nếu browser chưa được cài

Lỗi thường thấy là executable/browser missing.

Chạy:

```powershell
npx playwright install chromium
```

## 8. Nếu muốn xem report

Sau khi test:

```powershell
npx playwright show-report
```
