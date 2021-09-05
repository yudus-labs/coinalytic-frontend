import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchCoinInfo } from "./common/API";

import "./CoinKit.css";

function CoinKit() {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return <div className="container CoinKit">Welcome to CoinKit</div>;
}

export default CoinKit;
