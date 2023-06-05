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
const StyledContent = styled.div`
.top-main{
width: 1920px;
height: 847px;
left: 0px;
top: 0px;

background: #F0F0F0;
}
.content{
width: 686px;
height: 364px;
display: flex;
justify-content: space-between;
padding:0 20%;
align-items: center;

}
.content-left{
display: flex;
flex-direction: column;
column-gap:500px;
width: 686px;
height: 364px;

}
.content-right{
    width: 40%;
}
.content-right img{
   width: 424px;
   height: 542px;
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
transform: matrix(-0.87, 0.5, 0.5, 0.87, 0, 0);
}
.plant-right{
position: absolute; 

left: 1874.44px;
top: 365.8px;
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






        </StyledContent>
    )
}
export default Content;