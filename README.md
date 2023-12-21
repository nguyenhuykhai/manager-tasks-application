# [WEB APPLICATION - QUẢN LÝ DỰ ÁN NHÓM LỚP](https://github.com/nguyenhuykhai/manager-tasks-application)

FU_MANAGER_PROJECT (Front-end) là một ứng dụng web được thiết kế và phát triển để hỗ trợ quản lý dự án nhóm lớp cho sinh viên tại Trường Đại học FPT xây dựng bởi 2 sinh viên FPT. Dự án này nhằm mục đích tạo ra một nền tảng trực tuyến giúp sinh viên và giáo viên theo dõi, quản lý, và tương tác trong quá trình thực hiện các dự án nhóm trong quá trình học tập.

---

# Yêu Cầu Môi Trường để Chạy Dự Án | Setup Instructions

1. **Node.js and npm:**

   - Cài đặt Node.js phiên bản 18 trở lên. npm sẽ được cài đặt kèm theo. | Install Node.js version 18 or above. npm will be installed along with it.

2. **React App:**

   - Tạo một ứng dụng React mới bằng lệnh sau: | Create a new React app using the following command:
     ```bash
     npx create-react-app my-react-app
     ```

3. **Cài Đặt Dependencies Dự Án: | Install Project Dependencies:**

   - Di chuyển vào thư mục gốc của dự án: | Navigate into the root directory of the project:
     ```bash
     cd my-react-app
     ```
   - Chạy lệnh sau để cài đặt các dependencies | Run the following command to install project dependencies:
     ```bash
     npm install
     ```

4. **Chạy Dự Án | Run the Project:**
   - Chạy lệnh sau để khởi động dự án: | Execute the following command to start the project:
     ```bash
     npm start
     ```
   - Truy cập ứng dụng tại `http://localhost:3000/` trong trình duyệt web của bạn.

---

## Dưới đây là một số tính năng chính của ứng dụng | Application

1. Quản lý Dự Án:
Tạo Dự Án: Sinh viên hoặc giảng viên có thể tạo dự án mới, đặt tên, mô tả và xác định mục tiêu của dự án.
Quản lý Tiến Độ (Process): Hệ thống theo dõi tiến độ của dự án, cho phép người dùng thêm, chỉnh sửa và xóa các bước trong quy trình làm việc.

2. Quản lý Sprint:
Tạo Sprint: Định kỳ tạo Sprint để quản lý công việc trong khoảng thời gian cố định.
Gán Công Việc: Sinh viên có thể tự gán công việc cho mình trong mỗi Sprint, và giảng viên có thể gán công việc cho từng nhóm hoặc sinh viên.

3. Feedback và Chấm Điểm:
Phản Hồi (Feedback): Sinh viên có thể nhận phản hồi từ giảng viên và thành viên khác trong nhóm về công việc của họ.
Chấm Điểm: Giảng viên có thể chấm điểm cho từng công việc hoặc dự án, cung cấp điểm số và phản hồi chi tiết.

4. Quản lý theo Nhóm:
Tạo Nhóm: Sinh viên có thể tự tạo nhóm hoặc được phân nhóm tự động.
Giao Việc trong Nhóm: Khả năng phân công công việc, theo dõi tiến độ và phản hồi được thực hiện theo nhóm.

5. Chat Real-time:
Chat Nhóm: Sinh viên và giảng viên có thể thảo luận và trao đổi ý kiến trong các cuộc trò chuyện nhóm.
Chat Riêng: Khả năng trò chuyện riêng tư giữa sinh viên và giảng viên.

6. Thông Báo và Lịch Nhắc:
Thông Báo Tự Động: Gửi thông báo về các sự kiện quan trọng như deadline, sự kiện mới, hoặc phản hồi từ giảng viên.
Lịch Nhắc: Tự động tạo lịch nhắc cho các sự kiện trong Sprint hoặc Dự Án.

7. Tương Tác và Giao Tiếp:
Tương Tác Tương Đối: Khả năng tương tác dễ dàng và linh hoạt giữa sinh viên và giảng viên.
Giao Tiếp Thông Qua Tác Vụ (Task-based Communication): Có thể gửi tin nhắn, thảo luận trực tiếp trên công việc hoặc nhiệm vụ cụ thể.

8. Bảo Mật và Quyền Truy Cập:
Quản lý Quyền Truy Cập: Xác định quyền truy cập của từng người dùng (sinh viên, giảng viên) đối với các tính năng cụ thể.
Bảo Mật Thông Tin: Đảm bảo an toàn và bảo mật thông tin của sinh viên và dữ liệu dự án.

9. Báo Cáo và Thống Kê:
Báo Cáo Tiến Độ: Cung cấp báo cáo tự động về tiến độ dự án, công việc đã hoàn thành và chưa hoàn thành.
Thống Kê Điểm Số: Hiển thị điểm số tổng kết và thống kê chi tiết về điểm số của sinh viên.

