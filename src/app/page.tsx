import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 max-w-screen-md lg:max-w-screen-xl mx-auto">
      <div className="border flex">
        <Image
          src="/images/profile-photo.png"
          alt=""
          height={300}
          width={300}
          className="rounded-full"
        />
        <p>Photo, name, tagline, links go here</p>
      </div>
      <div className="border flex">Skills, timeline go here</div>
    </div>
  );
}
