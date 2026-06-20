import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-32 bg-card/40">
        <div className="w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="relative rounded-3xl overflow-hidden ">
            <img src="/src/assets/service-pressing-CmMpptdy.jpg" alt="professional" width="800" height="800" loading="lazy" className="w-full h-full 1 object-cover"/>
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-bg/80 backdrop-blur-md border border-gold/20">
            <div className="flex items-center gap-3">
                <div className="text-4xl font-cormorant text-gold">4.8</div>
                <div>
                <div className="flex gap-0.5 mb-1">
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                </div>
                <p class="text-xs text-tagline">From 16+ verified reviews</p>
                </div>
            </div>
            </div>
           </div>
           <div>
            <p class="text-gold text-xs tracking-widest uppercase mb-3">About Us</p>
            <h2 class="font-cormorant text-white text-5xl md:text-6xl mb-6">A name Lagos <span class="text-gold italic">trusts</span>.</h2>
            <p class="text-tagline leading-relaxed mb-4">Maro's Luxury Laundry &amp; Dry Cleaning was founded on a simple promise — to treat every garment as if it were our own. From the most delicate fabrics to your everyday essentials, we combine traditional craftsmanship with modern technique.</p>
            <p class="text-tagline leading-relaxed mb-8">Customers across Berger and beyond rely on us for fast, dependable service and immaculate results — every single time.</p>
            <div class="grid grid-cols-3 gap-6"><div><div class="font-cormorant text-3xl text-gold mb-1">4.8★</div><div class="text-xs uppercase tracking-widest text-tagline">Rating</div></div><div><div class="font-cormorant text-3xl text-gold mb-1">100%</div><div class="text-xs uppercase tracking-widest text-tagline">Trusted</div></div><div><div class="font-cormorant text-3xl text-gold mb-1">24h</div><div class="text-xs uppercase tracking-widest text-tagline">Turnaround</div></div></div>
           </div>
        </div>
    </div>
  )
}

export default About