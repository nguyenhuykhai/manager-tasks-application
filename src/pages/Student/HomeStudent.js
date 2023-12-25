
import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";

import Echart from "../../components/chart/EChart";
import LineChart from "../../components/chart/LineChart";

import ava1 from "../../assets/images/check-list.png";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import card from "../../assets/images/info-card-1.jpg";

function Home() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [reverse, setReverse] = useState(false);

  const dollor = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
        fill="#fff"
      ></path>
      <path
        d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const profile = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="#fff"
      ></path>
      <path
        d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
        fill="#fff"
      ></path>
      <path
        d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z"
        fill="#fff"
      ></path>
      <path
        d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const heart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const cart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const count = [
    {
      today: "Nhiệm vụ nhóm",
      title: "100",
      persent: "/100",
      icon: dollor,
      bnb: "bnb2",
    },
    {
      today: "Hoàn thành",
      title: "50",
      persent: "/100",
      icon: profile,
      bnb: "bnb2",
    },
    {
      today: "Đang thực hiện",
      title: "20",
      persent: "/100",
      icon: heart,
      bnb: "yellowtext",
    },
    {
      today: "Chưa bắt đầu",
      title: "30",
      persent: "/100",
      icon: cart,
      bnb: "redtext",
    },
  ];

  const list = [
    {
      img: ava1,
      Title: (
        <Tooltip className="tooltip-title" placement="bottom" title="Research Summary: Tóm tắt về sự phát triển của năng lượng nguyên tử và tác động của nó đối với kinh tế và xã hội trên thế giới">
          Research Summary...
        </Tooltip>
      ),
      predict_date: "15/12/2023",
      actual_date: "13/12/2023",
      progress: <Button type="primary" size="medium">Hoàn thành</Button>,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Jessica Doe">
            <img className="tootip-img" src={team4} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava1,
      Title: (
        <Tooltip className="tooltip-title" placement="bottom" title="Debate Points: Tổng hợp điểm tranh luận về ưu và nhược điểm của năng lượng nguyên tử, tập trung vào tình hình ở Việt Nam">
          Debate Points...
        </Tooltip>
      ),
      predict_date: "15/12/2023",
      actual_date: "15/12/2023",
      progress: <Button type="primary" size="medium">Hoàn thành</Button>,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava1,
      Title: (
        <Tooltip className="tooltip-title" placement="bottom" title="Expert Interview: Phỏng vấn chuyên gia về năng lượng nguyên tử và viết bài báo về ý kiến của họ">
        Expert Interview...
        </Tooltip>
      ),
      predict_date: "15/12/2023",
      actual_date: "17/12/2023",
      progress: <Button type="primary" size="medium" status="active">Hoàn thành</Button>,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava1,
      Title: (
        <Tooltip className="tooltip-title" placement="bottom" title="Community Awareness Post: Tạo nội dung truyền thông như poster hoặc video để tăng cường nhận thức cộng đồng về năng lượng nguyên tử">
          Community Aware...
        </Tooltip>
      ),
      predict_date: "15/12/2023",
      actual_date: "15/12/2023",
      progress: <Button type="primary" size="medium" status="active">Hoàn thành</Button>,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava1,
      Title: (
        <Tooltip className="tooltip-title" placement="bottom" title="Policy Suggestions: Đề xuất một số chính sách mới hoặc cải tiến liên quan đến sử dụng năng lượng nguyên tử ở Việt Nam">
        Policy Suggestions...
        </Tooltip>
      ),
      predict_date: "15/12/2023",
      actual_date: "14/12/2023",
      progress: <Button type="primary" size="medium">Hoàn thành</Button>,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Jessica Doe">
            <img className="tootip-img" src={team4} alt="" />
          </Tooltip>
        </div>
      ),
    },

    {
      img: ava1,
      Title: (
        <Tooltip className="tooltip-title" placement="bottom" title="Historical Impact Brief: Tổng hợp ảnh hưởng lịch sử của sự phát triển năng lượng nguyên tử đối với các quốc gia, với tập trung vào Việt Nam">
        Historical Impact...
        </Tooltip>
      ),
      predict_date: "30/12/2023",
      actual_date: "",
      progress: (
        <Button type="primary" danger size="medium">Chưa bắt đầu</Button>
      ),
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
  ];

  const timelineList = [
    {
      sprint_name: "Sprint 1: Atomic Evolution",
      sprint_description: "Khám phá lịch sử và công nghệ dẫn đến thời đại nguyên tử. Phân tích tác động toàn cầu và các sự kiện quan trọng trong phát triển hạt nhân",
      finish_date: "30 OCT 07:00 PM",
      color: "green",
    },
    {
      sprint_name: "Sprint 2: Reactor Realities",
      sprint_description: "Nghiên cứu tình trạng hiện tại của năng lượng hạt nhân toàn cầu. Xem xét biện pháp an toàn, thách thức và các đổi mới trong công nghệ lò phản ứng",
      finish_date: "15 NOV 07:00 PM",
      color: "green",
    },
    {
      sprint_name: "Sprint 3: Fallout Factors",
      sprint_description: "Đào sâu vào hậu quả môi trường và địa chính trị của hoạt động hạt nhân. Đánh giá các rủi ro, khuôn khổ quy định và hợp tác quốc tế",
      finish_date: "30 DEC 07:00 PM",
    },
    {
      sprint_name: "Sprint 4: Fusion Futures",
      sprint_description: "Khám phá nghiên cứu về hợp nhất hạt nhân và tiềm năng làm nguồn năng lượng bền vững. Đánh giá thách thức và bước đột phá",
      finish_date: "15 JAN 07:00 PM",
    },
    {
      sprint_name: "Sprint 5: Atomic Advocacy",
      sprint_description: "Phát triển chiến lược để tăng cường nhận thức và giáo dục công dân về năng lượng hạt nhân. Tạo kế hoạch truyền thông và tư duy liên lạc",
      finish_date: "30 FEB 07:00 PM",
    },
    {
      sprint_name: "Sprint 6: Policy and Power",
      sprint_description: "Xem xét và đề xuất khuôn khổ để sử dụng năng lượng hạt nhân một cách có trách nhiệm. Xem xét các tác động kinh tế, môi trường và đạo đức",
      finish_date: "15 MAR 07:00 PM",
      color: "gray",
    },
  ];

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>Nhiệm vụ</Title>
                  <Paragraph className="lastweek">
                    hoàn thành trong sprint này<span className="blue">40%</span>
                  </Paragraph>
                </div>
                <div className="ant-filtertabs">
                  <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">TẤT CẢ</Radio.Button>
                      <Radio.Button value="b">CÁ NHÂN</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="ant-list-box table-responsive">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>NỘI DUNG</th>
                      <th>NGƯỜI ĐẢM NHIỆM</th>
                      <th>NGÀY DỰ KIẾN</th>
                      <th>NGÀY THỰC TẾ</th>
                      <th>TRẠNG THÁI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <p>
                            {d.Title}
                          </p>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.predict_date}{" "}
                          </span>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d?.actual_date == "" ? "Not yet" : d?.actual_date}{" "}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="uploadfile shadow-none">
                <Upload {...uploadProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    <span className="click">Thêm nhiệm vụ mới</span>
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>Sprint Schedule</Title>
                {/* <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  this month <span className="bnb2">20%</span>
                </Paragraph> */}

                <Timeline
                  pending="Recording..."
                  className="timelinelist"
                  reverse={reverse}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.sprint_name}</Title>
                      <Title level={5}>{t.sprint_description}</Title>
                      <Text>{t.finish_date}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
                <Button
                  type="primary"
                  className="width-100"
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined />} REVERSE
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Row gutter>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={14}
                  className="mobile-24"
                >
                  <div className="h-full col-content p-20">
                    <div className="ant-muse">
                      <Text>30 DEC 07:00 PM</Text>
                      <Title level={5}>Sprint 3: Fallout Factors</Title>
                      <Paragraph className="lastweek mb-36">
                      Đào sâu vào hậu quả môi trường và địa chính trị của hoạt động hạt nhân. Đánh giá các rủi ro, khuôn khổ quy định và hợp tác quốc tế
                      </Paragraph>
                    </div>
                    <div className="card-footer">
                      <a className="icon-move-right" href="#pablo">
                        Xem thêm
                        {<RightOutlined />}
                      </a>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={10}
                  className="col-img"
                >
                  <div className="ant-cret text-right">
                    <img src={card} alt="" className="border10" />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24} md={12} sm={24} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox card-info-2 h-full">
              <div className="gradent h-full col-content">
                <div className="card-content">
                  <Text>SPRINT TIẾP THEO</Text>
                  <Title level={5}>Sprint 4: Fusion Futures</Title>
                  <p>
                  Khám phá nghiên cứu về hợp nhất hạt nhân và tiềm năng làm nguồn năng lượng bền vững. Đánh giá thách thức và bước đột phá
                  </p>
                </div>
                <div className="card-footer">
                  <a className="icon-move-right" href="#pablo">
                    Xem thêm
                    <RightOutlined />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
