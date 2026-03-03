"use client"
import ImageCarousel from "./carousel";


export function Featured() {
    return (
        <div className="container mx-auto py-6">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-serif text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Our<br/>Sponsors
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="md:max-w-[540px] md:text-lg">
                            We are supported and grateful to the following sponsors. Click on the image for more information.
                        </div>
                    </div>
                </header>
            </div>
            <ImageCarousel />
        </div>
    );
}