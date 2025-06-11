import Image from "next/image";
import LgCombobox from "./lg-combobox";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-full px-4 py-4">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:h-[150px]">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <LgCombobox />
          </div>

          <div className="w-full lg:w-auto flex justify-center">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt={"logo.png"}
                width={276}
                height={98.25}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="w-full lg:w-[200px] flex flex-col justify-center items-center gap-2">
            <a
              href="https://www.bndes.gov.br/wps/portal/site/home"
              target="_blank"
            >
              <Image
                src={"/bndes-logo.png"}
                alt={"bnds-logo"}
                width={91.99}
                height={19.23}
                className="mx-auto cursor-pointer"
              />
            </a>
            <div className="invisible sm:visible flex flex-wrap justify-center gap-2">
              <a href="https://www.facebook.com/deccserigrafia" target="_blank">
                <Facebook
                  size={24}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a
                href="https://www.instagram.com/deccserigrafia/"
                target="_blank"
              >
                <Instagram
                  size={24}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/deccoreserigrafia/"
                target="_blank"
              >
                <Linkedin
                  size={24}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a
                href="https://www.youtube.com/@deccoreserigrafia6780"
                target="_blank"
              >
                <Youtube
                  size={24}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a href="https://wa.me/+5511999400004" target="_blank">
                <MessageCircle
                  size={24}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
