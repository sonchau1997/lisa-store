import Card from "components/Card";
import React, { Component } from "react";
import Slider from "react-slick";
import ImgProduct1 from "assets/image-product-1.svg";
import ImgProduct2 from "assets/image-product-2.svg";
import ImgProduct3 from "assets/image-product-3.svg";
import ImgProduct4 from "assets/image-product-4.svg";
import { styled } from "styled-components";
const StyledSideShow = styled.div`
.grid-item{
    display: grid;
    grid-template-columns: auto auto auto auto ;
}

    
`

const DataBestSeller = [{
    img: ImgProduct1,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    price: "63.85"
},
{
    img: ImgProduct2,
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: "130.00"
},
{
    img: ImgProduct3,
    title: "Geometric print Scarf",
    category: "Scarf",
    price: "53.00"
},
{
    img: ImgProduct4,
    title: "Yellow Reserved Hoodie",
    category: "Dress",
    tag: "Sale",
    price: "364.00",
    discountPrice: "155.00"
}];

class SideShow extends Component {
    render(){
        let settings = { 
			dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		}
		return (
            <div>
                <Slider {...settings}>
                <StyledSideShow>
                    <div className="grid-item">
                        {DataBestSeller.map((item) => <Card title={item.title} img={item.img} tag={item.tag} price={item.price} category={item.category} discountPrice={item.discountPrice}></Card>)}
                    </div>
                </StyledSideShow>

            </Slider>
            </div>
			)
	}
}

export default SideShow;