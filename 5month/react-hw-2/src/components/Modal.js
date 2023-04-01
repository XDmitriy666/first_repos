import { useEffect, useRef } from "react";
import Portal from "./Portal";

const Modal = (props) => {
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            // if (e.key === 'Escape') {
            // onClose()
            // }
        });
    }, []);

    return <>{props.children}</>;
};

export default Modal;

