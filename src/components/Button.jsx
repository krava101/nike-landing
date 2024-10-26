const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <img src={iconUrl} alt="icon" className="ml-2 w-5 h-5 rounded-full" />
    </button>
  );
};

export default Button;
