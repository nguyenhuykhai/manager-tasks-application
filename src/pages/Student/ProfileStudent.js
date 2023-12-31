// Library imports
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

// Import services
import useGroupService from "../../services/groupService";

// Import Action
import { fetchGroupsSuccess, fetchGroupDetailSuccess } from '../../actions/groupActions';

// Import component
import UpdateProfile from '../../components/component/UpdateProfile'

// Antd imports
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import BgProfile from "../../assets/images/bg-christmas.jpg";
import profilavatar from "../../assets/images/face-1.jpg";
import convesionImg from "../../assets/images/face-3.jpg";
import convesionImg2 from "../../assets/images/face-4.jpg";
import convesionImg3 from "../../assets/images/face-5.jpeg";
import project1 from "../../assets/images/home-decor-1.jpeg";
import project2 from "../../assets/images/home-decor-2.jpeg";
import project3 from "../../assets/images/home-decor-3.jpeg";


function ProfileStudent({ user, groups, selectedGroup, dispatch }) {
  const [imageURL, setImageURL] = useState(false);
  const [loading, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Thêm công việc mới</div>
    </div>
  );

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  const { fetchGroupDetailInfo } = useGroupService();

  // Interactive with API
  useEffect(async () => {
    if (user != null && selectedGroup == null) {
      const data = await fetchGroupDetailInfo(user);
      if (data != null) {
        dispatch(fetchGroupDetailSuccess(data));
      }
    }
  }, [user])

  if (user == null) return <div>Loading...</div>

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={user?.student?.picture} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">{user?.student?.student_name}</h4>
                  <p>{user?.student?.about}</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">TỔNG QUAN</Radio.Button>
                <Radio.Button value="b">NHÓM</Radio.Button>
                <Radio.Button value="c">DỰ ÁN</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24 ">
          <Card
            bordered={false}
            className="header-solid h-full"
            title={<h6 className="font-semibold m-0">Cài đặt</h6>}
          >
            <ul className="list settings-list">
            <li>
                <h6 className="list-header text-sm text-muted">TÀI KHOẢN</h6>
              </li>
              <li>
                <Switch defaultChecked />

                <span>Gửi email cho tôi khi có lời mời vào nhóm</span>
              </li>
              <li>
                <Switch />
                <span>Gửi email cho tôi khi có thông báo từ giảng viên</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Gửi email cho tôi khi có thông báo từ trưởng nhóm</span>
              </li>
              <li>
                <h6 className="list-header text-sm text-muted m-0">
                  TÍNH NĂNG
                </h6>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Tạo mới dự án</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Thông báo tiến độ dự án</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Thông báo nhiệm vụ mới của tôi</span>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Thông tin cá nhân</h6>}
            className="header-solid h-full card-profile-information"
            extra={<UpdateProfile />}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {" "}
              {user?.student?.skills}{" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="Chi tiết">
              <Descriptions.Item label="Full Name" span={3}>
              {user?.student?.student_name}
              </Descriptions.Item>
              <Descriptions.Item label="GitHub" span={3}>
              {user?.student?.github}
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
              {user?.student?.email}
              </Descriptions.Item>
              <Descriptions.Item label="Social" span={3}>
                <a href="#pablo" className="mx-5 px-5">
                  {<TwitterOutlined />}
                </a>
                <a href={user?.student?.link_facebook} className="mx-5 px-5">
                  {<FacebookOutlined style={{ color: "#344e86" }} />}
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {<InstagramOutlined style={{ color: "#e1306c" }} />}
                </a>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Danh sách thành viên</h6>}
            className="header-solid h-full"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={selectedGroup?.payload?.groupStudents}
              split={false}
              className="conversations-list"
              renderItem={(item) => (
                <List.Item actions={[<Button type="link">REPLY</Button>]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square" size={48} src={item.picture} />
                    }
                    title={item?.name}
                    description={item?.email}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">Quản lý công việc</h6>
            <p>Dự án - {selectedGroup?.projectID?.context}</p>
          </>
        }
      >
        <Row gutter={[24, 24]}>
          {project.map((p, index) => (
            <Col span={24} md={12} xl={6} key={index}>
              <Card
                bordered={false}
                className="card-project"
                cover={<img alt="example" src={p.img} />}
              >
                <div className="card-tag">{p.titlesub}</div>
                <h5>{p.titile}</h5>
                <p>{p.disciption}</p>
                <Row gutter={[6, 0]} className="card-footer">
                  <Col span={12}>
                    <Button type="button">VIEW PROJECT</Button>
                  </Col>
                  <Col span={12} className="text-right">
                    <Avatar.Group className="avatar-chips">
                      <Avatar size="small" src={profilavatar} />
                      <Avatar size="small" src={convesionImg} />
                      <Avatar size="small" src={convesionImg2} />
                      <Avatar size="small" src={convesionImg3} />
                    </Avatar.Group>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col span={24} md={12} xl={6}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader projects-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageURL ? (
                <img src={imageURL} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
        </Row>
      </Card>
    </>
  );
}

// Connect the App component to the Redux store
const mapStateToProps = (state) => ({
  user: state.auth?.user,
  groups: state.group.group,
  selectedGroup: state.group.selectedGroup
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStudent);