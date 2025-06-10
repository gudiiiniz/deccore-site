import Image from "next/image";
import LgCombobox from "./lg-combobox"

export default function Header() {
  return (
    <>
      <div className="min-w-screen">
        <div className="w-8/12 h-[150px] mx-auto flex flex-row justify-between items-center">
          <LgCombobox />
          <div className="w-[276px] h-[98.25px]">
            <Image src={"/logo.png"} alt={"logo.png"} width={276} height={98.25} />
          </div>
          <div className="w-[91.99px] h-[19.23]">
            <Image src={"/bndes-logo.png"} alt={"bnds-logo"} width={91.99} height={19.23} />
          </div>
        </div>
      </div>
    </>
  );
}