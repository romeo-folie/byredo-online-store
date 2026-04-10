import {MouseEvent} from "react";
import {
  Container,
  Header,
  Brand,
  CloseIcon,
  Menu,
  Option,
  Footer,
  SocialWrap,
  InstaIcon,
  FacebookIcon,
} from "./side-menu.styles";
import {
  useNavState,
  TOGGLE_MENU,
  TOGGLE_SUBMENU,
  SET_NAV_OPTION,
} from "../../context/nav.state";
import {useRouter} from "next/router";
import {useProductState, FILTER_PRODUCTS} from "../../context/product.state";

import {motion, AnimatePresence} from "framer-motion";

const SideMenu = () => {
  const {state, dispatch} = useNavState();
  const {productState, productDispatch} = useProductState();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
    productDispatch({type: FILTER_PRODUCTS, payload: innerText});
    dispatch({type: TOGGLE_SUBMENU});
    router.replace("/");
  };

  const menuVariants = {
    hidden: {x: "-100%"},
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {x: "-100%", transition: {duration: 0.3}},
  } as const;

  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0},
  } as const;

  return (
    <AnimatePresence>
      {state.isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "350px",
            zIndex: 180,
            backgroundColor: "#fff",
            boxShadow: "10px 0 30px rgba(0,0,0,0.1)",
          }}
        >
          <Container isOpen={true}>
            <Header>
              <Brand
                onClick={() => {
                  router.replace("/");
                  dispatch({type: TOGGLE_MENU});
                }}
              />
              <CloseIcon onClick={() => dispatch({type: TOGGLE_MENU})} />
            </Header>
            <Menu>
              {state.navOptions.map((option, idx) => (
                <motion.div variants={itemVariants} key={idx}>
                  <Option onClick={handleClick}>
                    {option}
                  </Option>
                </motion.div>
              ))}
            </Menu>
            <Footer>
              <motion.div variants={itemVariants}>
                <Option>Support</Option>
              </motion.div>
              <SocialWrap>
                <motion.div variants={itemVariants}>
                  <InstaIcon />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FacebookIcon />
                </motion.div>
              </SocialWrap>
            </Footer>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
