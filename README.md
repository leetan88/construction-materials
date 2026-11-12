# VLXD Vững Bền — Landing page vật liệu xây dựng

Landing page tĩnh (HTML/CSS/JS thuần, không cần build) giới thiệu cửa hàng vật liệu xây dựng.

## Các phần chính

- Hero + nút kêu gọi hành động (báo giá, hotline)
- Thống kê có hiệu ứng đếm số
- Danh mục sản phẩm: xi măng, sắt thép, gạch ngói, cát đá, sơn & chống thấm, điện nước
- Lý do chọn chúng tôi, quy trình đặt hàng 4 bước
- Đánh giá khách hàng
- Form nhận báo giá (kiểm tra dữ liệu phía client)
- Responsive cho mobile, menu thu gọn, nút gọi nổi

## Chạy thử

Mở trực tiếp `index.html` trong trình duyệt, hoặc chạy server tĩnh:

```bash
npx serve .
# hoặc
python -m http.server 8000
```

## Tùy chỉnh

- Màu sắc: sửa biến CSS trong `:root` ở `styles.css`
- Thông tin liên hệ, giá: sửa trực tiếp trong `index.html`
- Form hiện chỉ hiển thị thông báo — cần nối với backend/API (ví dụ Formspree, Google Apps Script) để gửi dữ liệu thật trong `script.js`

## Deploy

Có thể bật **GitHub Pages** (Settings → Pages → Branch `main` / root) để publish miễn phí.
