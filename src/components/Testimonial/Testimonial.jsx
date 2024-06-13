import Image from "next/image";
import people1 from "../../../public/assets/people1.jpg";
import people2 from "../../../public/assets/people2.jpg";
import people3 from "../../../public/assets/people3.jpg";
import people4 from "../../../public/assets/people4.jpg";
import people5 from "../../../public/assets/people5.jpg";

const Testimonial = () => {
  return (
    <div className="text-center">
      <h3 className="uppercase font-medium text-lg">Testimonial</h3>
      <p className="font-bold text-5xl mb-8 max-w-md mx-auto">
        what our users say about us?
      </p>
      <div className="flex mt-28">
        <div className="w-1/2 relative">
          <div className="relative">
            <Image
              src={people1}
              alt="people"
              width={200}
              height={200}
              className="rounded-full w-[200px] h-[200px] object-cover border-2 border-black absolute top-28 left-[30%]"
            />
            {/* Quote */}
            <div className="p-4 bg-[#F55] rounded-full absolute top-[180px] left-[55%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
              >
                <path
                  d="M12.7424 0.878174L14.628 4.35142C13.5694 5.84969 12.577 7.51821 11.6507 9.35699C10.7906 11.1958 10.2944 13.1026 10.162 15.0776L15.6205 16.0992V27.8469H0.436127V19.4703C0.436127 14.635 1.52781 10.7531 3.71118 7.82467C5.96071 4.82814 8.97111 2.51264 12.7424 0.878174ZM32.3927 0.878174L34.2783 4.35142C33.2197 5.84969 32.2273 7.51821 31.301 9.35699C30.4409 11.1958 29.9447 13.1026 29.8124 15.0776L35.2708 16.0992V27.8469H20.0864V19.4703C20.0864 14.635 21.1781 10.7531 23.3615 7.82467C25.611 4.82814 28.6214 2.51264 32.3927 0.878174Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <Image
            src={people2}
            alt="people"
            width={200}
            height={200}
            className="rounded-full w-[120px] h-[120px] object-cover border-2 border-black absolute top-0 right-20"
          />
          <Image
            src={people3}
            alt="people"
            width={200}
            height={200}
            className="rounded-full w-[120px] h-[120px] object-cover border-2 border-black absolute top-0 left-10"
          />
          <Image
            src={people4}
            alt="people"
            width={200}
            height={200}
            className="rounded-full w-[120px] h-[120px] object-cover border-2 border-black absolute bottom-0 left-10"
          />
          <Image
            src={people5}
            alt="people"
            width={200}
            height={200}
            className="rounded-full w-[120px] h-[120px] object-cover border-2 border-black absolute bottom-0 right-20"
          />
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute -top-10 left-[160px] -z-10"></div>
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-0 left-[120px] -z-10"></div>
          <div className="h-[450px] w-[300px] rounded-full border border-black -rotate-45 absolute top-10 left-[100px] -z-10"></div>
          {/* Star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            className="absolute top-0 left-0"
          >
            <path
              d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-1/2 text-left max-w-md">
          {/* description-01 */}
          <p className="text-[28px] capitalize font-semibold">
            the best financial accounting app ever!
          </p>
          <p className="font-medium opacity-50 text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>

          <div className="flex items-center gap-5 my-5">
            <Image
              src={people1}
              alt="people"
              width={200}
              height={200}
              className="rounded-full w-10 h-10 object-cover"
            />
            <Image
              src={people2}
              alt="people"
              width={200}
              height={200}
              className="rounded-full w-7 h-7 object-cover opacity-50"
            />
            <Image
              src={people3}
              alt="people"
              width={200}
              height={200}
              className="rounded-full w-7 h-7 object-cover opacity-50"
            />
            <Image
              src={people4}
              alt="people"
              width={200}
              height={200}
              className="rounded-full w-7 h-7 object-cover opacity-50"
            />
            <Image
              src={people5}
              alt="people"
              width={200}
              height={200}
              className="rounded-full w-7 h-7 object-cover opacity-50"
            />
          </div>

          <p className="text-lg capitalize font-semibold">nick jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
