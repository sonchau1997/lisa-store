import { styled } from "styled-components";
import SearchIcon from "assets/search-icon.svg";
import ImgProduct from "assets/image-product.svg";
import PlantLeft from "assets/plant-left.svg";
import PlantRight from "assets/plant-right.svg";
import Shop from "assets/shop.svg";
import { ReactComponent as UserIcon } from "assets/user-icon.svg";
import { ReactComponent as ShopingIcon } from "assets/shoping-icon.svg";
const StyledHeader = styled.div`
  background: #f0f0f0;
  padding:0 300px;
  height: 847px;
  position: relative;
  .top-main {
    width: 100%;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
  
  }
  .content-left {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 2rem;
  }
  .content-right {
  }

  .title-top-main {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    width: 360px;
    height: 55px;
    left: 300px;
    top: 299px;

    /* Body */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
    /* identical to box height, or 74% */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .content-top-main {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    width: 100%;
    left: 304px;
    top: 406px;

    /* Paragraph - Larg */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    /* or 183% */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }

  .product {
    width: 100%;
    display: flex;
    justify-content: center;

  }
  .btn-shop-with-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 26px;
    gap: 8px;
    color: #ffff;
    width: 223px;
    height: 72px;
    left: 304px;
    top: 591px;
    /* Black */
    background: #1e2832;
  }
  .btn-shop-with-icon:hover {
    background-color: #d95050;
  }
  .plant-left {
    position: absolute;
    width: 132.34px;
    left: 0;
    top: 424px;
  }
  .plant-right {
    position: absolute;
    width: 195px;
    right: 0;
    top: 275.8px;
  }
  .content-product {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top:135px
  
  }
  .search-icon {
    display: flex;
    align-items: center;
    height: 50px;
    width: 50px;
  }
  .logo {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
  }
  .account {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  .btn-account-with-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap: 20px;
  }
  .btn-account-with-icon:hover {
    button {
      color: #e05252;
    }
    svg {
      filter: invert(69%) sepia(91%) saturate(4583%) hue-rotate(329deg)
        brightness(94%) contrast(85%);
    }
  }
  .btn-shoping-with-icon:hover {
    button {
      color: #e05252;
    }
    svg {
      filter: invert(69%) sepia(91%) saturate(4583%) hue-rotate(329deg)
        brightness(94%) contrast(85%);
    }
  }
  .btn-account-with-icon button {
    border-style: none;
  }
  .btn-shoping-with-icon button {
    border-style: none;
  }

  .btn-shoping-with-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap: 20px;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <div className="nav">
        <div className="search-icon">
          <img src={SearchIcon} alt="search-icon" />
        </div>
        <div className="logo">Lisa Store</div>
        <div className="account">
          <div className="btn-account-with-icon">
            <UserIcon />

            <button>Account</button>
          </div>
          <div className="btn-shoping-with-icon">
            <ShopingIcon />

            <button>Shoping</button>
          </div>
        </div>
      </div>
      <div className="top-main">
        <img className="plant-left" src={PlantLeft} alt="plant-left" />
        <img className="plant-right" src={PlantRight} alt="plant-right" />

        <div className="product">
          <div className="content-product">
            <div className="content-left">
              <div className="title-top-main">Collections</div>
              <div className="content-top-main">
                you can explore ans shop many differnt collection from various
                barands here.
              </div>
              <div className="btn-shop-now">
                <button className="btn-shop-with-icon">
                  <img src={Shop} alt="shop" />
                  Shop Now
                </button>
              </div>
            </div>
            <div className="content-right">
              <img src={ImgProduct} alt="img-product" />
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;
