import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ItemPost } from "./types";
import { data } from "./data";

import { ImageCover } from "@/components/custom/image";

export function Registering() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Register<br/>Links
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="md:max-w-[100vh] md:text-lg">
                            Apply to be apart of the Hippo Contest! Whether a Student or School, apply to the chance of a lifetime!
                        </div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap md:-mx-4 gap-4 md:gap-0 md:flex-nowrap">
                    <div className="md:px-4 w-full md:w-1/2">
                        <BigPostItem item={data[0]} />
                    </div>
                    <div className="md:px-4 w-full md:w-1/2">
                        <BigPostItem item={data[1]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BigPostItem({ item }: { item: ItemPost; }) {
    return (
        <div className="block p-2 overflow-hidden bg-background rounded-lg shadow">
            <ImageCover
                ratiowidth={2245}
                ratioheight={1400}
                src={item.featured}
                alt={item.title}
                rounded="rounded"
                objectposition="object-left-top"
                loading="lazy"
            />
            <div className="flex-grow py-4 px-2 md:p-4">
                <h3 className="font-medium text-base md:text-lg !leading-snug">
                    {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                    {item.description}
                </p>
                <div className="mt-8 gap-3 flex justify-between items-center">
                    {item.id == "2" && <Link href="/files/Hippo-2026-Venue-Approval-Form.pdf" target="_blank" download>
                        <button className="px-1 md:px-4 py-2 bg-[#003758] dark:bg-[#97bddd] text-white rounded">
                            Venue Approval Form
                        </button>
                    </Link>}
                    <Link
                        href={item.url}
                        target="_blank"
                        className="inline-flex gap-0 md:gap-2 items-center"
                        >
                        {item.id == "2" ? <span className="font-medium">Inquire about School Registration</span>:
                        <span className="font-medium">Inquire about Student Registration</span>}
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
