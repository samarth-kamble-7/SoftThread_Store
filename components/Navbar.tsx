"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import useCart from "@/lib/hooks/useCart";

const NavTest = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <header className="bg-white fixed w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="#">
              <Image src={"/logo.png"} height={150} width={150} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/collections"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/products"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
            <input
              className="outline-none max-sm:max-w-[120px]"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}
            >
              <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
            </button>
          </div>

          <div className="relative flex gap-3 items-center">
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>

            <Menu
              className="cursor-pointer lg:hidden"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            />
            {dropdownMenu && (
              <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
                <Link href="/" className="hover:text-red-1">
                  Home
                </Link>
                <Link
                  href={user ? "/wishlist" : "/sign-in"}
                  className="hover:text-red-1"
                >
                  Wishlist
                </Link>
                <Link
                  href={user ? "/orders" : "/sign-in"}
                  className="hover:text-red-1"
                >
                  Orders
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
                >
                  <ShoppingCart />
                  <p className="text-base-bold">
                    Cart ({cart.cartItems.length})
                  </p>
                </Link>
              </div>
            )}
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/sign-in"
                  >
                    Login
                  </Link>
                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="/sign-up"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavTest;
