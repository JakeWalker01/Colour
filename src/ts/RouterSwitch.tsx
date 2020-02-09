import React from "react";
import { Switch, Route } from "react-router-dom";
import LiamWongPhotos from "./content/3 - LiamWongPhotos";
import StatementOfIntent from "./content/1 - StatementOfIntent";
import LiamWong from "./content/2 - LiamWong";
import LiamWongPhotoshop from "./content/3.5 - Liam Wong Photoshop";
import TroyPaiva from "./content/4 - Troy Paiva";
import EugeneTumusiime from "./content/5 - EugeneTumusiime";
import ShootOne from "./content/6 - ShootOne";
import TunnelEdit from "./content/8 - TunnelEdit";
import FinalPiece from "./content/FinalPiece";
import Home from "./content/Home";

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
