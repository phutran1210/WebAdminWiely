import React, { Component } from "react";
import { Col, Row, Button } from "antd";

import Auxiliary from "util/Auxiliary";

import AddForm from "./AddForm";
import TableUser from "./TableUser";

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false
    };
  }
  toggleAddForm = status => {
    this.setState({
      showAddForm: status
    });
  };
  render() {
    return (
      <Auxiliary>
        {this.state.showAddForm && (
          <AddForm toggleAddForm={this.toggleAddForm} />
        )}
        <Row>
          {!this.state.showAddForm && (
            <Col span={24}>
              <Button
                type="primary"
                onClick={() => {
                  this.toggleAddForm(true);
                }}
              >
                Add
              </Button>
            </Col>
          )}
          {!this.state.showAddForm && (
            <Col span={24}>
              <TableUser />
            </Col>
          )}
        </Row>
      </Auxiliary>
    );
  }
}

export default Manage;
