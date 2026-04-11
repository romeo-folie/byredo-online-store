import {useState} from "react";
import {Container, ImageContainer, PhotoWrapper, Title, Price} from "./product.styles";
import {useRouter} from "next/router";
import Image from "next/image";
import {motion, Variants} from "framer-motion";

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

  return (
    <motion.div variants={itemVariants}>
      <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push(`/products/${id}`)}
      >
        <ImageContainer>
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{duration: 0.8, ease: "easeOut"}}
            style={{width: "100%", height: "100%", position: "relative", overflow: "hidden"}}
          >
            <PhotoWrapper style={{backgroundColor: "transparent"}}>
              <Image
                src={path}
                alt={name}
                fill
                style={{
                  objectFit: "contain",
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.6s ease-in-out",
                }}
                onLoadingComplete={() => {
                  setIsLoaded(true);
                  if (onLoad) onLoad();
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
