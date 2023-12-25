import React from 'react'
import { useState, useEffect } from "react";

// Import Ant Design
import {
    Row,
    Col,
    Breadcrumb,
    Badge,
    Dropdown,
    Button,
    List,
    Avatar,
    Input,
    Drawer,
    Typography,
    Switch,
    Checkbox,
    Form,
    Radio,
    Tag
} from "antd";

import { InfoCircleOutlined } from '@ant-design/icons';

import styled from "styled-components";

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #1890ff;
  }
  .ant-btn-success {
    background-color: #52c41a;
  }
  .ant-btn-yellow {
    background-color: #fadb14;
  }
  .ant-btn-black {
    background-color: #262626;
    color: #fff;
    border: 0px;
    border-radius: 5px;
  }
  .ant-switch-active {
    background-color: #1890ff;
  }
`;

const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];

const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

function UpdateProfile() {
    const { Title, Text } = Typography;
    const [visible, setVisible] = useState(false);

    useEffect(() => window.scrollTo(0, 0));

    const showDrawer = () => setVisible(true);
    const hideDrawer = () => setVisible(false);

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
      setRequiredMarkType(requiredMarkValue);
    };

    return (
        <>
            <Button type="link" onClick={showDrawer}>{pencil}</Button>
            <Drawer
                className="settings-drawer"
                mask={true}
                width={360}
                onClose={hideDrawer}
                placement="right"
                visible={visible}
            >
                <div layout="vertical">
                    <div className="header-top">
                        {/* <Title level={4}>
                            {user?.name || user?.student_name}
                            <Text className="subtitle">{user?.email}</Text>
                        </Title> */}
                    </div>

                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    requiredMarkValue: 'customize',
                  }}
                  onValuesChange={onRequiredTypeChange}
                  requiredMark={customizeRequiredMark}
                >
                  <Form.Item
                    required
                    label="Họ và Tên"
                    tooltip={{
                      title: 'Nhập họ và tên của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                    >
                    
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Giới thiệu"
                    tooltip={{
                      title: 'Nhập thông tin giới thiệu của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Kỹ năng"
                    tooltip={{
                      title: 'Nhập thông tin kỹ năng của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Facebook"
                    tooltip={{
                      title: 'Nhập thông tin Facebook của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    required
                    label="Email"
                    tooltip={{
                      title: 'Nhập thông tin Email của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="GitHub"
                    tooltip={{
                      title: 'Nhập thông tin GitHub của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    required
                    label="Picture"
                    tooltip={{
                      title: 'Upload ảnh đại diện của bạn',
                      icon: <InfoCircleOutlined />,
                    }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary">Submit</Button>
                  </Form.Item>
                </Form>

                    <div className="sidebar-color">
                        <Title level={5}>Đổi màu giao diện thanh điều hướng</Title>
                        <div className="theme-color mb-2">
                            <ButtonContainer>
                                <Button type="primary">1</Button>
                                <Button type="success">1</Button>
                                <Button type="danger">1</Button>
                                <Button type="yellow">1</Button>

                                <Button type="black">1</Button>
                            </ButtonContainer>
                        </div>

                        <div className="sidebarnav-color mb-2">
                            <Title level={5}>Đổ bóng thanh điều hướng</Title>
                            <Text>Chọn loại đổ bóng</Text>
                            <ButtonContainer className="trans">
                                <Button type="transparent">
                                    TRONG SUỐT
                                </Button>
                                <Button type="white">
                                    TRẮNG
                                </Button>
                            </ButtonContainer>
                        </div>
                        <div className="fixed-nav mb-2">
                            <Title level={5}>Thanh điều hướng bất biến</Title>
                            <Switch />
                        </div>
                        <div className="ant-docment">
                            <ButtonContainer>
                                <Button type="primary" size="medium">
                                    Đăng xuất
                                </Button>
                            </ButtonContainer>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default UpdateProfile