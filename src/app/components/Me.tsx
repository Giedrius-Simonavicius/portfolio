import Contacts from "./Contacts";

export default function Me() {
  return (
    <section className="flex costBg container max-md:pr-6">
      <div className="h-screen flex flex-col justify-center  ">
        <h1 className="text-[63px] max-sm:text-5xl -mt-10 mb-4 font-bold tracking-wide">Giedrius Simonavičius</h1>
        <h2 className="text-3xl italic mb-3 font-semibold">Junior Front-End Web developer</h2>
      </div>
      <Contacts sm />
    </section>
  );
}
