import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, raiting, feedback }) => {
  return (
    <li className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="avatar"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2">
        <img
          src={star}
          alt="raiting"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{raiting}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </li>
  );
};

export default ReviewCard;
