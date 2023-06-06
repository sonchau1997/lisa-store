import ImgBanner from "assets/background.svg";
import ImgLogo1 from "assets/zara-logo1.svg";
import ImgLogo2 from "assets/zara-logo2.svg";
import { styled } from "styled-components";
const StyledBanner=styled.div`
width: 100%;
padding:0 20px;
padding-top:150px;
img{
    width: 100%;
}
.logo2{
position: absolute;
width: 191px;
height: 81px;
left: 1083px;
padding-top:200px;
top: auto;

}
.logo1{
position: absolute;
opacity:0.5;
width: 732px;
height: 309px;
left: 1200px;
padding-top:51px;
top: auto;
}
    
`
const Banner=()=>{
    return(
        <StyledBanner>
            <img src={ImgBanner} alt="banner" />
            <img className="logo1" src={ImgLogo1} alt="logo1" />
            <img className="logo2" src={ImgLogo2} alt="logo2" />

        </StyledBanner>

    )

}
export default Banner;