import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Background } from "./components/Background";
import { CirclePlayer } from "./components/CirclePlayer";
import { ZERO3 } from "./constants";
import './App.css';

const App = () => {
  const [target, setTarget] = useState(() => ZERO3)
  return (
    <div className="App">
      <Canvas>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <Background onClick={(evt) => {
          console.log(evt.point)
          setTarget(evt.point)
        }}/>
        <CirclePlayer target={target}
                      initialPosition={ZERO3}
                      scale={0.2}
        />
      </Canvas>
    </div>
  );
}

export default App;
