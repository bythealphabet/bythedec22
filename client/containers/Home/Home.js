import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
// import Babylon from "../../components/Babylon/Babylon";
import video from "../../assets/videos/heroVideo.mp4";

function Home() {
  const styles = css`
    grid-column: 1 / -1;
    h1 {
      grid-column: 2 / span 4;
    }
  `;

  return (
    <section className="base-grid" css={styles}>
      <h1>I knew you where waiting for us</h1>
    </section>
  );
}

export default Home;
