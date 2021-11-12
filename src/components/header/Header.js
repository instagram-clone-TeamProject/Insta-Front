import styled from 'styled-components'
import instagram_logo from '../../assets/instagram_logo.png'

const Wrapper1=styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:54px;
  margin:0;
  padding:0;
  position:fixed;
  background-color:white;
  border-bottom:1px solid #DBDBDB;
  z-index:100;
`;

const Wrapper2=styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 935px;
  height:54px;
  margin:0;
  padding-left:20px;
  padding-right:20px;
`;

const InputBox = styled.div`
    display:flex;
    justify-content: start;
    align-items: center;
    border-radius: 3px;
    background-color: #FAFAFA;
    border:1px solid #DBDBDB;
    width:215px;
    height:28px;
`;

const InputConsol = styled.input`
    background-color: #FAFAFA;
    border: none;
    outline: none;
    width: 400px;
`;

const IconBox=styled.div`
  display: flex;
  justify-content: space-between;
  width:266px;
  height:22px;
`;

function Header() {
  return(
  <>
    <Wrapper1>
      <Wrapper2>
      <a href="/">
        <img src={instagram_logo} alt="logo" height="45px" />
      </a>
      <InputBox>
        <InputConsol placeholder="검색" />
      </InputBox>
      <IconBox>

      </IconBox>
      </Wrapper2>
    </Wrapper1>
  </>
  )
}
export default Header
