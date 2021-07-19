import {useState} from "react";
import {Container, Photo, Title, Price} from "./product.styles";
import {useRouter} from "next/router";

interface Props {
  path: string;
  title: string;
  price: string | number;
}

const Product: React.FC<Props> = ({path, title, price}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={() => router.push("/products/1")}
    >
      <Photo src={path} alt={title} isHovered={isHovered} />
      <Title>{title}</Title>
      <Price>{`$${price}`}</Price>
    </Container>
  );
};

export default Product;
