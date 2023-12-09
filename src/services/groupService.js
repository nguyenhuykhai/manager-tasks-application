// src/services/groupService.js

import { GET_GROUP_INFO_BY_ID } from '../assets/api';
import { useAlert } from '../hooks/useAlert';

const useGroupService = (user) => {
  const { alert } = useAlert();

  const fetchGroupDetailInfo = async () => {
    const { url, options } = GET_GROUP_INFO_BY_ID(user?.class_id, user?.group_id);
    const response = await fetch(url, options);

    if (response.ok) {
      return response.json();
    } else {
      alert("error", "Lấy thông tin group dự án không thành công");
      return null;
    }
  };

  return { fetchGroupDetailInfo };
};

export default useGroupService;
