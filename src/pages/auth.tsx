import React, {useContext} from "react";
import CartIcon from "../components/cart-icon/cart-icon.component";
import Link from "next/link";
import {Container, Content, Forms} from "../pageStyles/auth.styles";
import Signin from "../components/signin-form/signin-form.component";
import Signup from "../components/signup-form/signup-form.component";
import {useRouter} from "next/router";
import {
  Header,
  Brand,
  Search,
  User,
  Menu,
  Row,
} from "../pageStyles/complete.styles";
import {
  NavContext,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
} from "../context/nav.state";
import {withAuthUser, withAuthUserSSR, AuthAction} from "next-firebase-auth";

const Auth = () => {
  const {dispatch} = useContext(NavContext);
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Header>
          <Menu onClick={() => dispatch({type: TOGGLE_MENU})} />
          <Brand onClick={() => router.replace("/")} />
          <Row>
            <Search onClick={() => dispatch({type: TOGGLE_SEARCH})} />
            <User onClick={() => router.replace("/auth")} />
            <CartIcon onClick={() => dispatch({type: TOGGLE_CART})} />
          </Row>
        </Header>
        <Forms>
          <Signin />
          <Signup />
        </Forms>
      </Content>
    </Container>
  );
};

export const getServerSideProps = withAuthUserSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({whenAuthed: AuthAction.REDIRECT_TO_APP})(Auth);
