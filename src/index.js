/**
 * @file index.js
 * Renders VR experience or Editor depending on REACT_APP_ENV value.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';
<script src="https://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v$npm_package_version/dist/aframe-physics-system.min.js"></script>;

require('aframe');
require('./index.css');

/**
 * Initial A-Frame Scene.
 * {@inheritdoc}
 */
class InitialScene extends Component {
  render() {
    return (
      <Scene
        inspector="url: https://aframe.io/releases/0.6.1/aframe-inspector.min.js"
        cursor="rayOrigin: mouse"
      >
        <Entity
          id="right-light"
          primitive="a-right-light"
          position={{ x: 2, y: 2, z: 3 }}
          type="directional"
          color="#FFF"
          intensity="0.1"
        />
        <Entity
          id="left-light"
          primitive="a-left-light"
          position={{ x: -2, y: 2, z: 3 }}
          type="directional"
          color="#FFF"
          intensity="0.1"
        />
        <Entity
          id="ground"
          primitive="a-plane"
          position={{ x: 0, y: -5, z: -21 }}
          rotation={{ x: -90, y: 0, z: 0 }}
          width={16} // 160in
          height={58} // 580in
          color="#7BC8A4"
        />
        <Entity primitive="a-sky" color="#4286f4" />

        <Entity
          id="wb-40-top"
          primitive="a-box"
          position={{ x: 0, y: 7.4, z: -26.5 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={9.85} // 98.5in
          height={0.05} // 0.5in
          depth={39.6} // 33ft*12in
          color="#D3D3D3"
        />
        <Entity
          id="wb-40-bottom"
          primitive="a-box"
          position={{ x: 0, y: -2.7, z: -26.5 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={9.85} // 98.5in
          height={0.05}
          depth={39.6} // 33ft*12in
          color="#D3D3D3"
        />
        <Entity
          id="wb-40-left"
          primitive="a-box"
          position={{ x: -4.9, y: 2.33, z: -26.5 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.05}
          height={10.06} // 100.6in
          depth={39.6} // 33ft*12in
          color="#D3D3D3"
        />
        <Entity
          id="wb-40-right"
          primitive="a-box"
          position={{ x: 4.9, y: 2.33, z: -26.5 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.05}
          height={10.06} // 100.6in
          depth={39.6} // 33ft*12in
          color="#D3D3D3"
        />
        <Entity
          id="wb-40-back"
          primitive="a-box"
          position={{ x: 0, y: 2.33, z: -46.3 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={9.85} // 98.5in
          height={10.06} // 100.6in
          depth={0.05}
          color="#D3D3D3"
        />
        <Entity
          id="wb-40-ramp"
          primitive="a-box"
          position={{ x: 0, y: -4.5, z: -4.9 }}
          rotation={{ x: 45, y: 0, z: 0 }}
          width={9.85} // 98.5in
          height={0.05}
          depth={5.03} // 100.6in/2
          color="#D3D3D3"
        />

        <Entity
          id="wb-40-frame"
          primitive="a-box"
          position={{ x: 0, y: -3.2, z: -14 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={8.85} // 88.5in
          height={1} // 10in
          depth={12} // 120in
          color="#333333"
        />
        <Entity
          id="wb-40-wheel1"
          primitive="a-cylinder"
          position={{ x: 4.5, y: -3.8, z: -14.5 }}
          rotation={{ x: 0, y: 0, z: 90 }}
          width={3.1} // 31in
          height={1.05} // 10.5in
          depth={3.1} // 31in
          color="#333333"
        />
        <Entity
          id="wb-40-wheel2"
          primitive="a-cylinder"
          position={{ x: 4.5, y: -3.8, z: -10 }}
          rotation={{ x: 0, y: 0, z: 90 }}
          width={3.1} // 31in
          height={1.05} // 10.5in
          depth={3.1} // 31in
          color="#333333"
        />
        <Entity
          id="wb-40-wheel3"
          primitive="a-cylinder"
          position={{ x: -4.5, y: -3.8, z: -14.5 }}
          rotation={{ x: 0, y: 0, z: 90 }}
          width={3.1} // 31in
          height={1.05} // 10.5in
          depth={3.1} // 31in
          color="#333333"
        />
        <Entity
          id="wb-40-wheel4"
          primitive="a-cylinder"
          position={{ x: -4.5, y: -3.8, z: -10 }}
          rotation={{ x: 0, y: 0, z: 90 }}
          width={3.1} // 31in
          height={1.05} // 10.5in
          depth={3.1} // 31in
          color="#333333"
        />

        <Entity
          id="wb-40-left-support"
          primitive="a-box"
          position={{ x: -4.3, y: -4.3, z: -40 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.6}
          height={3.1}
          depth={0.6}
          color="#333333"
        />
        <Entity
          id="wb-40-right-support"
          primitive="a-box"
          position={{ x: 4.3, y: -4.3, z: -40 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.6}
          height={3.1}
          depth={0.6}
          color="#333333"
        />

        <Entity
          id="8x8x8"
          primitive="a-box"
          position={{ x: 6, y: 0.4 - 5, z: -8 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="12x3x17.5"
          primitive="a-box"
          position={{ x: 6, y: 0.15 - 5, z: -6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.2}
          height={0.3}
          depth={1.75}
          color="#964B00"
        />
        <Entity
          id="12x12x18"
          primitive="a-box"
          position={{ x: 6, y: 0.6 - 5, z: -4 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="13x9x11"
          primitive="a-box"
          position={{ x: 6, y: 0.45 - 5, z: -2 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.3}
          height={0.9}
          depth={1.1}
          color="#964B00"
        />
        <Entity
          id="16x16x16"
          primitive="a-box"
          position={{ x: 6, y: 0.8 - 5, z: 0 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.6}
          height={1.6}
          depth={1.6}
          color="#964B00"
        />
        <Entity
          id="14x14x14"
          primitive="a-box"
          position={{ x: 6, y: 0.7 - 5, z: 2 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.4}
          height={1.4}
          depth={1.4}
          color="#964B00"
        />
        <Entity
          id="20x20x20"
          primitive="a-box"
          position={{ x: 6, y: 1.0 - 5, z: 4 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.0}
          height={2.0}
          depth={2.0}
          color="#964B00"
        />
        <Entity
          id="23x17x12"
          primitive="a-box"
          position={{ x: 6, y: 0.85 - 5, z: 6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.3}
          height={1.7}
          depth={1.2}
          color="#964B00"
        />
        <Entity
          id="12x9x6"
          primitive="a-box"
          position={{ x: 4, y: 0.45 - 5, z: 6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.2}
          height={0.9}
          depth={0.6}
          color="#964B00"
        />
        <Entity
          id="11x11x11"
          primitive="a-box"
          position={{ x: 2.5, y: 0.55 - 5, z: 6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.1}
          height={1.1}
          depth={1.1}
          color="#964B00"
        />
        <Entity
          id="17x17x17"
          primitive="a-box"
          position={{ x: 0.5, y: 0.85 - 5, z: 6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.7}
          height={1.7}
          depth={1.7}
          color="#964B00"
        />
        <Entity
          id="20x20x12"
          primitive="a-box"
          position={{ x: -2, y: 1 - 5, z: 6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.0}
          height={2.0}
          depth={1.2}
          color="#964B00"
        />
        <Entity
          id="22x22x22"
          primitive="a-box"
          position={{ x: -4.5, y: 1.1 - 5, z: 6.6 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.2}
          height={2.2}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="24x24x24"
          primitive="a-box"
          position={{ x: -6, y: 1.2 - 5, z: 4.5 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.4}
          height={2.4}
          depth={2.4}
          color="#964B00"
        />
        <Entity
          id="28x28x28"
          primitive="a-box"
          position={{ x: -6, y: 1.4 - 5, z: 1 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.8}
          height={2.8}
          depth={2.8}
          color="#964B00"
        />
        <Entity
          id="24x24x18"
          primitive="a-box"
          position={{ x: -6, y: 1.2 - 5, z: -2 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={2.4}
          height={2.4}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="18x13x11.75"
          primitive="a-box"
          position={{ x: -6, y: 0.65 - 5, z: -4 }}
          rotation={{ x: 0, y: 22.5, z: 0 }}
          width={1.8}
          height={1.3}
          depth={1.175}
          color="#964B00"
        />

        <Entity
          id="box1"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 4, z: -8 - 10 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box2"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 4, z: -9 - 10 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box3"
          primitive="a-box"
          position={{ x: 0.9 + 3.3, y: 2.7 - 4, z: -8.5 - 10 }}
          rotation={{ x: 0, y: -12.5, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />

        <Entity
          id="box4"
          primitive="a-box"
          position={{ x: -1 - 3.3, y: 1.9 - 4, z: -8 - 14 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box5"
          primitive="a-box"
          position={{ x: -1 - 3.3, y: 1.9 - 4, z: -9 - 14 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box6"
          primitive="a-box"
          position={{ x: -0.1 - 3.3, y: 1.9 - 4, z: -9 - 14 }}
          rotation={{ x: 0, y: 12.5, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box7"
          primitive="a-box"
          position={{ x: -0.8 - 3.3, y: 2.7 - 4, z: -8.5 - 14 }}
          rotation={{ x: 0, y: 45, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />

        <Entity
          id="box8"
          primitive="a-box"
          position={{ x: -2, y: -4.6, z: -2 }}
          rotation={{ x: 0, y: -12.5, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box9"
          primitive="a-box"
          position={{ x: -2, y: -4.6, z: -3 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box10"
          primitive="a-box"
          position={{ x: -1.1, y: -4.6, z: -3 }}
          rotation={{ x: 0, y: 12.5, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />
        <Entity
          id="box11"
          primitive="a-box"
          position={{ x: -1.8, y: -3.8, z: -2.5 }}
          rotation={{ x: 0, y: 45, z: 0 }}
          width={0.8}
          height={0.8}
          depth={0.8}
          color="#964B00"
        />

        <Entity
          id="box12"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 4, z: -30 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="box13"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 2.775, z: -30 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="box14"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 4, z: -32 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="box15"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 2.775, z: -32 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="box16"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 4, z: -34 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
        <Entity
          id="box17"
          primitive="a-box"
          position={{ x: 1 + 3.3, y: 1.9 - 2.775, z: -34 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={1.2}
          height={1.2}
          depth={1.8}
          color="#964B00"
        />
      </Scene>
    );
  }
}

// Render the InitialScene component in the scene container div.
ReactDOM.render(<InitialScene />, document.getElementById('root'));
