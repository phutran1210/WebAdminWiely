import React, { Component } from "react";
import { Card, Table, Button } from "antd";
import { firestore } from "../../../../firebase/firebase";
import { connect } from "react-redux";
import { getDataUser } from "../../../../appRedux/actions/TableUsersAction";

const columms = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: text => <span className="gx-link">{text}</span>
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: text => <span className="gx-link">{text}</span>
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Birth's Day",
    dataIndex: "birthDay",
    key: "birthDay"
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <Button type="danger" ghost>
          Delete
        </Button>
        <Button type="primary" ghost>
          Edit
        </Button>
      </span>
    )
  }
];

// firestore
//   .collection("users")
//   .get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, "=>", doc.data());
//       return doc.data();
//     });
//   })
//   .catch(err => {
//     console.log("Error getting documents", err);
//   });

class TableUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
  }
  componentDidMount() {
    this.props.getDataUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.status !== this.props.users.status) {
      if (nextProps.users.status === "loaded") {
        let obje = [];
        nextProps.users.data.forEach(doc => {
          obje.push(doc.data().users);
        });
        this.setState({ userData: obje });
      }
    }
    if (nextProps.addUser.status !== this.props.addUser.status) {
      if (nextProps.addUser.status === "loaded") {
        this.props.getDataUser();
      }
    }
  }
  render() {
    return (
      <Card>
        <Table
          className="gx-table-responstive"
          columns={columms}
          bordered={true}
          dataSource={this.state.userData}
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ tableUser }) => {
  const { users, addUser } = tableUser;
  return { users, addUser };
};
export default connect(mapStateToProps, { getDataUser })(TableUser);
