
"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from "next/navigation"

  
const MobileNav = () => {
    const pathname=usePathname()

  return (
    <section className='w-full max-w-[264px]'><Sheet>
    <SheetTrigger asChild>
    <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            height={36}
            width={36}
className="cursor-pointer"
            />
    </SheetTrigger>
    <SheetContent side="left" className="border-none bg-dark-1">
    <Link  href={'/'}
           className="flex items-center gap-1" 
            >
                 <Image
            src="/icons/logo.svg"
            alt="Yoom logo"
            height={32}
            width={32}
className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white ">Yoom</p>
            </Link>
            <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                <SheetClose asChild>
<section className="flex  h-full flex-col gap-6 pt-16 text-white">

{
    sidebarLinks.map(link=>{
        const isActive=pathname === link.route || pathname.startsWith(`${link.route}/`);

        return (
            <SheetClose asChild key={link.label} >

            <Link key={link.label} href={link.route} className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60p',{
                "bg-blue-1":isActive 
            })}>
           
            <Image
            src={link.imgURL}
            alt={link.label}
            height={20}
            width={20}
            
            />
            <p className="font-semibold"> {link.label}</p>
            </Link>
            </SheetClose>
        )
    })
}
</section>
                    </SheetClose>

            </div>
    </SheetContent>
  </Sheet>
  </section>
  )
}

export default MobileNav