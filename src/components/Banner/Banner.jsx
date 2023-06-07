import ImgBanner from "assets/background.svg";
import ImgLogo1 from "assets/zara-logo1.svg";
import ImgLogo2 from "assets/zara-logo2.svg";
import { styled } from "styled-components";
const StyledBanner = styled.div`
  background-image: url(${ImgBanner});
  background-repeat: no-repeat;
  margin-top: 150px;
  height: 776px;
  img {
    width: 100%;
  }
  .content {
    position: relative;
    height: 776px;
  }
  .logo2 {
    position: absolute;
    top: 200px;
    right: 640px;
    width: 191px;
    height: 81px;
  }
  .logo1 {
    position: absolute;
    top: 51px;
    right: 0;
    width: 732px;
    height: 309px;
    opacity: 0.5;
  }
  .title-banner {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    position: absolute;
    top: 330px;
    right: 330px;
    width: 504px;
    height: 81px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    transform: capitalize;
    color: #ff6f61;
  }
  .btn-seeCollection {
    position: absolute;
    top: 580px;
    right: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 26px;
    gap: 8px;

    width: 237px;
    height: 72px;

    /* White */

    background: #ffffff;
  }
  .btn-seeCollection span {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    width: 185px;
    height: 34px;

    /* Button - Larg */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
    /* identical to box height */

    text-transform: capitalize;

    /* Black */

    color: #1e2832;
  }
  .btn-seeCollection:hover{
    background-color: #ff6f61;
  }
`;
const Banner = () => {
  return (
    <StyledBanner>
      <div className="content">
        <img className="logo1" src={ImgLogo1} alt="logo1" />
        <img className="logo2" src={ImgLogo2} alt="logo2" />
        <p className="title-banner">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <button className="btn-seeCollection">
          <span>See Collection</span>
        </button>
      </div>
    </StyledBanner>
  );
};
export default Banner;
