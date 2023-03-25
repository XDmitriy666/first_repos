import { useEffect, useRef } from "react";
import Portal from "./Portal";

const Modal = () => {

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            // if (e.key === 'Escape') {
                // onClose()
            // }
        })


    }, [])

    return ( 
        <Portal>
            <div className="overlay">
                <div className="content" >
                    Hello World
                </div>
            </div>
        </Portal>
    );
}
 
export default Modal;

