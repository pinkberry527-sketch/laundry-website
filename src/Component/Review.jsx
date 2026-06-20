import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div id="review" className="py-32">
        <div className="w-5/6 mx-auto">
          <div className="text-center mb-16">
            <p class="text-gold text-xs tracking-widest uppercase mb-3">Reviews</p>
            <h2 class="font-cormorant text-white text-5xl md:text-6xl">What our clients <span class="text-gold italic">say</span>.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-0.5 mb-4">
                    <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                </div>
                <p class="text-tagline/90 leading-relaxed mb-6">"Maro luxury laundry is reliable and fast. You can trust on them anytime. Thank you."</p>
                <div className="flex items-center gap-3">
                    <div class="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-forground font-medium">G</div>
                    <div>
                        <div class="font-medium text-sm text-white">God is Greatest</div>
                        <div class="text-xs text-tagline">Verified Customer</div>
                    </div>
                </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-0.5 mb-4">
                    <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                </div>
                <p class="text-tagline/90 leading-relaxed mb-6">"Maro's luxury is the best — they give proper treatment to my clothes and I was impressed."</p>
                <div className="flex items-center gap-3">
                     <div class="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-forground font-medium">A</div>
                     <div>
                        <div class="font-medium text-sm text-white">Amelia clancy</div>
                        <div class="text-xs text-tagline">Verified Customer</div>
                     </div>
                </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-0.5 mb-4">
                    <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold" />
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                   <FaStar className="lucide lucide-star h-3 w-3 fill-gold text-gold"/>
                </div>
                <p class="text-tagline/90 leading-relaxed mb-6">"Trustworthy laundry. Highly recommend their service to anyone."</p>
                <div className="flex items-center gap-3">
                     <div class="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-forground font-medium">O</div>
                     <div>
                        <div class="font-medium text-sm text-white">Ogunbanwo Oluwaseun</div>
                        <div class="text-xs text-tagline">Verified Customer</div>
                     </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Review