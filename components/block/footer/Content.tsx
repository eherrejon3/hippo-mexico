"use client";

import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Content() {
  return (
    <div className='bg-[#FBBA00] dark:bg-[#86B5D7] py-8 px-12 h-full w-full flex flex-col justify-between'> 
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[8vw] md:text-[10vw] lg:text-[11vw] xl:text-[13vw] leading-[0.8] mt-10'>HIPPO Mexico</h1>
            <p>© {currentYear}</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Our Pages</h3>
                <ul>
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
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Socials</h3>
                <ul>
                <NavLink href="https://www.facebook.com/HippoMexico" target="_blank">
                    <Facebook className="text-shade-two w-6 h-6"></Facebook>
                </NavLink>
                <NavLink href="https://www.instagram.com/hippo_mexico2026/" target="_blank">
                    <Instagram className="text-shade-two w-6 h-6"></Instagram>
                </NavLink>
                <NavLink href="https://www.linkedin.com/company/hippo-olympiad-english-without-borders/" target="_blank">
                    <Linkedin className="text-shade-two w-6 h-6"></Linkedin>
                </NavLink>
                </ul>
            </div>
        </div>
    )
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