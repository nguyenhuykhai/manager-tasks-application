import React, { useContext } from 'react';
import { AlertContext } from "../context/AlertContext";

export const useAlert = () => {
  const { setTypeAlert, setContentAlert, setFlag, flag } = useContext(AlertContext);

  const alert = async (type, context) => {
    await setTypeAlert(type);
    await setContentAlert(context);
    await setFlag(!flag);
  };

  return { alert };
};
