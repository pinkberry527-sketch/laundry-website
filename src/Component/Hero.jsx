import heroImg from "../assets/hero-laundry-C0jpBxuZ.jpg";
import { FaStar } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in" 
      className="h-screen relative bg-cover bg-center bg-no-repeat mt-16 overflow-hidden items-center flex"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute h-full inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30"></div>
      <div  className="relative z-10   max-w-5/6 mx-auto grid md:grid-cols-2 gap-12  items-center   ">
        <div data-aos="fade-righ" className="">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 t mb-6 text-gold text-xs tracking-widest  uppercase ">
            <FaStar />  4.8 Rated · Berger, Lagos
          </div>
          <h1 className="text-5xl md:text-7xl font-cormorant font-semibold leading-[1.05] mt-6 text-white">
            Luxury care for <br /> the clothes you <span className="text-gold italic">love</span>
          </h1>
          <p className="text-md  text-tagline max-w-lg mb-8">
            Maro's Luxury Laundry &amp; Dry Cleaning delivers expert garment care with reliability and finesse. Trusted by Lagos's most discerning wardrobes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-gold to-yellow-600 hover:brightness-150 transistion font-medium capitalize text-forground">Book a pickup <IoIosSend /></a>
            <a href="#" className="inline-flex items-center text-white font-medium capitalize gap-2 px-6 py-3 rounded-full border-2 border-border hover:bg-secondary transistion">Our Services</a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-tagline">
            <div className="flex items-center gap-2"><MdOutlineVerifiedUser className="text-gold" /> Trusted Care</div>
            <div className="flex items-center gap-3"><GrDeliver className="text-gold" /> Fast Turnaround</div>
          
          </div>
        </div>
        <div></div>
        
      </div>
    </div>
  );
};

export default Hero;
