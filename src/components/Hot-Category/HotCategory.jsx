import { styled } from "styled-components";
import ImgCategory12 from "assets/image-category-12.svg";
import ImgCategory from "assets/item-category.svg";
import ImgCategory1 from "assets/item-category-1.svg";
import ImgCategory2 from "assets/item-category-2.svg";
import ImgCategory3 from "assets/item-category-hover 1.svg";

const StyledHotCategory = styled.div`
padding: 0 300px;
  .hot-category {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
  .title-hot-category {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    position: absolute;
    font-weight: 400;
    font-size: 34px;
    width: 648px;
    height: 450px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-90deg);
    padding: 90px 0;
    left: 160px;
  }
  .grid-category {
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    position: relative;
    .hot-category {
      flex-direction: column;
      gap: 5px;
    }
    .hot-category img {
      width: 312px;
      height: 312px;
    }
    .grid-category {
      display: flex;
      flex-direction: column;
    }
    .title-hot-category {
      transform: none;
      padding: 0;
      left: 0;
      font-size: 14px;
      width: 300px;
    }
  }
`;
const HotCategory = () => {
  return (
    <StyledHotCategory>
      <div className="hot-category">
        <div className="title-hot-category">Explore new and popular styles</div>
        <div className="img-main">
          <img src={ImgCategory12} alt="category12" />
        </div>
        <div className="grid-category">
          <img src={ImgCategory} alt="category1" />
          <img src={ImgCategory1} alt="category2" />
          <img src={ImgCategory2} alt="category3" />
          <img src={ImgCategory3} alt="category4" />
        </div>
      </div>
    </StyledHotCategory>
  );
};
export default HotCategory;
