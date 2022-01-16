import Link from "next/link";
import { MenuAlt1Icon, BeakerIcon } from "@heroicons/react/solid";

export default function BurgerMenu() {
  return (
    <div>
      <MenuAlt1Icon className=' md:hidden lg:hidden xl:hidden 2xl:hidden h-6 w-6 mx-2 text-accent2'></MenuAlt1Icon>
    </div>
  );
}
