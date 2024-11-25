import React, { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "../components/ToastContainer";

export const ToastContext = createContext();

export const ToastContextProvider = ({children})=>{
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((type="info", message="", position="top-right", duration=3000)=>{
        setToasts((prevToasts)=>[...prevToasts, {id: Date.now(), type, message, position, duration}])
    },[])
    const removeToast = useCallback((id)=>{
        setToasts((prevToasts)=> prevToasts.filter((toast)=> toast.id !== id));
    },[])

    return <ToastContext.Provider value={{addToast}}>
        {children}
        <ToastContainer toasts={toasts} removeToast={removeToast}/>
    </ToastContext.Provider>
}

export const useToast = ()=> useContext(ToastContext);