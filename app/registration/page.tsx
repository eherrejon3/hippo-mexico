import Image from "next/image";
import { Registering } from "@/components/block/registering";

// app/about/page.tsx
export default function RegistrationPage() {
  return (
    <>
    <section className="relative py-30 md:py-42 lg:py-56">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/portfolio/PHOTO-2025-04-08-23-12-49 2.jpg"
          alt="IA Picture"
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center 20%"
        />
      </div>

    </section>
      <div className="container flex justify-center py-10 md:py-12 lg:py-16">
        <header className="flex pb-6 z-20">
          <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase md:w-auto md:text-[54px] lg:text-[64px]">
            Registration
          </h2>
        </header>
      </div>
      <p className="container flex text-[20px] pb-2 z-20">
        Global HIPPO Association is a non-profit organisation founded in 2012 with the purpose of promoting the importance of English language knowledge and bringing together children from different countries.

        HIPPO "English Without Borders" Olympiad is an international Olympiad which promotes English language, challenges students around the globe to compete in English language knowledge, and improves the co-operation between teachers.
      </p>
      
      <Registering />
    </>
  );
}