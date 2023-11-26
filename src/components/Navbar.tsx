import Image from "next/image";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  //   Temporary User
  const user = false;
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* Left links */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right links */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="right-2 top-3 flex min-w-[120px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-md bg-orange-300 px-1 md:absolute lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
