import { ScatterGraphy } from 'react-scatter-graphy';
import ex from './ex.png';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy src={ex} size={3} duration={500} />
      </div>
    </div>
  );
}

export default App;
