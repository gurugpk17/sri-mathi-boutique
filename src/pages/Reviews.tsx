import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Reviews() {
  return (
    <main className="pt-40 pb-32 embroidery-pattern">
      {/* Title */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 text-center">
        <span className="font-accent text-gold uppercase tracking-[0.4em] text-xs block mb-6">Client Testimonials</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">Kind Words from our Brides</h1>
        <div className="gradient-divider w-64 mx-auto" />
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 bg-neutral-900 border border-white/5 overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwdPp3EZrLorYd6_xiNhvmoROTzRy6RtsSlxvMrFuBwGxMGRCLmL1UPn6BUkZEl7DyJfqJyWs-ha_kTdTIFApLXewDKxUz4xHyaTVfA12o8F6hAyb0simV7RkE_gmG33DabFzHluAbn2Dm9CXOq1M9-RpREjg-cXQP1UaPiLTySzMnxsVs2qQ4GzEt7pyUj-EpJ0M6rCd75yzPdy4yJTFvojvSzNw_x_31ITgctYxzt3lZLWnwBwvm4CGyHawmx1ODEnoiW9jmbGA" 
              alt="Ananya Iyer"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="lg:col-span-5 space-y-8">
            <Quote size={60} fill="#D4AF37" className="text-gold opacity-30" />
            <p className="text-3xl md:text-4xl italic font-serif leading-relaxed text-gray-200">
              "The craftsmanship is beyond anything I’ve seen in Bangalore. My wedding blouse felt like a piece of art rather than just a garment. Every stitch told a story."
            </p>
            <div>
              <p className="font-accent text-gold font-bold">Ananya Iyer</p>
              <p className="font-accent text-gray-500 text-[10px] tracking-[0.3em] uppercase mt-2">Bride from Bangalore</p>
            </div>
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 border border-gold/10 p-12 flex flex-col justify-between">
            <div>
              <Star size={20} className="text-gold mb-8" />
              <p className="text-xl italic font-serif text-gray-300 leading-relaxed">
                "The bespoke consultation was so personal. They understood my vision for a minimalist but regal look and executed it perfectly."
              </p>
            </div>
            <div className="mt-12 text-left">
              <p className="font-accent text-gold text-xs font-bold uppercase tracking-widest">Meera Kapoor</p>
              <p className="font-accent text-gray-500 text-[9px] tracking-[0.4em] uppercase mt-1">Chennai Client</p>
            </div>
          </div>

          <div className="aspect-[4/5] md:aspect-auto">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlMidGqELPCohgrxCaFvbiGy9BkSirs67bixioDImrqDwrIpYxHwGCqiWJVcmKQJyZjb7sdVMRAOq9WR6LhfXqV42f7RYPeBRqLXBMjOgZhUW_hWSVsy7cWhiAKgT4KZanT1p016JnB5ic8N7Ib67fqjQJ4jdzaPMwPERnr3d8OMQmuXc_NG9vSCWLRojdatavuTEQ-1x6T4hM9z8OHLDaZbLFt-GjZ-JDUDGpuHNQeigqD9jWJun1HyicRPaGOBdbBxvED3z2AiM" 
              className="w-full h-full object-cover border border-white/5 opacity-80"
              alt="Detail"
            />
          </div>

          <div className="bg-neutral-900 border border-gold/10 p-12 flex flex-col justify-between">
            <div>
              <Star size={20} className="text-gold mb-8" />
              <p className="text-xl italic font-serif text-gray-300 leading-relaxed">
                "From the first sketch to the final fitting, the experience was seamless. Truly the gold standard for luxury bridal wear."
              </p>
            </div>
            <div className="mt-12 text-left">
              <p className="font-accent text-gold text-xs font-bold uppercase tracking-widest">Riya Sharma</p>
              <p className="font-accent text-gray-500 text-[9px] tracking-[0.4em] uppercase mt-1">Bride from Hyderabad</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
