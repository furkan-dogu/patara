"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Icon } from "@/helpers/Icons";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import design from "@/assets/images/design.png";

interface NavbarProps {
  isConnected: boolean;
  setIsConnected: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isConnected, setIsConnected }: NavbarProps) {
  const router = useRouter();

  const handleCorrectClick = () => {
    router.push("/connect");
    setIsConnected(true);
  };

  interface MenuLink {
    id: number;
    slug: string;
    label: string;
  }

  const menuLinks: MenuLink[] = [
    { id: 1, slug: "/dashboard", label: "Dashboard" },
    { id: 2, slug: "/explore", label: "Explore" },
    { id: 3, slug: "/profile", label: "Profile" },
  ];

  const handleLogout = () => {
    setIsConnected(false);
    router.push("/");
  };

  return (
    <header className="w-full bg-[#0C0C0C] text-white flex flex-col gap-5 py-5">
      <div className="flex sm:flex-row flex-col sm:items-center justify-between max-w-[1440px] w-11/12 mx-auto gap-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Icon name="menu" className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4 space-y-4">
                <p className="font-semibold">Menü</p>
                {menuLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.slug}
                    className="block hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-lg font-semibold">
            <Icon name="logo" className="sm:w-full w-24" />
          </Link>
        </div>

        <div className="flex-1 max-w-[464px] hidden lg:flex xl:ml-[5%] ml-[6.5%]">
          <div className="relative w-full">
            <Input
              placeholder="Enter Accounts, Platforms, NFTs, Token"
              className="bg-[#282828] border border-[#383838] text-white font-medium text-sm leading-[18px] placeholder:text-[#808080] py-2.5 px-10"
            />

            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <Icon name="search" className="size-6" />
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 p-1 bg-[#181818] rounded-md">
              <Icon name="command" />
              <span className="text-xs text-[#808080] font-medium leading-4">
                K
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Icon name="bell" className="size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New follower: @ali</DropdownMenuItem>
              <DropdownMenuItem>3 new messages</DropdownMenuItem>
              <DropdownMenuItem>Task completed!</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Icon name="settings" className="size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <Icon name="user" className="size-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="help" className="size-4 mr-2" />
                Help
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <Icon name="logout" className="size-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center bg-[#181818] rounded-full px-2 py-1 gap-3.5 cursor-pointer">
                  <div className="flex items-center gap-1">
                    <div className="size-8 rounded-md flex items-center justify-center overflow-hidden">
                      <Image
                        src={design}
                        alt="design"
                        className="size-10 object-cover"
                      />
                    </div>
                    <span className="text-sm font-semibold">@patara.sui</span>
                  </div>
                  <Icon name="chevronDown" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel>Connected Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Disconnect</DropdownMenuItem>
                <DropdownMenuItem>Switch Account</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={handleCorrectClick}
              className="bg-[#006EFF] hover:bg-blue-700 text-white h-10 px-9 rounded-xl font-inter cursor-pointer"
            >
              Connect/Sign in
            </Button>
          )}
        </div>
      </div>
      <div className="w-11/12 mx-auto flex lg:hidden">
        <div className="relative w-full">
          <Input
            placeholder="Enter Accounts, Platforms, NFTs, Token"
            className="bg-[#282828] border border-[#383838] text-white font-medium text-sm leading-[18px] placeholder:text-[#808080] py-2.5 px-10"
          />

          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <Icon name="search" className="size-6" />
          </div>

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 p-1 bg-[#181818] rounded-md">
            <Icon name="command" />
            <span className="text-xs text-[#808080] font-medium leading-4">
              K
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
