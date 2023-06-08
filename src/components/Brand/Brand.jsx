import Brand1 from "assets/brand-1.svg";
import Brand2 from "assets/brand-2.svg";
import Brand3 from "assets/brand-3.svg";
import Brand4 from "assets/brand-4.svg";
import Brand5 from "assets/brand-5.svg";
import { styled } from "styled-components";
const StyleBrand = styled.div`
  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .brand {
      justify-content: center;
      flex-wrap: wrap;
    }
    .brand img {
      width: 100px;
    }
  }
`;
const Brand = () => {
  return (
    <StyleBrand>
      <div className="brand">
        <img src={Brand1} alt="brand1" />
        <img src={Brand2} alt="brand2" />
        <img src={Brand3} alt="brand3" />
        <img src={Brand4} alt="brand4" />
        <img src={Brand5} alt="brand5" />
      </div>
    </StyleBrand>
  );
};
export default Brand;
