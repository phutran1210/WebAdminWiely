import React from "react";
import { Card, Table, Button } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <span className="gx-link">{text}</span>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
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

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

const Simple = ({ title }) => {
  return (
    <Card title={title}>
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data}
      />
    </Card>
  );
};

export default Simple;
