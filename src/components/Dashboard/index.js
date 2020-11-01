import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ fetchData, data }) => {
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="main-container">
      <div className="dashboard">
        Panneau admin
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Dashboard;
