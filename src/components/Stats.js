import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Stats.css";

export default function StatsSection(props) {
  return (
    <div className="container-fluid stats-section">
      Total holding : {props.total}
    </div>
  );
}
StatsSection.propTypes = {
  total: PropTypes.number,
};
