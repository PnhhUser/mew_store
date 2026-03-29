import { motion, AnimatePresence } from "framer-motion";
import { useDrawerStore } from "../../stores/drawer-store";
import { IoClose } from "react-icons/io5";

import "./drawer.css";

function Drawer() {
  const isOpen = useDrawerStore((s) => s.isOpen);
  const title = useDrawerStore((s) => s.title);
  const children = useDrawerStore((s) => s.children);
  const close = useDrawerStore((s) => s.close);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* overlay fade */}
          <motion.div
            className="overlay"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />

          {/* drawer slide */}
          <motion.div
            className="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="drawer__header">
              <h3 className="drawer__title">{title}</h3>
              <div className="drawer__icon" onClick={close}>
                <IoClose size={22} />
              </div>
            </div>
            <div className="drawer__content">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
