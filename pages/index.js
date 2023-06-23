import Head from "next/head";
import { useState, useEffect } from "react";
import Mobile from "../components/Mobile";
import Desktop from "../components/Desktop";
import { useWindowSize } from "react-use";
import IndexStyled from "../components/IndexStyled";
import Image from "next/image";
import moonIcon from "../public/assets/icons/moon-icon.png"

export default function Home() {
  const [storyPrompt, setStoryPrompt] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState("");
  const windowSize = useWindowSize();

  async function onSubmit(event) {
    setLoading(true)
    event.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: storyPrompt }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setLoading(false)
      setStoryPrompt("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  useEffect(() => {
    setBackground(windowSize?.width <= 600 ? `/assets/images/moon.png` : `/assets/images/book.png`)
  }, [windowSize])

  const StoryGenerator = windowSize?.width <= 600 ? Mobile : Desktop;

  return (
    <IndexStyled>
      <Head>
        <title>Bedtime Story</title>
        <link rel="icon" href="/book.ico" />
      </Head>
      <div className="App">
        <Image
          className="moon-icon"
          src={moonIcon}
          alt="moon-icon"
        />
        <StoryGenerator
          storyPrompt={storyPrompt}
          setStoryPrompt={setStoryPrompt}
          result={result}
          loading={loading}
          onSubmit={onSubmit}
        />
      </div>
    </IndexStyled>
  );
}
