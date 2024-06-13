import Image from "next/image";
import bannerImage from "../../../public/assets/BannerImage.png";
import iphone1 from "../../../public/assets/iPhone-13-Pro-Front.png";
import iphone2 from "../../../public/assets/iPhone-13-Pro-Front (1).png";

const Banner = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="capitalize text-6xl font-semibold mt-20">
            make the best financial decisions
          </h1>
          <p className="my-5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          {/* buttons */}
          <div className="flex items-center gap-5">
            <button className="bg-black text-white px-8 py-3 rounded-sm">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="8"
                viewBox="0 0 25 8"
                fill="none"
                className="inline"
              >
                <path
                  d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                className="inline mr-2"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                <path
                  d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                  fill="black"
                  stroke="black"
                />
              </svg>{" "}
              Watch Video
            </button>
          </div>

          {/* reel */}
          <div className="mt-10 relative">
            <Image
              src={bannerImage}
              alt="bannerImage"
              width={500}
              height={500}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              className="absolute top-10 left-[20%]"
            >
              <path
                d="M40.9117 4.97056L25.8375 21.6408L45.3253 32.8369L24.8128 23.6519L20.1867 45.6456L22.5835 23.2988L0.236642 25.6956L22.2304 21.0695L13.0454 0.556969L24.2415 20.0448L40.9117 4.97056Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="w-1/2 relative -mt-10">
          <div>
            <Image src={iphone1} alt="alt" width={500} height={500} />
            <Image
              src={iphone2}
              alt="alt"
              width={500}
              height={500}
              className="absolute top-20 left-24 -z-10"
            />
            <Image
              src={iphone1}
              alt="alt"
              width={500}
              height={500}
              className="absolute top-40 left-48 -z-20"
            />

            <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-16 left-[140px] -z-30"></div>
            <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-12 left-[170px] -z-30"></div>
            <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-8 left-[200px] -z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
