import { styled } from "styled-components";
import Filter from "assets/filter.svg";
import Card from "components/Card";
import ImgProduct1 from "assets/image-product-1.svg";
import ImgProduct2 from "assets/image-product-2.svg";
import ImgProduct3 from "assets/image-product-3.svg";
import ImgProduct4 from "assets/image-product-4.svg";
import ImgProduct5 from "assets/image-product-5.svg";
import ImgProduct6 from "assets/image-product-6.svg";
import ImgProduct7 from "assets/image-product-7.svg";
import ImgProduct8 from "assets/image-product-8.svg";
import ImgProduct9 from "assets/image-product-9.svg";
import ImgProduct10 from "assets/image-product-10.svg";
import ImgProduct11 from "assets/image-product-11.svg";
import ImgProduct12 from "assets/image-product-12.svg";
import ImgProduct13 from "assets/image-product-13.svg";
import ImgProduct14 from "assets/image-product-14.svg";
import Banner from "components/Banner";
import SideShow from "components/SideShow";
import IconInstagram from "assets/instagramWhite.png";
import Brand from "components/Brand";
import HotCategory from "components/Hot-Category";
const StyledContent = styled.div`
  margin-top: 50px;
  .container {
    padding: 0 300px;
    //width: 1320px;
  }

 
  .title-grid-product h2 {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");

    /* H2 */

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
  .grid-item {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 24px;
  }
  .btn-filter-with-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    gap: 4px;
    width: 92px;
    height: 32px;

    /* Black */
    color: #ffff;
    background: #1e2832;
  }
  .btn-filter-with-icon button {
    border: none;
  }

  .btn-filter-with-icon:hover {
    background-color: #d95050;
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
    .container {
      padding: 0 20px;
    }

   
  }
`;

const DataCategory = [
  {
    img: ImgProduct1,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    price: "63.85",
  },
  {
    img: ImgProduct2,
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: "130.00",
  },
  {
    img: ImgProduct3,
    title: "Geometric print Scarf",
    category: "Scarf",
    price: "53.00",
  },
  {
    img: ImgProduct4,
    title: "Yellow Reserved Hoodie",
    category: "Dress",
    tag: "Sale",
    price: "364.00",
    discountPrice: "155.00",
  },
  {
    img: ImgProduct5,
    title: "Basic Dress Greens",
    category: "Dress",
    tag: "Hot",
    price: "236.00",
  },
  {
    img: ImgProduct6,
    title: "Nike Air Zoom Pegasus",
    category: "Shoe",
    tag: "Sale",
    discountPrice: "198.00",
    price: "220.00",
  },
  {
    img: ImgProduct7,
    title: "Nike Repel Miler",
    category: "Dress",
    price: "120.50",
  },
  {
    img: ImgProduct8,
    title: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    price: "160.00",
  },
];
const Content = () => {
  return (
    <StyledContent>
      <div className="container">
        <Brand/>
        <HotCategory/>
        <div className="title-grid-product">
          <h2>Or subscribe to the newsletter</h2>
        </div>
        <div className="category">
          <div className="nav">
            <p>All Products</p>
            <p>T-Shirt</p>
            <p>Hoodies</p>
            <p>Jacket</p>
          </div>
          <div className="btn-filter">
            <button className="btn-filter-with-icon">
              <img src={Filter} alt="filter" />
              Filter
            </button>
          </div>
        </div>
        <div className="grid-item">
          {DataCategory.map((item) => (
            <Card
              title={item.title}
              img={item.img}
              tag={item.tag}
              price={item.price}
              category={item.category}
              discountPrice={item.discountPrice}
            ></Card>
          ))}
        </div>
      </div>

      <Banner/>
      <div className="container">
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
      </div>
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
    </StyledContent>
  );
};
export default Content;
