import React from "react";
import { Redirect } from "react-router-dom";
function withAuthProtection(WrappedComponent) {
  return function ProtectedRoute(props) {
    /* Logic để kiểm tra người dùng có đăng nhập không */
    const isAuthenticated =
      localStorage.getItem("isLogin") &&
      localStorage.getItem("role").trim() === "Admin";
    if (!isAuthenticated) {
      // Chuyển hướng người dùng đến trang đăng nhập hoặc một trang khác
      return <Redirect to="/sign-in" />;
    }
    return <WrappedComponent {...props} />;
  };
}
export default withAuthProtection;
