import React, { useState } from 'react';
import style from './ContentHolder.module.scss';

import { Layout, Row, Col, Divider } from 'antd';

import { ContentHeader, DetailHolder, BreadcrumbHolder, MetaHolder } from '../index';

const { Content } = Layout;

const ContentHolder = props => {
  // const [selectionType, setSelectionType] = useState < 'checkbox' | 'radio' > ('checkbox');

  return (
    <Layout className={style['content-holder']}>
      <BreadcrumbHolder />
      <Content
        className={style.content}
      >
        <>
          <Row>
            <Col sm={24} md={16}>
              <ContentHeader />
              <DetailHolder />
            </Col>
            <Col sm={24} md={8}>
              <MetaHolder />
            </Col>
          </Row>
        </>
      </Content>
    </Layout>
  );
};

ContentHolder.defaultProps = {

};

ContentHolder.propTypes = {

};

export default ContentHolder;