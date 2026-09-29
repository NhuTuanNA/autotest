# Buổi 04 — Thiết kế API Test Case

## Mục tiêu
- Chuyển requirement thành test scenarios.
- Dùng kiến thức Manual Testing vào API.
- Nghĩ được positive, negative và boundary case.

## Học ở đâu
- Video Anh Tester: https://www.youtube.com/watch?v=-FuTUEOu56U

## Requirement mẫu
Transfer API:
- amount > 0
- amount <= balance
- destination account phải tồn tại
- source account phải ACTIVE

## Ví dụ test design
| Case | Balance | Amount | Destination | Expected |
|---|---:|---:|---|---|
| Normal | 5,000,000 | 1,000,000 | valid | SUCCESS |
| Boundary | 5,000,000 | 1 | valid | SUCCESS |
| Boundary | 5,000,000 | 5,000,000 | valid | SUCCESS |
| Invalid | 5,000,000 | 0 | valid | validation error |
| Invalid | 5,000,000 | -1 | valid | validation error |
| Invalid | 5,000,000 | 5,000,001 | valid | insufficient balance |
| Invalid | 5,000,000 | 100,000 | invalid | account not found |

## Bài tập
Tự bổ sung ít nhất 5 case nữa, ví dụ:
- source inactive
- destination blocked
- amount null
- amount là string
- request thiếu field

## AI review
> Đây là requirement và testcases tôi tự viết. Không viết automation. Hãy tìm case tôi bỏ sót theo positive/negative/boundary/business rule và giải thích vì sao.

## Interview
1. Positive testing là gì?
2. Negative testing là gì?
3. Boundary Value Analysis là gì?
4. API test design khác UI test design ở điểm nào?
