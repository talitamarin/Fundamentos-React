import Title from './Title';
import Subtitle from './Subtitle';
import StatusText from './StatusText';
import styles from './styles/App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
