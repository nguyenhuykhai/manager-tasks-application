

import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "100",
      user: "Nhiệm vụ",
    },
    {
      Title: "50",
      user: "Hoàn thành",
    },
    {
      Title: "20",
      user: "Thực hiện",
    },
    {
      Title: "30",
      user: "Chưa bắt đầu",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Tiến độ dự án</Title>
        <Paragraph className="lastweek">
          so với tuần trước <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
          Biểu đồ thống kê tiến độ dự án của nhóm
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
