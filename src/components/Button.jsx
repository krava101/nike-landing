const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  const bgColor = backgroundColor || "bg-coral-red";
  const bdColor = borderColor || "";
  const txtColor = textColor || "text-white";

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border ${bdColor} font-montserrat text-lg leading-none ${bgColor} rounded-full ${txtColor}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 w-5 h-5 rounded-full" />
      )}
    </button>
  );
};

export default Button;
