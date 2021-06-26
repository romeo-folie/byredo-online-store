import {useState} from "react";
import {Container, Photo, Title, Price} from "./product.styles";

interface Props {
  path: string;
  title: string;
  price: string | number;
}

const Product: React.FC<Props> = ({path, title, price}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <Photo src={path} alt={title} isHovered={isHovered} />
      <Title>{title}</Title>
      <Price>{`$ ${price}`}</Price>
    </Container>
  );
};

export default Product;
