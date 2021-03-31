import * as React from "react";
import { Carousel, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./carousel.module.scss";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      style={{ padding: "1rem", height: "auto", width: "auto" }}
      icon={<ArrowRightOutlined style={{ fontSize: 20 }} />}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      style={{ padding: "1rem", height: "auto", width: "auto" }}
      icon={<ArrowLeftOutlined style={{ fontSize: 20 }} />}
      onClick={onClick}
    />
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CarouselArrows = (props) => {
  return (
    <Carousel arrows {...settings} className="container">
      {props.children.map((child) => child)}
    </Carousel>
  );
};

export default CarouselArrows;
