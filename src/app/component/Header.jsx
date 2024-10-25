"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md'; // Importing React Icon for close button
import Link from 'next/link'; // Import Link from next/link

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the screen is resized to a larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Adjust this value based on your breakpoint for large screens
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <section className="navbar-area bg-[#3b82f6] py-4 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="navbar flex justify-between items-center w-full lg:mx-[20px] md:mx-[10px]">
              <Link href="/" className="navbar-brand flex items-center">
                <Image src="/ET Logo.jpg" alt="Logo" width={70} height={50} />
                <span className="text-white lg:text-3xl md:text-2xl text-[18px] font-bold ml-2">Empire Teknology</span>
              </Link>
              
              <div className="hidden lg:flex justify-end items-end flex-1">
                <ul className="flex space-x-8 text-white text-[18px] font-bold">
                  {["Home", "About", "Services", "Career", "Blog", "Contact"].map((item) => (
                    <li key={item} className="nav-item relative">
                      <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="page-scroll text-white hover:bg-white hover:text-[#3b82f6] hover:scale-130 transition-all duration-300 rounded-lg px-4 py-2">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Menu Icon */}
              <button
                className="navbar-toggler block lg:hidden"
                type="button"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <MdClose className="text-white text-3xl" />
                ) : (
                  <div className="flex flex-col space-y-1">
                    <span className="block w-6 h-1 bg-white"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                  </div>
                )}
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#3b82f6] w-[80vw] z-50 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } duration-300`}
      >
        <div className="p-4">
          <div className="mt-8">
            <ul className="space-y-2 text-white text-[18px] font-bold">
              {["Home", "About", "Services", "Career", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="hover:bg-white hover:text-[#3b82f6] hover:scale-130 transition-all duration-300 rounded-lg block px-4 py-2" 
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
