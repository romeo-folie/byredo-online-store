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
  Type,
} from "./summary-item.styles";
import {ICartItem} from "../../context/product.state";

interface Props {
  product: ICartItem;
}

const SummaryItem: React.FC<Props> = ({product}) => {
  const {name, url, size, price, type, quantity} = product;

  return (
    <Container>
      <Wrap width={40}>
        <Image src={url} alt={name} />
      </Wrap>
      <Wrap width={60}>
        <Row>
          <Col>
            <Span>{name}</Span>
            <DetailRow>
              {size ? <Size>{size}ml</Size> : null}
              <Type>{type.toUpperCase()}</Type>
            </DetailRow>
          </Col>
          <Price>${price * quantity}</Price>
        </Row>
      </Wrap>
    </Container>
  );
};

export default SummaryItem;
