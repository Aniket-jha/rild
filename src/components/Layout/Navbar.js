import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../asset/logoMain.png"
import  Link  from "next/link";
import Image from "next/image";
import Topbar from "./Topbar";
export default function NavbarTwo() {
  const [openNav, setOpenNav] = React.useState(false);
  const [topNav, setTopNav] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
    
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      setTopNav(window.scrollY > 0);
      setHideTopbar(window.scrollY > 50); // Adjust this value for smoothness
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function AboutNavListMenu({btnClass}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="p-1 font-[NeueMedium] cursor-pointer tracking-wider text-[18px] flex items-center">
            <p
              className="flex items-center gap-2"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            
            >
           Invest
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </p>
          </Typography>
        </MenuHandler>
        <MenuList  className="hidden mainMenuItem  bg-gray-100 text-center shadow-lg border-none max-w-screen-xl  lg:block">
        <ul className="grid grid-cols-1   bg-none grid-flow-row gap-y-2 text-center  outline-none outline-0">
        <MenuItem className="subMenuText1">
        <Link href="/aboutus" >Deals By Deals</Link></MenuItem>
        <MenuItem className="subMenuText1">
          <Link href="/coliving" >Coliving Funds</Link></MenuItem>
     
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          
          <MenuItem className="text-[1.2rem] px-2 font-[NeueMedium] py-0">
          <Link className=""  href="/research" >
         NMIMS
      </Link>
      </MenuItem>
         
        </Collapse>
      </div>
    </React.Fragment>
  );
  }
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col font-[NeueMedium] text-white lg:mb-0 lg:mt-0 lg:justify-end lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[18px]"
      >
        <Link href="/" className="flex text-white items-center">
        Home
        </Link>
      </Typography>
    
      <Typography
        as="li"
       
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-white text-[18px]"
      >
        <Link href="/properties" className="flex items-center">
         How It Works
        </Link>
      </Typography>
      {/* <Typography
        as="li"
       
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[14px]"
      >
        <Link href="/properties" className="flex items-center">
         Properties by College
        </Link>
      </Typography> */}
      <AboutNavListMenu />
      
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[14px]"
      >
        <Link href="/community" className="flex items-center">
         Community
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[14px]"
      >
        <Link href="/ourstory" className="flex items-center">
         Our Story
        </Link>
      </Typography> */}
    </ul>
  );
 
  return (
    <>
     <div className="fixed bg-white  top-0 left-0 w-full z-[999]">
        
        {/* <div
          className={`transition-all duration-300 ease-in-out ${
            hideTopbar ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Topbar />
        </div>
   */}
  <Navbar
  className={`fixed top-0 z-[999] w-full max-w-full  backdrop-blur-none transition-all duration-300 ease-in-out border-none shadow-none rounded-none px-4 py-2 lg:px-16 lg:py-6 ${
    topNav ? 'bg-[#11193C] text-black' : 'bg-transparent bg-opacity-0 text-white'
  }`}
>
  <div className="grid grid-cols-5 justify-between items-center text-white">
    <Link className="col-span-1" href="/">
      <Image className="w-[70px]" src={Logo} alt="Logo" />
    </Link>
    <div className="hidden lg:block col-span-4">{navList}</div>
    <IconButton
      variant="text"
      className="ml-auto h-6 w-6 col-span-4 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
      ripple={false}
      onClick={() => setOpenNav(!openNav)}
    >
      {openNav ? (
        <XMarkIcon className="h-6 w-6" />
      ) : (
        <Bars3Icon className="h-6 w-6" />
      )}
    </IconButton>
  </div>
  <MobileNav open={openNav}>
    <div className="container mx-auto">{navList}</div>
  </MobileNav>
</Navbar>
    </div>
    </>
  );
}