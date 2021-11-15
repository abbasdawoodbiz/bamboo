import React from 'react';
import PropTypes from 'prop-types';
import style from './MetaHolder.module.scss';

import { Card } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { MetaRow } from '..';

const metaData = [{
  name: "Vendor Details",
  data: [{
    main: { value: "Apex Packaging", id: 123, entity: "vendor" },
    secondary: { value: "Smartpaddle Technology Pvt. Ltd." }
  }],
  editable: false
}, {
  name: "Order Details",
  data: [{
    main: { value: "Apex Packaging" },
    secondary: { value: "Smartpaddle Technology Pvt. Ltd." }
  }],
  editable: false
}];

const doSomething = e => {
  console.log(e);
}

const options = [1, 2, 4];

const MetaHolder = props => {
  return (
    <div className={style.root}>
      <Card title={props.title} type={props.type} loading={props.loading}>
        <MetaRow
        label="Vendor name"
        value="Pankaj Traders"
        onSubmit={doSomething}
        type="text"
        aboutText="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        "
        />
        <MetaRow
        type="select"
        options={options}
        onSubmit={doSomething}
        aboutText="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        "
        />
        <MetaRow
        type="multiselect"
        options={options}
        onSubmit={doSomething}
        />
      </Card>
    </div>
  );
};

MetaHolder.defaultProps = {
  title: 'Some card title',
  type: 'inner',
  loading: false
};

MetaHolder.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['inner']),
  loading: PropTypes.bool
};

export default MetaHolder;