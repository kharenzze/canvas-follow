import { Canvas } from '@react-three/fiber'
import { Box } from "./components/Box";
import { Circle } from "./components/Circle";
import './App.css';


function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Circle position={[0, 0, 0]}/>
      </Canvas>
    </div>
  );
}

export default App;
