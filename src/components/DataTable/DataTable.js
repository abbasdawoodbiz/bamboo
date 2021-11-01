import React from 'react';
import PropTypes from 'prop-types';
import style from './DataTable.module.scss';

import {Table, Space, Typography} from 'antd';
const { Title } = Typography;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Ordered',
    dataIndex: 'ordered',
    key: 'ordered',
    render: text => text,
    align: 'right',
  },
  {
    title: 'Dispatched',
    dataIndex: 'dispatched',
    key: 'dispatched',
    render: text => text,
    align: 'right',
  },
  {
    title: 'Delivered',
    dataIndex: 'delivered',
    key: 'delivered',
    align: 'right',
    render: (text, record) =>
      <div>{text}
        <span style={{ display: 'block', fontSize: '80%' }}>🔙 R: {record.returned}</span>
      </div>
    ,
  },
  {
    title: 'Received',
    dataIndex: 'received',
    key: 'received',
    align: 'right',
    render: text => text,
  },
  {
    title: 'Actions',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Receive</a>
        <a>View Production</a>
      </Space>
    ),
  }
]

const productDetails =
  [{
    "name": "Rice Wine - Aji Mirin",
    "ordered": 332,
    "dispatched": 69,
    "delivered": 37,
    "received": 22,
    "returned": 64
  }, {
    "name": "Wine - White, Riesling, Semi - Dry",
    "ordered": 666,
    "dispatched": 1,
    "delivered": 70,
    "received": 60,
    "returned": 57
  }, {
    "name": "Spring Roll Veg Mini",
    "ordered": 1660,
    "dispatched": 87,
    "delivered": 95,
    "received": 15,
    "returned": 74
  }, {
    "name": "Kumquat",
    "ordered": 432,
    "dispatched": 11,
    "delivered": 24,
    "received": 97,
    "returned": 19
  }, {
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  },{
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  },{
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  },{
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  },{
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  },{
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  },{
    "name": "Beer - Alexander Kieths, Pale Ale",
    "ordered": 1092,
    "dispatched": 84,
    "delivered": 32,
    "received": 43,
    "returned": 47
  }];

const DataTable = props => {
  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={productDetails}
        pagination={{position: ['topRight','bottomRight']}}
      />
    </div>
  );
};

DataTable.defaultProps = {

};

DataTable.propTypes = {

};

export default DataTable;