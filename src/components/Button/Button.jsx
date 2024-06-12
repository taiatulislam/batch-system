const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-black text-white px-8 py-3 rounded-sm">
        {title}
      </button>
    </div>
  );
};

export default Button;
