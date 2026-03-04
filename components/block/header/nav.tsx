"use client";

import { HTMLAttributeAnchorTarget, useState, useEffect, useId } from "react";
import { ElDisclosure } from "@tailwindplus/elements/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "motion/react";

import { cn } from "@/lib/shadcn/utils";
import { useScroll } from "@/lib/hooks/useScroll";

import { ButtonSwitchTheme } from "./button-switch-theme";
import HippotheContestIcon from "@/components/custom/hippo-thecontest";

export function Nav() {  
    let mobilemenu = useId();
    const { theme } = useTheme();
    const { position } = useScroll();
    const hasBackground = position > 80;

    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [MexicoVisible, setMexicoVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsSmallScreen(width < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setMexicoVisible(!isSmallScreen);
    }, [isSmallScreen]);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className={cn("fixed z-50 top-0 left-0 right-0 h-20 transition-colors duration-300", hasBackground && "bg-[rgba(248,248,248,.9)] dark:bg-[rgba(24,24,24,.9)]")}
            >
            <div className="flex px-4 lg:px-6 h-full items-center">
                <div className="flex-grow">
                    <Link href="/">
                        <div style={{ transform: 'scale(0.05)', width: '50px', height: '50px', marginTop: '-55px' }}>
                            {theme == "dark" ? <HippotheContestIcon HIPPOTextcolor="#FFFFFF" HippoHeadcolor="#231F20" HippoBckgdcolor="#FFFFFF" MexicoTextcolor="#86B5D7" MexicoVisible={MexicoVisible}/> :
                                <HippotheContestIcon HIPPOTextcolor="#003758" HippoHeadcolor="#ffffff" HippoBckgdcolor="#0084B4" MexicoTextcolor="#FBBA00" MexicoVisible={MexicoVisible}/>}
                        </div> 
                    </Link>
                </div>
                <div className="pl-8 lg:flex">
                    <ul className="invisible md:visible flex gap-5 md:gap-8 items-center">
                        <NavLink href="/about" target="_self">
                            About
                        </NavLink>
                        <NavLink href="/registration" target="_self">
                            Registration
                        </NavLink>
                        <NavLink href="/categories" target="_self">
                            Categories
                        </NavLink>
                        <NavLink href="/contacts" target="_self">
                            Contacts
                        </NavLink>
                        <li>
                            <ButtonSwitchTheme />
                        </li>
                    </ul>
                    <div className="absolute right-4 flex md:hidden" style={{ marginTop: '-40px' }}>
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" command="--toggle" commandfor={mobilemenu} className={cn("relative inline-flex items-center justify-center rounded-md p-2 text-[#000000] dark:text-[#ffffff] hover:bg-white/5 hover:text-[#fbba00] dark:hover:text-[#97bddd] focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500")}>
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger svg */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {/* x svg */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <ButtonSwitchTheme />
                    </div>
                </div>
            </div>
            <ElDisclosure id={mobilemenu} hidden className="block md:hidden">
                <div className={cn("z-10 space-y-1 align-text-right px-2 pt-2 pb-3 bg-[rgba(248,248,248,.9)] dark:bg-[#222222]", hasBackground && "bg-[rgba(248,248,248,.9)] dark:bg-[rgba(24,24,24,.9)]")}>
                    <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#231F20]/5 dark:hover:bg-[#FFFFFF]/10 hover:text-[#fbba00] dark:hover:text-[#97bddd]">
                        About
                    </a>
                    <a href="/registration" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#231F20]/5 dark:hover:bg-[#FFFFFF]/10 hover:text-[#fbba00] dark:hover:text-[#97bddd]">
                        Registration
                    </a>
                    <a href="/categories" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#231F20]/5 dark:hover:bg-[#FFFFFF]/10 hover:text-[#fbba00] dark:hover:text-[#97bddd]">
                        Categories
                    </a>
                    <a href="/contacts" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#231F20]/5 dark:hover:bg-[#FFFFFF]/10 hover:text-[#fbba00] dark:hover:text-[#97bddd]">
                        Contacts
                    </a>
                </div>
            </ElDisclosure>
        </motion.nav>
    );
}

function NavLink({ href, target, children }: {
    href: string,
    target: HTMLAttributeAnchorTarget;
    children: React.ReactNode;
}) {
    return (
        <li className="group">
            <Link target={target} href={href} className="block font-medium text-sm py-3 md:text-base">
                <span className="group-hover:border-b group-hover:border-foreground">
                    {children}
                </span>
            </Link>
        </li>
    );
}