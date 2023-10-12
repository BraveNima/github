import Link from "next/link";
import { footersData } from "@/constants";
import { FooterBottom, Subscribe } from ".";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer relative pt-14 break-words ">
      <div className="max-w-[1280px] mx-auto relative z-[2] overflow-hidden">
        <div className="flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4">
          <Subscribe />
          <div className="lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6">
            {footersData.map((row) => (
              <div key={row.id} className="text-[#7d8590]">
                <h2 className="font-medium mb-4 font-mono">{row.title}</h2>
                <ul className="text-[14px]">
                  {row.links.map((rowLinks) => (
                    <li key={rowLinks.id} className="mb-4">
                      <Link href="#">{rowLinks.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
