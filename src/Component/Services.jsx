import { IoShirtOutline } from "react-icons/io5";
import { TbIroning2 } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiWashingMachine } from "react-icons/gi";

const Services = () => {
  return (
    <div id="services" className="py-36 text-white">
      <div className="w-5/6 mx-auto">
        <div data-aos="fade-down" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl">
              Services crafted <br />
              With <span className="text-gold italic">passion</span>.
            </h2>
          </div>
          <p className="max-w-md text-tagline">
            From everyday essentials to your most cherished pieces — every
            garment receives meticulous attention.
          </p>
        </div>
        <div data-aos="zoom-out-down" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1 duration-300">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
              <IoShirtOutline className="lucide lucide-sparkles h-6 w-6 text-gold " />
            </div>
            <h3 className="text-xl mb-3 font-cormorant capitalize">Premium Laundry</h3>{" "}
            <p className="text-sm text-tagline leading-relaxed">
              Expert wash, dry & fold for everyday garments — handled with
              luxury-grade care.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1 duration-300">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
              <TbIroning2 className="lucide lucide-sparkles h-6 w-6 text-gold" />{" "}
            </div>
            <h3 className="text-xl mb-3 font-cormorant capitalize">Dry Cleaning</h3>{" "}
            <p className="text-sm text-tagline leading-relaxed">
              Delicate fabrics, suits, and gowns cleaned to immaculate, fresh
              perfection.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1 duration-300">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
              <CiDeliveryTruck className="lucide lucide-sparkles h-6 w-6 text-gold" />{" "}
            </div>
            <h3 className="text-xl mb-3 font-cormorant capitalize">Pickup & Delivery</h3>{" "}
            <p className="text-sm text-tagline leading-relaxed">
              Schedule a doorstep pickup. We collect, clean, and return your
              wardrobe.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1 duration-300">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
              <GiWashingMachine className="lucide lucide-sparkles h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl mb-3 font-cormorant capitalize">Stain Treatment</h3>
            <p className="text-sm text-tagline leading-relaxed">
              Specialist treatment for tough stains without compromising your
              fabric.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
