// import Image from "next/image";
// import { socialLinks } from "./config";
import DynamicText from "./components/dynamic-text";

export default function Page() {
  return (
    <section>
      {/* <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="?"
          alt="Profile photo"
          className="rounded-md bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          height={200}
          width={228}
          priority
        />
      </a> */}

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        <DynamicText/>
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        {/* <p>
          ?
        </p> */}
      </div>
    </section>
  );
}
