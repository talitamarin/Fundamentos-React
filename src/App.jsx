import Title from './Title';
import Subtitle from './Subtitle';
import StatusText from './StatusText';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#2c2c2d',
        display: 'grid',
        minHeight: '100vh',
        placeContent: 'center',
        textAlign: 'center',
      }}
    >
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
