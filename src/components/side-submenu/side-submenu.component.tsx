import {
  Container,
  Header,
  TitleWrap,
  ArrowIcon,
  Title,
  Menu,
} from "./side-submenu.styles";
import {CloseIcon} from "../side-menu/side-menu.styles";
import {
  useNavState,
  TOGGLE_MENU,
  TOGGLE_SUBMENU,
} from "../../context/nav.state";
import CategoryList from "../category-list/category-list.component";

import {motion, AnimatePresence} from "framer-motion";

const SideSubMenu = () => {
  const {state, dispatch} = useNavState();

  const handleSubMenuClose = () => {
    dispatch({type: TOGGLE_MENU});
    dispatch({type: TOGGLE_SUBMENU});
  };

  const subMenuVariants = {
    hidden: {x: "-100%"},
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {x: "-100%", transition: {duration: 0.3}},
  } as const;

  return (
    <AnimatePresence>
      {state.isSubMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={subMenuVariants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "350px",
            zIndex: 190,
            backgroundColor: "#fff",
            boxShadow: "10px 0 30px rgba(0,0,0,0.1)",
          }}
        >
          <Container isOpen={true}>
            <Header>
              <TitleWrap>
                <ArrowIcon onClick={() => dispatch({type: TOGGLE_SUBMENU})} />
                <Title>{state.activeNavOption}</Title>
              </TitleWrap>
              <CloseIcon onClick={handleSubMenuClose} />
            </Header>
            <Menu>
              {state.categories.map((cat, idx) => (
                <CategoryList title={cat.title} items={cat.items} key={idx} />
              ))}
            </Menu>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideSubMenu;
