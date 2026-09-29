# Buổi 08 — Playwright và test đầu tiên

## Mục tiêu
- Hiểu Playwright dùng để làm gì.
- Cài được project.
- Chạy test đầu tiên.

## Học ở đâu
- Giới thiệu: https://www.youtube.com/watch?v=UiSKO1x4SMI
- Cài đặt: https://www.youtube.com/watch?v=qX5vF7iFkEk
- Official: https://playwright.dev/docs/intro

## Cài đặt
Kiểm tra Node:
```bash
node -v
npm -v
```

Tạo project:
```bash
npm init playwright@latest
```

Gợi ý lựa chọn:
- TypeScript
- tests
- Không cần GitHub Actions ở vòng này

Chạy:
```bash
npx playwright test
```

Chạy có browser:
```bash
npx playwright test --headed
```

UI mode:
```bash
npx playwright test --ui
```

## Bài tập
- Chạy sample test.
- Tìm file test được tạo.
- Đổi tên một test.
- Chạy riêng file đó.

## Mục tiêu buổi này
**Chạy được là đạt.** Chưa cần hiểu toàn bộ project structure.

## AI
> Tôi vừa tạo Playwright project. Hãy giải thích các file chính cho Manual Tester mới học, nhưng chỉ giải thích những file cần biết để chạy test trong tuần đầu.

## Interview
1. Playwright là gì?
2. Playwright có thể test browser nào?
3. Headed và headless khác gì?
