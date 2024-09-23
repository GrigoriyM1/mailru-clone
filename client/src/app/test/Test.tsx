import React from 'react';

const Test: React.FC<{ name: { name: string } }> = ({ name }) => {
  console.log(name)
	return <div></div>;
};

export default Test;
