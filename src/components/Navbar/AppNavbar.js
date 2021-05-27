import React from "react";
import imgAdmin from "../../assets/img/admin.jpg";
import dansLogo from "../../assets/img/dans-logo.jpg";
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
} from "reactstrap";


function AppNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  return (
    <>
      <Container fluid>
        <Navbar expand="lg">
          <img src={dansLogo} style={{
            width:"36px",
            height:"36px",
          }}/>

          <NavbarBrand style={{
            width:"161px",
            height:"22px",
            color:"black",
            fontStyle:"normal",
            fontWeight:"bold",
            lineHeight:"24px",
            width:"100%",
            marginLeft:"20px",
            marginBottom:"15px"
          }}>DAnS Multi Pro</NavbarBrand>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img src={imgAdmin} style={{
                      width:"32px",
                      height:"32px"
                    }} />
                  </div>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default AppNavbar;
