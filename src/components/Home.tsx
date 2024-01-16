import { useRef, useState } from "react";
import defaultImg from "../assets/default_image.svg";

type Props = {};

const Home = (props: Props) => {
  const [imgUrl, setImgUrl] = useState<string>("/");
  let inputRef = useRef(null);

  const generateImg = async () => {
    // if (inputRef.current.value === "") {
    //   return 0;
    // }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      },
    );

    const data = await response.json();
    console.log(data);
    setImgUrl(data.data[0].url);
  };

  return (
    <header className="flex h-screen w-full bg-[#0f1b21]">
      <div className="mx-auto flex max-w-[768px] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Ai Image <span className="text-[#DE1B89]">Generator</span>
        </h1>
        <div className="py-8">
          <img src={imgUrl === "/" ? defaultImg : imgUrl} alt="/" />
        </div>

        <div className="mx-auto flex h-[65px] w-3/4 items-center justify-between rounded-full bg-[#1F3540] p-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Describe what you want to see"
            className="mx-4 h-1/2 w-full bg-[#1F3540] text-white outline-none"
          />
          <button
            onClick={generateImg}
            className="h-full rounded-full bg-[#DE1B89] px-4 py-2 text-sm text-white hover:opacity-80"
          >
            Generate
          </button>
        </div>
      </div>
    </header>
  );
};

export default Home;
