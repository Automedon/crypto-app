import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import demoImage from "../images/cryptonews.jpg";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data: cryptoNews } = useGetCryptosNewsQuery({
    newsCategory,
    count,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading ... ";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map(({ name }) => (
              <Option value={name}>{name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map(
        ({ url, name, datePublished, image, description, provider }, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {name}
                  </Title>
                  <img
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    src={(image && image?.thumbnail?.contentUrl) || demoImage}
                    alt="News"
                  />
                </div>
                <p>
                  {description.length > 100
                    ? `${description.substring(0, 100)} ...`
                    : description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        (provider?.length &&
                          provider[0]?.image?.thumbnail?.contentUrl) ||
                        demoImage
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {provider?.length && provider[0]?.name}
                    </Text>
                  </div>
                  <Text>{moment(datePublished).startOf("ss").fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        )
      )}
    </Row>
  );
};

export default News;
