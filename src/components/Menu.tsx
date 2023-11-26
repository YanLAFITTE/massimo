"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   Temporary User
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          width={20}
          height={20}
          alt=""
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/close.png"
          width={20}
          height={20}
          alt=""
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}
      {open && (
        <div className="absolute left-0 top-24 z-10 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-red-500 text-3xl text-white">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
