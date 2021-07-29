import {useState} from "react";
import {Container, Photo, Title, Price} from "./product.styles";
import {useRouter} from "next/router";

interface Props {
  path: string;
  name: string;
  price: string | number;
}

const Product: React.FC<Props> = ({path, name, price}) => {
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
      <Photo src={path} alt={name} isHovered={isHovered} />
      <Title>{name}</Title>
      <Price>{`$${price}`}</Price>
    </Container>
  );
};

export default Product;
