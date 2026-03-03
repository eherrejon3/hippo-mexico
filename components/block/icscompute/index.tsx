"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "flowbite-react";

import { ImageCover } from "@/components/custom/image";
import { HippoTimeline } from "@/components/custom/timeline";

import type { RedpumpkinPost } from "./types";
import { data } from "./data";

export function Rounds() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Upcoming<br/>Events
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="md:max-w-[540px] md:text-lg">
                            Plan to attend Hippo the Contest 2026!
                        </div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <HippoTimeline />
                <p className="mt-6 leading-relaxed">
                    The Olympiad is an international event which promotes the English language, challenges students from around the globe to 
                    compete in English language knowledge, and showcases the level of english learning  The Olympiad encourages the development 
                    of a shared sense of identity, integration and serves as a role model for young people living together as one community. 
                    The main goal is to create and nourish friendly relations, international understanding and a spirit of healthy competition 
                    between young people interested in English language from all around the world.  
                </p>
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

function PostItem({ item }: { item: RedpumpkinPost; }) {
    return (
        <div className="w-full md:px-4 md:pb-8 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col relative p-2 h-full rounded-lg bg-background overflow-hidden shadow transition-all hover:drop-shadow-lg">
                <ImageCover
                    src={item.featured}
                    ratiowidth={3}
                    ratioheight={2}
                    loading="lazy"
                    alt={item.title}
                    rounded="rounded"
                />
                <div className="flex flex-col flex-grow pt-5 pb-2.5 px-4">
                    <div className="flex-grow">
                        <h3 className="font-medium md:text-lg leading-snug">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm md:text-base leading-snug">
                            {item.meta}
                        </p>
                    </div>
                    {
                        item.url === "" ? null : (
                            <p className="flex gap-2 mt-6 md:mt-8 font-medium items-center justify-end">
                                Visit Website <ArrowRight className="relative z-20 w-5 h-5 -rotate-45" />
                            </p>
                        )
                    }
                </div>
                {
                    item.url === "" ? null : (
                        <Link target="_blank" href={item.url} className="absolute inset-0 z-10">
                            <span className="sr-only">{item.title}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}