import { useModalStore } from "../../stores/modal-store";
import { IoClose } from "react-icons/io5";

import "./modal.css";

export const Modal = () => {
  const { isOpen, close, title, children } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={close}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <button className="modal__close" onClick={close}>
            <IoClose />
          </button>
        </div>

        {/* Body */}
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
