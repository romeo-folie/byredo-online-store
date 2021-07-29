import {useState} from "react";
import {Container, Photo, Title, Price} from "./product.styles";
import {useRouter} from "next/router";

interface Props {
  id: string;
  path: string;
  name: string;
  price: string | number;
}

const Product: React.FC<Props> = ({id, path, name, price}) => {
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
      onClick={() => router.push(`/products/${id}`)}
    >
      <Photo src={path} alt={name} isHovered={isHovered} />
      <Title>{name}</Title>
      <Price>{`$${price}`}</Price>
    </Container>
  );
};

export default Product;
