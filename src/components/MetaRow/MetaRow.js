import { React, useState } from 'react';
import PropTypes from 'prop-types';
import style from './MetaRow.module.scss';

import { Input, Typography, Row, Col, Button, Select } from 'antd';
import { CheckOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;
const { Option } = Select;

const MetaRow = props => {
  const [edit, setEdit] = useState(false)

  const doEdit = (e) => {
    setEdit(!edit)
    if(typeof e === 'object'){
        props.onSubmit(e.target.value)
    } else {
      props.onSubmit(e)
    }
  }

  const options = [];

  if (props.options && props.options.length) {


    for (let i = 0; i < props.options.length; i++) {
      options.push(
        <Option value={props.options[i]} key={props.options[i]}>{props.options[i]}</Option>
      )
    }
  }

  return (
    <div className={style.root}>
      <Row align="bottom">
        <Col>
          <Text strong className={style.label}>{props.label}</Text>
        </Col>
        <Col span={edit ? 24 : 22}>
          {!edit && <Text className={style.value}>{props.value}</Text>}
          {edit && props.type === 'text' && <Input
            placeholder={props.placeholder}
            onPressEnter={doEdit}
            disabled={props.loading}
            value={props.value}
            suffix={
              props.loading ?
                <LoadingOutlined /> :
                <CheckOutlined
                  size="small"
                  onClick={doEdit}
                />
            }
          />}
          {edit && props.type === 'select' &&
            <Select defaultValue={props.value}
              style={{ width: '100%' }}
              onChange={doEdit}>
              {options}
            </Select>}
          {edit && props.type === 'multiselect' &&
            <Select defaultValue={props.value}
              style={{ width: '100%' }}
              mode="multiple"
              bordered={false}
              onChange={doEdit}>
              {options}
            </Select>}
        </Col>
        {
          !edit && <Col span="2">
            {props.editable &&
              <Button
                shape="circle"
                icon={<EditOutlined />}
                size="small"
                onClick={doEdit}
              />}
          </Col>
        }
        <Col>
          {props.aboutText && !edit &&
            <Paragraph
              ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
              type="secondary">
              {props.aboutText}
            </Paragraph>}
        </Col>
      </Row>
    </div>
  );
};

MetaRow.defaultProps = {
  label: 'Label',
  value: 'Something',
  placeholder: 'Some placeholder',
  loading: false,
  editable: true,
  type: 'text'
};

MetaRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  editable: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'select', 'typeahead', 'multiselect']),
  options: PropTypes.array
};

export default MetaRow;