import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import LogoSvg from "../Svgs/LogoSvg";

const HeaderLogo = ({ position }) => {
  const style = css`
    z-index: 10;
    /*height: 100%;*/
    width: 100%;
    img {
      /* height: 100%; */
      width: 100%;
    }
    @media (min-width: 900px) {
    }
  `;
  return (
    <Link
      to="/"
      css={css`
        ${style} ${position}
      `}
    >
      {/* <img src={logo} alt="solargard logo" /> */}
      <LogoSvg />
    </Link>
  );
};

export default HeaderLogo;
