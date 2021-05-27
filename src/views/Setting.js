import React from "react";
import { Container, Row, Col } from "reactstrap";

function Admin() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <h1>Setting</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;