10. Đa Nền Tảng và Đa Thiết Bị:
Responsive Design: Ứng dụng có giao diện phản hồi, phù hợp với mọi loại thiết bị.
Hỗ Trợ Đa Trình Duyệt: Đảm bảo hoạt động trơn tru trên các trình duyệt phổ biến.

- Dự án này giúp tăng cường tương tác và hợp tác giữa sinh viên trong quá trình học tập, đồng thời cung cấp cho giáo viên công cụ quản lý hiệu quả để đánh giá và hỗ trợ quá trình phát triển kỹ năng làm việc nhóm của sinh viên.

---

## Màn hình giao diện | Capture Screenshots

### Dành cho học sinh | Role Student

#### 1. Màn Hình quản lý | Dashboard Page
<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/FU%20Manager%20Project%2F1.Dashboard.png?alt=media&token=a1e481fc-f0a4-4f28-9814-0508a3d48ba0" alt="Dashboard Page 1.1">
</div>

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/FU%20Manager%20Project%2F1_2.Dashboard.png?alt=media&token=a94768b7-c9da-4be6-97a9-d353384d2ead" alt="Dashboard Page 1.2">
</div>

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/FU%20Manager%20Project%2F1_3.Dashboard.png?alt=media&token=afcec8c4-4149-424b-bf10-f5d8476cc254" alt="Dashboard Page 1.3">
</div>

#### 2. Màn Hình thông tin cá nhân | Profile Page
<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/FU%20Manager%20Project%2F2.Student_profile.png?alt=media&token=352fbe08-033f-4593-b6b0-8814c2307e09" alt="Profile Page 2">
</div>

#### 3. Màn Hình thông tin cá nhân | Profile Page
<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/FU%20Manager%20Project%2F3.Student_profile.png?alt=media&token=9613495e-335a-477c-8b46-3a3ab74c1eaf" alt="Profile Page 3">
</div>

---

## Cấu trúc dự án | Project Structure

```plaintext
|-- src/
|   |-- assets/
|   |   |-- api/
|   |   |   |-- index.js
|   |   |-- styles/
|   |   |   |-- main.css
|   |   |   |-- responsive.css
|   |
|   |-- actions/
|   |   |-- actionTypes.js
|   |   |-- authActions.js
|   |   |-- groupActions.js
|   |   |-- projectActions.js
|   |
|   |-- components/
|   |   |-- chart/
|   |   |   |-- configs/
|   |   |   |   |-- eChart.js
|   |   |   |   |-- line.js
|   |   |   |-- EChart.js
|   |   |   |-- LineChart.js
|   |   |-- component/
|   |   |   |-- Menu.js
|   |   |-- layout/
|   |   |   |-- Footer.js
|   |   |   |-- Header.js
|   |   |   |-- HeaderRtl.js
|   |   |   |-- Main.js
|   |   |   |-- Sidenav.js
|   |
|   |-- context/
|   |   |-- AlertContext.js
|   |
|   |-- hooks/
|   |   |-- useAlert.js
|   |
|   |-- pages/
|   |   |-- Lecturer/
|   |   |   |-- ProfileLecturer.js
|   |   |-- Student/
|   |   |   |-- ProfileStudent.js
|   |   |-- Billing.js
|   |   |-- Home.js
|   |   |-- Rtl.js
|   |   |-- SignIn.js
|   |   |-- SignUp.js
|   |   |-- Tables.js
|   |
|   |-- reducers/
|   |   |-- authReducer.js
|   |   |-- groupReducer.js
|   |   |-- projectReducer.js
|   |   |-- index.js
|   |
|   |-- services/
|   |   |-- authService.js
|   |   |-- groupService.js
|   |   |-- projectService.js
|   |   |-- index.js
|   |
|   |   |-- store/
|   |   |   |-- configureStore.js
|   |
|   |-- App.js
|   |-- index.js
```
---

## Công nghệ | Technical

- Frontend: React
- Backend: Spring Boot
- Database: SQL Server
- Real-Time Interactions: Firebase
- Containerization: Docker
- Send mail with Nodemailer
- Payment: Paypal, VNPay
- GG Cloud: Login, Gmail API

---

## Tài liệu | Documentation

 [Function Requirement](https://docs.google.com/document/d/1CPjPpIMVkAp9KRoCvXRMUoL48Fq_O6yInnZExIvpzVI/edit?fbclid=IwAR32KoldKVxeqRD4jj6fraiftt8D1twY8l4e1sg16PIT_dbG97FOcaQiVsI).
 
 [Task Schedule](https://docs.google.com/spreadsheets/d/1JT4wJQmYRBn1k7oGymkNiErLl3mzwQr-MO5kbobTIZM/edit?usp=sharing).

---

## Demo

- [Đang trong quá trình xây dựng](https://github.com/nguyenhuykhai/be-manager-tasks-application)

---

## Máy chủ FU_MANAGER_PROJECT | BACKEND

- [FU_MANAGER_PROJECT (Back-end)](https://github.com/nguyenhuykhai/be-manager-tasks-application)


