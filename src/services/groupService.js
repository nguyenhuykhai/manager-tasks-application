// src/services/groupService.js

import { GET_GROUP_INFO_BY_ID } from '../assets/api';
import { useAlert } from '../hooks/useAlert';

const useGroupService = () => {
  const { showAlert } = useAlert();

  const fetchGroupDetailInfo = async (user) => {
    const { url, options } = GET_GROUP_INFO_BY_ID(user?.class_id, user?.group_id);
    const response = await fetch(url, options);

    if (response.ok) {
      return response.json();
    } else {
      showAlert("error", "Lấy thông tin group dự án không thành công");
      return null;
    }
  };

  return { fetchGroupDetailInfo };
};

export default useGroupService;
