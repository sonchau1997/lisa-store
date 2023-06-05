
import Header from 'components/Header';
import { styled } from 'styled-components';

const StyledLayout = styled.div`
  background: #caeae6;
  min-height: 180vh;
`
const PrimaryLayout = () => (
    <StyledLayout>
        <Header></Header>
    </StyledLayout>
);
export default PrimaryLayout;