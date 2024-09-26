"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cart from "./Cart";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex item-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={23}
        height={23}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/mt-2 cursor-pointer">Profile</Link>
          <div className="">LogOut</div>
        </div>
      )}

      <Image
        src="/notification.png"
        alt=""
        width={23}
        height={23}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt=""
          width={23}
          height={23}
          className="cursor-pointer"
        />
        <div className="absolute -top-3 -right-3 w-5 h-5 text-white bg-misha rounded-full flex items-center justify-center text-sm">
          3
        </div>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};
export default NavIcons;
