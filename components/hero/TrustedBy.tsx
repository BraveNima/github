import Image from "next/image";
import { trustedImg } from "@/constants";

const TrustedBy = () => {
  return (
    <div className="md:my-32 my-24">
      <p className="text-[16px] leading-[24px] text-[#7d8590]">
        Trusted by the world's leading organizations↘︎
      </p>
      <div className="flex flex-wrap justify-between items-center">
        {/* image are comming from the constants */}
        {trustedImg.map((img) => (
          <Image
            src={img.src}
            alt={img.alt}
            height={img.height}
            width={img.width}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
