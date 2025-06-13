"use client";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <>
      <footer className="w-full py-20 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)] px-6 lg:px-0">
        <div className="flex flex-col pb-5 max-w-xs mx-auto lg:mx-0">
          <Image
            src={"/logo.png"}
            alt={"logo.png"}
            width={276}
            height={98.25}
            className="mx-auto lg:mx-0"
          />
          <p className="text-sm text-[#0E0458] mt-6 text-center lg:text-left">
            <b>{t("footer.infos.phone")}</b>
            <br />
            <br />
            {t("footer.infos.address1")}
            <br />
            {t("footer.infos.address2")}
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://www.facebook.com/deccserigrafia"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/deccserigrafia/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/deccoreserigrafia/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.youtube.com/@deccoreserigrafia6780"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=+5511999400004"
              target="_blank"
              rel="noreferrer"
            >
            </a>
          </div>
        </div>

        <div className="flex flex-col max-w-xs mx-auto lg:mx-0">
          <ul className="space-y-4 text-[#0E0458] text-sm">
            <Link href={"/reforma"}>
              <li className="cursor-pointer">{t("footer.links.remodeling")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/ferramentas"}>
              <li className="cursor-pointer">{t("footer.links.tooling")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/linha-eletrica"}>
              <li className="cursor-pointer">{t("footer.links.electric")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/linha-mecanica"}>
              <li className="cursor-pointer">{t("footer.links.mechanical")}</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col max-w-xs mx-auto lg:mx-0">
          <ul className="space-y-4 text-[#0E0458] text-sm">
            <Link href={"/flamador-manual"}>
              <li className="cursor-pointer">{t("footer.links.flamer")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/serigrafia-universal"}>
              <li className="cursor-pointer">{t("footer.links.universal")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/estufa-secagem"}>
              <li className="cursor-pointer">{t("footer.links.uv-drying")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/serigrafia-galoes"}>
              <li className="cursor-pointer">{t("footer.links.gallons")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/cilindrica-uv"}>
              <li className="cursor-pointer">{t("footer.links.cylindrical")}</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/uv"}>
              <li className="cursor-pointer">{t("footer.links.uv")}</li>
            </Link>
          </ul>
        </div>
      </footer>
      <div className="bg-[#0E0458] py-3 text-center">
        <p className="text-white text-sm">
          {t("footer.infos.rights")}
        </p>
      </div>
    </>
  );
}
