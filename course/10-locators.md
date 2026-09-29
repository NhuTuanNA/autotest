# Buổi 10 — Locator

## Mục tiêu
- Hiểu locator là cách tìm element.
- Ưu tiên locator gần với cách người dùng nhìn UI.
- Dùng được getByRole/getByLabel/getByText/getByPlaceholder.

## Học ở đâu
- https://playwrightvn.com/blog/voc-playwright-locator/
- https://playwright.dev/docs/locators
- https://playwright.dev/docs/best-practices

## Ví dụ
```typescript
page.getByRole('button', { name: 'Login' });
page.getByLabel('Username');
page.getByText('Transfer successful');
page.getByPlaceholder('Search');
```

## Bài tập 1 — đoán locator
Với UI:
- button “Login”
- textbox label “Username”
- message “Transfer successful”

Tự viết locator trước khi xem đáp án.

## Bài tập 2 — TodoMVC
Tại https://demo.playwright.dev/todomvc/
- tìm input todo
- tìm item theo text
- tìm checkbox của item

## Không ưu tiên ở vòng đầu
- XPath dài
- CSS selector phụ thuộc cấu trúc DOM sâu

## AI
> Đây là HTML/ảnh mô tả element và các locator tôi nghĩ ra. Hãy review locator nào ổn định hơn và giải thích, không chỉ đưa đáp án.

## Interview
1. Locator là gì?
2. Vì sao XPath dài dễ flaky?
3. Khi nào dùng getByRole?
