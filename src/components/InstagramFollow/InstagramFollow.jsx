import { styled } from "styled-components";
import ImgProduct9 from "assets/image-product-9.svg";
import ImgProduct10 from "assets/image-product-10.svg";
import ImgProduct11 from "assets/image-product-11.svg";
import ImgProduct12 from "assets/image-product-12.svg";
import ImgProduct13 from "assets/image-product-13.svg";
import ImgProduct14 from "assets/image-product-14.svg";
import IconInstagram from "assets/instagramWhite.png";
const StyledInstagramFollow = styled.div`
.title-follow h2 {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */
    text-align: center;
    text-transform: capitalize;
  }

  .follow {
    display: flex;
    flex-direction: column;
    gap: 70px;
    background: #f0f0f0;
    margin-top: 150px;
    height: 653px;
  }
  .flex-product {
    padding: 0 300px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
  .author h4 {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Primary */

    color: #ff6f61;
  }
  .action:hover {
    img:first-child {
      filter: brightness(50%);
    }
    background-image: url(${IconInstagram});
    background-repeat: no-repeat;
    .icon-size {
      display: block;
    }
  }
  .icon-size {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 100px;
    height: 100px;
    display: none;
  }
  .action {
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    .follow {
     height: 100%;
    }
    .flex-product {
        padding: 0 20px;
        flex-direction:column;
        align-items: center;

    }
  }
    
`
const InstagramFollow = () => {
    return (
        <StyledInstagramFollow>
            <div className="follow">
                <div className="title-follow">
                    <h2>Follow products and discounts on Instagram</h2>
                </div>

                <div className="flex-product">
                    <div className="action">
                        <img src={ImgProduct9} alt="product9" />
                        <img className="icon-size" src={IconInstagram} alt="iconInstagra" />
                    </div>

                    <div className="action">
                        <img src={ImgProduct10} alt="product10" />
                        <img className="icon-size" src={IconInstagram} alt="iconInstagra" />
                    </div>
                    <div className="action">
                        <img src={ImgProduct11} alt="product11" />
                        <img className="icon-size" src={IconInstagram} alt="iconInstagra" />
                    </div>
                    <div className="action">
                        <img src={ImgProduct12} alt="product12" />
                        <img className="icon-size" src={IconInstagram} alt="iconInstagra" />
                    </div>
                    <div className="action">
                        <img src={ImgProduct13} alt="product13" />
                        <img className="icon-size" src={IconInstagram} alt="iconInstagra" />
                    </div>
                    <div className="action">
                        <img src={ImgProduct14} alt="product14" />
                        <img className="icon-size" src={IconInstagram} alt="iconInstagra" />
                    </div>
                </div>
                <div className="author">
                    <h4>@lisa.official</h4>
                </div>
            </div>
        </StyledInstagramFollow>
    )
}
export default InstagramFollow;