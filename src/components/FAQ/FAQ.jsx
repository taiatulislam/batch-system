const FAQ = () => {
  return (
    <div>
      <div className="flex items-end gap-5 mb-10">
        <div className="w-1/2">
          <h3 className="uppercase text-[#FF5555] font-medium text-lg">faq</h3>
          <p className="font-bold text-5xl mb-8 max-w-md">
            Frequently asked questions
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          className="ml-12"
        >
          <path
            d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          {/* description-01 */}
          <div className="p-8 bg-[#F55] text-white rounded-lg">
            <h3 className="font-semibold text-[28px] capitalize">
              the best financial accounting app ever!
            </h3>
            <p className="font-medium text-justify text-lg">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-8 rounded-lg">
            <h3 className="font-semibold text-[28px] capitalize">
              the best financial accounting app ever!
            </h3>
            <p className="font-medium text-justify text-lg">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-8 bg-[#F55] text-white rounded-lg">
            <h3 className="font-semibold text-[28px] capitalize">
              the best financial accounting app ever!
            </h3>
            <p className="font-medium text-justify text-lg">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
        <div>
          {/* description-01 */}
          <div className="p-8 rounded-lg">
            <h3 className="font-semibold text-[28px] capitalize">
              the best financial accounting app ever!
            </h3>
            <p className="font-medium text-justify text-lg">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-8 bg-[#F55] text-white rounded-lg">
            <h3 className="font-semibold text-[28px] capitalize">
              the best financial accounting app ever!
            </h3>
            <p className="font-medium text-justify text-lg">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-8 rounded-lg">
            <h3 className="font-semibold text-[28px] capitalize">
              the best financial accounting app ever!
            </h3>
            <p className="font-medium text-justify text-lg">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
