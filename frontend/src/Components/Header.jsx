import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaBox } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import SearchBox from "./SearchBox";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <FaBox />
              <span className="px-1 py-2">dropshop</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item style={{ marginRight: "15px" }}>
                <SearchBox />
              </Nav.Item>
              <LinkContainer to="/cart">
                <Nav.Link className="my-2">
                  <div className="d-flex align-items-center">
                    <FaShoppingCart />
                    Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" className="ms-1">
                        {cartItems.reduce((acc, c) => acc + c.qty, 0)}
                      </Badge>
                    )}
                  </div>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="username"
                  className="my-2"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="login">
                  <Nav.Link href="/login" className="my-2">
                    <FaUser />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu" className="my-2">
                  <LinkContainer to="admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
