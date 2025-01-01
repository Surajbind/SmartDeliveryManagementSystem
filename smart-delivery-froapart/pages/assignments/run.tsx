import React from 'react';
import api from '../../utils/api';

const RunAssignmentAlgorithm = () => {
  const runAlgorithm = async () => {
    try {
      const res = await api.post('/assignments/run');
      alert(res.data.message);
    } catch (error) {
      console.error('Failed to run assignment algorithm', error);
    }
  };

  return (
    <div>
      <h1>Run Assignment Algorithm</h1>
      <button onClick={runAlgorithm}>Run Algorithm</button>
    </div>
  );
};

export default RunAssignmentAlgorithm;
