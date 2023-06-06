import { styled } from "styled-components";
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
`


const Card = ({ img, title, category, price, tag, discountPrice, ...rest }) => {
    return (
        <StyledCard {...rest}>
            <div className="pic">
                <img src={img} alt="img" />
                {tag === 'Sale' ? (<div className="sale">{tag}</div>) : null}
                {tag === 'Hot' ? (<div className="hot">{tag}</div>) : null}
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