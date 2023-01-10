import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import {background} from "../public/background.png";

export default function Home() {
  const [storyPrompt, setStoryPrompt] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

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

  return (
    <div className={styles.app} style={{ backgroundImage: `url(/background.png)` }}>
      <Head>
        <title>Bedtime Story</title>
        <link rel="icon" href="/book.ico" />
      </Head>

      <main className={styles.main}>
        {/* <img src="/book.png" className={styles.icon} /> */}
        <h3>Bedtime Story</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter a story topic"
            value={storyPrompt}
            onChange={(e) => setStoryPrompt(e.target.value)}
          />
          <input type="submit" value="Generate story" />
        </form>
        {loading ? <div className={styles.result}>Generating story...</div> : <div className={styles.result}>{result}</div>}
      </main>
    </div>
  );
}
