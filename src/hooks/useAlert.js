// ../hooks/useAlert.js

import React, { useContext } from 'react';
import { AlertContext } from "../context/AlertContext";

export const useAlert = () => {
  const { setTypeAlert, setContentAlert, setFlag, flag } = useContext(AlertContext);

  const showAlert = (type, context) => {
    setTypeAlert(type);
    setContentAlert(context);
    setFlag(prevFlag => !prevFlag);
  };

  return { showAlert };
};
