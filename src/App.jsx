import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="junglel"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="junglel2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="junglel3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="junglel4"></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
