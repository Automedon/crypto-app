(this["webpackJsonpcypto-app"] = this["webpackJsonpcypto-app"] || []).push([
  [0],
  {
    311: function (e, t, c) {},
    312: function (e, t, c) {
      "use strict";
      c.r(t);
      var a,
        s = c(0),
        n = c(33),
        i = c.n(n),
        r = c(40),
        l = c(48),
        j = (c(206), c(35)),
        o = c(314),
        d = c(316),
        h = c(323),
        b = c(6),
        u = c(320),
        O = c(190),
        x = c(322),
        p = c(324),
        m = c(325),
        v = c(326),
        g = c(327),
        y = c(328),
        f = c.p + "static/media/cryptocurrency.1548aced.png",
        N = c(2),
        w = function () {
          var e = Object(s.useState)(!0),
            t = Object(b.a)(e, 2),
            c = t[0],
            a = t[1],
            n = Object(s.useState)(null),
            i = Object(b.a)(n, 2),
            l = i[0],
            j = i[1];
          return (
            Object(s.useEffect)(function () {
              var e = function () {
                return j(window.innerWidth);
              };
              return (
                window.addEventListener("resize", e),
                e(),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            Object(s.useEffect)(
              function () {
                a(!(l < 768));
              },
              [l]
            ),
            Object(N.jsxs)("div", {
              className: "nav-container",
              children: [
                Object(N.jsxs)("div", {
                  className: "logo-container",
                  children: [
                    Object(N.jsx)(u.a, { src: f, size: "large" }),
                    Object(N.jsx)(d.a.Title, {
                      level: 3,
                      className: "logo",
                      children: Object(N.jsx)(r.b, {
                        to: "/",
                        children: "Cryptoverse",
                      }),
                    }),
                    Object(N.jsx)(O.a, {
                      className: "menu-control-container",
                      onClick: function () {
                        return a(!c);
                      },
                      children: Object(N.jsx)(p.a, {}),
                    }),
                  ],
                }),
                c &&
                  Object(N.jsxs)(x.a, {
                    theme: "dark",
                    children: [
                      Object(N.jsx)(x.a.Item, {
                        icon: Object(N.jsx)(m.a, {}),
                        children: Object(N.jsx)(r.b, {
                          to: "/",
                          children: "Home",
                        }),
                      }),
                      Object(N.jsx)(x.a.Item, {
                        icon: Object(N.jsx)(v.a, {}),
                        children: Object(N.jsx)(r.b, {
                          to: "/cryptocurrencies",
                          children: "Cryptocurrencies",
                        }),
                      }),
                      Object(N.jsx)(x.a.Item, {
                        icon: Object(N.jsx)(g.a, {}),
                        children: Object(N.jsx)(r.b, {
                          to: "/exchanges",
                          children: "Exchanges",
                        }),
                      }),
                      Object(N.jsx)(x.a.Item, {
                        icon: Object(N.jsx)(y.a, {}),
                        children: Object(N.jsx)(r.b, {
                          to: "/news",
                          children: "News",
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        C = c(34),
        k = c.n(C),
        S = c(321),
        T = c(98),
        P = c(62),
        E = c(130),
        q = c(131),
        I = c(50),
        D = {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "2e18ffaa4emsh8b0d7e42807fa68p1eb03bjsna9c53270e83a",
        },
        F = function (e) {
          return { url: e, headers: D };
        },
        M = Object(q.a)({
          reducerPath: "crypto",
          baseQuery: Object(I.d)({
            baseUrl: "https://coinranking1.p.rapidapi.com",
          }),
          endpoints: function (e) {
            return {
              getCryptos: e.query({
                query: function (e) {
                  return F("/coins?limit=".concat(e));
                },
              }),
              getCryptoDetails: e.query({
                query: function (e) {
                  return F("/coin/".concat(e));
                },
              }),
              getCryptoHistory: e.query({
                query: function (e) {
                  var t = e.coinId,
                    c = e.timePeriod;
                  return F("/coin/".concat(t, "/history/").concat(c));
                },
              }),
              getExchanges: e.query({
                query: function () {
                  return F("/exchanges");
                },
              }),
            };
          },
        }),
        U = M.useGetCryptosQuery,
        A = M.useGetCryptoDetailsQuery,
        L = M.useGetCryptoHistoryQuery,
        $ = M.useGetExchangesQuery,
        H = c(313),
        Q = function () {
          return Object(N.jsx)("div", {
            className: "loader",
            children: Object(N.jsx)(H.a, {}),
          });
        },
        V = d.a.Text,
        G = S.a.Panel,
        z = function () {
          var e,
            t = $(),
            c = t.data,
            a = t.isFetching,
            s =
              null === c ||
              void 0 === c ||
              null === (e = c.data) ||
              void 0 === e
                ? void 0
                : e.exchanges;
          return a
            ? Object(N.jsx)(Q, {})
            : Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsxs)(T.a, {
                    children: [
                      Object(N.jsx)(P.a, { span: 6, children: "Exchanges" }),
                      Object(N.jsx)(P.a, {
                        span: 6,
                        children: "24h Trade Volume",
                      }),
                      Object(N.jsx)(P.a, { span: 6, children: "Markets" }),
                      Object(N.jsx)(P.a, { span: 6, children: "Change" }),
                    ],
                  }),
                  Object(N.jsx)(T.a, {
                    children: s.map(function (e) {
                      return Object(N.jsx)(P.a, {
                        span: 24,
                        children: Object(N.jsx)(S.a, {
                          children: Object(N.jsx)(
                            G,
                            {
                              showArrow: !1,
                              header: Object(N.jsxs)(
                                T.a,
                                {
                                  children: [
                                    Object(N.jsxs)(P.a, {
                                      span: 6,
                                      children: [
                                        Object(N.jsx)(V, {
                                          children: Object(N.jsxs)("strong", {
                                            children: [e.rank, "."],
                                          }),
                                        }),
                                        Object(N.jsx)(u.a, {
                                          className: "exchange-image",
                                          src: e.iconUrl,
                                        }),
                                        Object(N.jsx)(V, {
                                          children: Object(N.jsx)("strong", {
                                            children: e.name,
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(N.jsxs)(P.a, {
                                      span: 6,
                                      children: ["$", k()(e.volume)],
                                    }),
                                    Object(N.jsx)(P.a, {
                                      span: 6,
                                      children: k()(e.numberOfMarkets),
                                    }),
                                    Object(N.jsxs)(P.a, {
                                      span: 6,
                                      children: [k()(e.marketShare), "%"],
                                    }),
                                  ],
                                },
                                e.id
                              ),
                              children: Object(E.a)(e.description || ""),
                            },
                            e.id
                          ),
                        }),
                      });
                    }),
                  }),
                ],
              });
        },
        J = c(317),
        R = d.a.Title,
        W = function () {
          var e,
            t = U(10),
            c = t.data,
            a = t.isFetching,
            s =
              null === c ||
              void 0 === c ||
              null === (e = c.data) ||
              void 0 === e
                ? void 0
                : e.stats;
          return a
            ? Object(N.jsx)(Q, {})
            : Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)(R, {
                    level: 2,
                    className: "heading",
                    children: "Global Crypto Stats",
                  }),
                  Object(N.jsxs)(T.a, {
                    children: [
                      Object(N.jsxs)(P.a, {
                        span: 12,
                        children: [
                          Object(N.jsx)(J.a, {
                            title: "Total Cryptocurrencies",
                            value: k()(s.total),
                          }),
                          " ",
                        ],
                      }),
                      Object(N.jsx)(P.a, {
                        span: 12,
                        children: Object(N.jsx)(J.a, {
                          title: "Total Exchanges",
                          value: k()(s.totalExchanges),
                        }),
                      }),
                      Object(N.jsx)(P.a, {
                        span: 12,
                        children: Object(N.jsx)(J.a, {
                          title: "Total Market Cap",
                          value: k()(s.totalMarketCap),
                        }),
                      }),
                      Object(N.jsx)(P.a, {
                        span: 12,
                        children: Object(N.jsx)(J.a, {
                          title: "Total 24h Volume",
                          value: k()(s.total24hVolume),
                        }),
                      }),
                      Object(N.jsx)(P.a, {
                        span: 12,
                        children: Object(N.jsx)(J.a, {
                          title: "Total Markets",
                          value: k()(s.totalMarkets),
                        }),
                      }),
                    ],
                  }),
                  Object(N.jsxs)("div", {
                    className: "home-heading-container",
                    children: [
                      Object(N.jsx)(R, {
                        level: 2,
                        className: "home-title",
                        children: "Top 10 Cryptocurrencies in the world",
                      }),
                      Object(N.jsx)(R, {
                        level: 3,
                        className: "show-more",
                        children: Object(N.jsx)(r.b, {
                          to: "/cryptocurrencies",
                          children: "Show more",
                        }),
                      }),
                    ],
                  }),
                  Object(N.jsx)(Z, { simplified: !0 }),
                  Object(N.jsxs)("div", {
                    className: "home-heading-container",
                    children: [
                      Object(N.jsx)(R, {
                        level: 2,
                        className: "home-title",
                        children: "Latest Crypto News",
                      }),
                      Object(N.jsx)(R, {
                        level: 3,
                        className: "show-more",
                        children: Object(N.jsx)(r.b, {
                          to: "/news",
                          children: "Show more",
                        }),
                      }),
                    ],
                  }),
                  Object(N.jsx)(ye, { simplified: !0 }),
                ],
              });
        },
        _ = c(319),
        B = c(315),
        Z = function (e) {
          var t,
            c = e.simplified,
            a = U(c ? 10 : 100),
            n = a.data,
            i = a.isFetching,
            l =
              null === n ||
              void 0 === n ||
              null === (t = n.data) ||
              void 0 === t
                ? void 0
                : t.coins,
            j = Object(s.useState)(l),
            o = Object(b.a)(j, 2),
            d = o[0],
            h = o[1],
            u = Object(s.useState)(""),
            O = Object(b.a)(u, 2),
            x = O[0],
            p = O[1];
          return (
            Object(s.useEffect)(
              function () {
                var e =
                  null === l || void 0 === l
                    ? void 0
                    : l.filter(function (e) {
                        return e.name.toLowerCase().includes(x.toLowerCase());
                      });
                h(e);
              },
              [l, x]
            ),
            i
              ? Object(N.jsx)(Q, {})
              : Object(N.jsxs)(N.Fragment, {
                  children: [
                    !c &&
                      Object(N.jsx)("div", {
                        className: "search-crypto",
                        children: Object(N.jsx)(_.a, {
                          placeholder: "Search Cryptocurrency",
                          onChange: function (e) {
                            return p(e.target.value);
                          },
                        }),
                      }),
                    Object(N.jsx)(T.a, {
                      gutter: [32, 32],
                      className: "crypto-card-container",
                      children:
                        null === d || void 0 === d
                          ? void 0
                          : d.map(function (e) {
                              var t = e.id,
                                c = e.rank,
                                a = e.name,
                                s = e.iconUrl,
                                n = e.price,
                                i = e.marketCap,
                                l = e.change;
                              return Object(N.jsx)(
                                P.a,
                                {
                                  xs: 24,
                                  sm: 12,
                                  lg: 6,
                                  className: "crypto-card",
                                  children: Object(N.jsx)(r.b, {
                                    to: "/crypto/".concat(t),
                                    children: Object(N.jsxs)(B.a, {
                                      title: "".concat(c, ". ").concat(a),
                                      extra: Object(N.jsx)("img", {
                                        className: "crypto-image",
                                        src: s,
                                        alt: "crypto",
                                      }),
                                      hoverable: !0,
                                      children: [
                                        Object(N.jsxs)("p", {
                                          children: ["Price: ", k()(n), " "],
                                        }),
                                        Object(N.jsxs)("p", {
                                          children: ["Market Cap: ", k()(i)],
                                        }),
                                        Object(N.jsxs)("p", {
                                          children: [
                                            "Daily Change: ",
                                            k()(l),
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                                t
                              );
                            }),
                    }),
                  ],
                })
          );
        },
        K = c(318),
        X = c(329),
        Y = c(330),
        ee = c(331),
        te = c(332),
        ce = c(135),
        ae = c(333),
        se = c(193),
        ne = (c(310), c(185)),
        ie = d.a.Title,
        re = function (e) {
          for (
            var t,
              c = e.coinHistory,
              a = e.currentPrice,
              s = e.coinName,
              n = [],
              i = [],
              r = 0;
            r <
            (null === c ||
            void 0 === c ||
            null === (l = c.data) ||
            void 0 === l ||
            null === (j = l.history) ||
            void 0 === j
              ? void 0
              : j.length);
            r += 1
          ) {
            var l, j, o;
            n.push(
              null === c ||
                void 0 === c ||
                null === (o = c.data) ||
                void 0 === o
                ? void 0
                : o.history[r].price
            );
          }
          for (
            var d = 0;
            d <
            (null === c ||
            void 0 === c ||
            null === (h = c.data) ||
            void 0 === h ||
            null === (b = h.history) ||
            void 0 === b
              ? void 0
              : b.length);
            d += 1
          ) {
            var h, b, u;
            i.push(
              new Date(
                null === c ||
                void 0 === c ||
                null === (u = c.data) ||
                void 0 === u
                  ? void 0
                  : u.history[d].timestamp
              ).toLocaleDateString()
            );
          }
          var O = {
            labels: i,
            datasets: [
              {
                label: "Price In USD",
                data: n,
                fill: !1,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd",
              },
            ],
          };
          return Object(N.jsxs)(N.Fragment, {
            children: [
              Object(N.jsxs)(T.a, {
                className: "chart-header",
                children: [
                  Object(N.jsxs)(ie, {
                    level: 2,
                    className: "chart-title",
                    children: [s, " Price Chart", " "],
                  }),
                  Object(N.jsxs)(P.a, {
                    className: "price-container",
                    children: [
                      Object(N.jsxs)(ie, {
                        level: 5,
                        className: "price-change",
                        children: [
                          "Change: ",
                          null === c ||
                          void 0 === c ||
                          null === (t = c.data) ||
                          void 0 === t
                            ? void 0
                            : t.change,
                          "%",
                        ],
                      }),
                      Object(N.jsxs)(ie, {
                        level: 5,
                        className: "current-price",
                        children: ["Current ", s, " Price: $ ", a],
                      }),
                    ],
                  }),
                ],
              }),
              Object(N.jsx)(ne.a, {
                type: "line",
                data: O,
                options: {
                  scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] },
                },
              }),
            ],
          });
        },
        le = d.a.Title,
        je = d.a.Text,
        oe = K.a.Option,
        de = function () {
          var e,
            t,
            c,
            a,
            n = Object(j.f)().coinId,
            i = Object(s.useState)("7d"),
            r = Object(b.a)(i, 2),
            l = r[0],
            o = r[1],
            d = A(n),
            h = d.data,
            u = d.isFetching,
            O = L({ coinId: n, timePeriod: l }).data,
            x =
              null === h ||
              void 0 === h ||
              null === (e = h.data) ||
              void 0 === e
                ? void 0
                : e.coin;
          if (u) return Object(N.jsx)(Q, {});
          var p = [
              {
                title: "Price to USD",
                value: "$ ".concat(x.price && k()(x.price)),
                icon: Object(N.jsx)(X.a, {}),
              },
              { title: "Rank", value: x.rank, icon: Object(N.jsx)(Y.a, {}) },
              {
                title: "24h Volume",
                value: "$ ".concat(x.volume && k()(x.volume)),
                icon: Object(N.jsx)(ee.a, {}),
              },
              {
                title: "Market Cap",
                value: "$ ".concat(x.marketCap && k()(x.marketCap)),
                icon: Object(N.jsx)(X.a, {}),
              },
              {
                title: "All-time-high(daily avg.)",
                value: "$ ".concat(k()(x.allTimeHigh.price)),
                icon: Object(N.jsx)(te.a, {}),
              },
            ],
            m = [
              {
                title: "Number Of Markets",
                value: x.numberOfMarkets,
                icon: Object(N.jsx)(v.a, {}),
              },
              {
                title: "Number Of Exchanges",
                value: x.numberOfExchanges,
                icon: Object(N.jsx)(g.a, {}),
              },
              {
                title: "Aprroved Supply",
                value: x.approvedSupply
                  ? Object(N.jsx)(ce.a, {})
                  : Object(N.jsx)(ae.a, {}),
                icon: Object(N.jsx)(se.a, {}),
              },
              {
                title: "Total Supply",
                value: "$ ".concat(k()(x.totalSupply)),
                icon: Object(N.jsx)(se.a, {}),
              },
              {
                title: "Circulating Supply",
                value: "$ ".concat(k()(x.circulatingSupply)),
                icon: Object(N.jsx)(se.a, {}),
              },
            ];
          return Object(N.jsxs)(P.a, {
            className: "coin-detail-container",
            children: [
              Object(N.jsxs)(P.a, {
                className: "coin-heading-container",
                children: [
                  Object(N.jsxs)(le, {
                    level: 2,
                    className: "coin-name",
                    children: [
                      null === h ||
                      void 0 === h ||
                      null === (t = h.data) ||
                      void 0 === t
                        ? void 0
                        : t.coin.name,
                      " (",
                      null === h ||
                      void 0 === h ||
                      null === (c = h.data) ||
                      void 0 === c
                        ? void 0
                        : c.coin.slug,
                      ") Price",
                    ],
                  }),
                  Object(N.jsxs)("p", {
                    children: [
                      x.name,
                      " live price in US Dollar (USD). View value statistics, market cap and supply.",
                    ],
                  }),
                ],
              }),
              Object(N.jsx)(K.a, {
                defaultValue: "7d",
                className: "select-timeperiod",
                placeholder: "Select Timeperiod",
                onChange: function (e) {
                  return o(e);
                },
                children: ["24h", "7d", "30d", "1y", "5y"].map(function (e) {
                  return Object(N.jsx)(oe, { value: e, children: e }, e);
                }),
              }),
              Object(N.jsx)(re, {
                coinHistory: O,
                currentPrice: k()(x.price),
                coinName: x.name,
              }),
              Object(N.jsxs)(P.a, {
                className: "stats-container",
                children: [
                  Object(N.jsxs)(P.a, {
                    className: "coin-value-statistics",
                    children: [
                      Object(N.jsxs)(P.a, {
                        className: "coin-value-statistics-heading",
                        children: [
                          Object(N.jsxs)(le, {
                            level: 3,
                            className: "coin-details-heading",
                            children: [x.name, " Value Statistics"],
                          }),
                          Object(N.jsxs)("p", {
                            children: [
                              "An overview showing the statistics of ",
                              x.name,
                              ", such as the base and quote currency, the rank, and trading volume.",
                            ],
                          }),
                        ],
                      }),
                      p.map(function (e) {
                        var t = e.icon,
                          c = e.title,
                          a = e.value;
                        return Object(N.jsxs)(P.a, {
                          className: "coin-stats",
                          children: [
                            Object(N.jsxs)(P.a, {
                              className: "coin-stats-name",
                              children: [
                                Object(N.jsx)(je, { children: t }),
                                Object(N.jsx)(je, { children: c }),
                              ],
                            }),
                            Object(N.jsx)(je, {
                              className: "stats",
                              children: a,
                            }),
                          ],
                        });
                      }),
                    ],
                  }),
                  Object(N.jsxs)(P.a, {
                    className: "other-stats-info",
                    children: [
                      Object(N.jsxs)(P.a, {
                        className: "coin-value-statistics-heading",
                        children: [
                          Object(N.jsx)(le, {
                            level: 3,
                            className: "coin-details-heading",
                            children: "Other Stats Info",
                          }),
                          Object(N.jsxs)("p", {
                            children: [
                              "An overview showing the statistics of ",
                              x.name,
                              ", such as the base and quote currency, the rank, and trading volume.",
                            ],
                          }),
                        ],
                      }),
                      m.map(function (e) {
                        var t = e.icon,
                          c = e.title,
                          a = e.value;
                        return Object(N.jsxs)(P.a, {
                          className: "coin-stats",
                          children: [
                            Object(N.jsxs)(P.a, {
                              className: "coin-stats-name",
                              children: [
                                Object(N.jsx)(je, { children: t }),
                                Object(N.jsx)(je, { children: c }),
                              ],
                            }),
                            Object(N.jsx)(je, {
                              className: "stats",
                              children: a,
                            }),
                          ],
                        });
                      }),
                    ],
                  }),
                ],
              }),
              Object(N.jsxs)(P.a, {
                className: "coin-desc-link",
                children: [
                  Object(N.jsxs)(T.a, {
                    className: "coin-desc",
                    children: [
                      Object(N.jsxs)(le, {
                        level: 3,
                        className: "coin-details-heading",
                        children: ["What is ", x.name, "?"],
                      }),
                      Object(E.a)(x.description),
                    ],
                  }),
                  Object(N.jsxs)(P.a, {
                    className: "coin-links",
                    children: [
                      Object(N.jsxs)(le, {
                        level: 3,
                        className: "coin-details-heading",
                        children: [x.name, " Links"],
                      }),
                      null === (a = x.links) || void 0 === a
                        ? void 0
                        : a.map(function (e) {
                            return Object(N.jsxs)(
                              T.a,
                              {
                                className: "coin-link",
                                children: [
                                  Object(N.jsx)(le, {
                                    level: 5,
                                    className: "link-name",
                                    children: e.type,
                                  }),
                                  Object(N.jsx)("a", {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: e.name,
                                  }),
                                ],
                              },
                              e.name
                            );
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        he = c(187),
        be = c.n(he),
        ue = {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "2e18ffaa4emsh8b0d7e42807fa68p1eb03bjsna9c53270e83a",
        },
        Oe = Object(q.a)({
          reducerPath: "cryptoNews",
          baseQuery: Object(I.d)({
            baseUrl: "https://bing-news-search1.p.rapidapi.com",
          }),
          endpoints: function (e) {
            return {
              getCryptosNews: e.query({
                query: function (e) {
                  var t = e.newsCategory,
                    c = e.count;
                  return {
                    url: "/news/search?q="
                      .concat(
                        t,
                        "&safeSearch=Off&textFormat=Raw&freshness=Day&count="
                      )
                      .concat(c),
                    headers: ue,
                  };
                },
              }),
            };
          },
        }),
        xe = Oe.useGetCryptosNewsQuery,
        pe = c.p + "static/media/cryptonews.a72f00c4.jpg",
        me = d.a.Text,
        ve = d.a.Title,
        ge = K.a.Option,
        ye = function (e) {
          var t,
            c = e.simplified,
            a = Object(s.useState)("Cryptocurrency"),
            n = Object(b.a)(a, 2),
            i = n[0],
            r = n[1],
            l = xe({ newsCategory: i, count: c ? 6 : 12 }).data,
            j = U(100).data;
          return (null === l || void 0 === l ? void 0 : l.value)
            ? Object(N.jsxs)(T.a, {
                gutter: [24, 24],
                children: [
                  !c &&
                    Object(N.jsx)(P.a, {
                      span: 24,
                      children: Object(N.jsxs)(K.a, {
                        showSearch: !0,
                        className: "select-news",
                        placeholder: "Select a Crypto",
                        optionFilterProp: "children",
                        onChange: function (e) {
                          return r(e);
                        },
                        filterOption: function (e, t) {
                          return (
                            t.children.toLowerCase().indexOf(e.toLowerCase()) >=
                            0
                          );
                        },
                        children: [
                          Object(N.jsx)(ge, {
                            value: "Cryptocurrency",
                            children: "Cryptocurrency",
                          }),
                          null === j ||
                          void 0 === j ||
                          null === (t = j.data) ||
                          void 0 === t
                            ? void 0
                            : t.coins.map(function (e) {
                                var t = e.name;
                                return Object(N.jsx)(ge, {
                                  value: t,
                                  children: t,
                                });
                              }),
                        ],
                      }),
                    }),
                  l.value.map(function (e, t) {
                    var c,
                      a,
                      s,
                      n,
                      i,
                      r = e.url,
                      l = e.name,
                      j = e.datePublished,
                      o = e.image,
                      d = e.description,
                      h = e.provider;
                    return Object(N.jsx)(
                      P.a,
                      {
                        xs: 24,
                        sm: 12,
                        lg: 8,
                        children: Object(N.jsx)(B.a, {
                          hoverable: !0,
                          className: "news-card",
                          children: Object(N.jsxs)("a", {
                            href: r,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              Object(N.jsxs)("div", {
                                className: "news-image-container",
                                children: [
                                  Object(N.jsx)(ve, {
                                    className: "news-title",
                                    level: 4,
                                    children: l,
                                  }),
                                  Object(N.jsx)("img", {
                                    style: { width: 100, height: 100 },
                                    src:
                                      (o &&
                                        (null === o ||
                                        void 0 === o ||
                                        null === (c = o.thumbnail) ||
                                        void 0 === c
                                          ? void 0
                                          : c.contentUrl)) ||
                                      pe,
                                    alt: "News",
                                  }),
                                ],
                              }),
                              Object(N.jsx)("p", {
                                children:
                                  d.length > 100
                                    ? "".concat(d.substring(0, 100), " ...")
                                    : d,
                              }),
                              Object(N.jsxs)("div", {
                                className: "provider-container",
                                children: [
                                  Object(N.jsxs)("div", {
                                    children: [
                                      Object(N.jsx)(u.a, {
                                        src:
                                          ((null === h || void 0 === h
                                            ? void 0
                                            : h.length) &&
                                            (null === (a = h[0]) ||
                                            void 0 === a ||
                                            null === (s = a.image) ||
                                            void 0 === s ||
                                            null === (n = s.thumbnail) ||
                                            void 0 === n
                                              ? void 0
                                              : n.contentUrl)) ||
                                          pe,
                                        alt: "news",
                                      }),
                                      Object(N.jsx)(me, {
                                        className: "provider-name",
                                        children:
                                          (null === h || void 0 === h
                                            ? void 0
                                            : h.length) &&
                                          (null === (i = h[0]) || void 0 === i
                                            ? void 0
                                            : i.name),
                                      }),
                                    ],
                                  }),
                                  Object(N.jsx)(me, {
                                    children: be()(j).startOf("ss").fromNow(),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      t
                    );
                  }),
                ],
              })
            : Object(N.jsx)(Q, {});
        },
        fe =
          (c(311),
          function () {
            return Object(N.jsxs)("div", {
              className: "app",
              children: [
                Object(N.jsx)("div", {
                  className: "navbar",
                  children: Object(N.jsx)(w, {}),
                }),
                Object(N.jsxs)("div", {
                  className: "main",
                  children: [
                    Object(N.jsx)(o.a, {
                      children: Object(N.jsx)("div", {
                        className: "routes",
                        children: Object(N.jsxs)(j.c, {
                          children: [
                            Object(N.jsx)(j.a, {
                              exact: !0,
                              path: "/",
                              children: Object(N.jsx)(W, {}),
                            }),
                            Object(N.jsx)(j.a, {
                              exact: !0,
                              path: "/exchanges",
                              children: Object(N.jsx)(z, {}),
                            }),
                            Object(N.jsx)(j.a, {
                              exact: !0,
                              path: "/cryptocurrencies",
                              children: Object(N.jsx)(Z, {}),
                            }),
                            Object(N.jsx)(j.a, {
                              exact: !0,
                              path: "/crypto/:coinId",
                              children: Object(N.jsx)(de, {}),
                            }),
                            Object(N.jsx)(j.a, {
                              exact: !0,
                              path: "/news",
                              children: Object(N.jsx)(ye, {}),
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(N.jsxs)("div", {
                      className: "footer",
                      children: [
                        Object(N.jsxs)(d.a.Title, {
                          level: 5,
                          style: { color: "white", textAlign: "center" },
                          children: [
                            "Cryptoverse ",
                            Object(N.jsx)("br", {}),
                            "All right reserved",
                          ],
                        }),
                        Object(N.jsxs)(h.b, {
                          children: [
                            Object(N.jsx)(r.b, { to: "/", children: "Home" }),
                            Object(N.jsx)(r.b, {
                              to: "/exchanges",
                              children: "Exchanges",
                            }),
                            Object(N.jsx)(r.b, {
                              to: "/news",
                              children: "News",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        Ne = c(7),
        we = c(14),
        Ce = Object(we.a)({
          reducer:
            ((a = {}),
            Object(Ne.a)(a, M.reducerPath, M.reducer),
            Object(Ne.a)(a, Oe.reducerPath, Oe.reducer),
            a),
        });
      i.a.render(
        Object(N.jsx)(r.a, {
          children: Object(N.jsx)(l.a, {
            store: Ce,
            children: Object(N.jsx)(fe, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[312, 1, 2]],
]);
//# sourceMappingURL=main.0a45e883.chunk.js.map
