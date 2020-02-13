import React from "react";

import { Row } from "react-bootstrap";
import ContentPage from "../components/ContentPage";
import CenteredImageRow from "../components/CenteredImageRow";

import photoshopped from "../../img/lw-photoshop/lw-photoshop-1.png";
import unphotoshopped from "../../img/lw-photoshop/lw-photoshop-2.png";

const LiamWongPhotoshop = () => (
  <ContentPage headerText="Liam Wong Photoshop">
    <Row>
      <p>
        This is a photo by, Liam Wong. Looking at the composition of the image
        he has used the rule of thirds and aspects of reflections to make the
        image more interesting. The setting feels quite isolated as well but in
        my opinion, I feel like he has done this purposefully to create a more
        dramatic scene and to further contrast with the bright neon colours.
        Initially looking at this photo, although the photo seems abandoned, we
        get a warm secure feeling due to the bright neon pink and the cool blue.
        This shows how powerful the colour of the image can be completely
        flipping the effect on the viewer contrasting with the dark eerie scene.
      </p>
    </Row>
    <CenteredImageRow img={photoshopped} />
    <Row>
      <p>
        I have edited the photo here to show the full effect of colour. Without
        the colour the scene feels gloomy and certain aspects before such as the
        bike do not pop out as much. The lack of colour makes the photo a lot
        less interesting. This effect was achieved by using a preset filter
        within photoshop.
      </p>
    </Row>
    <CenteredImageRow img={unphotoshopped} />
  </ContentPage>
);
export default LiamWongPhotoshop;
