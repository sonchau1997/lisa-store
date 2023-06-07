import ImgBanner from "assets/background.svg";
import ImgLogo1 from "assets/zara-logo1.svg";
import ImgLogo2 from "assets/zara-logo2.svg";
import { styled } from "styled-components";
const StyledBanner = styled.div`
background-image:url(${ImgBanner});
background-repeat:no-repeat;
margin-top: 150px;
height: 776px;
img{
    width:100%;
}
.logo{
    position: relative;
    height: 776px;
}
.logo2{
position: absolute;
top:200px;
right:640px;
width: 191px;
height: 81px;
}
.logo1{
position: absolute;
top:51px;
right:0;
width: 732px;
height: 309px;
opacity: 0.5;

}
    
`
const Banner = () => {
    return (
        <StyledBanner>
            <div className="logo">
                <img className="logo1" src={ImgLogo1} alt="logo1" />
                <img className="logo2" src={ImgLogo2} alt="logo2" />
            </div>


        </StyledBanner>

    )

}
export default Banner;