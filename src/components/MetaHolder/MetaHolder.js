import React from 'react';
import PropTypes from 'prop-types';
import style from './MetaHolder.module.scss';

import { Card } from 'antd';

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


const MetaHolder = props => {
  return (
    <div className={style.root}>
      <Card title="Some card title" type="inner">
        <MetaRow 
          label="Vendor name" 
          value="Pankaj Traders" 
          onSubmit={doSomething}
          aboutText="
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          "
          />
      </Card>
    </div>
  );
};

MetaHolder.defaultProps = {

};

MetaHolder.propTypes = {

};

export default MetaHolder;