import styled from 'styled-components'
import instagram_logo from '../../assets/instagram_logo.png'

import {BiSearch} from 'react-icons/bi'
import {BsHouseDoorFill,BsHouseDoor} from 'react-icons/bs'
import {IoPaperPlaneOutline,IoPaperPlane} from 'react-icons/io5'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {AiFillCompass,AiOutlineCompass} from 'react-icons/ai'

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
    width:189px;
    height:20px;
    padding-left: 12px;
    padding-right:12px;
    padding-top:3px;
    padding-bottom:3px;
`;

const InputConsol = styled.input`
    background-color: #FAFAFA;
    border: none;
    outline: none;
    width: 400px;
    ::-webkit-input-placeholder{
      color:#D5D5D5;
    }
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
        <BiSearch size="26px" color="#A7AAAD" />
        <InputConsol placeholder="검색" />
      </InputBox>
      <IconBox>
        <BsHouseDoorFill />
        <BsHouseDoor />
        <IoPaperPlaneOutline />
        <IoPaperPlane />
        <AiFillCompass />
        <AiOutlineCompass />
        <FaHeart />
        <FaRegHeart />

      </IconBox>
      </Wrapper2>
    </Wrapper1>
  </>
  )
}
export default Header