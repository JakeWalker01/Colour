import React from "react";

import { Row } from "react-bootstrap";

import eugene_tumusiime from "../../img/Eugene.jpg";
import ContentPage from "../components/ContentPage";
import CenteredImageRow from "../components/CenteredImageRow";

const EugeneTumusiime = () => (
  <ContentPage headerText="Eugene Tumusiime">
    <Row>
      <p>
        Eugene Tumusiime has been a photographer since 2016 and takes
        inspiration from artist Liam Wong. Eugene mainly focuses on bright
        colours, neon blues, pinks and yellows. Each colour has there own
        meaning and the magnetas and bright blues resemble clarity and emotional
        harmony. Essentially the photographer wants us to feel calm and relaxed
        when we see this photo. The technique I think Tumusiime is using is a
        method called pop colour where you have a long exposure and use a flash
        gun to “pop colour” into the photograph. He focuses his light not on the
        subject but the scenery around it. This causes a silhouette effect on
        the subject which makes them blacked out. Our attention is grabbed by
        the bright colours which I think the photographer to focus on as he
        wants to portray the ideas of harmony. His photos are often taken at
        night so that the colours are highlighted.
      </p>
    </Row>
    <CenteredImageRow img={eugene_tumusiime} />
  </ContentPage>
);
export default EugeneTumusiime;
