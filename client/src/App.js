// import { useFetch } from 'hooks';
import { ErrorBoundary, TiltCardContainer } from 'components';

export default function App() {
  // const { data: navigation } = useFetch('api/ediya/navigation');

  return (
    <div className="container">
      <ErrorBoundary>
        <TiltCardContainer />
      </ErrorBoundary>
    </div>
  );
}
