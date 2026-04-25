import {ChangeEvent, MouseEvent} from "react";
import {
  useNavState,
  TOGGLE_SEARCH,
  SET_NAV_OPTION,
} from "../../context/nav.state";
import {
  Container,
  ContentWrap,
  InputWrap,
  Input,
  SearchIcon,
  Items,
  Message,
  Header,
  Menu,
  Brand,
} from "./search.styles";
import {CloseIcon} from "../side-menu/side-menu.styles";
import SearchItem from "../search-item/search-item.component";
import NavItem from "../nav-item/nav-item.component";
import {useRouter} from "next/router";
import {SEARCH_PRODUCTS, useProductState} from "../../context/product.state";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const containerVariants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Search = () => {
  const {state, dispatch} = useNavState();
  const {productState, productDispatch} = useProductState();
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {innerText} = e.target as HTMLAnchorElement;
    dispatch({type: SET_NAV_OPTION, payload: innerText});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    productDispatch({type: SEARCH_PRODUCTS, payload: e.target.value});
  };

  return (
    <Container isOpen={state.isSearchOpen}>
      <Header style={{ zIndex: 10 }}>
        <Brand
          onClick={() => {
            dispatch({type: TOGGLE_SEARCH});
            router.replace("/");
          }}
        />

        <Menu>
          {state.navOptions.map((opt, idx) => (
            <NavItem
              key={idx}
              onClick={handleClick}
              active={state.activeNavOption === opt}
            >
              {opt}
            </NavItem>
          ))}
        </Menu>

        <CloseIcon onClick={() => dispatch({type: TOGGLE_SEARCH})} />
      </Header>
      <ContentWrap>
        <InputWrap isFocused={isFocused}>
          <SearchIcon />
          <Input 
            placeholder="Search products..." 
            onChange={handleChange} 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </InputWrap>
        <Items>
          <AnimatePresence>
            {productState.searchResults.length ? (
              <motion.div
                key="results-list"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                style={{ width: "100%" }}
              >
                {productState.searchResults.map((prod) => (
                  <SearchItem product={prod} key={prod.id} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Message>No products found</Message>
              </motion.div>
            )}
          </AnimatePresence>
        </Items>
      </ContentWrap>
    </Container>
  );
};

export default Search;
