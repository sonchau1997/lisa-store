import { styled } from "styled-components";
const StyledCard = styled.div`
`


const Card = ({ img, title, category, price, tag }) => {
    return (
        <StyledCard>
            <img src={img} alt="img" />
            <div className="tag">{tag}</div>
            <div className="title">{title}</div>
            <div>
                <div className="category">
                    <p>{category}</p>
                </div>
                <div className="price">
                    <p>{price}</p>
                </div>

            </div>




        </StyledCard>
    )
}
export default Card;