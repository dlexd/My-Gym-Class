import React from 'react';
import { Button } from 'antd';

const DonateButton = () => {
  const handleButtonClick = () => {
    window.open('https://buy.stripe.com/test_bIY4ije8PfSceo8dQQ', '_blank');
  };

  return (
    <Button type="primary" onClick={handleButtonClick}>
      Donate
    </Button>
  );
};

export default DonateButton;
