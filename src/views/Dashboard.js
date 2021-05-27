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
          {/* <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
