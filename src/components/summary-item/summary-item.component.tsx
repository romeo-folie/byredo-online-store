import React from "react";
import {
  Container,
  Wrap,
  Image,
  Col,
  Row,
  DetailRow,
  Span,
  Price,
  Size,
} from "./summary-item.styles";

const SummaryItem = () => {
  return (
    <Container>
      <Wrap width={40}>
        <Image
          src="/images/products/mob_blanche-body-wash_1-removebg-preview.png"
          alt="mob blanche body wash"
        />
      </Wrap>
      <Wrap width={60}>
        <Row>
          <Col>
            <Span>{"Bal d'Afrique"}</Span>
            <DetailRow>
              <Size>20ml</Size>
              <Span>Hand cream</Span>
            </DetailRow>
          </Col>
          <Price>$30</Price>
        </Row>
      </Wrap>
    </Container>
  );
};

export default SummaryItem;
