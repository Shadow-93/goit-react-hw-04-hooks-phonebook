import React from "react";
import PropTypes from "prop-types";

import s from "./Notification.module.css";

const Notification = ({ title }) => <h2 className={s.title}>{title}</h2>;

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
