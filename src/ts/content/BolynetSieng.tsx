import React from "react";
import ContentPage from "../components/ContentPage";
import bolynetsieng from "../../img/bolynet-sieng.png";
import { Row } from "react-bootstrap";

const BolynetSieng = () => (
  <ContentPage headerText="Bolynet Sieng" img={bolynetsieng}>
    <Row>
      <p>
        Bolynet Sieng is a photographer from Cambodia and his work with light
        painting inspired my project of colour. Light painting is a technique
        where you set a long exposure on the camera (30 seconds) and draw using
        light. The camera captures all the light strokes creating this streak
        effect. Sieng in his photos uses car lights to create this effect which
        almost makes the cars look like they’re moving although it is a still
        image. He uses leading lines to direct our attention and symmetry to
        make the photo more pleasing, leading lines also create a moving effect.
      </p>
      <p>
        I like the colours he uses in his photography. The bright white and reds
        contrast with the dark sky. Red symbolises speed which further implies
        movement within the image. In his landscape photography, he uses
        complementary colours which are colours opposite on the colour wheel
        which contrast with each other but helps balance the photo.
      </p>
      <p>
        I should experiment with different combinations of colours whilst light
        painting and try an analogous colour scheme to help make the photo
        create an atmosphere.
      </p>
    </Row>
  </ContentPage>
);

export default BolynetSieng;
