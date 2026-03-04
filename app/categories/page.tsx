"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import { AccordionCategories } from "@/components/custom/accordian";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default function CategoriesPage() {
  const isMobile = useIsMobile();
  return (
    <>
        <section className="relative py-30 md:py-42 lg:py-56">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/images/portfolio/mexico hippo 6.jpg"
              alt="IA Picture"
              layout="fill"
              objectFit="cover"
              quality={100}
              objectPosition="center 45%"
            />
          </div>
    
        </section>
          <div className="container flex justify-center py-10 md:py-12 lg:py-16">
            <header className="flex pb-6 z-20">
              <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase md:w-auto md:text-[54px] lg:text-[64px]">
                Categories
              </h2>
            </header>
          </div>
          <p className="container text-[20px] pb-5 z-20">
            Participants will compete in <span className="font-bold">12 categories (7 regular and 5 special)</span> based on the <span className="font-bold">Common European Framework of Reference for Languages (CEFR)</span> and will take Gatehouse Awards examinations as well as Hippo Tests. 
          </p>
          <p className="container text-[20px] pb-5 z-20">Students enrolled in lower grades than those indicated in the table may also compete if they feel prepared for the level. The age limit for the Contest is 19, or as long as the student is in high school.</p>
          <p className="container text-[20px] pb-5 z-20">The first table refers to the regular categories, while the second refers to the special categories.</p>

          {isMobile ?
          <>
          <section className="relative mb-150">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/images/1-Regular-Category-724x1024.png"
                alt="IA Picture"
                width={724}
                height={1024}
              />
            </div>
          </section>
          <section className="relative mb-300">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/images/1-Special-Category--724x1024.png"
                alt="IA Picture"
                width={724}
                height={1024}
              />
            </div>
          </section>
          </>
          : <div className="container pb-10"><AccordionCategories /></div>}

          <p className="container text-[20px] pb-5 z-20">Bilingual students may compete exclusively in one of the special categories. Students considered bilingual are those who were born or have lived and attended school for at least 3 years in an English-speaking country within the past 5 years, as well as those who live in a non-English-speaking country but attend an English/American international or specialised school.</p>
          <p className="container text-[20px] pb-5 z-20">International schools and schools where 50% or more of the subjects are taught in English (except in countries where English is the only official language, e.g. the UK) participate in the special categories. The percentage of the curriculum delivered in English may be revised in agreement with the country coordinators. These students may compete in one of the five special categories.</p>
          <p className="container text-[20px] pb-10 z-20">Baby Hippo and Little Hippo students, even if considered bilingual, will still compete in the regular categories.</p>
        <section className="relative py-30 md:py-42 lg:py-56">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/images/portfolio/PHOTO-2025-04-08-23-12-48.jpg"
              alt="IA Picture"
              layout="fill"
              objectFit="cover"
              quality={100}
              objectPosition="center 20%"
            />
          </div>
    
        </section>
        </>

  );
}