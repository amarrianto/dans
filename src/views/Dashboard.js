import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip,
  UncontrolledDropdown,
} from "reactstrap";

function Dashboard(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <>
      <Container>
        <Row>
          <Col sm={{ size: 12, offset: 1 }}>
            <h3>Revenue Percentage</h3>
            <h3>28 April 2021 - 16.45 WIB</h3>
            <div style={{ float: "right" }}>
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <h5
                  style={{
                    marginTop: "5px",
                    marginRight: "5px",
                    float: "right",
                  }}
                >
                  Periode
                </h5>
                <DropdownToggle
                  caret
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "white",
                    color: "black",
                    width: "200px",
                    textAlign: "left",
                  }}
                >
                  This Month
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 12, offset: 1 }} lg="4">
            <Card className="card-tasks">
              <h6 className="m-3">Revenue</h6>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <h7 style={{float:"right"}}>*format in millions</h7>
                    <tbody>
                      <tr>
                        <td>
                          <h7 className="title">Revenue</h7>
                          <h4 className="text-bold">10</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">Customer Base</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">Existing Customer Base</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">New Customer Base</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">Data User</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">New Data User</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">Market Share Subs</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h7 className="title">New Market Share Subs</h7>
                          <h4 className="text-bold">20</h4>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
