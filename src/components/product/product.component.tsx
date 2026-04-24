import {useState} from "react";
import {Container, Photo, Title, Price} from "./product.styles";
import {useRouter} from "next/router";
import Head from "next/head";
import {getOptimizedUrl} from "../../utils/cloudinary";

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

  const imageTransition = {
    type: "spring",
    stiffness: 200,
    damping: 28,
  };

  // Thumbnail size for the grid
  const thumbnailUrl = getOptimizedUrl(path, 400);
  // Full size for the detail page (preloading)
  const detailUrl = getOptimizedUrl(path, 1000);

  return (
    <Container
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={() => router.push(`/products/${id}`)}
    >
      <Head>
        {isHovered && (
          <link rel="preload" as="image" href={detailUrl} />
        )}
      </Head>
      <Photo
        layoutId={id}
        src={thumbnailUrl}
        alt={name}
        $isHovered={isHovered}
        transition={imageTransition}
      />
      <Title>{name}</Title>
      <Price>{`$${price}`}</Price>
    </Container>
  );
};

export default Product;
