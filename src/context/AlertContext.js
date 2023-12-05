import React, { createContext, useEffect, useState } from 'react';
import { message } from 'antd';

export const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [typeAlert, setTypeAlert] = useState("");
  const [contentAlert, setContentAlert] = useState("");
  const [flag, setFlag] = useState(false);

  const showAlert = () => {
    messageApi.open({
      type: typeAlert,
      content: contentAlert,
      duration: 3
    });
  };
  
  useEffect(() => {
    const arrayType = ["success", "error", "warning"]
    if (arrayType.includes(typeAlert) && contentAlert != "") {
      showAlert();
    }
  },[flag])

  return (
    <AlertContext.Provider value={{ setTypeAlert, setContentAlert, setFlag, flag }}>
      {contextHolder}
      {children}
    </AlertContext.Provider>
  );
};
