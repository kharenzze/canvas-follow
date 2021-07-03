import { Canvas } from '@react-three/fiber'
import { Box } from "./components/Box";
import { Circle } from "./components/Circle";
import { Background } from "./components/Background";
import './App.css';


function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Background onClick={(...args) => {
          console.log(args)
        }}/>
        <Circle position={[0, 0, 0]}
                scale={0.2}
        />
      </Canvas>
    </div>
  );
}

export default App;
