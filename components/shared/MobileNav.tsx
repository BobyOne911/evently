import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";


function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
            <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={24} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 md:hidden bg-white">
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
          <Separator /> 
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
