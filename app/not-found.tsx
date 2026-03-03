import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import HippotheContestIcon from "@/components/custom/hippo-thecontest";

export const metadata: Metadata = {
    title: "Page not found",
};

export default function Page() {
    return (
        <div className="flex p-6 h-screen justify-center items-center">
            <nav className="flex fixed top-0 left-0 z-50 px-4 lg:px-6 h-20 items-center">
                <div className="font-medium font-serif text-[40px] leading-none uppercase">
                    <Link href="/">
                        <div style={{ transform: 'scale(0.05)', width: '50px', height: '50px' }}>
                            <HippotheContestIcon HIPPOTextcolor="#003758" HippoHeadcolor="#ffffff" HippoBckgdcolor="#0084B4" MexicoTextcolor="#FBBA00" MexicoVisible={true} />
                        </div>
                    </Link>
                </div>
            </nav>
            <div className="max-w-[640px] w-full text-center">
                <h2 className="font-serif text-[120px] md:text-[200px] leading-[0.8] -tracking-[1px]">
                    404
                </h2>
                <p className="mt-6 mb-10 text-lg">
                    Page doesn&apos;t exist.
                </p>
                <Link href="/" className={buttonVariants({ variant: "default", size: "lg", className: "md:!h-12 !rounded-full" })}>
                    <ArrowLeft />
                    Back to home
                </Link>
            </div>
        </div>
    );
}