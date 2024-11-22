import LogoNav from "@/assets/logos/nav.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1250px)");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuToggled((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuToggled) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuToggled]);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuToggled(false);
    }
  };

  return (
    <header className="flex w-full items-center justify-center bg-neutrals-0 py-3">
      <div className="flex w-5/6 justify-between bg-neutrals-0 text-base font-semibold">
        <div className="flex items-center justify-between gap-12">
          {/*  { Left Side}*/}
          <img src={LogoNav} alt="logo" />

          {isAboveMediumScreens && (
            <nav className="flex gap-6 text-neutrals-80">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Головна
              </NavLink>
              <NavLink
                to="for-carriers"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Перевізникам
              </NavLink>
              <NavLink
                to="about-us"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Про нас
              </NavLink>
              <NavLink
                to="carrier-profile"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Профіль перевізника
              </NavLink>
            </nav>
          )}
        </div>

        {/* right side */}
        <div className="flex items-center gap-4">
          {isAboveMediumScreens ? (
            <>
              <button className="px-6 py-3 text-primary-100">
                Створити профіль
              </button>
              <div className="h-8 w-px bg-neutrals-20"></div>
              <button className="bg-primary-100 px-6 py-3 text-neutrals-0">
                Увійти
              </button>
            </>
          ) : (
            <button
              id="menu-toggle"
              className="text-2xl text-neutrals-80"
              onClick={toggleMenu}
            >
              ☰
            </button>
          )}
        </div>

        {/* Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div
            ref={menuRef}
            className="fixed right-0 top-0 z-40 h-full w-[70%] bg-neutral-50 text-neutrals-80 drop-shadow-xl"
          >
            <div className="flex justify-end p-12 text-xl">
              <button onClick={toggleMenu}>&#x2716;</button>
            </div>

            <div className="ml-[15%] flex w-3/5 flex-col gap-10 text-xl font-bold">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Головна
              </NavLink>
              <NavLink
                to="for-carriers"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Перевізникам
              </NavLink>
              <NavLink
                to="about-us"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Про нас
              </NavLink>
              <NavLink
                to="carrier-profile"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >
                Профіль перевізника
              </NavLink>

              <div className="flex flex-col gap-4 text-lg lg:w-3/5">
                <button className="border border-primary-100 px-6 py-3 text-primary-100 hover:bg-neutrals-20">
                  Створити профіль
                </button>
                <button className="bg-primary-100 px-6 py-3 text-neutrals-0">
                  Увійти
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
