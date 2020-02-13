import React from "react";
import { Switch, Route } from "react-router-dom";
import LiamWongPhotos from "./content/LiamWongPhotos";
import StatementOfIntent from "./content/StatementOfIntent";
import LiamWong from "./content/LiamWong";
import LiamWongPhotoshop from "./content/Liam Wong Photoshop";
import TroyPaiva from "./content/Troy Paiva";
import EugeneTumusiime from "./content/EugeneTumusiime";
import BolynetSieng from "./content/BolynetSieng";
import ShootOne from "./content/ShootOne";
import TunnelEdit from "./content/TunnelEdit";
import FinalPiece from "./content/FinalPiece";
import Home from "./content/Home";
import SdRoadEvaluation from "./content/SD Road Evaluation";
import MathewGuidoPhotos from "./content/MathewGuidoPhotos";

const RouterSwitch = () => (
  <Switch>
    <Route path="/statementofintent">
      <StatementOfIntent />
    </Route>
    <Route path="/liamwong">
      <LiamWong />
    </Route>
    <Route path="/liamwongphotos">
      <LiamWongPhotos />
    </Route>
    <Route path="/liamwongphotoshop">
      <LiamWongPhotoshop />
    </Route>
    <Route path="/troypaiva">
      <TroyPaiva />
    </Route>
    <Route path="/eugenetumusiime">
      <EugeneTumusiime />
    </Route>
    <Route path="/bolynetsieng">
      <BolynetSieng />
    </Route>
    <Route path="/sdroadevaluation">
      <SdRoadEvaluation />
    </Route>
    <Route path="/mathewguidophotos">
      <MathewGuidoPhotos />
    </Route>
    <Route path="/shootone">
      <ShootOne />
    </Route>
    <Route path="/tunneledit">
      <TunnelEdit />
    </Route>
    <Route path="/finalpiece">
      <FinalPiece />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
export default RouterSwitch;
