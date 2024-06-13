import Image from "next/image";
import advertisement from "../../../public/assets/Frame.png";

const Advertisement = () => {
  return (
    <div
      className="h-[500px] rounded-lg my-20 px-16 py-[15%]"
      style={{
        backgroundImage: `url('${advertisement.src}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="capitalize text-5xl font-semibold text-white">
        ready to get started?
      </h2>
      <p className="text-white py-4">
        Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
      </p>
      <button className="bg-white p-4 rounded-lg">
        Download App
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="33"
          viewBox="0 0 26 33"
          fill="none"
          className="ml-2 inline"
        >
          <path
            d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default Advertisement;
