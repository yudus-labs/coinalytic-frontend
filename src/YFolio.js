import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchTokenList, fetchTokenInfo } from "./common/API";

import TokenSection from "./components/Token";
import StatsSection from "./components/Stats";

import "./YFolio.css";

function fetchTokens(tokens, setState) {
  const new_tokens = tokens.filter((t) => !t.cgId);

  tokens.forEach((token) => {
    if (token.cgId) {
      fetchTokenInfo(token.cgId).then((data) => {
        const token_info = JSON.parse(data);
        const t = JSON.parse(JSON.stringify(token));

        // console.log(token_info);
        t.logo = token_info.image.small;
        t.symbol = token_info.symbol;
        t.name = token_info.name;
        t.price = token_info.market_data.current_price.usd;
        t.price_change_24h = token_info.market_data.price_change_percentage_24h;
        t.atl = token_info.market_data.atl.usd;
        t.ath = token_info.market_data.ath.usd;
        t.rank = token_info.market_data.market_cap_rank;
        t.value = t.price * t.amount;

        new_tokens.push(t);

        new_tokens.sort((a, b) => {
          return parseInt(b.value) - parseInt(a.value);
        });

        setState((s) => ({
          tokens: new_tokens,
          total: s.total + t.value,
        }));
      });
    }
  });
}

/**
 * @param {Object} state
 * @param {Function} setState
 */
function fetchData(state, setState) {
  // Fetch token list first
  fetchTokenList().then((data) => {
    const response = JSON.parse(data);
    const tokens = response.result;
    console.log(tokens);

    fetchTokens(tokens, setState);

    setState((s) => {
      return {
        tokens: tokens,
        total: s.total,
      };
    });
  });
}

function YFolio() {
  const [state, setState] = useState({
    tokens: [],
    total: 0,
  });

  useEffect(() => {
    fetchData(state, setState);
  }, []);

  return (
    <div className="container yfolio">
      <StatsSection total={state.total} />
      <TokenSection tokens={state.tokens} />
    </div>
  );
}

export default YFolio;
