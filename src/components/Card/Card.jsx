import { styled } from "styled-components";
const StyledCard = styled.div`
.title{
width: 189px;
height: 22px;
/* H6 */
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;

/* identical to box height */

text-transform: capitalize;

/* Dark */

color: #000000;

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
font-family: 'Open Sans';
font-style: normal;
color: #FF6F61;


}
.cateory-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
 
}
.price{
    display: flex;
    gap:2rem;
    align-items: center;
}
`


const Card = ({ img, title, category, price, tag,discountPrice}) => {
    return (
        <StyledCard>
            <img src={img} alt="img" />
            <div className="tag">{tag}</div>
            <div className="title"><h6>{title}</h6></div>
            <div className="cateory-price">
                <div className="category">
                   {category}
                </div>
                <div className="price">
                    <div>${price}</div>
                    <div className="discount-price">${discountPrice}</div>
                </div>

            </div>




        </StyledCard>
    )
}
export default Card;