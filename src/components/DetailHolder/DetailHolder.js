import React from 'react';
import PropTypes from 'prop-types';
import style from './DetailHolder.module.scss';

import { Tabs } from 'antd';
import { DataTable } from '..';

const { TabPane } = Tabs;

const DetailHolder = props => {
  return (
    <div className={style.root}>
      <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: '100%' }}>
            <TabPane tab="Products" key="1">
              <DataTable />
            </TabPane>
            <TabPane tab="Deliveries" key="2">
              Deliveries
            </TabPane>
            <TabPane tab="Documents" key="3">
              Documents
            </TabPane>
        </Tabs>
    </div>
  );
};

DetailHolder.defaultProps = {

};

DetailHolder.propTypes = {

};

export default DetailHolder;