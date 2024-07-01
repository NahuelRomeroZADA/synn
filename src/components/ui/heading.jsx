import HeadingSVG from "./HeadingSVG";

export default function heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex  items-center justify-center space-x-[3%]">
          <HeadingSVG />
          <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">
            {title}
          </h2>
          <HeadingSVG />
        </div>
      </div>
    </>
  );
}
