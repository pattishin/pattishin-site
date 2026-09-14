import PixelSprite from '../../sprites/PixelSprite';
import { WALLE_PALETTE, FRAME_A } from '../../helpers/walle';
import { FIREFLIES } from '../../helpers/fireflies';
import './GameStart.css';

export default function GameStart({ onStart }) {

  return (
    <div className="gs-root">

      {/* Floating teal particles */}
      {FIREFLIES.map((f, i) => (
        <div
          key={i}
          className="gs-firefly"
          style={{
            left: f.left,
            bottom: f.bottom,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.dur,
          }}
        />
      ))}

      {/* Studio label */}
      <p className="gs-studio">✦ TINKERBOT STUDIOS ✦</p>

      {/* Titles */}
      <div className="gs-titles">
        <h1 className="gs-mainTitle">PATTI SHIN</h1>
        <div className="gs-divider" />
        <h2 className="gs-subTitle">SOFTWARE ENGINEER</h2>
        <p className="gs-tag">overgrown edition</p>
      </div>

      {/* Start button */}
      <button className="gs-startBtn" onClick={onStart}>
        [ PRESS START ]
      </button>

      {/* Scene: cyberpunk alley with overgrown buildings */}
      <div className="gs-scene">

        {/* Building silhouettes — left */}
        <div className="gs-ruin gs-ruin-l1" />
        <div className="gs-ruin gs-ruin-l2" />
        <div className="gs-ruin gs-ruin-l3" />
        {/* Building silhouettes — right */}
        <div className="gs-ruin gs-ruin-r1" />
        <div className="gs-ruin gs-ruin-r2" />
        <div className="gs-ruin gs-ruin-r3" />

        {/* Overgrown trees — dark silhouettes */}
        <div className="gs-tree gs-tree-l">
          <div className="gs-tree-canopy gs-tree-canopy-top" />
          <div className="gs-tree-canopy gs-tree-canopy-mid" />
          <div className="gs-tree-trunk" />
        </div>
        <div className="gs-tree gs-tree-r">
          <div className="gs-tree-canopy gs-tree-canopy-top" />
          <div className="gs-tree-canopy gs-tree-canopy-mid" />
          <div className="gs-tree-trunk" />
        </div>

        {/* Ground ivy clusters */}
        <div className="gs-bush gs-bush-l" />
        <div className="gs-bush gs-bush-r" />

        {/* Wall-E rolling sprite */}
        <div className="gs-sprite">
          <PixelSprite
            pixels={FRAME_A}
            palette={WALLE_PALETTE}
            size={4}
          />
        </div>

        {/* Ground — dark stone */}
        <div className="gs-ground" />
      </div>
      {/* Hidden Mastodon rel=me link */}
      <a href="https://indieweb.social/@pattishin" rel="me" style={{ visibility: 'hidden' }} aria-label="Mastodon profile link">Mastodon</a>
    </div>
  );
}
