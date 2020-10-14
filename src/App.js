import React from "react";
import "./App.css";
import VideoCard from "./component/VideoCard";
import v1 from "./video/v1.mp4";
import v2 from "./video/v2.mp4";
import v3 from "./video/v3.mp4";
import v4 from "./video/v4.mp4";
import pro from "./images/profile.jpg";
function App() {
  return (
    <div className="app">
      <div className="app__video">
        <VideoCard
          channel="Developer Uche"
          avatarSrc={pro}
          song={"This are demo projects hope they look good and convincing"}
          url="https://www.instagram.com/p/CF4BVvkBR1E/"
          likes={800}
          shares={200}
        />
        <VideoCard
          channel="Developer Uche"
          avatarSrc={pro}
          song={"This are demo projects hope they look good and convincing"}
          url="https://youtu.be/qk2dBVSSpd8"
          likes={800}
          shares={200}
        />
        <VideoCard
          channel="Developer Uche"
          avatarSrc={pro}
          song={"This are demo projects hope they look good and convincing"}
          url="https://www.youtube.com/watch?v=qYHYgU6S2lg"
          likes={800}
          shares={200}
        />
        <VideoCard
          channel="Developer Uche"
          avatarSrc={pro}
          song={"This are demo projects hope they look good and convincing"}
          url="https://www.youtube.com/watch?v=qYHYgU6S2lg"
          likes={800}
          shares={200}
        />
      </div>
    </div>
  );
}

export default App;
