import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl capitalize leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign up from <span className="text-coral-red">updates</span> &
          newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign up" fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
