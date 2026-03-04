import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { RegularPost, SpecialPost } from "./types";
import Index from "./parallax-scroll";
import { data, data2 } from "./data";

export function Regulations() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Regulation<br/>Classifications
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="md:max-w-[540px] md:text-lg">
                            The qualifications are intended for candidates who are not native speakers of English and who wish to achieve a high quality, internationally recognised qualification in English that is available and recognised worldwide.
                        </div>
                    </div>
                </header>
            </div>
            <div className="flex flex-col gap-6">
                <div className="container wide">
                    <div className="h-px rounded-lg bg-[#eee] dark:bg-[#282828]"></div>
                </div>
                <div className="container wide">
                    <h1>Regular Regulations:</h1>
                    <div className="flex flex-wrap gap-3 md:gap-0 md:-mx-3">
                        {
                            data.map((item, key) => (
                                <PostItem key={key} item={item} />
                            ))
                        }
                    </div>
                    <h1 className="py-8">Special Regulation Classifications (for students that have all classes in english language):</h1>
                    <div className="flex flex-wrap gap-3 md:gap-0 md:-mx-3 pb-5">
                        {
                            data2.map((item, key) => (
                                <PostSpecialItem key={key} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Index />
        </section>
    );
}

function PostItem({ item }: { item: RegularPost; }) {
    return (
        <div className="w-full md:px-3 md:pb-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="flex relative p-4 h-full rounded-lg bg-background overflow-hidden shadow transition-all hover:drop-shadow-md">
                <div className="flex-grow pr-5">
                    <h3 className="font-medium text-sm md:text-base !leading-snug">
                        {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground md:text-base">
                        {item.meta}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground md:text-base">
                        {item.description}
                    </p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
                <Link target="_self" href={item.url} className="absolute inset-0 z-10">
                    <span className="sr-only">{item.title}</span>
                </Link>
            </div>
        </div>
    );
}

function PostSpecialItem({ item }: { item: SpecialPost; }) {
    return (
        <div className="w-full md:px-3 md:pb-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="flex relative p-4 h-full rounded-lg bg-background overflow-hidden shadow transition-all hover:drop-shadow-md">
                <div className="flex-grow pr-5">
                    <h3 className="font-medium text-sm md:text-base !leading-snug">
                        {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground md:text-base">
                        {item.meta}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground md:text-base">
                        {item.description}
                    </p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
                <Link target="_self" href={item.url} className="absolute inset-0 z-10">
                    <span className="sr-only">{item.title}</span>
                </Link>
            </div>
        </div>
    );
}