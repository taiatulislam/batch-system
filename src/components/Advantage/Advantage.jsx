import Image from "next/image";
import iphone1 from "../../../public/assets/iPhone-13-Pro-Front.png";

const Advantage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <h3 className="uppercase text-[#FF5555] font-medium text-lg">
            advatnages
          </h3>
          <p className="font-bold text-5xl mb-8">why choose Uifry?</p>

          {/* description-01 */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#FF5555] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14 21.488H10M18 8.48804C18 6.89674 17.3679 5.37061 16.2427 4.2454C15.1174 3.12018 13.5913 2.48804 12 2.48804C10.4087 2.48804 8.8826 3.12018 7.75738 4.2454C6.63216 5.37061 6.00002 6.89674 6.00002 8.48804C6.00002 11.5782 5.22049 13.694 4.34968 15.0934C3.61515 16.2739 3.24788 16.8641 3.26134 17.0288C3.27626 17.2111 3.31488 17.2806 3.46179 17.3896C3.59448 17.488 4.19261 17.488 5.38887 17.488H18.6112C19.8074 17.488 20.4056 17.488 20.5382 17.3896C20.6852 17.2806 20.7238 17.2111 20.7387 17.0288C20.7522 16.8641 20.3849 16.2739 19.6504 15.0935C18.7795 13.694 18 11.5782 18 8.48804Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="text-[28px] font-semibold">clever notifications</p>
          </div>
          <p className="font-medium opacity-50 text-lg max-w-lg mt-5">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>

        <div className="w-1/2 relative">
          <Image
            src={iphone1}
            alt="phone"
            width={500}
            height={500}
            className=" rotate-[14deg]"
          />
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-16 left-[40px] -z-10"></div>
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-9 left-[70px] -z-10"></div>
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-2 left-[100px] -z-10"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            className="absolute top-0 right-0"
          >
            <path
              d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* Second */}
      <div className="flex items-center">
        <div className="w-1/2 relative">
          <Image
            src={iphone1}
            alt="phone"
            width={500}
            height={500}
            className=" rotate-[14deg]"
          />
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-16 left-[40px] -z-10"></div>
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-9 left-[70px] -z-10"></div>
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-2 left-[100px] -z-10"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            className="absolute top-0 right-10"
          >
            <path
              d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="w-1/2">
          {/* description-01 */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#FF5555] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 2.97607L10.6985 8.18206C10.4445 9.19792 10.3176 9.70585 10.0531 10.1192C9.81915 10.4848 9.50868 10.7952 9.14309 11.0292C8.72978 11.2936 8.22185 11.4206 7.20599 11.6746L2 12.9761L7.20599 14.2776C8.22185 14.5315 8.72978 14.6585 9.14309 14.923C9.50868 15.1569 9.81915 15.4674 10.0531 15.833C10.3176 16.2463 10.4445 16.7542 10.6985 17.7701L12 22.9761L13.3015 17.7701C13.5555 16.7542 13.6824 16.2463 13.9469 15.833C14.1808 15.4674 14.4913 15.1569 14.8569 14.923C15.2702 14.6585 15.7782 14.5315 16.794 14.2776L22 12.9761L16.794 11.6746C15.7782 11.4206 15.2702 11.2936 14.8569 11.0292C14.4913 10.7952 14.1808 10.4848 13.9469 10.1192C13.6824 9.70585 13.5555 9.19792 13.3015 8.18207L12 2.97607Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="text-[28px] font-semibold">fully customizable</p>
          </div>
          <p className="font-medium opacity-50 text-lg max-w-lg mt-5">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
