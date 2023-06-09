import { styled } from "styled-components";
import SideShow from "components/SideShow";

const StyledBestSeller=styled.div`
.category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1320px;
  }
  .nav {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
.title-best-seller h2 {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .item-best-seller {
    width: 1320px;
  }
  .btn-show {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    gap: 4px;
    height: 32px;

    /* Black */

    background: #1e2832;
  }
  .btn-show span {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    width: 63px;
    height: 22px;

    /* Button - Small */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* White */

    color: #ffffff;
  }
  .btn-show:hover {
    background-color: #d95050;
  }
`
const BestSeller=()=>{
    return(
        <StyledBestSeller>
             <div className="title-best-seller">
          <h2>Best Seller</h2>
        </div>
        <div className="category">
          <div className="nav">
            <p>All Products</p>
            <p>T-Shirt</p>
            <p>Hoodies</p>
            <p>Jacket</p>
          </div>

          <button className="btn-show">
            <span>Show All</span>
          </button>
        </div>
        <div className="item-best-seller">
          <SideShow></SideShow>
        </div>

        </StyledBestSeller>

    )
}
export default BestSeller;