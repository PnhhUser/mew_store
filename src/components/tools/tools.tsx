import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LuFilter } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { LuScanBarcode } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BiHome } from "react-icons/bi";

import "./tools.css";

function Tools() {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    { icon: <LuFilter />, name: "Filter" },
    { icon: <GoSearch />, name: "Search" },
    { icon: <LuScanBarcode />, name: "Barcode" },
    { icon: <LuShoppingBag />, name: "Shopping" },
    { icon: <BiHome />, name: "Home" },
  ];

  const radius = 80;

  const totalAngle = Math.PI;
  const startAngle = -Math.PI / 2;
  const angleStep = totalAngle / (tools.length - 1);

  return (
    <div className="circular-menu">
      {/* Center */}
      <motion.button
        className="circular-menu__center"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="circular-menu__center-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <IoClose /> : <HiOutlineViewGrid />}
        </motion.span>
      </motion.button>

      {/* Items */}
      <AnimatePresence>
        {isOpen &&
          tools.map((tool, index) => {
            const angle = startAngle + index * angleStep;

            const size = 50;

            const x = Math.cos(angle) * radius - size / 2;
            const y = Math.sin(angle) * radius - size / 2;

            return (
              <motion.div
                key={tool.name}
                className="circular-menu__item"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ x, y, scale: 1, opacity: 1 }}
                exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.05,
                }}
              >
                <motion.button className="circular-menu__item-btn">
                  {tool.icon}
                </motion.button>

                <span className="circular-menu__item-label">{tool.name}</span>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
}

export default Tools;
