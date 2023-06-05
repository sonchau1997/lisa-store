import { styled } from "styled-components";
import ImgProduct from "assets/image-product.svg";
import PlantLeft from "assets/plant-left.svg";
import PlantRight from "assets/plant-right.svg";
import Shop from "assets/shop.svg";
import Brand1 from "assets/brand-1.svg";
import Brand2 from "assets/brand-2.svg";
import Brand3 from "assets/brand-3.svg";
import Brand4 from "assets/brand-4.svg";
import Brand5 from "assets/brand-5.svg";
import ImgCategory2 from "assets/item-category-2.svg";
const StyledContent = styled.div`
.top-main{
height: 847px;


background: #F0F0F0;
}
.content{
width: 686px;
display: flex;
justify-content: space-between;
padding:0 20%;
align-items: center;

}
.content-left{
display: flex;
flex-direction: column;
width: 686px;

gap: 2rem;

}
.content-right{
   
}

.title-top-main{
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
 width: 360px;
height: 55px;
left: 300px;
top: 299px;

/* Body */

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 74px;
line-height: 55px;
/* identical to box height, or 74% */

text-transform: capitalize;

/* Dark */

color: #000000;

}
.content-top-main{
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
width: 682px;
height: 119px;
left: 304px;
top: 406px;

/* Paragraph - Larg */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 55px;
/* or 183% */

text-transform: capitalize;

/* Dark */

color: #000000;

}


.product{
width: 1226px;
height: 562px;
display: flex;
justify-content: center;
}
.btn-shop-with-icon{
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

background: #1E2832;
}
.plant-left{
position: absolute;
width: 132.34px;
height: 66.61px;
left: 86.16px;
top: 614.62px;

transform: matrix(-0.87, 0.5, 0.5, 0.87, 0, 0);

}
.plant-right{

position: absolute;
width: 195px;
height: 262px;
left: 1874.44px;
top: 365.8px;
transform: matrix(-0.87, 0.5, 0.5, 0.87, 0, 0);
}
.brand{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.hot-category{
    display: flex;
    width: 1320px;
    height: 648px;
    align-items: center;
    
}
.title-hot-category{
position: absolute;
width: 648px;
height: 52px;
left: -52px;
top: 648px;
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
text-align: center;
text-transform: uppercase;

/* Dark */

color: #000000;

transform: rotate(-90deg);
}

  
    
`


const Content = () => {
    return (
        <StyledContent>
            <div className="top-main">
                <div className="plant-left">
                    <img src={PlantLeft} alt="plant-left" />
                </div>
                <div className="product">
                    <div className="content">
                        <div className="content-left">
                            <div className="title-top-main">Collections</div>
                            <div className="content-top-main">
                                you can explore ans shop many differnt collection
                                from various barands here.
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
                <div className="plant-right">
                    <img src={PlantRight} alt="plant-right" />
                </div>
              
            </div>
            <div className="brand">
                    <img src={Brand1} alt="brand1" />
                    <img src={Brand2} alt="brand2" />
                    <img src={Brand3} alt="brand3" />
                    <img src={Brand4} alt="brand4" />
                    <img src={Brand5} alt="brand5" />

                </div>
                <div className="hot-category">
                    <div className="title-hot-category">
                    Explore new and popular styles
                    </div>
                    <div>
                        <img src={ImgCategory2} alt="category1" />
                    </div>
                </div>






        </StyledContent>
    )
}
export default Content;