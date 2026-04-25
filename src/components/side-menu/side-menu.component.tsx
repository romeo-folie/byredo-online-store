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
  TitleWrap,
  ArrowIcon,
  Title,
  SubMenuWrapper,
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
import CategoryList from "../category-list/category-list.component";

const SideMenu = () => {
  const {state, dispatch} = useNavState();
  const {productDispatch} = useProductState();
  const router = useRouter();

  const handleMainMenuClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
    productDispatch({type: FILTER_PRODUCTS, payload: innerText});
    dispatch({type: TOGGLE_SUBMENU});
  };

  const handleClose = () => {
    dispatch({type: TOGGLE_MENU});
    if (state.isSubMenuOpen) dispatch({type: TOGGLE_SUBMENU});
  };

  const menuVariants = {
    hidden: {x: "-100%"},
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      x: "-100%",
      transition: {duration: 0.3, ease: "easeInOut"},
    },
  } as const;

  const levelVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: {type: "spring" as const, stiffness: 300, damping: 30},
        opacity: {duration: 0.2},
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: {type: "spring" as const, stiffness: 300, damping: 30},
        opacity: {duration: 0.2},
      },
    }),
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
            width: "100%",
            maxWidth: "400px",
            zIndex: 180,
            backgroundColor: "#fff",
            boxShadow: "10px 0 30px rgba(0,0,0,0.1)",
          }}
        >
          <Container isOpen={true}>
            <Header>
              {!state.isSubMenuOpen ? (
                <Brand
                  onClick={() => {
                    router.replace("/");
                    handleClose();
                  }}
                />
              ) : (
                <TitleWrap>
                  <ArrowIcon onClick={() => dispatch({type: TOGGLE_SUBMENU})} />
                  <Title>{state.activeNavOption}</Title>
                </TitleWrap>
              )}
              <CloseIcon onClick={handleClose} />
            </Header>

            <div style={{position: "relative", overflow: "hidden", flex: 1}}>
              <AnimatePresence custom={state.isSubMenuOpen ? 1 : -1}>
                {!state.isSubMenuOpen ? (
                  <motion.div
                    key="main"
                    custom={-1}
                    variants={levelVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <Menu>
                      {state.navOptions.map((option, idx) => (
                        <Option key={idx} onClick={handleMainMenuClick}>
                          {option}
                        </Option>
                      ))}
                    </Menu>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sub"
                    custom={1}
                    variants={levelVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <SubMenuWrapper>
                      {state.categories.map((cat, idx) => (
                        <CategoryList
                          title={cat.title}
                          items={cat.items}
                          key={idx}
                        />
                      ))}
                    </SubMenuWrapper>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!state.isSubMenuOpen && (
              <Footer>
                <Option>Support</Option>
                <SocialWrap>
                  <InstaIcon />
                  <FacebookIcon />
                </SocialWrap>
              </Footer>
            )}
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
