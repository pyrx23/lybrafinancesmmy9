(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1522],
  {
    23333: function (e, n, a) {
      "use strict";
      a.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = a(85893),
        t = a(37923),
        i = a.n(t),
        r = a(41664),
        o = a.n(r),
        c = a(67294),
        l = a(74971);
      function d(e) {
        let { mode: n } = (0, c.useContext)(l.S),
          { id: a } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className:
              1 == n
                ? "".concat(i().footer, " ").concat(i().footer_dark)
                : "dashboard" == a
                ? "".concat(i().footer, " ")
                : "".concat(i().footer, " ").concat(i().footerW),
            children: (0, s.jsxs)("div", {
              className: "".concat(
                i().bottom,
                " ",
                "section",
                " ",
                "justify_space_between"
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: "".concat(
                    i().alingCenter,
                    " ",
                    "flex_align_center"
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className: "".concat(
                        i().logo,
                        " ",
                        "justify_space_between"
                      ),
                      children: [
                        "dashboard" == a
                          ? (0, s.jsx)("img", {
                              src: "/images/icon/lybra.svg",
                              alt: "icon",
                            })
                          : (0, s.jsx)("img", {
                              src: "/images/logo.png",
                              style: { width: "32px" },
                              alt: "icon",
                            }),
                        (0, s.jsx)("span", { children: "Lybra Finance" }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "".concat(i().menu),
                      children: [
                        (0, s.jsx)(o(), {
                          href: "/",
                          children: (0, s.jsx)("span", {
                            className: "Home" == a ? i().active : "",
                            children: "Home",
                          }),
                        }),
                        (0, s.jsx)(o(), {
                          href: "/eUSD",
                          children: (0, s.jsx)("span", {
                            className: "Eusd" == a ? i().active : "",
                            children: "eUSD",
                          }),
                        }),
                        (0, s.jsx)(o(), {
                          href: "/peUSD",
                          children: (0, s.jsx)("span", {
                            className: "peUSD" == a ? i().active : "",
                            children: "peUSD",
                          }),
                        }),
                        (0, s.jsx)(o(), {
                          target: "_blank",
                          href: "https://docs.lybra.finance/lybra-finance-docs-v2/",
                          rel: "nofollow noopener noreferrer",
                          children: (0, s.jsx)("span", { children: "Docs" }),
                        }),
                        (0, s.jsx)(o(), {
                          target: "_blank",
                          href: "https://docs.lybra.finance/lybra-finance-technical-whitepaper-v2/",
                          rel: "nofollow noopener noreferrer",
                          children: (0, s.jsx)("span", {
                            children: "Whitepaper",
                          }),
                        }),
                        (0, s.jsx)(o(), {
                          target: "_blank",
                          href: "https://v1.lybra.finance/",
                          rel: "nofollow noopener noreferrer",
                          children: (0, s.jsx)("span", {
                            children: "Lybra V1",
                          }),
                        }),
                        (0, s.jsx)(o(), {
                          target: "_blank",
                          href: "https://docs.lybra.finance/lybra-finance-docs-v2/supplement/audits-and-bug-bounty",
                          rel: "nofollow noopener noreferrer",
                          children: (0, s.jsx)("span", { children: "Audits" }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "".concat(i().icon),
                  children: [
                    (0, s.jsx)(o(), {
                      target: "_blank",
                      href: "https://github.com/LybraFinance/LybraV2",
                      rel: "nofollow noopener noreferrer",
                      children: (0, s.jsx)("img", {
                        src:
                          "dashboard" == a
                            ? "/images/icon/gitbook.svg"
                            : "/images/icon/gitbook_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, s.jsx)(o(), {
                      target: "_blank",
                      href: "https://twitter.com/LybraFinance",
                      rel: "nofollow noopener noreferrer",
                      children: (0, s.jsx)("img", {
                        src:
                          "dashboard" == a
                            ? "/images/icon/twitter.svg"
                            : "/images/icon/twitter_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, s.jsx)(o(), {
                      target: "_blank",
                      href: "https://discord.gg/mgyq3PhdJg",
                      rel: "nofollow noopener noreferrer",
                      children: (0, s.jsx)("img", {
                        src:
                          "dashboard" == a
                            ? "/images/icon/discord.svg"
                            : "/images/icon/discord_2.svg",
                        alt: "icon",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    22267: function (e, n, a) {
      "use strict";
      a.d(n, {
        Z: function () {
          return L;
        },
      });
      var s = a(85893),
        t = a(9008),
        i = a.n(t),
        r = a(83136),
        o = a.n(r),
        c = a(41664),
        l = a.n(c),
        d = a(89159),
        p = a(67294),
        u = a(74971),
        m = a(69077),
        h = a(86159),
        y = a.n(h),
        g = a(2711),
        x = a.n(g);
      a(21496);
      var _ = a(44111),
        j = a.n(_),
        f = a(37918),
        v = a.n(f);
      function b(e) {
        let { id: n, copyTip: a } = e,
          {
            address: t,
            mode: i,
            setAddress: r,
            yearList: o,
            showLoading: c,
            readOnlyMode: l,
            setReadOnlyMode: d,
            setOldAddress: m,
            tramsactionUrl: h,
            userChain: g,
            mainnetNetId: _,
          } = (0, p.useContext)(u.S),
          f = (e) => {
            let n;
            if (e) {
              let o = new Date(),
                c = o - 1e3 * e;
              if (c < 0) return;
              var a = c / 6e4,
                s = c / 36e5,
                t = c / 864e5,
                i = c / 2592e6;
              if (i >= 1 && i < 4) n = parseInt(i) + "mo";
              else if (t >= 1 && t < 31) n = parseInt(t) + "d";
              else if (s >= 1 && s < 24) n = parseInt(s) + "h";
              else if (a >= 1 && a < 60) n = parseInt(a) + "m";
              else if (c >= 0 && c <= 6e4) n = "just";
              else {
                var r = new Date();
                r.setTime(e),
                  (n =
                    r.getFullYear() +
                    "-" +
                    (r.getMonth() + 1 < 10
                      ? "0" + (r.getMonth() + 1)
                      : r.getMonth() + 1) +
                    "-" +
                    (10 > r.getDate() ? "0" + r.getDate() : r.getDate()));
              }
              return n;
            }
          },
          [b, N] = (0, p.useState)(""),
          w = async (e) => {
            N(e.target.value);
          },
          T = async () => {
            new (v())().utils.isAddress(b) && (r(b), d(!0));
          };
        return (
          (0, p.useEffect)(() => {
            x().init({ duration: 800, delay: 0, easing: "ease-in-out" });
          }),
          (0, s.jsxs)("div", {
            className:
              1 == i && ("dashboard" == n || "Earn" == n)
                ? "".concat(y().transaction, " ").concat(y().dark)
                : "".concat(y().transaction, " "),
            "data-aos": "fade-left",
            children: [
              (0, s.jsxs)("div", {
                className: "justify_space_between",
                children: [
                  (0, s.jsx)("p", {
                    className: y().title,
                    children: "Account",
                  }),
                  (0, s.jsx)("div", {
                    className: y().close,
                    children: (0, s.jsx)("img", {
                      src: "/images/icon/close.svg",
                      onClick: () => e.showAccount(),
                      alt: "icon",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: y().account,
                children: [
                  (0, s.jsxs)("div", {
                    className: "justify_align_center",
                    children: [
                      (0, s.jsx)(j(), {
                        diameter: 100,
                        seed: t,
                        style: { width: "40px" },
                      }),
                      (0, s.jsx)("p", {
                        children: t ? t.slice(0, 6) + ".." + t.slice(-4) : "",
                      }),
                      (0, s.jsxs)("div", {
                        className: y().tips,
                        children: [
                          (0, s.jsx)("div", {
                            className: y().tipIcon,
                            onClick: () => e.changeCopy(),
                            children: (0, s.jsx)("img", {
                              src: "/images/transaction/copy.svg",
                              style: { width: "18px !important" },
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("span", { children: a }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "justify_align_center",
                    children: [
                      (0, s.jsxs)("div", {
                        className: y().tips,
                        children: [
                          (0, s.jsx)("div", {
                            className: y().tipIcon,
                            children: (0, s.jsx)("a", {
                              href:
                                g == _
                                  ? "https://etherscan.io/address/" + t
                                  : "https://arbiscan.io/address/" + t,
                              target: "_blank",
                              rel: "nofollow noopener noreferrer",
                              children: (0, s.jsx)("img", {
                                alt: "icon",
                                src: "/images/transaction/etherscan.svg",
                              }),
                            }),
                          }),
                          (0, s.jsx)("span", {
                            style: { left: "-48px" },
                            children: "View on Etherscan",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: y().tips,
                        onClick: () => e.disconnect(),
                        children: [
                          (0, s.jsx)("div", {
                            className: y().tipIcon,
                            children: (0, s.jsx)("img", {
                              src: "/images/transaction/disconnect.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("span", {
                            style: { left: "-26px" },
                            children: "Disconnect",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l
                ? (0, s.jsxs)("div", {
                    className: y().readonly,
                    children: [
                      (0, s.jsx)("img", {
                        src: "/images/transaction/waring.svg",
                        alt: "icon",
                      }),
                      (0, s.jsx)("span", { children: "Read-only mode." }),
                    ],
                  })
                : null,
              (0, s.jsxs)("div", {
                className: y().recent,
                children: ["Recent Activity (", o.length, ")"],
              }),
              (0, s.jsx)("div", {
                className: y().transactionList,
                children: c
                  ? (0, s.jsx)("div", {
                      className: y().showLoading,
                      children: (0, s.jsx)("img", {
                        alt: "icon",
                        src: "/images/transaction/load.svg",
                        className: y().loadings,
                      }),
                    })
                  : (0, s.jsx)(s.Fragment, {
                      children: o.map((e, n) =>
                        (0, s.jsx)(
                          "a",
                          {
                            href: h + e.transactionHash,
                            target: "_blank",
                            rel: "nofollow noopener noreferrer",
                            children: (0, s.jsxs)("div", {
                              className: y().item,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: y().value,
                                  children: [
                                    "Convert to Arbitrum" == e.event ||
                                    "Converted from Arbitrum" == e.event ||
                                    "Convert to Ethereum" == e.event ||
                                    "Converted from Ethereum" == e.event
                                      ? (0, s.jsx)("img", {
                                          alt: "icon",
                                          src: "/images/transaction/chain.svg",
                                        })
                                      : (0, s.jsx)("img", {
                                          alt: "icon",
                                          src:
                                            "/images/transaction/" +
                                            e.event +
                                            ".svg",
                                        }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("p", { children: e.event }),
                                        (0, s.jsxs)("span", {
                                          children: [
                                            Number(
                                              e.amount.toFixed(4)
                                            ).toLocaleString(),
                                            " ",
                                            e.coin,
                                            " ",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("span", { children: f(e.date) }),
                              ],
                            }),
                          },
                          n
                        )
                      ),
                    }),
              }),
              (0, s.jsxs)("div", {
                className: y().trackWallet,
                children: [
                  (0, s.jsx)("p", {
                    children: "Track wallet balance in read-only mode",
                  }),
                  (0, s.jsx)("input", {
                    type: "text",
                    placeholder: "Enter Ethereum address",
                    onChange: w.bind(this),
                    value: b,
                  }),
                  (0, s.jsx)("div", {
                    className:
                      void 0 !== b && "" !== b
                        ? "button blue"
                        : "button disable",
                    style: { height: "45px" },
                    onClick: T.bind(this),
                    children: "Track wallet",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var N = a(20640),
        w = a.n(N),
        T = a(11163),
        k = a(97080),
        S = [
          {
            inputs: [
              { internalType: "address", name: "_fund", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "bonusMigrationPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "lybraFund",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "migrate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "oldLBR",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "time", type: "uint256" },
            ],
            name: "setBonusMigrationPeriod",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_fund", type: "address" },
            ],
            name: "setLybraFund",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        M = a(70794);
      function C(e) {
        let n, a, t, i;
        let {
            setTipMessage: r,
            LBR: o,
            oldLBR: c,
            eusdAbi: l,
            TokenHelper: d,
          } = (0, p.useContext)(u.S),
          { lbrAllowance: h, lbrBalanceOf: y } = e,
          [g, x] = (0, p.useState)(!1);
        h < y
          ? ((n = c),
            (a = "approve"),
            (t = [
              d,
              "115792089237316195423570985008687907853269984665640564039457",
            ]),
            (i = l))
          : ((n = d), (a = "migrate"), (t = [new M.Z(y).toFixed()]), (i = S));
        let {
          isLoading: _,
          write: j,
          data: f,
        } = (0, m.GG)({
          mode: "recklesslyUnprepared",
          address: n,
          abi: i,
          functionName: a,
          args: t,
          onSuccess(e) {
            x(!0);
          },
          onError(n) {
            x(!1), e.updateIsLoading(!1);
          },
        });
        (0, m.BX)({
          hash: null == f ? void 0 : f.hash,
          onSuccess(n) {
            x(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              r({
                title: h < y ? "Approve To Migrate" : "Migrate",
                type: "success",
              }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 5e3);
            let a = localStorage.getItem("isnewLBRAsset"),
              s = localStorage.getItem("newLBRAddress")
                ? localStorage.getItem("newLBRAddress")
                : [];
            (a && -1 != s.indexOf(address)) || b();
          },
        });
        let v = async () => {
            r({
              title: h < y ? "Approve To Migrate" : "Migrate",
              type: "loading",
            }),
              e.updateIsLoading(!0),
              j();
          },
          b = async () => {
            ethereum
              .request({
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: { address: o, symbol: "LBR", decimals: 18 },
                },
              })
              .then((e) => {
                if (e) {
                  let e = localStorage.getItem("newLBRAddress");
                  if ((localStorage.setItem("isnewLBRAsset", !0), e))
                    (e = JSON.parse(e)).push(address),
                      localStorage.setItem("newLBRAddress", JSON.stringify(e));
                  else {
                    let e = [];
                    e.push(address),
                      localStorage.setItem("newLBRAddress", JSON.stringify(e));
                  }
                } else throw Error("Something went wrong.");
              })
              .catch(console.error);
          },
          N = null,
          [w, T] = (0, p.useState)({
            day: "00",
            hour: "00",
            minute: "00",
            second: "00",
          }),
          k = () => {
            let e = new Date(),
              n = parseInt(e.getTime() / 1e3),
              a = 1696118400 - n;
            if (a <= -1) clearTimeout(N);
            else {
              let e = Math.floor(a / 60 / 60 / 24),
                n = Math.floor((a / 60 / 60) % 24),
                s = Math.floor((a / 60) % 60),
                t = Math.floor(a % 60);
              e < 10 && (e = "0" + e),
                n < 10 && (n = "0" + n),
                s < 10 && (s = "0" + s),
                t < 10 && (t = "0" + t),
                T({ day: e, hour: n, minute: s, second: t }),
                (N = setTimeout(() => {
                  k();
                }, 1e3));
            }
          };
        return (
          (0, p.useEffect)(() => {
            k();
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              className: _ || g ? "button faucet disabled " : "button faucet ",
              onClick: () => (_ ? null : v()),
              children:
                _ || g
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("img", {
                          className: "loading",
                          alt: "icon",
                          src: "/images/icon/loading.svg",
                        }),
                        h < y ? "Approve To Migrate" : "Migrate",
                        (0, s.jsx)("div", {
                          className: "showTip",
                          children: (0, s.jsxs)("div", {
                            className: "qaIcon",
                            children: [
                              (0, s.jsx)("img", {
                                src: "/images/icon/qa_dark.svg",
                                alt: "qa",
                              }),
                              (0, s.jsxs)("div", {
                                className: "tipMain",
                                style: { top: "32px", height: "80px" },
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "tip-trangle-top",
                                  }),
                                  "LBR Migration will completely stop in ",
                                  (0, s.jsx)("span", {
                                    className: "colorBlue",
                                    children:
                                      w.day +
                                      ":" +
                                      w.hour +
                                      ":" +
                                      w.minute +
                                      ":" +
                                      w.second,
                                  }),
                                  ".",
                                  (0, s.jsx)("br", {}),
                                  "Please migrate your V1 LBR to V2 LBR as soon as possible.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        h < y ? "Approve To Migrate" : "Migrate",
                        (0, s.jsx)("div", {
                          className: "showTip",
                          children: (0, s.jsxs)("div", {
                            className: "qaIcon",
                            children: [
                              (0, s.jsx)("img", {
                                src: "/images/icon/qa_dark.svg",
                                alt: "qa",
                              }),
                              (0, s.jsxs)("div", {
                                className: "tipMain",
                                style: { top: "32px", height: "80px" },
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "tip-trangle-top",
                                  }),
                                  "LBR Migration will completely stop in ",
                                  (0, s.jsx)("span", {
                                    className: "colorBlue",
                                    children:
                                      w.day +
                                      ":" +
                                      w.hour +
                                      ":" +
                                      w.minute +
                                      ":" +
                                      w.second,
                                  }),
                                  ".",
                                  (0, s.jsx)("br", {}),
                                  "Please migrate your V1 LBR to V2 LBR as soon as possible.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
            }),
          })
        );
      }
      function L(e) {
        let { switchNetwork: n } = (0, m.g0)(),
          { id: a } = e,
          {
            address: t,
            setAddress: r,
            account: c,
            setMenuIndex: h,
            setCoinType: y,
            menuIndex: g,
            mainnetNetId: x,
            setAsCoin: _,
            setUseETHValut: j,
            stETHVault: f,
            mode: v,
            setMode: N,
            oldLBR: S,
            TokenHelper: M,
            eusdAbi: L,
            showTransaction: I,
            setShowTransaction: A,
          } = (0, p.useContext)(u.S),
          { disconnect: B } = (0, m.qL)(),
          D = (0, T.useRouter)(),
          E = async () => {
            B(), r(c.address);
          },
          [R, F] = (0, p.useState)(!1),
          U = async () => {
            F(!R);
          },
          [O, q] = (0, p.useState)("Copy"),
          H = async () => {
            w()(t),
              q("Copied!"),
              setTimeout(() => {
                q("Copy");
              }, 1e3);
          },
          W = async () => {
            A(!1);
          };
        (0, p.useEffect)(() => {
          void 0 != t && 4 !== g && 6 !== g && "dashboard" == a && n && n(x);
        }, [t, g, a, n]);
        let V = (e) => {
            h(e), F(!1), e > 0 && y("stETH");
          },
          [J, P] = (0, p.useState)(!1);
        (0, p.useEffect)(() => {
          "/dashboard" !== D.pathname && (h(0), j(f), y("ETH"), _("stETH"));
        }, [D]);
        let [Z, K] = (0, p.useState)(!1),
          [Y, G] = (0, p.useState)(!1),
          z = async (e) => {
            K(e);
          },
          Q = async (e) => {
            G(e);
          },
          [X, $] = (0, p.useState)(0);
        (0, m.do)({
          address: S,
          abi: L,
          functionName: "balanceOf",
          args: [t],
          watch: !0,
          onSuccess(e) {
            $(1e12 * Math.floor(Number(e._hex) / 1e12));
          },
        });
        let [ee, en] = (0, p.useState)(0);
        (0, m.do)({
          address: S,
          abi: L,
          functionName: "allowance",
          args: [t, M],
          watch: !0,
          onSuccess(e) {
            en(Number(e._hex));
          },
        });
        let [ea, es] = (0, p.useState)(!1);
        return (
          (0, p.useEffect)(() => {
            X > 1e13 && t ? es(!0) : es(!1);
          }, [X, t]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(i(), {
                children: [
                  (0, s.jsx)("title", {
                    children: "Lybra | Unleash the Utility of LST in DeFi.",
                  }),
                  (0, s.jsx)("meta", { name: "description", content: "lybra" }),
                  (0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                  }),
                  (0, s.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  1 == v && "dashboard" == a
                    ? ""
                        .concat(o().header, " ")
                        .concat(o().header_dark, " ")
                        .concat(o().header_dash_dark, " ", "globals_dark", " ")
                    : 1 == v
                    ? ""
                        .concat(o().header, " ")
                        .concat(o().header_dark, " ", "globals_dark")
                    : "".concat(o().header),
                style:
                  "Home" == a || "Eusd" == a || "peUSD" == a
                    ? {
                        backgroundColor: "rgba(255, 255, 255, 0.88)",
                        backdropFilter: "blur(50px",
                      }
                    : null,
                children: [
                  (0, s.jsxs)("div", {
                    className: o().main,
                    children: [
                      (0, s.jsxs)("div", {
                        className: "".concat(
                          o().bewteen,
                          " ",
                          "justify_align_center"
                        ),
                        children: [
                          (0, s.jsxs)(l(), {
                            href: "/",
                            className: "".concat(
                              o().logo,
                              " ",
                              "flex_align_center"
                            ),
                            children: [
                              (0, s.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "icon",
                              }),
                              "Lybra Finance",
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "".concat(o().menu, " ", "h5None"),
                            children: [
                              (0, s.jsx)(l(), {
                                href: "/eUSD",
                                children: (0, s.jsx)("span", {
                                  className: "Eusd" == a ? o().active : "",
                                  children: "eUSD",
                                }),
                              }),
                              (0, s.jsx)(l(), {
                                href: "/peUSD",
                                children: (0, s.jsx)("span", {
                                  className: "peUSD" == a ? o().active : "",
                                  children: "peUSD",
                                }),
                              }),
                              (0, s.jsx)(l(), {
                                href: "https://docs.lybra.finance/lybra-finance-docs-v2/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                children: (0, s.jsx)("span", {
                                  children: "Docs",
                                }),
                              }),
                              (0, s.jsx)(l(), {
                                target: "_blank",
                                href: "https://v1.lybra.finance/",
                                rel: "nofollow noopener noreferrer",
                                children: (0, s.jsx)("span", {
                                  children: "Lybra V1",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "".concat(o().icon),
                        children: [
                          (0, s.jsx)("div", {
                            className: ea
                              ? ""
                                  .concat(o().migrate, " ")
                                  .concat(o().migrateShow)
                              : ""
                                  .concat(o().migrate, " ")
                                  .concat(o().migrateNone),
                            children: (0, s.jsx)(C, {
                              updateIsLoading: z,
                              updateIsSuccess: Q,
                              lbrAllowance: ee,
                              lbrBalanceOf: X,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              0 == v
                                ? "".concat(o().mode, " ").concat(o().sun)
                                : "".concat(o().mode, " ").concat(o().moon),
                            onClick: () => N(0 == v ? 1 : 0),
                            children: (0, s.jsx)("img", {
                              alt: "icon",
                              src:
                                0 == v
                                  ? "/images/icon/sun.svg"
                                  : "/images/icon/moon.svg",
                            }),
                          }),
                          "/dashboard" == D.pathname
                            ? (0, s.jsx)(d.NL.Custom, {
                                className: "h5None",
                                children: (e) => {
                                  let {
                                      account: n,
                                      chain: i,
                                      openAccountModal: r,
                                      openConnectModal: c,
                                      openChainModal: l,
                                      authenticationStatus: d,
                                      mounted: p,
                                    } = e,
                                    u = p && "loading" !== d;
                                  return (0, s.jsx)("div", {
                                    ...(!u && {
                                      "aria-hidden": !0,
                                      style: {
                                        opacity: 0,
                                        pointerEvents: "none",
                                        userSelect: "none",
                                      },
                                    }),
                                    children:
                                      u &&
                                      n &&
                                      i &&
                                      (!d || "authenticated" === d)
                                        ? i.unsupported
                                          ? (0, s.jsx)("div", {
                                              className: "button wrong ".concat(
                                                o().connectButton
                                              ),
                                              onClick: l,
                                              children: "Switch Network",
                                            })
                                          : (0, s.jsxs)("div", {
                                              style: {
                                                display: "flex",
                                                gap: 12,
                                              },
                                              children: [
                                                t
                                                  ? (0, s.jsx)("div", {
                                                      className:
                                                        o().accountName,
                                                      onClick: () => A(!I),
                                                      children:
                                                        t.slice(0, 4) +
                                                        ".." +
                                                        t.slice(-4),
                                                    })
                                                  : null,
                                                I
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            o().disconnectMain,
                                                          onClick: () => A(!1),
                                                        }),
                                                        (0, s.jsx)(b, {
                                                          id: a,
                                                          copyTip: O,
                                                          changeCopy: H,
                                                          disconnect: E,
                                                          showAccount: W,
                                                        }),
                                                      ],
                                                    })
                                                  : null,
                                              ],
                                            })
                                        : (0, s.jsx)("div", {
                                            className: "button blue ".concat(
                                              o().connectButton
                                            ),
                                            onClick: c,
                                            children: "Connect Wallet",
                                          }),
                                  });
                                },
                              })
                            : (0, s.jsx)("div", {
                                className: "LaunchApp h5None interact-button",
                                children: (0, s.jsx)(l(), {
                                  href: "",
                                  children: "Launch App",
                                }),
                              }),
                          (0, s.jsx)("div", {
                            className: "pcNone",
                            onClick: U,
                            children: R
                              ? (0, s.jsx)("img", {
                                  className: R
                                    ? ""
                                        .concat(o().menuIcon, " ")
                                        .concat(o().active)
                                    : "".concat(o().menuIcon),
                                  src: "/images/icon/menuClose.svg",
                                  alt: "icon",
                                })
                              : "dashboard" == a
                              ? (0, s.jsx)("img", {
                                  className: R
                                    ? ""
                                        .concat(o().menuIcon, " ")
                                        .concat(o().active)
                                    : "".concat(o().menuIcon),
                                  src: "/images/icon/menuApp.svg",
                                  alt: "icon",
                                })
                              : (0, s.jsx)("img", {
                                  className: R
                                    ? ""
                                        .concat(o().menuIcon, " ")
                                        .concat(o().active)
                                    : "".concat(o().menuIcon),
                                  src:
                                    0 == v
                                      ? "/images/icon/menu.svg"
                                      : "/images/icon/menu_dark.svg",
                                  alt: "icon",
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  R && "dashboard" == a
                    ? (0, s.jsxs)("div", {
                        className: "pcNone ".concat(o().h5menu),
                        children: [
                          (0, s.jsxs)("div", {
                            className: o().appMenu,
                            onClick: () => P(!J),
                            children: [
                              (0, s.jsx)("p", { children: "DASHBOARD" }),
                              (0, s.jsx)("img", {
                                src: "/images/icon/sxarr.svg",
                                className: J ? o().show : o().hidden,
                                alt: "icon",
                              }),
                            ],
                          }),
                          J
                            ? (0, s.jsxs)("div", {
                                className: o().dashboardType,
                                children: [
                                  (0, s.jsxs)("div", {
                                    onClick: () => V(0),
                                    children: [
                                      (0, s.jsxs)("p", {
                                        children: [
                                          (0, s.jsx)("img", {
                                            src: "/images/icon/icon01.svg",
                                            alt: "icon",
                                          }),
                                          "deposit",
                                        ],
                                      }),
                                      (0, s.jsxs)("p", {
                                        children: [
                                          (0, s.jsx)("img", {
                                            src: "/images/icon/icon02.svg",
                                            alt: "icon",
                                          }),
                                          "mint",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    onClick: () => V(1),
                                    children: (0, s.jsxs)("p", {
                                      children: [
                                        (0, s.jsx)("img", {
                                          src: "/images/icon/icon03.svg",
                                          alt: "icon",
                                        }),
                                        "withdraw",
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    onClick: () => V(2),
                                    children: (0, s.jsxs)("p", {
                                      children: [
                                        (0, s.jsx)("img", {
                                          src: "/images/icon/icon04.svg",
                                          alt: "icon",
                                        }),
                                        "repay",
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    onClick: () => V(3),
                                    children: (0, s.jsxs)("p", {
                                      children: [
                                        (0, s.jsx)("img", {
                                          src: "/images/icon/icon05.svg",
                                          alt: "icon",
                                        }),
                                        "redeem",
                                      ],
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          (0, s.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => V(4),
                            children: (0, s.jsx)("p", {
                              children: "OMNICHAIN",
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => V(5),
                            children: (0, s.jsx)("p", { children: "BOOST" }),
                          }),
                          (0, s.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => V(6),
                            children: (0, s.jsx)("p", { children: "EARN" }),
                          }),
                          (0, s.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => V(7),
                            children: (0, s.jsx)("p", { children: "VEST" }),
                          }),
                          (0, s.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => V(8),
                            children: (0, s.jsx)("p", { children: "BOUNTY" }),
                          }),
                          (0, s.jsx)("div", {
                            className: ea
                              ? " ".concat(o().migrateShow)
                              : " ".concat(o().migrateNone),
                            style: { marginTop: "20px" },
                            children: (0, s.jsx)(C, {
                              updateIsLoading: z,
                              updateIsSuccess: Q,
                              lbrAllowance: ee,
                              lbrBalanceOf: X,
                            }),
                          }),
                        ],
                      })
                    : R && "dashboard" !== a
                    ? (0, s.jsxs)("div", {
                        className: "pcNone ".concat(o().h5menu),
                        children: [
                          (0, s.jsx)(l(), {
                            href: "/",
                            children: (0, s.jsx)("span", { children: "Home" }),
                          }),
                          (0, s.jsx)(l(), {
                            href: "/eUSD",
                            children: (0, s.jsx)("span", { children: "eUSD" }),
                          }),
                          (0, s.jsx)(l(), {
                            href: "/peUSD",
                            children: (0, s.jsx)("span", { children: "peUSD" }),
                          }),
                          (0, s.jsx)(l(), {
                            href: "https://docs.lybra.finance/lybra-finance-docs-v2/",
                            target: "_blank",
                            rel: "nofollow noopener noreferrer",
                            children: (0, s.jsx)("span", { children: "Docs" }),
                          }),
                          (0, s.jsx)(l(), {
                            target: "_blank",
                            href: "https://v1.lybra.finance/",
                            rel: "nofollow noopener noreferrer",
                            children: (0, s.jsx)("span", {
                              children: "Lybra V1",
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "LaunchApp interact-button",
                            children: (0, s.jsx)(l(), {
                              href: "",
                              children: "Launch App",
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              Z ? (0, s.jsx)(k.Z, {}) : null,
              Y ? (0, s.jsx)(k.Z, {}) : null,
            ],
          })
        );
      }
    },
    97080: function (e, n, a) {
      "use strict";
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = a(85893),
        t = a(67294),
        i = a(2711),
        r = a.n(i);
      a(21496);
      var o = a(74971);
      function c() {
        let { tipMessage: e } = (0, t.useContext)(o.S),
          [n, a] = (0, t.useState)(!0),
          i = () => {
            a(!1);
          };
        return (
          (0, t.useEffect)(() => {
            r().init({ duration: 800, delay: 0, easing: "ease-in-out" });
          }),
          (0, s.jsx)(s.Fragment, {
            children: n
              ? (0, s.jsx)("div", {
                  className: "opersateTip",
                  "data-aos": "fade-left",
                  children: (0, s.jsx)("div", {
                    className: "tipCenter",
                    children: (0, s.jsxs)("div", {
                      className: "justify_space_between",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "tipgap10",
                          children: [
                            "success" == e.type
                              ? (0, s.jsx)("span", {
                                  className: "tipType success",
                                  children: (0, s.jsx)("img", {
                                    alt: "icon",
                                    src: "/images/icon/success.svg",
                                  }),
                                })
                              : (0, s.jsx)("span", {
                                  className: "tipType",
                                  children: (0, s.jsx)("img", {
                                    alt: "icon",
                                    className: "pedding",
                                    src: "/images/icon/load.svg",
                                  }),
                                }),
                            (0, s.jsx)("p", { children: e.title }),
                          ],
                        }),
                        (0, s.jsx)("span", {
                          className: "close",
                          onClick: i.bind(this),
                          children: (0, s.jsx)("img", {
                            alt: "icon",
                            src: "/images/icon/close.svg",
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : null,
          })
        );
      }
    },
    37923: function (e) {
      e.exports = {
        footer: "footer_footer__pOtN3",
        fobottom: "footer_fobottom__s_Jr4",
        icon: "footer_icon__O_htr",
        logo: "footer_logo__di90S",
        menu: "footer_menu__Rh4hE",
        bottom: "footer_bottom__JH8gl",
        footerW: "footer_footerW__3f5is",
        footer_dark: "footer_footer_dark__4R_fi",
        alingCenter: "footer_alingCenter__c0_yW",
      };
    },
    83136: function (e) {
      e.exports = {
        header: "header_header__rBp6t",
        main: "header_main__fRYBN",
        logo: "header_logo__nGq8o",
        menu: "header_menu__SBibF",
        active: "header_active__lPE_y",
        icon: "header_icon__DnWvp",
        connectButton: "header_connectButton__Mjy3H",
        accountName: "header_accountName__v5SkC",
        disconnectMain: "header_disconnectMain__qn0bg",
        accountDis: "header_accountDis__cqJI6",
        show: "header_show__78o0s",
        hidden: "header_hidden__2t5v7",
        mode: "header_mode__AQArz",
        header_dark: "header_header_dark__RRmwP",
        header_dash_dark: "header_header_dash_dark__Rwlwt",
        migrate: "header_migrate__gSsWv",
        migrateShow: "header_migrateShow__YoWHF",
        migrateNone: "header_migrateNone__8_DKa",
        menuIcon: "header_menuIcon__1v_Ou",
        button: "header_button__HlmKc",
        claimTst: "header_claimTst__H9DZx",
        bewteen: "header_bewteen__XWjJ7",
        h5menu: "header_h5menu__3LOIA",
        appMenu: "header_appMenu__YoBSm",
        dashboardType: "header_dashboardType__Y7vQ8",
      };
    },
    86159: function (e) {
      e.exports = {
        transaction: "transaction_transaction__up3IK",
        close: "transaction_close__FcKE0",
        title: "transaction_title__06EQK",
        account: "transaction_account__lxa9k",
        tips: "transaction_tips__lnrTN",
        recent: "transaction_recent__Johqj",
        type: "transaction_type__J6Ow3",
        transactionList: "transaction_transactionList__kzhSR",
        item: "transaction_item__PRq4B",
        value: "transaction_value__7Ejs1",
        trackWallet: "transaction_trackWallet__UScsT",
        showLoading: "transaction_showLoading__Sqcal",
        loadings: "transaction_loadings__jLjyt",
        loading: "transaction_loading__LFoGB",
        readonly: "transaction_readonly___Ktk9",
        tipIcon: "transaction_tipIcon__vcphU",
        dark: "transaction_dark__czWkx",
      };
    },
  },
]);
