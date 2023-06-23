import DesktopStyled from "./DesktopStyled";
import Loader from "./Loader";

export default function Desktop({ storyPrompt, setStoryPrompt, result, loading, onSubmit }) {
  const buttonText = loading ? "Generating..." : "Generate story"
  return (
    <DesktopStyled>
      <main className="main">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter a story topic"
            value={storyPrompt}
            onChange={(e) => setStoryPrompt(e.target.value)}
          />
          <input type="submit" value={buttonText} className="generate-button" />
        </form>
        {loading ? <div className="result"><Loader /></div> : <div className="result">{result}</div>}
      </main>
    </DesktopStyled>
  );
}
