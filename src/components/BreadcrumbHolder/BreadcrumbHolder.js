import React from 'react';
import PropTypes from 'prop-types';
import style from './BreadcrumbHolder.module.scss';

import { Breadcrumb } from 'antd';

const BreadcrumbHolder = props => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

BreadcrumbHolder.defaultProps = {

};

BreadcrumbHolder.propTypes = {

};

export default BreadcrumbHolder;