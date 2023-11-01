import { Canvas } from '@react-three/fiber';
import './App.css'
import Experience from './components/Experience';
import { ScrollControls } from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import Overlay from './components/Overlay';
import { usePlay } from './contexts/Play';

function App() {
  const { play, end } = usePlay();

  return (
    <>
      <Canvas>
        <color attach='background' args={["#ececec"]} />
        {/* scroll to 100 to be able to scroll a lot */}
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        <EffectComposer>
          {/* really necessary ? */}
          <Noise opacity={0.05} />
        </EffectComposer>
      </Canvas>
      <Overlay />
    </>
  )
}

export default App
