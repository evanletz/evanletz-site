import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 max-w-screen-md lg:max-w-screen-xl mx-auto">
      <div className="border flex flex-col">
        <Image
          src="/images/profile-photo.png"
          alt="Profile Photo"
          height={300}
          width={300}
          className="rounded-full"
        />
        <h1>Evan Letz</h1>
        <h2>An ideas guy that loves to build stuff.</h2>
        <div id="links" className="flex gap-8">
          <Link id="email" href={"mailto:evanletzter@gmail.com"}>
            <img
              src="/images/email.svg"
              alt="Email Link"
              width={25}
              height={25}
            />
          </Link>
          <Link id="linkedin" href={"https://www.linkedin.com/in/evan-letz/"}>
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn Link"
              width={25}
              height={25}
            />
          </Link>
          <Link id="github" href={"https://github.com/evanletz/evanletz-site"}>
            <img
              src="/images/github.svg"
              alt="Github Link"
              width={25}
              height={25}
            />
          </Link>
          <Link id="x" href={"https://x.com/evanletz"}>
            <img src="/images/x.svg" alt="X Link" width={25} height={25} />
          </Link>
          <Link id="resume" href={"#"}>
            <img
              src="/images/resume.svg"
              alt="Resume Link"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className="border flex">Skills, timeline go here</div>
    </div>
  );
}
