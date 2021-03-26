import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Token.css";

function TokenItem(props) {
  return (
    <div className="token-item">
      <div className="row">
        <div className="col">{props.token.cgId}</div>
        <div className="col">{props.token.symbol}</div>
        <div className="col">{props.token.amount}</div>
        <div className="col">{props.token.price}</div>
        <div className="col">{props.token.value}</div>
      </div>
    </div>
  );
}
TokenItem.propTypes = {
  token: PropTypes.object,
};

export default function TokenSection(props) {
  return (
    <div className="container-fluid token-section">
      {props.tokens.map((t, i) => (
        <TokenItem token={t} key={t.name + i.toString()} />
      ))}
    </div>
  );
}
TokenSection.propTypes = {
  tokens: PropTypes.array,
};
