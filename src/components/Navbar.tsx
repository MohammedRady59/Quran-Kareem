import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={` z-40 text-white fixed w-full top-0 left-0 duration-500 bg-green ${
          scrolled ? "py-6  " : "py-4 "
        } `}
      >
        <div className="container flex justify-between uppercase items-center font-bold flex-wrap">
          <h1 className="sm:text-5xl text-4xl font-base ">
            <Link to="/">الموعظة</Link>
          </h1>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="icon px-3 py-1 border rounded-md cursor-pointer md:hidden "
          >
            <AlignJustify />
          </div>
          <ul
            id="links"
            className={`list-none text-lg text-center   md:flex flex-col basis-full md:flex-row md:basis-auto  ${
              show ? "flex" : "hidden"
            }`}
          >
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(!show)}>
              <NavLink className="p-2" to="/">
                الصفحة الرئيسية
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(!show)}>
              <NavLink className="p-2" to="quran">
                القراءن الكريم
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(!show)}>
              <NavLink className="p-2" to="tafsser">
                تفسير القرأن الكريم
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(!show)}>
              <NavLink className="p-2" to="hadit">
                أحاديث
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
