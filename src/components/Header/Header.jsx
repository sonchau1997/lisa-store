import { styled } from "styled-components";
import SearchIcon from "assets/search-icon.svg";
import UserIcon from "assets/user-icon.svg";
import ShopingIcon from "assets/shoping-icon.svg";
const StyledHeader = styled.div`
padding:0 15%;
width: 100%;
.content{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
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
    width: 10%;
    justify-content: space-around;
    gap:20px;
 
}
.btn-account-with-icon{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap:20px;
 
}
.btn-account-with-icon button{
    border-style: none;
}
.btn-shoping-with-icon button{
    border-style: none;
}


.btn-shoping-with-icon{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap:20px;

 
}
.line{
    bottom: 0;
    margin-top: 10px;
    border: 1px solid #E3E3E3;
}

`
const Header = () => {
    return (
        <StyledHeader>
            <div className="content">
                <div className="search-icon">
                    <img src={SearchIcon} alt="search-icon" />
                </div>
                <div className="logo">Lisa Store</div>
                <div className="account">
                    <div className="btn-account-with-icon">
                        <img src={UserIcon} alt="user" />

                        <button>

                            Account
                        </button>

                    </div>
                    <div className="btn-shoping-with-icon">
                        <img src={ShopingIcon} alt="shoping" />

                        <button>

                            Shoping
                        </button>
                    </div>
                </div>

            </div>

            <div className="line"/>

        </StyledHeader>
    )
}
export default Header;