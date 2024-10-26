import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="xl:padding-1 wide:padding-r padding-b hero-section w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col items-start w-full max-xl:padding-x pt-28 justify-center">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <ul className="flex justify-start items-start flex-wrap w-full mt-20  gap-16">
          {statistics.map(({ value, label }) => (
            <li key={label}>
              <p className="text-4xl font-palanquin font-bold">{value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
