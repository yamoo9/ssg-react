# 미션

6일간 React 개발을 학습하시느라 수고 많으셨습니다. 😎
이제 학습한 내용을 검토할 시간입니다. 열심히 공부한 자신의 성과를 확인해봅시다!

## 컴포넌트 트리

React 앱 컴포넌트 트리 구조는 다음과 같습니다.

```sh
App
└── Cart
    ├── CartTitle
    └── CartList
        ├── CartItem
        │   └── Counter
        │       └── CountContainer
        │           ├── CountButton
        │           ├── CountDisplay
        │           └── CountButton
        └── CartFooter
            └── CartTotal
```

## Props 드릴링 문제 발생! 🚨

App 컴포넌트에서 관리하는 카트(carts) 상태는 `title`, `products`, `totalPrice` 입니다.

```jsx
const [carts, setCarts] = useState({
  title: '장바구니',
  products: null,
  totalPrice: 0,
});
```

그리고 카트 상태를 업데이트 하는 `handleUpdateAmount` 함수가 있습니다.

```jsx
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
```

카트 상태 및 업데이트 함수는 Cart 컴포넌트에 Props로 전달됩니다.

```jsx
<Cart
  title={carts.title}
  products={carts.products}
  total={carts.totalPrice}
  onUpdate={handleUpdateAmount}
/>
```

Cart 컴포넌트는 전달받은 카트 상태 및 업데이트 함수를 다시 CartList 컴포넌트에 Props로 전달합니다.

```jsx
function Cart({ title, products, total, onUpdate }) {
  return (
    <Container>
      <CartTitle>{title}</CartTitle>
      <CartList products={products} total={total} onUpdate={onUpdate} />
    </Container>
  );
}
```

그리고 CartList 컴포넌트는 전달 받은 카트 상태와 업데이트 함수를 또 다시 CartItem, CartFooter 컴포넌트에 Props로 전달합니다.

```jsx
function CartList({ products, total, onUpdate }) {
  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product} onUpdate={onUpdate} />
      ))}
      <CartFooter total={total} />
    </Container>
  );
}
```

CartItem 컴포넌트는 전달 받은 카트 상태와 업데이트 함수를 드디어... Counter 컴포넌트에 전달할 수 있게 되었습니다. 😭

```jsx
function CartItem({
  product: { id, photo, name, price, amount, maxAmount },
  onUpdate,
  ...restProps
}) {
  return (
    <Container {...restProps}>
      <Photo src={photo} alt="" />
      <Info>
        <Name>{name}</Name>
        <Price>{currencyKR(price)}</Price>
      </Info>
      <Amount>
        <Counter
          id={id}
          min={1}
          current={amount}
          max={maxAmount > 0 ? maxAmount : 50}
          style={{ transform: 'scale(0.75)' }}
          onUpdate={(count) => onUpdate(id, count)}
        />
      </Amount>
    </Container>
  );
}
```

CartFooter에서 출력될 `total` 상태 값도 어렵게 도달했습니다. 🥲

```jsx
const CartFooter = ({ total, ...restProps }) => (
  <footer {...restProps}>
    <CartTotal>{total}</CartTotal>
  </footer>
);
```

## 미션! Props 드릴링 문제를 해결하세요.

Props 드릴링은 애플리케이션 상태 관리를 어렵게 합니다. 앱의 규모가 더 커지면 감당하기 어려울 것입니다. 😱
앱의 규모가 더 커지기 전에 이 문제를 Context API를 사용해 해결해봅시다.

Cart 컨텍스트를 App 컴포넌트에서 공급할 수 있다면?
카트 상태 또는 업데이트 함수가 필요한 CartItem, CartFooter 컴포넌트에서 바로 사용할 수 있을 것입니다.

### 체크리스트

- [ ] Cart 컨텍스트를 생성합니다.
- [ ] Cart 컨텍스트 프로바이더를 사용해 App 내부 Cart 컴포넌트에 카트 상태 및 업데이트 함수를 공급합니다.
- [ ] Cart 컨텍스트 값(value)을 컴포넌트에서 바로 꺼내 사용할 수 있도록 `useCart` 커스텀 훅을 작성합니다.
- [ ] Props 드릴링 된 Cart 상태 및 업데이트 함수를 각 컴포넌트에서 걷어냅니다. (정리)
- [ ] `useCart` 훅을 사용해 카트 상태 및 업데이트 함수가 필요한 컴포넌트에서 꺼내 사용합니다.
- [ ] React 앱 UI가 문제없이 동작하는 지 테스트합니다.
