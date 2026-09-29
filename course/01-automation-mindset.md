# Buổi 01 — Automation Testing Mindset

## Mục tiêu
- Hiểu Automation Testing là gì.
- Biết test nào nên automate trước.
- Không nhầm “automation = chuyển toàn bộ manual testcase thành code”.

## Học ở đâu
- Video: https://www.youtube.com/watch?v=lM333y0abaY
- Đọc thêm: https://anhtester.com/blog/su-khac-nhau-giua-automation-testing-voi-manual-testing

## Ý chính
Automation phù hợp nhất với test lặp lại nhiều, logic ổn định, regression/smoke, data-driven và những flow quan trọng.

Không nên ưu tiên automate test chỉ chạy một lần, exploratory, usability hoặc UI thay đổi liên tục.

## Ví dụ ngân hàng
Danh sách:
- Login đúng
- Login sai password
- Chuyển tiền thành công
- Chuyển tiền vượt số dư
- Chuyển tiền tới tài khoản không tồn tại
- Kiểm tra lịch sử giao dịch
- Kiểm tra giao diện đẹp/xấu
- Exploratory test màn hình mới

### Bài tập
Chia các case trên thành:
- Nên automate sớm
- Có thể automate sau
- Không ưu tiên automate

Sau đó tự thêm 5 case từ công việc thực tế.

## Prompt AI
> Tôi là Manual Tester ngân hàng. Đây là danh sách testcase của tôi. Đừng viết code. Hãy review case nào nên automate trước và giải thích theo tiêu chí tần suất chạy, độ ổn định, rủi ro và chi phí maintain.

## Interview
1. Automation Testing là gì?
2. Automation có thay thế Manual Testing không?
3. Khi nào không nên automate?
4. Regression test là gì?

## Checklist
- [ ] Nêu được ít nhất 3 lợi ích của automation.
- [ ] Nêu được ít nhất 3 trường hợp không nên ưu tiên automate.
- [ ] Phân loại được 10 testcase.
