import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Navbar = () => {
    const navlinkstyle="text-tagline font-inter hover:text-text "

    const handleclick =()=>{
       const phoneNumber= "2349011242117"
    let message ="Hello i want to book a pick up:\n\n";
     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    }
  return (
    <div className="flex fixed top-0 inset-x-0 z-50 border-b border-tagline justify-center items-center bg-bg">
    <div className="navbar w-5/6 flex justify-between items-center p-4 ">
<div className="w-16"><img className="w-full" src="/WhatsApp Image 2026-06-18 at 15.37.10.png" alt="" /></div>
<ul className=" hidden md:flex gap-10 text-sm font-medium">
    <li> <a  className={navlinkstyle} href="#home">Home</a></li>
    <li><a className={navlinkstyle}href="#about">About</a></li>
    <li><a className={navlinkstyle} href="#contact">Contact</a></li>
    <li><a className={navlinkstyle} href="#services">Services</a></li>
    <li><a className={navlinkstyle} href="#review">Reviews</a></li>
</ul>
<a href="" onClick={handleclick} className="  sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-foreground text-sm font-medium shadow-gold hover:opacity-30 transition"> <IoChatbubbleEllipsesOutline />
Chat With Us</a>
    </div>
    </div>
  )
}

export default Navbar