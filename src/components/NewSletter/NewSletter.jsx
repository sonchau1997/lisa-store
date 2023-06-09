import { styled } from "styled-components"
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

const StyledNewSletter=styled.div`
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

`
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
const NewSletter=()=>{
    return(
        <StyledNewSletter>
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

        </StyledNewSletter>
    )
}
export default NewSletter;