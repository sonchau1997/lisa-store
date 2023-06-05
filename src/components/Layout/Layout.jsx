
import Content from 'components/Content';
import Header from 'components/Header';
import { styled } from 'styled-components';

const StyledLayout = styled.div`
  background: #ffff;
 
`
const PrimaryLayout = () => (
    <StyledLayout>
        <Header></Header>
        <Content></Content>
    </StyledLayout>
);
export default PrimaryLayout;