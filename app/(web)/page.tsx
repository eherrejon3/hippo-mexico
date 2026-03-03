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
                        "name": "Fachri Riyanto",
                        "url": "https://friyanto.vercel.app",
                        "logo": "https://friyanto.vercel.app/favicon-270x270.png",
                        "description": "Hi, i'm Fachri Riyanto, Full-Stack Developer who love to build products using modern technologies, and AI vibe code.",
                        "sameAs": [
                            "https://www.linkedin.com/in/friyanto/",
                            "https://github.com/fachririyanto"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Jakarta",
                            "addressCountry": "Indonesia"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "fachririyanto@gmail.com"
                        }
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