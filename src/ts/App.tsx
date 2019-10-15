import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

import ShowcaseCarousel from "./ShowcaseCarousel";
import ThumbnailPanel from "./ThumbnailPanel";

const App = () => (
  <div className="App">
    <ShowcaseCarousel />
    <ThumbnailPanel />
  </div>
);

export default App;
