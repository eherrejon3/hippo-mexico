import { Suspense } from "react";
import type { Metadata } from "next";

import { Hero } from "@/components/block/hero";
import { Featured } from "@/components/block/featured";
import { Rounds } from "@/components/block/icscompute";


export const metadata: Metadata = {
    title: "Hippo Mexico",
};

export default function Page() {
    return (
        <>
            <script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Hippo Mexico",
                        "url": "https://www.hippomexico.com/",
                        "logo": "https://friyanto.vercel.app/favicon-270x270.png",
                        "description": "Official Website for Hippo the Contest: Mexico.",
                    }),
                }}
            />
            <Hero />
            <Rounds />
            <Suspense>
                <Featured />
            </Suspense>
        </>
    );
}