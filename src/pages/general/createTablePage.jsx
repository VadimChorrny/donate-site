import React from "react";
import Header from "../../components/header";
import { Form, Input } from "antd";
import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "../../styles/main/createTable.css";
import { useHistory } from "react-router-dom";
import { createTable } from "../../services/tables";
import { AlertService } from "../../services/alertService.js";

const { TextArea } = Input;

export default function CreateTablePage() {
  let history = useHistory();

  const onFinish = (values) => {
    console.log('From page: ', values);
    createTable(history, values);
  };
  const onFinishFailed = () => {
    AlertService.errorMessage(
      "Log in is blocked!",
      "First, correct all comments!"
    );
  };
  return (
    <div className="container">
      <Header />
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="form-container">
        <Form.Item name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="price">
          <Input placeholder="Price" type="number" />
        </Form.Item>

        <Form.Item name="describe">
          <TextArea
            placeholder="Describe, why you need your table :)"
            autoSize={{ minRows: 2, maxRows: 6 }}
            className="describe-container"
          />
        </Form.Item>

        <Form.Item name="image">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
            size="large"
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={1}
              
            >
              <Button icon={<UploadOutlined />} id="upload-btn">Upload (Max: 1)</Button>
            </Upload>
          </Space>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="create-btn">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
