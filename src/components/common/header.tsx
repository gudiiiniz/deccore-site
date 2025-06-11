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
      <div className="min-w-screen">
        <div className="w-8/12 h-[150px] mx-auto flex flex-row justify-between items-center">
          <LgCombobox />
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt={"logo.png"}
              width={276}
              height={98.25}
              className="cursor-pointer"
            />
          </Link>

          <div className="w-[200px] h-[100px] flex flex-col justify-center gap-4">
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
            <div className="flex flex-row justify-center gap-4">
              <a href="https://www.facebook.com/deccserigrafia" target="_blank">
                <Facebook
                  size={30}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>

              <a
                href="https://www.instagram.com/deccserigrafia/"
                target="_blank"
              >
                <Instagram
                  size={30}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/deccoreserigrafia/"
                target="_blank"
              >
                <Linkedin
                  size={30}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>

              <a
                href="https://www.youtube.com/@deccoreserigrafia6780"
                target="_blank"
              >
                <Youtube
                  size={30}
                  className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </a>

              <a
                href="https://web.whatsapp.com/send?phone=+5511999400004"
                target="_blank"
              >
                <MessageCircle
                  size={30}
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
