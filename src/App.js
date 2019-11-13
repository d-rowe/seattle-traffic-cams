import React from "react";
import ReactPlayer from "react-player";
import streams from "./streams.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title has-text-white">Seattle Traffic Cams</h1>
      <div className="players">
        {streams.map(stream => (
          <ReactPlayer
            url={stream.url}
            controls={true}
            playing={true}
            className="stream-player"
            width="18em"
            height="10.125em"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
