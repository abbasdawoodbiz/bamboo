import { React, useState } from 'react';
import PropTypes from 'prop-types';
import style from './MetaRow.module.scss';

import { Input, Typography, Row, Col, Button } from 'antd';
import { CheckOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;

const MetaRow = props => {
  const [edit, setEdit] = useState(false)

  const doEdit = (e) => {
    setEdit(!edit)
    if (e && e.target.value) {
      props.onSubmit(e.target.value)
    }
  }

  return (
    <div className={style.root}>
      <Row align="bottom">
        <Col span="22">
          <Text strong className={style.label}>{props.label}</Text>
          {!edit && <Text className={style.value}>{props.value}</Text>}
          {edit && <Input
            placeholder={props.placeholder}
            onPressEnter={doEdit}
            value={props.value}
            suffix={
              props.loading && <LoadingOutlined />
            }
          />}
          {props.aboutText && <Text type="secondary">{props.aboutText}</Text>}
        </Col>
        <Col span="2">
          {!edit &&
            <Button
              shape="circle"
              icon={<EditOutlined />}
              size="small"
              onClick={doEdit}
            />}
          {edit &&
            <Button
              shape="circle"
              icon={<CheckOutlined />}
              size="small"
              onClick={doEdit}
            />
          }
        </Col>
      </Row>
    </div>
  );
};

MetaRow.defaultProps = {
  label: 'Label',
  value: 'Something',
  placeholder: 'Some placeholder',
  loading: false
};

MetaRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool
};

export default MetaRow;