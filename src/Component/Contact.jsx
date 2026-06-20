import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_icpkk47",
        "template_97t7udu",
        form.current,
        "2169565a5eczIgA8s",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        },
      );
  };
  return (
    <div id="contact" className="py-32 bg-card/40">
      <div className="w-5/6 mx-auto">
        <div className="text-center mb-16">
          <p class="text-gold text-xs tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 class="font-cormorant text-white text-5xl md:text-6xl">
            Let's care for your <span class="text-gold italic">wardrobe</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6 ">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition group">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition">
                  <IoLocationOutline className="lucide lucide-map-pin h-5 w-5 text-gold" />
                </div>
                <div>
                  <div class="text-xs uppercase tracking-widest text-tagline mb-1">
                    Visit Us
                  </div>
                  <div class="text-sm text-text">
                    14 Alhaji Mabadeje St, Alagbole - Akute Rd, Berger, Ota
                    110116, Lagos
                  </div>
                </div>
              </div>
            </div>
            <a href="tel:07033867835" rel="noreferrer">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition group">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition">
                    <FaPhone className="lucide lucide-phone h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div class="text-xs uppercase tracking-widest text-tagline mb-1">
                      Call Us
                    </div>
                    <div className="text-sm text-text">0703 386 7835</div>
                  </div>
                </div>
              </div>
            </a>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition group">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition">
                  <IoMdTime className="lucide lucide-clock h-5 w-5 text-gold" />
                </div>
                <div className="">
                  <div className="text-xs uppercase tracking-widest text-tagline mb-1">
                    Hours
                  </div>
                  <div class="text-sm text-text">
                    Open daily · Closes 10:30 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-tagline mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  maxLength="200"
                  className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-text placeholder:text-tagline/60 focus:outline-none focus:border-gold/60 transition"
                ></input>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-tagline mb-2 block">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="080..."
                  maxLength="200"
                  className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-text placeholder:text-tagline/60 focus:outline-none focus:border-gold/60 transition"
                ></input>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-tagline mb-2 block">
                Email (optional)
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                maxLength="200"
                className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-text placeholder:text-tagline/60 focus:outline-none focus:border-gold/60 transition"
              ></input>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-tagline mb-2 block">
                Message
              </label>
              <textarea
                rows="5"
                maxlength="1000"
                placeholder="Tell us about your laundry or dry cleaning needs..."
                className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-text placeholder:text-tagline/60 focus:outline-none focus:border-gold/60 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gold text-forground font-medium shadow-gold hover:opacity-30 transition disabled:opacity-50"
            >
              Send Message
              <IoIosSend className="lucide lucide-send h-4 w-4" />
            </button>
            <p className="text-xs text-tagline text-center">
              Or email us directly at{" "}
              <a
                href="mailto:itankankuk@gmail.com"
                className="text-gold hover:underline"
              >
                itankuk@gmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
