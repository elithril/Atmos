import { Canvas } from '@react-three/fiber';
import './App.css'
import Experience from './components/Experience';
import { ScrollControls } from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';

function App() {

  return (
    <>
      <Canvas>
        <color attach='background' args={["#ececec"]} />
        {/* scroll to 100 to be able to scroll a lot */}
        <ScrollControls pages={20} damping={0.5}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          {/* really necessary ? */}
          <Noise opacity={0.05} />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App
