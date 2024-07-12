import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="bg-black border-b-[1px] border-[#500dba] border-opacity-50 ">
      <div className="px-10">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_24%,#FFD99B_48%,#C2F0B1_73%,#2FD8FE_100%)] blur-md navbarLogo"></div>
            <Link href={"/"} className="navbarLogo">
              <Image
                className="relative hover:scale-110 hover:rotate-90 transition-all cursor-pointer"
                src={logoImage}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="border hidden group border-white border-opacity-30 h-10 w-10 max-md:inline-flex items-center justify-center rounded-md hover:bg-white transition-all active:translate-y-1 ">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="w-6 h-6 text-white group-hover:text-black navLinks" />
              </SheetTrigger>
              <SheetContent className="bg-[#A46EDB]">
                <SheetHeader>
                  <SheetDescription>
                    <div className="flex flex-col gap-7 text-left text-white text-xl mt-10  font-bold tracking-tight ">
                      <Link
                        className="transition-all hover:translate-x-2  active:translate-y-2"
                        href="#"
                      >
                        About
                      </Link>
                      <Link
                        className=" transition-all hover:translate-x-2  active:translate-y-2"
                        href="#"
                      >
                        Features
                      </Link>
                      <Link
                        className="transition-all hover:translate-x-2 active:translate-y-2"
                        href="#"
                      >
                        Updates
                      </Link>
                      <Link
                        className="transition-all hover:translate-x-2 active:translate-y-2"
                        href="#"
                      >
                        Help
                      </Link>
                      <Link
                        className="transition-all hover:translate-x-2 active:translate-y-2"
                        href="#"
                      >
                        Customers
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex text-white  flex-row justify-center items-center navLinks">
            <div className="gap-7 flex text-gray-300 navLinks">
              <Link
                className="hover:text-white transition-all hover:translate-x-2  active:translate-y-2"
                href="#"
              >
                About
              </Link>
              <Link
                className=" hover:text-white transition-all hover:translate-x-2  active:translate-y-2"
                href="#"
              >
                Features
              </Link>
              <Link
                className=" hover:text-white transition-all hover:translate-x-2 active:translate-y-2"
                href="#"
              >
                Updates
              </Link>
              <Link
                className=" hover:text-white transition-all hover:translate-x-2 active:translate-y-2"
                href="#"
              >
                Help
              </Link>
              <Link
                className=" hover:text-white transition-all hover:translate-x-2 active:translate-y-2"
                href="#"
              >
                Customers
              </Link>
            </div>
            <button className="font-semibold tracking-tighter ml-7 bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_24%,#FFD99B_48%,#C2F0B1_73%,#2FD8FE_100%)] text-[#012e33] rounded-lg px-7 py-2 transition-all hover:rounded-3xl active:translate-y-1 ">
              Get For Free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
