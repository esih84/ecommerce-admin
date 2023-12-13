"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";



const Modal = ({title, description,isOpen, onClose=false,children}) => {
    const changeHandler=(open)=>{
        if (!open) {
            onClose()
        }
    }
    return (
        <Dialog open={isOpen} onChang={changeHandler}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;