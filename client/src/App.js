import { TiltCardContainer } from 'components';

export default function App() {
  return (
    <div className="container">
      <TiltCardContainer
        cards={[
          {
            id: 'card-101',
            text: 'Prop Types',
            fliped: false,
          },
        ]}
      />
    </div>
  );
}
