"use client"

import { Regulations } from "@/components/block/regulations";


export default function AboutPage() {
  return (
    <section className="py-10 md:py-12 lg:py-16">
      <div className="container items-center justify-center">
          <header className="flex pb-6">
              <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase md:w-auto md:text-[54px] lg:text-[64px]">
                  About Us
              </h2>
          </header>
      </div>
      <p className="container text-[20px] pb-2">
        Global HIPPO Association is a non-profit organisation founded in 2012 with the purpose of promoting the importance of English language knowledge and bringing together children from different countries.

        HIPPO "English Without Borders" Olympiad is an international Olympiad which promotes English language, challenges students around the globe to compete in English language knowledge, and improves the co-operation between teachers.
      </p>
      <p className="container text-[20px] pb-4">
        The Olympiad encourages the development of a shared sense of identity and integration, serves as a role model for young people living together as one community.

        The main goal is to create and nourish friendly relations, international understanding and a spirit of sporting competitiveness between young people interested in English language from all around the world.
      </p>
      <p className="container text-[20px]">
        Aligned to the Common European Framework of Reference for Languages (CEFR), Internationally recognised and certified by the Office of Qualifications and Examinations Regulation (Ofqual) in England, our model is proven to regulate the English language qualifications used throughout the Olympiad.
      </p>
      
    <div className="container wide"><Regulations /></div>
    </section>

  );
}
