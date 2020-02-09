import React from "react";

import { Container, Image, Row } from "react-bootstrap";

import eugene_tumusiime_1 from "../../img/eugene_tumusiime_1.png";
import eugene_tumusiime_2 from "../../img/eugene_tumusiime_2.png";
import eugene_tumusiime_3 from "../../img/eugene_tumusiime_3.png";
import eugene_tumusiime_4 from "../../img/eugene_tumusiime_4.png";

const EugeneTumusiime = () => (
  <Container style={{ width: "800px" }}>
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
    <Row>
      <Image style={{ width: "800px" }} src={eugene_tumusiime_3} />
    </Row>
    <Row>
      <Image
        style={{ width: "500px", height: "400px" }}
        src={eugene_tumusiime_1}
      />
      <Image
        style={{ width: "300px", height: "400px" }}
        src={eugene_tumusiime_4}
      />
    </Row>
    <Row>
      <Image style={{ width: "800px" }} src={eugene_tumusiime_2} />
    </Row>
  </Container>
);
export default EugeneTumusiime;
