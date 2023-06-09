import Card from "components/Card";
import ImgProduct1 from "assets/image-product-1.svg";
import ImgProduct2 from "assets/image-product-2.svg";
import ImgProduct3 from "assets/image-product-3.svg";
import ImgProduct4 from "assets/image-product-4.svg";
import ImgProduct5 from "assets/image-product-5.svg";
import ImgProduct6 from "assets/image-product-6.svg";
import ImgProduct7 from "assets/image-product-7.svg";
import ImgProduct8 from "assets/image-product-8.svg";
import Carousel from "react-multi-carousel";

const DataBestSeller = [
    {
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
    },
    {
        img: ImgProduct5,
        title: "Basic Dress Greens",
        category: "Dress",
        tag: "Hot",
        price: "236.00"
    },
    {
        img: ImgProduct6,
        title: "Nike Air Zoom Pegasus",
        category: "Shoe",
        tag: "Sale",
        discountPrice: "198.00",
        price: "220.00"
    },
    {
        img: ImgProduct7,
        title: "Nike Repel Miler",
        category: "Dress",
        price: "120.50"
    },
    {
        img: ImgProduct8,
        title: "Nike Sportswear Futura Luxe",
        category: "Glasses",
        price: "160.00"
    },
];
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};


const SideShow = () => {

    return (
             <Carousel responsive={responsive}>
                {DataBestSeller.map((item) => <Card title={item.title} img={item.img} tag={item.tag} price={item.price} category={item.category} discountPrice={item.discountPrice}></Card>)}
            </Carousel>
    );
}


export default SideShow;