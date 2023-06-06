import { styled } from "styled-components";
import Brand1 from "assets/brand-1.svg";
import Brand2 from "assets/brand-2.svg";
import Brand3 from "assets/brand-3.svg";
import Brand4 from "assets/brand-4.svg";
import Brand5 from "assets/brand-5.svg";
import ImgCategory12 from "assets/image-category-12.svg";
import ImgCategory from "assets/item-category.svg";
import ImgCategory1 from "assets/item-category-1.svg";
import ImgCategory2 from "assets/item-category-2.svg";
import ImgCategory3 from "assets/item-category-hover 1.svg";
import Filter from "assets/filter.svg";
import Card from "components/Card";
const StyledContent = styled.div`
padding:0 300px;

.brand{
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.hot-category{
   display: flex;
   justify-content: center;
 
}
.title-hot-category{
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
    left:160px;

}
.grid-category{
    display: grid;
    grid-template-columns: auto auto ;
    gap:5px;
}
.title-grid-product{
    
/* H2 */

font-family: 'Roboto';
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
.category{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
}
.grid-item{
    display: grid;
    grid-template-columns: auto auto auto auto ;
    

}
.btn-filter-with-icon{
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 15px;
gap: 4px;
width: 92px;
height: 32px;

/* Black */
color:#FFFF;
background: #1E2832;

}
.btn-filter-with-icon button{
    border:none;

}

.btn-filter-with-icon:hover{
    background-color: #d95050;
   

}

 
`
const DataCategory = [{
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85"

},
{
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85"

}, {
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85"

}, {
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85"

},
{
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85",
    discountPrice: "20"

},
{
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85",
    discountPrice: "20"

},
{
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85",
    discountPrice: "20"

},
{
    img: ImgCategory,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    tag: "sale",
    price: "63.85"

}

]
const Content = () => {
    return (
        <StyledContent>

            <div className="brand">
                <img src={Brand1} alt="brand1" />
                <img src={Brand2} alt="brand2" />
                <img src={Brand3} alt="brand3" />
                <img src={Brand4} alt="brand4" />
                <img src={Brand5} alt="brand5" />

            </div>
            <div className="hot-category">

                <div className="title-hot-category">
                    Explore new and popular styles
                </div>
                <div className="img-main">
                    <img src={ImgCategory12} alt="category1" />
                </div>
                <div className="grid-category">
                    <img src={ImgCategory} alt="category1" />
                    <img src={ImgCategory1} alt="category2" />
                    <img src={ImgCategory2} alt="category3" />
                    <img src={ImgCategory3} alt="category4" />
                </div>
            </div>
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
                {DataCategory.map((item) => <Card title={item.title} img={item.img} tag={item.tag} price={item.price} category={item.category} discountPrice={item.discountPrice}></Card>)}

            </div>
        </StyledContent>
    )
}
export default Content;