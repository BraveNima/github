import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="bg-[#161b22]">
      <div className="max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4">
        <ul className="flex items-center max-md:mb-4  ">
          <li className="mr-4">
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/twitch.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/tiktok.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                height="18"
                width="22"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitter icon"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap">
          <li className="mr-3 ">© 2023 GitHub, Inc.</li>
          <li className="mr-3 ">
            <Link href="#">Terms</Link>
          </li>
          <li className="mr-3 ">
            <Link href="#">Privacy (Updated 08/2022)</Link>
          </li>
          <li className="mr-3 ">
            <Link href="#">Sitemap</Link>
          </li>
          <li className="mr-3 ">
            <Link href="#">What is Git?</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
