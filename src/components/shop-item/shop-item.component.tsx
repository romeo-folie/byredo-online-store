import {Container, Photo, Title, Price} from "./shop-item.styles";

interface Props {
  path: string;
  title: string;
  price: string | number;
}

const ShopItem: React.FC<Props> = ({path, title, price}) => {
  return (
    <Container>
      <Photo src={path} alt={title} />
      <Title>{title}</Title>
      <Price>{`$ ${price}`}</Price>
    </Container>
  );
};

export default ShopItem;
