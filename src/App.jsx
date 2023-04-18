import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactPlayer from "react-player";

export const PlayIcon = () => {
  return <div>play</div>;
};

function App() {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    console.log(videoRef.current);
    setPlaying(!playing);
  };

  const config = {
    vimeo: {
      playerOptions: {
        autopip: true,
        responsive: true,
      },
      title: "How to collect your blood example",
    },
  };

  return (
    <div className='app'>
      <div className='video'>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          playing={playing}
          ref={videoRef}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          controls={true}
          url='https://vimeo.com/714439018'
          playsinline={true}
          playIcon={<PlayIcon />}
          config={config}
        />

        <div className='playButton' data-show={!playing} onClick={togglePlay}>
          <span>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
              <path d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
