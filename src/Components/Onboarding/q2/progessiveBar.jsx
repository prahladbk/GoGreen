import React from 'react';

const ProgessiveBar = ({ Progress }) => {
  return (
    <div
      className='progressive-bar'
      style={{
        height: '14px',
        backgroundColor: '#A6ECD3',
        width: '90%',
        borderRadius: '9999px',
        overflow: 'hidden',
        marginBlockStart: '-20px',
        marginTop: '-200px',
      }}
    >
      <div
        style={{
          width: `${Progress}%`,
          height: '100%',
          backgroundColor: 'white',
          transition: '1s all ease',
          borderRadius: '9999px',
        }}
      ></div>
    </div>
  );
};

export default ProgessiveBar;
