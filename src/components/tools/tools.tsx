import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LuFilter } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BiHome } from "react-icons/bi";

import "./tools.css";
import { useDrawerStore } from "../../stores/drawer-store";
import FilterProduct from "../filter-products/filter-product";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../stores/modal-store";
import SearchProducts from "../search-products/search-products";
import { MdOutlineContactSupport } from "react-icons/md";

interface ITools {
  name: string;
  icon: React.ReactNode;
  event?: () => void;
}

function Tools() {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = useDrawerStore((s) => s.open);
  const openModal = useModalStore((s) => s.open);
  const navigate = useNavigate();

  const tools: ITools[] = [
    {
      icon: <LuFilter />,
      name: "Filter",
      event: () => openDrawer("", <FilterProduct />),
    },
    {
      icon: <GoSearch />,
      name: "Search",
      event: () => openModal({ title: "", children: <SearchProducts /> }),
    },
    {
      icon: <BiHome />,
      name: "Home",
      event: () => navigate("/"),
    },
    {
      icon: <LuShoppingBag />,
      name: "Shopping",
      event: () => navigate("/shopping/cart"),
    },
    {
      icon: <MdOutlineContactSupport />,
      name: "Support",
      event: () => navigate("/support"),
    },
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
                <motion.button
                  className="circular-menu__item-btn"
                  onClick={tool.event}
                >
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
