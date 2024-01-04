// src/services/accountService.js

import { API_UPDATE_STUDENT_INFO_BY_ID } from '../assets/api';
import { useAlert } from '../hooks/useAlert';
import axios from 'axios';

export const useAccountService = () => {
  const { showAlert } = useAlert();

  const updateStudentInfo = async (user) => {
    axios.post(`${API_UPDATE_STUDENT_INFO_BY_ID}`, {
        student_id: user?.student_id,
        email: user?.email,
        student_name: user?.student_name,
        picture: user?.picture,
        about: user?.about,
        skills: user?.skills,
        link_facebook: user?.link_facebook,
        github: user?.github
        
      })
      .then(function (response) {
        if (!response.status === "Successful") {
          console.log("ERROR: ",response);
          showAlert("error", `Cập nhật thông tin người dùng ${user?.student_name} không thành công`);
          return null;
        }

        console.log("SUCCESS: ", response);
        showAlert("success", `Cập nhật thông tin người dùng ${user?.student_name} thành công`);
        return response;
      })
      .catch(function (error) {
        console.log("ERROR: ",error);
        showAlert("error", `Cập nhật thông tin người dùng ${user?.student_name} không thành công`);
        return null;
      });
  };
  return { updateStudentInfo };
};
