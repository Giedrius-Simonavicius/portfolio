import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <div className="text-center flex items-center justify-center h-screen">
        <div className="w-1/2">
          <p className="text-l">Hello, my name is</p>
          <h1 className="text-5xl my-4 font-bold tracking-wide">Giedrius Simonavičius</h1>
          <h2 className="text-2xl mb-3 font-semibold">Junior Front-End Web developer</h2>
          <p className="text-align mx-auto ">
            I love diving into the world of front-end development, creating responsive, user-friendly web applications.
            While my focus is on the front-end, I'm also actively learning and exploring back-end technologies. Always
            keen to learn and stay up-to-date with the latest tech trends
          </p>
        </div>
        <Image className="rounded-full" src="/assets/profile1test.png" alt="profile photo" width={500} height={500} />
      </div>
    </div>
  );
}
