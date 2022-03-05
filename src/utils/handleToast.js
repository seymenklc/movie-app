import { toast } from "react-toastify";

export const handleToast = (message, onCloseHandler) => {
    return toast.info(message, {
        position: "bottom-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        onClose: onCloseHandler
    });
};