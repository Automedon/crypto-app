import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const coins = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState(coins);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredData = coins?.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );

    setCryptos(filteredData);
  }, [coins, search]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map(
          ({ id, rank, name, iconUrl, price, marketCap, change }) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={id}>
              <Link to={`/crypto/${id}`}>
                <Card
                  title={`${rank}. ${name}`}
                  extra={
                    <img className="crypto-image" src={iconUrl} alt="crypto" />
                  }
                  hoverable
                >
                  <p>Price: {millify(price)} </p>
                  <p>Market Cap: {millify(marketCap)}</p>
                  <p>Daily Change: {millify(change)}%</p>
                </Card>
              </Link>
            </Col>
          )
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
