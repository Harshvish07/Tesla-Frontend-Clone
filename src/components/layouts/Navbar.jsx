import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";
import { HiX } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import tesla from "../../assets/tesla.svg";
// import { ReactComponent as TeslaLogo } from "../../assets/Logo.svg";

const menuItems = [
  {
    title: "Vehicle",
    options: [
      {
        label: "Model S",
        description: "Luxury electric sedan",
        img: "src/assets/header/Mega-Menu-Vehicles-Model-Y-2-v2.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Model 3",
        description: "Affordable performance",
        img: "src/assets/header/Mega-Menu-Vehicles-Model-3-Performance-LHD.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Model Y",
        description: "SUV with Falcon Wing doors",
        img: "src/assets/header/Mega-Menu-Vehicles-Model-Y-2-v2.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Model X",
        description: "SUV with Falcon Wing doors",
        img: "src/assets/header/Mega-Menu-Vehicles-Model-X.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Cyber Truck",
        description: "SUV with Falcon Wing doors",
        img: "src/assets/header/Mega-Menu-Vehicles-Cybertruck-1x.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Invantory",
        description: "SUV with Falcon Wing doors",
        img: "src/assets/header/Mega-Menu-Vehicles-Inventory.jpg",
        buttons: ["Order Now", "Learn More"]
      }
    ],
    dropdown: [
      {
        list: [
          "Help Me Choose",
          "Demo Driver",
          "Trade-in",
          "compare",
          "Workshops",
          "Help Me Charger",
          "Fleet",
          "Semi",
          "Roadster",
          "Fedral Tax Credit"
        ]
      }
    ]
  },
  {
    title: "Energy",
    options: [
      {
        label: "Solar Panel",

        img: "src/assets/header/Mega-Menu-Energy-Solar-Panels.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Solar Roof",

        img: "src/assets/header/Mega-Menu-Energy-Solar-Roof.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Powerwall",

        img: "src/assets/header/Mega-Menu-Energy-Powerwall-US.jpg",
        buttons: ["Order Now", "Learn More"]
      },
      {
        label: "Megapack",

        img: "src/assets/header/Mega-Menu-Energy-Megapack.jpg",
        buttons: ["Learn More"]
      }
    ],
    dropdown: [
      {
        list: [
          "Schedule a Consultantion",
          "Why Solar",
          "Incentives",
          "Support",
          "Partner with Tesla",
          "Commercial",
          "Utilities"
        ]
      }
    ]
  },
  {
    title: "Charger",
    options: [
      {
        label: "Charging",

        img: "src/assets/header/Mega-Menu-Charging-Charging.jpg",
        buttons: ["Learn More"]
      },
      {
        label: "Home Charging",

        img: "src/assets/header/Mega-Menu-Charging-Home-Charging.jpg",
        buttons: ["Find", "Learn More"]
      },
      {
        label: "Supercharge",

        img: "src/assets/header/Mega-Menu-Charging-Supercharging.jpg",
        buttons: ["Find", "Learn More"]
      }
    ],
    dropdown: [
      {
        list: [
          "Help Me Charge",
          "Charging Calculator",
          "Charging with NACS",
          "Supercharger Voting",
          "Host a Supercharger",
          "Commercial Charging",
          "Host Wall Connectors"
        ]
      }
    ]
  },
  {
    title: "Discovery",

    dropdown: [
      {
        header: "Resources",
        list: [
          "Demo Drive",
          "Insurance",
          "American Heroes",
          "Learn",
          "Video Guides",
          "Customer Stories",
          "Events",
          "Workshops"
        ]
      },
      {
        header: "Location Services",
        list: [
          "Find Us",
          "Find a Collision Center",
          "Find a Certified Installer"
        ]
      },
      {
        header: "Company",
        list: ["About", "Careers", "Investor Relations"]
      }
    ]
  }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const isTransparent = ["/", "/home"].includes(location.pathname);

  const handleHover = (title) => setActiveMenu(title);
  const clearHover = () => setActiveMenu(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll control only for mobile
  const controlNavbar = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-60 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-[-100%]"
      } ${
        menuOpen
          ? "bg-white text-black"
          : isTransparent
          ? "bg-transparent text-white md:bg-white md:text-black"
          : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 relative z-60">
        {/* <h1 className="text-2xl tesla-text font-bold">Tesla</h1> */}
        <img
          className="w-35 text-white bg-white/10 md:text-gray-600 fill-current"
          src={tesla}
        />

        <ul className="hidden md:flex gap-6 cursor-pointer">
          {menuItems.map((item, i) => (
            <li
              key={`desktop-${item.title}-${i}`}
              className="relative group"
              onMouseEnter={() => handleHover(item.title)}
            >
              <span className="py-2 px-3 font-medium">{item.title}</span>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex p-2 gap-4 items-center">
          <GoQuestion size={22} />
          <CiGlobe size={22} />
          <CgProfile size={22} />
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="backdrop-blur-md bg-white/10 p-2 rounded-md"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {activeMenu && (
        <div
          className="hidden md:flex absolute top-full left-0 w-full bg-white text-black p-6 z-50 shadow-lg"
          onMouseEnter={() => handleHover(activeMenu)}
          onMouseLeave={clearHover}
        >
          <div className="max-w-7xl mx-auto flex w-full justify-center items-center">
            {menuItems.find((item) => item.title === activeMenu)?.options && (
              // <div className="grid  grid-cols-3 gap-4 flex-1">
              <div className="flex-1 mb-10 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {menuItems
                  .find((item) => item.title === activeMenu)
                  ?.options?.map((opt, i) => (
                    <div key={`${opt.label}-${i}`} className="flex flex-col">
                      <img
                        src={opt.img}
                        alt={opt.label}
                        className="rounded-lg mb-2 w-full h-[130px] object-cover"
                      />
                      <h4 className="font-semibold text-lg">{opt.label}</h4>
                      {opt.description && (
                        <p className="text-sm text-gray-600 mb-2">
                          {opt.description}
                        </p>
                      )}
                      <div className="flex gap-2 flex-wrap">
                        {opt.buttons.map((btn, j) => (
                          <button
                            key={`${btn}-${j}`}
                            className="text-xs px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {menuItems.find((item) => item.title === activeMenu)?.dropdown && (
              // <div className="w-64 flex gap-6 pl-6 border-l border-gray-300">
              <div
                className={`flex gap-20 pl-6  ${
                  menuItems.find((item) => item.title === activeMenu)?.options
                    ? " w-64 border-l border-gray-300 my-12 mx-5"
                    : "flex justify-evenly "
                }`}
              >
                {menuItems
                  .find((item) => item.title === activeMenu)
                  ?.dropdown?.map((section, idx) => (
                    <div key={`dropdown-section-${idx}`} className="mb-6">
                      {section.header && (
                        <h4 className="font-semibold text-2xl  mb-4">
                          {section.header}
                        </h4>
                      )}
                      <ul className="flex flex-col gap-3 text-sm  text-gray-700 ">
                        {section.list.map((link, linkIdx) => (
                          <li
                            key={`dropdown-link-${linkIdx}`}
                            className="hover:underline cursor-pointer  font-semibold text-gray-600 "
                          >
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-white shadow-md z-60">
          <ul className="flex flex-col items-center py-4 gap-3 border-b">
            {menuItems.map((item, i) => (
              <li
                key={`mobile-${item.title}-${i}`}
                className="text-lg font-medium"
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-6 py-2">
            <GoQuestion size={22} />
            <CiGlobe size={22} />
            <CgProfile size={22} />
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
