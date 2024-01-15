import { useRef, useState } from "react";
import defaultImg from "../assets/default_image.svg";

type Props = {};

const Home = (props: Props) => {
  const [imageUrl, setImgUrl] = useState<boolean>("/");
  let inputRef = useRef(null);

  return (
    <header className="mx-auto flex h-screen w-full max-w-[768px] flex-col items-center justify-center">
      <h1 className="py-8 text-4xl font-bold">
        Ai Image <span className="text-[#DE1B89]">Generator</span>
      </h1>
      <div>
        <img src={defaultImg} alt="Default image" />
      </div>

      <div className="my-6 flex h-[60px] w-1/2 items-center justify-between rounded-full bg-[#1F3540] pl-6 pr-2">
        <input
          type="text"
          placeholder="Describe what you want to see"
          className="h-1/2 w-2/3 bg-[#1F3540] text-white outline-none"
        />
        <button className="h-[45px] rounded-full bg-[#DE1B89] px-4 py-2 text-sm text-white hover:opacity-80">
          Generate
        </button>
      </div>
    </header>
  );
};

export default Home;
