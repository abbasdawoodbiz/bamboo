import React from 'react';
import PropTypes from 'prop-types';
import style from './ContentHeader.module.scss';

import { PageHeader, Menu, Dropdown, Button, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: 'top',
        }}
      />
    </Button>
  </Dropdown>
);

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const ContentHeader = props => {
  return (
    <>
      <PageHeader
        title="Title"
        className={style['bz-page-header']}
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
          <DropdownMenu key="more" />,
        ]}
        avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
      >
      </PageHeader>
    </>
  );
};

ContentHeader.defaultProps = {

};

ContentHeader.propTypes = {

};

export default ContentHeader;