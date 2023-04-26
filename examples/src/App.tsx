import { ScatterGraphy } from 'react-scatter-graphy';

import horizontal from './horizontal.png';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy src={horizontal} size={1} duration={500} />
      </div>
    </div>
  );
}

export default App;
