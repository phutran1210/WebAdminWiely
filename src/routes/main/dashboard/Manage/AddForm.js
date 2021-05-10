import React, { Component } from "react";
import { Card, Form, Input, Button, DatePicker, Select } from "antd";
import { auth, firestore } from "../../../../firebase/firebase";
import { connect } from "react-redux";
import {
  addDataUser,
  getDataUser
} from "../../../../appRedux/actions/TableUsersAction";

const FormItem = Form.Item;
const { Option } = Select;

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        email: "",
        password: "123456",
        fullName: "",
        gender: "",
        address: "",
        role: "",
        birthDay: null
      }
    };
  }

  handleChange = (propertyName, e) => {
    const users = this.state.users;
    if (
      propertyName === "gender" ||
      propertyName === "role" ||
      propertyName === "birthDay"
    ) {
      users[propertyName] = e;
    } else {
      users[propertyName] = e.target.value;
    }
    this.setState({
      users: users
    });
  };

  handleSubmit = e => {
    this.props.toggleAddForm(false);
    const users = this.state.users;
    users.birthDay = users.birthDay.format("DD/MM/YYYY");
    e.preventDefault();
    this.props.addDataUser(
      this.state.users,
      this.state.users.email,
      this.state.users.password
    );
  };

  handleReset = () => {
    this.setState({
      users: {
        email: "",
        password: "123456",
        fullName: "",
        gender: "",
        address: "",
        role: "",
        birthDay: null
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <Card className="gx-card">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="E-mail">
            <Input
              name="email"
              placeholder="Email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.users.email}
            />
          </FormItem>
          <FormItem {...formItemLayout} label="Full Name">
            <Input
              name="fullName"
              placeholder="Full Name"
              onChange={this.handleChange.bind(this, "fullName")}
              value={this.state.users.fullName}
            />
          </FormItem>
          <FormItem {...formItemLayout} label="Gender">
            <Select
              name="gender"
              allowClear
              onChange={this.handleChange.bind(this, "gender")}
              value={this.state.users.gender}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="Role">
            <Select
              name="role"
              allowClear
              onChange={this.handleChange.bind(this, "role")}
              value={this.state.users.role}
            >
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="Address">
            <Input
              name="address"
              placeholder="Address"
              onChange={this.handleChange.bind(this, "address")}
              value={this.state.users.address}
            />
          </FormItem>
          <FormItem {...formItemLayout} label="Day's Birth">
            <DatePicker
              name="birthDay"
              className="gx-mb-3 gx-w-100"
              format="DD/MM/YYYY"
              onChange={this.handleChange.bind(this, "birthDay")}
              value={this.state.users.birthDay}
            />
          </FormItem>
          <FormItem {...formItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="danger"
              onClick={() => {
                this.handleReset();
              }}
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                this.props.toggleAddForm(false);
              }}
            >
              Go Back
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = ({ tableUser }) => {
  const { users } = tableUser;
  return { users };
};

export default connect(mapStateToProps, {
  addDataUser,
  getDataUser
})(AddForm);
