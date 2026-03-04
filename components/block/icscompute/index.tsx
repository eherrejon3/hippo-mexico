"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "flowbite-react";

import { ImageCover } from "@/components/custom/image";
import { HippoTimeline } from "@/components/custom/timeline";

export function Rounds() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <p className="mb-10 leading-relaxed">
                    The Olympiad is an international event which promotes the English language, challenges students from around the globe to 
                    compete in English language knowledge, and showcases the level of english learning  The Olympiad encourages the development 
                    of a shared sense of identity, integration and serves as a role model for young people living together as one community. 
                    The main goal is to create and nourish friendly relations, international understanding and a spirit of healthy competition 
                    between young people interested in English language from all around the world.  
                </p>
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Upcoming<br/>Events
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="md:max-w-[540px] md:text-lg">
                            Plan to attend Hippo the Contest 2026!
                        </div>
                    </div>
                    <div className="container wide">
                        <div className="h-px rounded-lg bg-[#eee] dark:bg-[#282828]"></div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <HippoTimeline />
                <div className="container wide">
                    <div className="h-px rounded-lg bg-[#eee] dark:bg-[#282828]"></div>
                </div>
                <p className="py-3">Futher Hippo information is available</p>
                <div className="max-w-[50vw] sm:max-w-[30vw] lg:max-w-[20vw]">
                <Button className="bg-[#fbba00] dark:bg-[#97bddd] dark:text-[#000]" color="#97bddd" href="https://hippo-thecontest.org/">
                    Hippo the Contest
                    <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
                </div>
            </div>
            {/* <div className="container wide">
                <div className="flex flex-wrap gap-4 md:gap-0 md:-mx-4">
                    {
                        data.map((item, key) => (
                            <PostItem key={key} item={item} />
                        ))
                    }
                </div>
            </div> */}
        </section>
    );
}