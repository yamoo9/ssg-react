import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components/macro';
import GlobalStyle from 'styles/GlobalStyle';
import { Cart } from 'components';

export default function App() {
  let [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carts, setCarts] = useState({
    title: '장바구니',
    products: null,
    totalPrice: 0,
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('/api/products.json');
        setCarts({
          ...carts,
          products: data,
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (carts.products) {
      setCarts((carts) => ({
        ...carts,
        totalPrice: carts.products.reduce?.(
          (acc, { price, amount }) => acc + price * amount,
          0
        ),
      }));
    }
  }, [carts.products]);

  const handleUpdateAmount = useCallback((id, count) => {
    setCarts((carts) => ({
      ...carts,
      products: carts.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            amount: count,
          };
        }
        return product;
      }),
    }));
  }, []);

  if (loading) {
    return <Loading role="alert">제품 정보 로딩 중...</Loading>;
  }

  if (error) {
    return <ErrorDisplay role="alert">오류 발생: {error.message}</ErrorDisplay>;
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Cart
          title={carts.title}
          products={carts.products}
          total={carts.totalPrice}
          onUpdate={handleUpdateAmount}
        />
      </Container>
    </>
  );
}

/* -------------------------------------------------------------------------- */

const positionMixin = css`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  font-size: 22px;
`;

const Loading = styled.div`
  ${positionMixin}
  top: 30%;
`;

const ErrorDisplay = styled.div`
  ${positionMixin}
  color: #d20;
`;

const Container = styled.div`
  margin-top: 60px;
`;
