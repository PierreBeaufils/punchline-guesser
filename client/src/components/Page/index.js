import React from 'react';
import PropTypes from 'prop-types';
import './page.scss';

const Page = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
