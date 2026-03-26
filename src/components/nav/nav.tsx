import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDrawerStore } from "../../stores/drawer-store";

import "./nav.css";

function Nav() {
  const open = useDrawerStore((s) => s.open);
  const close = useDrawerStore((s) => s.close);

  const items = ["shopping", "support", "sigin"];

  return (
    <div className="nav">
      {/* Hamburger menu mobile */}
      <div className="nav__bar">
        <div
          className="nav__box"
          onClick={() =>
            open(
              "Menu",
              <nav className="nav__list nav__list--mobile">
                {items.map((item) => (
                  <motion.a
                    key={item}
                    className="nav__link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item, e.currentTarget as HTMLElement, close);
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>,
            )
          }
        >
          <FaBars className="nav__icon" />
        </div>
      </div>

      {/* Menu desktop */}
      <nav className="nav__list nav__list--desktop">
        {items.map((item) => (
          <motion.a
            key={item}
            className="nav__link"
            href={`/${item}`}
            whileHover={{ scale: 1.15, y: -3, color: "var(--clr-primary)" }}
            whileTap={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleClick(
  item: string,
  element: HTMLElement,
  close: () => void,
) {
  // 1️⃣ trigger animation trượt + mờ
  element.animate(
    [
      { transform: "translateX(0px)", opacity: 1 },
      { transform: "translateX(300px)", opacity: 0 },
    ],
    { duration: 600, easing: "ease-in-out" },
  );

  // 2️⃣ đợi link animation xong
  await sleep(600);

  // 3️⃣ đóng drawer (drawer animation 0.3s)
  close();

  // 4️⃣ đợi drawer đóng xong
  await sleep(300);

  // 5️⃣ chuyển page
  window.location.href = `/${item}`;
}

export default Nav;
