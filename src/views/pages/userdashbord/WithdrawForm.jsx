import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  margin: 50px auto;
  background: rgba(249, 249, 249, 0.93);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  position: fixed;  /* جعل النموذج ثابتًا */
  top: 50%;         /* وسط الصفحة */
  left: 50%;        /* وسط الصفحة */
  transform: translate(-50%, -50%);  /* تحريك العنصر ليكون في المنتصف */
  z-index: 1000;   
  animation: fadeIn 0.5s ease-in-out; /* تأثير ظهور تدريجي */
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const WalletInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
`;

const BalanceSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const BalanceCard = styled.div`
  text-align: center;
  background: #fff;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #45a049;
  }
`;

const CloseButton = styled.button`
  background: #f44336;
  color: white;
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #e53935;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #555;
`;

const WithdrawForm = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isOpen, setIsOpen] = useState(true); // حالة لفتح وإغلاق النموذج

  const handleInputChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Wallet Address:', walletAddress);
  };

  const handleClose = () => {
    setIsOpen(false); // إغلاق النموذج
  };

  if (!isOpen) return null; // إذا كانت الحالة مغلقة، لا يتم عرض النموذج

  return (
    <Container>
      <Title>Withdraw</Title>
      <InfoText>Please make sure the wallet address is BEP20 (BSC Network)</InfoText>

      <BalanceSection>
        <BalanceCard>
          <h3>100.00</h3>
          <p>MAS</p>
        </BalanceCard>
        <BalanceCard>
          <h3>0.00</h3>
          <p>FDUSD</p>
        </BalanceCard>
        <BalanceCard>
          <h3>0.00</h3>
          <p>USDT</p>
        </BalanceCard>
      </BalanceSection>

      <form onSubmit={handleSubmit}>
        <WalletInput 
          type="text" 
          placeholder="Wallet Address" 
          value={walletAddress} 
          onChange={handleInputChange} 
        />

        <InfoText>Available: 0.00 USDT</InfoText>
        <InfoText>Withdraw Fees: 2.5%</InfoText>

        <Button type="submit">Withdraw</Button>
      </form>

      <CloseButton onClick={handleClose}>Close</CloseButton>
    </Container>
  );
};

export default WithdrawForm;
