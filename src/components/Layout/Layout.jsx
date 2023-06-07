
import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { styled } from 'styled-components';

const StyledLayout = styled.div`
  background: #ffff;
 
`
const PrimaryLayout = () => (
    <StyledLayout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </StyledLayout>
);
export default PrimaryLayout;