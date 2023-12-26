import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux';

// Import firebase
import { imageDb } from '../../firebase/firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

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
  Tag,
  Space,
  Upload,
  Modal,
  message
} from "antd";

import { InfoCircleOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';

import styled from "styled-components";

const { TextArea } = Input;

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

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


function UpdateProfile({ user, dispatch }) {
  const { Title, Text } = Typography;
  const [visible, setVisible] = useState(false);

  useEffect(() => window.scrollTo(0, 0));

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  // Handle validate form
  const [form] = Form.useForm();

  form.setFieldsValue(user);

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.setFieldsValue(user);
  };
  const onClear = () => {
    form.resetFields();
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ file, fileList: newFileList }) => {
    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      // Update the form field with an error message
      form.setFields([
        {
          name: 'picture',
          errors: ['Invalid file type. Please upload an image.'],
        },
      ]);
      return
    }
    form.setFields([{name: 'picture', errors: undefined}])
    setFileList(newFileList)
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // Logic Firebase
  const [img, setImg] = useState('')
  const [imgUrl, setImgUrl] = useState([])

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`)
      uploadBytes(imgRef, img).then(value => {
        console.log(value)
        getDownloadURL(value.ref).then(url => {
          setImgUrl(data => [...data, url])
        })
      })
    }
  }

  useEffect(() => {
    listAll(ref(imageDb, "files")).then(imgs => {
      console.log(imgs)
      imgs.items.forEach(val => {
        getDownloadURL(val).then(url => {
          setImgUrl(data => [...data, url])
        })
      })
    })
  }, [])

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
            <Row>
              <Col span={4}>
                <div>
                  <img src={user?.picture} alt="" className="border10" />
                </div>
              </Col>
              <Col span={20}>
                <Title level={4} style={{ paddingLeft: '8px' }}>
                  {user?.name || user?.student_name}
                  <Text className="subtitle">{user?.email}</Text>
                </Title>
              </Col>
            </Row>
          </div>

          <Form
            onFinish={onFinish}
            form={form}
            layout="vertical"
            initialValues={{
              requiredMarkValue: 'customize',
            }}
            requiredMark={customizeRequiredMark}
          >
            <Form.Item
              label="Họ và Tên"
              name="student_name"
              rules={[
                { required: true, message: 'Vui lòng nhập họ và tên của bạn' }
              ]}
              tooltip={{
                title: 'Nhập họ và tên của bạn',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              required
              label="Email"
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Type nhập không hợp lệ' }]
              }
              name="email"
              tooltip={{
                title: 'Nhập thông tin Email của bạn',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Picture"
              name="picture"
              rules={[
                {
                  required: true,
                  message: 'Please upload a picture',
                },
              ]}
            >
              <Upload
                listType="picture-circle"
                maxCount={1}
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                  alt="example"
                  style={{
                    width: '100%',
                  }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>

            <Form.Item
              label="Facebook"
              name="link_facebook"
              tooltip={{
                title: 'Nhập thông tin Facebook của bạn',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="GitHub"
              name="github"
              tooltip={{
                title: 'Nhập thông tin GitHub của bạn',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Giới thiệu"
              name="about"
              tooltip={{
                title: 'Nhập thông tin giới thiệu của bạn',
                icon: <InfoCircleOutlined />,
              }}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Kỹ năng"
              name="skills"
              tooltip={{
                title: 'Nhập thông tin kỹ năng của bạn',
                icon: <InfoCircleOutlined />,
              }}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
                <Button htmlType="button" onClick={onClear}>
                  Clear
                </Button>
              </Space>
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

// Connect the App component to the Redux store
const mapStateToProps = (state) => ({
  user: state.auth?.user,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);