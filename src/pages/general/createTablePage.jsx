import React from "react";
import Header from "../../components/header";
import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../../styles/main/createTable.css";
import { useHistory } from "react-router-dom";
import { createTable } from "../../services/tables";
import { AlertService } from "../../services/alertService.js";

const { TextArea } = Input;

export default function CreateTablePage() {
    let history = useHistory();

    const onFinish = (values) => {
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
            <Form onFinish={onFinish} className="form-container">
                <Form.Item name="name">
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item name="goal">
                    <Input placeholder="Goal" />
                </Form.Item>

                <Form.Item name="describe">
                    <TextArea
                        placeholder="Describe, why you need your table :)"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                        className="describe-container"
                    />
                </Form.Item>

                <Form.Item name="image">
                    <Upload listType="picture" className="image-select">
                        <Button
                            icon={<UploadOutlined />}
                            className="upload-btn"
                        >
                            Upload
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="create-btn"
                    >
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
