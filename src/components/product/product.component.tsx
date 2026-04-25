import {useState} from "react";
import {Container, ImageContainer, PhotoWrapper, Title, Price} from "./product.styles";
import {useRouter} from "next/router";
import Head from "next/head";
import {motion, Variants} from "framer-motion";
import {getOptimizedUrl} from "../../utils/cloudinary";

interface Props {
  id: string;
  path: string;
  name: string;
  price: string | number;
  onLoad?: () => void;
}

const itemVariants: Variants = {
  hidden: {opacity: 0, y: 40},
  show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 260, damping: 20}}
};

const Product: React.FC<Props> = ({id, path, name, price, onLoad}) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const thumbnailUrl = getOptimizedUrl(path, 400);
  const detailUrl = getOptimizedUrl(path, 1000);

  return (
    <motion.div variants={itemVariants}>
      <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push(`/products/${id}`)}
      >
        <Head>
          {isHovered && <link rel="preload" as="image" href={detailUrl} />}
        </Head>
        <ImageContainer>
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{duration: 0.8, ease: "easeOut"}}
            style={{width: "100%", height: "100%", position: "relative", overflow: "hidden"}}
          >
            <PhotoWrapper style={{backgroundColor: "transparent"}}>
              <motion.img
                layoutId={id}
                src={thumbnailUrl}
                alt={name}
                onLoad={() => {
                  setIsLoaded(true);
                  if (onLoad) onLoad();
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.6s ease-in-out",
                }}
              />
            </PhotoWrapper>
          </motion.div>
        </ImageContainer>
        <Title>{name}</Title>
        <Price>{`$${price}`}</Price>
      </Container>
    </motion.div>
  );
};

export default Product;
