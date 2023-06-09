import { styled } from "styled-components";
import Banner from "components/Banner";
import Brand from "components/Brand";
import HotCategory from "components/Hot-Category";
import NewSletter from "components/NewSletter";
import BestSeller from "components/BestSeller";
import InstagramFollow from "components/InstagramFollow";
const StyledContent = styled.div`
  margin-top: 50px;
  .container {
    padding: 0 300px;
  }
`
const Content = () => {
  return (
    <StyledContent>
        <Brand />
        <HotCategory />
        <NewSletter />
        <Banner />
  
         <BestSeller />
     
      <InstagramFollow/> 

    </StyledContent>
  );
};
export default Content;
