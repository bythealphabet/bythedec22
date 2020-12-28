import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Switch, Route } from "react-router-dom";

// -----------CORE
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";

// -----------NAVIGATION
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

// -----------Not Found Page
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

import video from "./assets/videos/heroVideo.mp4";

const MainRouter = () => {
  const [active, setActive] = useState(false);

  const isMenuActive = (isactive) => setActive(isactive);

  const stopScroll = css`
    position: fixed;
    overflow-y: hidden;
  `;

  const rootStyles = css`
    ${active ? stopScroll : null}
    display: grid;

    grid-template-columns: 50vw 50vw;
    grid-template-rows: auto 90vh auto;

    header,
    video,
    .filter,
    footer {
      grid-column: 1 / -1;
    }

    .filter {
      z-index: -1;
      grid-row: 1 / -1;

      background-image: linear-gradient(
        45deg,
        rgba(161, 196, 253, 0) 0%,
        rgba(161, 196, 253, 0) 20%,
        rgba(194, 233, 251, 1) 100%
      );
    }

    header {
      z-index: 1;
      grid-row: 1;
    }

    video {
      min-height: 100vh;
    }

    video {
      z-index: -2;
      object-fit: cover;
      object-position: left center;
      position: fixed;
      top: -20%;
      right: -220%;
      grid-column: 1 /1;
      grid-row: 1 / -1;

      @media (min-width: 900px) {
        top: 0;
        right: 0;
      }
    }

    footer {
      z-index: 1;
      grid-row: -1;
    }
  `;

  const main = css`
    grid-column: 1 / -1;
    grid-row: 2;
  `;

  return (
    <>
      <div css={rootStyles}>
        <Header isMenuActive={isMenuActive} />
        <div className="filter"></div>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          src={video}
          type="video/mp4"
          alt="Video by Peter Fowler from Pexels"
        />
        <main className="base-grid" css={main}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainRouter;
