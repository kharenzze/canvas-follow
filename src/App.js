import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Circle } from "./components/Circle";
import { Background } from "./components/Background";
import { Vector3 } from 'three'
import './App.css';

const App = () => {
  const [target, setTarget] = useState(() => new Vector3())
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Background onClick={(evt) => {
          console.log(evt.point)
          setTarget(evt.point)
        }}/>
        <Circle position={target}
                scale={0.2}
        />
      </Canvas>
    </div>
  );
}

export default App;
