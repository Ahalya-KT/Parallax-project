import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0.03} speed={0.1}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.025} speed={0.4}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.02} speed={0.8}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.015} speed={1.2}>
          <div className="animation_layer parallax" id="junglel"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.2}>
          <div className="centered-text flex items-center justify-center ">
            <h1 className=" font-bold text-slate-50 font-serif text-6xl py-56 ">
              PARALLAX EFFECT
              <p className="text-sm px-52 py-9">welcome to new ones</p>
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.01} speed={1.6}>
          <div className="animation_layer parallax" id="junglel2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0}>
          <div className="animation_layer parallax" id="junglel3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.4}>
          <div className="animation_layer parallax" id="junglel4"></div>
        </ParallaxLayer>
      </Parallax>
      {/* image slider */}
      <div>
        <ImageSlider />
      </div>
    </>
  );
}

export default App;
