export const API_BASE_BACKEND_URL = 'http://localhost:8080/';
export const API_BASE_URL = 'http://localhost:9999/';


// API FOR TABLE STUDENT 
export function GET_STUDENT() {
  return {
    url: `${API_BASE_URL}Student`,
    options: {
      method: "GET",
    },
  };
}

export function GET_STUDENT_BY_ID(id) {
  return {
    url: `${API_BASE_URL}student/${id}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_STUDENT_BY_EMAIl(email) {
  return {
    url: `${API_BASE_URL}student?email=${email}`,
    options: {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    },
  };
}

export function GET_LECTURER_BY_EMAIl(email) {
  return {
    url: `${API_BASE_URL}lecturers?email=${email}`,
    options: {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    },
  };
}

export function GET_GROUP_INFO_BY_ID(group_id, class_id) {
  return {
    url: `${API_BASE_URL}groupInfo?class_id=${class_id}&&group_id=${group_id}`,
    options: {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    },
  };
}

export const API_GET_STUDENT_BY_EMAIl = `${API_BASE_BACKEND_URL}api/v1/authenticate/login`

export function API_GET_GROUP_INFO_BY_ID(group_id, class_id, token) {
  return {
    url: `${API_BASE_BACKEND_URL}api/v1/group/details?groupId=${group_id}&classId=${class_id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    },
  };
}

export const API_UPDATE_STUDENT_INFO_BY_ID = `${API_BASE_BACKEND_URL}api/v1/student/updatelink`


// export function DELETE_SLOT(id) {
//   return {
//     url: `${API_BASE_URL}/`,
//     options: {
//       method: "DELETE",
//     },
//   };
// }

// export function LOGIN_API(mail) {
//   return {
//     url: `${API_BASE_URL}auth/login`,
//     options: {
//       method: "POST",
//     },
//     body: JSON.stringify(mail),
//   };
// }

// export function GET_ALL_EXAM_SCHEDULE() {
//   return {
//     url: `${API_BASE_URL}exam-schedule`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function REGISTER_EXAM_SCHEDULE(examinerID, examSlotID) {
//   return {
//     url: `${API_BASE_URL}register`,
//     options: {
//       method: "POST",
//     },
//     body: JSON.stringify({ examinerID: examinerID, examSlotID: examSlotID }),
//   };
// }

// export function DELETE_EXAMSLOT_BY_ID(id) {
//   return {
//     url: `${API_BASE_URL}examSlot/${id}`,
//     options: {
//       method: "DELETE",
//     },
//   };
// }

// export function GET_ALL_EXAMROOM() {
//   return {
//     url: `${API_BASE_URL}examRoom`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function GET_ALL_EXAMSLOT() {
//   return {
//     url: `${API_BASE_URL}examSlot`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// // API EXPORT FILE EXCEL
// export function EXPORT_FILE_EXCEL() {
//   return {
//     url: `${API_BASE_URL}api/excel/depart-examiner/download`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// /*
//  ****ADMIN ROUTE
//  */
// export function GET_FULL_SLOT_INFO() {
//   return {
//     url: `${API_BASE_URL}getExamSlotFullInfo`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function GET_FULL_SLOT_INFO_BY_ID(id) {
//   return {
//     url: `${API_BASE_URL}getExamSlotFullInfo/${id}`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function GET_ALL_STUDENT_BY_EXAM_ROOM_ID(id) {
//   return {
//     url: `${API_BASE_URL}examRoomWithStudent/${id}`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function UPDATE_EXAMINER_TO_EXAMROOM(
//   examSlotID,
//   examinerID,
//   examRoomID
// ) {
//   return {
//     url: `${API_BASE_URL}examRoom`,
//     options: {
//       method: "POST",
//     },
//     body: JSON.stringify({
//       examSlotID: examSlotID,
//       examinerID: examinerID,
//       examRoomID: examRoomID,
//     }),
//   };
// }

// export function SET_ROLE(ID, Role) {
//   return {
//     url: `${API_BASE_URL}auth/authorize`,
//     options: {
//       method: "POST",
//     },
//     body: JSON.stringify({ ID: ID, Role: Role }),
//   };
// }

// export function GET_ALL_EXAM_SLOT() {
//   return {
//     url: `${API_BASE_URL}exam-schedule`,
//     options: {
//       method: "GET",
//     },
//   };
// }
// /*
//  ****ADMIN ROUTE
//  */
// /*
//   API Testing Admin
// */
// export function UPDATE_REGISTER_EXAMSLOT(examinerID, examSlotID) {
//   return {
//     url: `${API_BASE_URL}exam-room/update-register`,
//     options: {
//       method: "PUT",
//     },
//     body: JSON.stringify({ examinerID: examinerID, examSlotID: examSlotID }),
//   };
// }

// // Student Route
// export function VIEW_ALL_EXAMROOM() {
//   return {
//     url: `${API_BASE_URL}student/viewExamSlot/all?StudentId=SE171018&&SemesterCode=Fall_2023`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function VIEW_ALL_EXAMINER_EXAMSLOT(examinerID) {
//   return {
//     url: `${API_BASE_URL}examiner/exam-schedule/filter?examinerID=${examinerID}`,
//     options: {
//       method: "GET",
//     },
//   };
// }

// export function VIEW_EXAMROOM_BY_EXAMINERID(examinerID, semesterID, month, week) {
//   console.log(examinerID, semesterID, month, week);
//   return {
//     url: `${API_BASE_URL}examiner/exam-schedule/filter?examinerID=${examinerID.trim()}&&semesterID=${semesterID}&&month=${month}&&week=${week}`,
//     options: {
//       method: "GET",
//     },
//   };
// }