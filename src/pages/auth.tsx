import React from "react";
import CartIcon from "../components/cart-icon/cart-icon.component";
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
  useNavState,
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_SEARCH,
} from "../context/nav.state";
import Head from "next/head";
import {useAuth} from "../context/AuthContext";

const Auth = () => {
  const {dispatch} = useNavState();
  const router = useRouter();
  const {user, loading} = useAuth();

  React.useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  if (loading || user) return null;

  return (
    <Container>
      <Head>
        <title>Authentication</title>
      </Head>
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

export default Auth;
