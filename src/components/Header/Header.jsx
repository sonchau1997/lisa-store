import { styled } from "styled-components";
import SearchIcon from "assets/search-icon.svg"
const StyledHeader = styled.div`
display: flex;
align-items:center;
justify-content:space-around;
.search-icon{
    height: 50px;
    width: 50px;
}
.logo{
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'AmstelvarAlpha';
font-style: normal;
font-weight: 400;
font-size: 42px;
line-height: 50px;

}
.account{
    display: flex;
}
    
`


const Header = () => {
    return (
        <StyledHeader>
            <div className="search-icon">
                <img src={SearchIcon} alt="search-icon" />
            </div>
            <div className="logo">Lisa Store</div>
            <div className="account">
                <div className="btn-account-with-icon">
                    <button>
                        Account
                    </button>

                </div>
                <div className="btn-shoping-with-icon">
                    <button>
                        Shoping
                    </button>

                </div>

            </div>


        </StyledHeader>
    )
}
export default Header;