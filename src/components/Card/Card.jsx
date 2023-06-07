import { styled } from "styled-components";
import { ReactComponent as Heart } from "assets/heart-icon1.svg";
import { ReactComponent as Search } from "assets/search-icon.svg";
import { ReactComponent as ShopingIcon } from "assets/shop.svg";

const StyledCard = styled.div`
width: 312px;
.title{
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
height: 22px;
/* H6 */
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */

text-transform: capitalize;

/* Dark */

color: #000000;

}
.pic{
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
    position: relative;
}

img{
   width: 312px;
   height: 400px;
}
.category{


font-family: 'Open Sans';
font-style: normal;
color: rgba(0, 0, 0, 0.5);
}
.discount-price{
    margin: 0;
font-family: 'Open Sans';
font-style: normal;
color: #FF6F61;


}
.cateory-price{
    display: flex;
    justify-content: space-between;
 
}
.discount{
    display: flex;
    align-items: center;
    gap:10px;
}
.price{
width: 51px;
height: 22px;
left: 251px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: right;
text-transform: capitalize;
color: #000000;

}
.price-before-discount{
width: 52px;
height: 19px;
margin: 0;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
text-align: right;
text-decoration-line: line-through;
text-transform: capitalize;
color: rgba(0, 0, 0, 0.5);


}

    .hot {
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF6F61;

}
.sale{
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;

}

.hover-action{
    position: absolute;
    bottom:0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1e2832;
    height: 50px;
   visibility: hidden;
   opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
   
}
.action-left{
    display: flex;
    justify-content: space-around;
    gap:10px;

}
.heart-icon{
    width: 30px;
    height: 30px;
    
    filter: invert(100%) sepia(0%) saturate(22%) hue-rotate(343deg)
      brightness(106%) contrast(106%);
    
   
}
.search-icon{
    width:30px;
    height:30px;
    filter: invert(100%) sepia(0%) saturate(22%) hue-rotate(343deg)
        brightness(106%) contrast(106%);
    
}
.heart-icon:hover{
   
            filter: invert(69%) sepia(91%) saturate(4583%) hue-rotate(329deg) brightness(94%) contrast(85%);
        


}
.search-icon:hover{
   
       
            filter: invert(69%) sepia(91%) saturate(4583%) hue-rotate(329deg) brightness(94%) contrast(85%);
        

}

.action-right:hover{
    button{
        color:#e05252;

    }svg{
        filter: invert(69%) sepia(91%) saturate(4583%) hue-rotate(329deg) brightness(94%) contrast(85%);
}
    }

           

   
.action-right button{
    border-style: none;
    background: #1e2832;
    color: #FFF;
    
}

.action-right{
    display: flex;
    align-items: center;
    gap:10px;

 
}
.pic:hover{
    .hover-action{
    visibility: visible;
      opacity: 1;
    }
}
`


const Card = ({ img, title, category, price, tag, discountPrice, ...rest }) => {
    return (
        <StyledCard {...rest}>
            <div className="pic">
                <img src={img} alt="img" />
                {tag === 'Sale' ? (<div className="sale">{tag}</div>) : null}
                {tag === 'Hot' ? (<div className="hot">{tag}</div>) : null}
                <div className="hover-action">
                    <div className="action-left">
                        <Heart className="heart-icon" />
                        <Search className="search-icon" />
                    </div>
                    <div className="action-right">
                        <ShopingIcon />
                        <button className="btn-shop-now">Shop Now</button>

                    </div>

                </div>
            </div>


            <div className="title">{title}</div>
            <div className="cateory-price">
                <div className="category">
                    {category}
                </div>

                {discountPrice ? (
                    <div className="discount">
                        <p className="price-before-discount">${price}</p>
                        <p className="discount-price">${discountPrice}</p>

                    </div>

                ) : (<div className="price">
                    <div>${price}</div>


                </div>)}


            </div>




        </StyledCard>
    )
}
export default Card;