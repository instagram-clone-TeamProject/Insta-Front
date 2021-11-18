import React from "react";
import styled from "styled-components";
import profile_image from '../../assets/profile_image.jpeg'

const Wrapper=styled.div`
  display:flex;
  flex-direction:column;
  width:293px;
  height:623px;
  margin:0;
  padding:0;
`;

const Wrapper1=styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    width:293px;
    margin-top:18px;
    margin-bottom:10px;
`;

const TextBox=styled.div`
    display:flex;
    flex-direction: column;
    width:202px;
    padding-left:8px;
`;

const Profile=styled.div`
  width:56px;
  height:56px;
  border-radius: 50%;
  overflow:hidden;
`;

const Wrapper2=styled.div`
    display:flex;
    flex-direction: column;
    width:293px;
    margin-bottom:12px;
`;

const TextBox2=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:12px;
    padding:4px;
`;


const BlackText=styled.text`
    color: black;
    font-size: 14px;
`;

const GrayText=styled.text`
    color: #8E8E8E;
    font-size: 14px;
`;
const InfoText=styled.text`
    color: #CACACA;
    font-size: 11px;
`;

const BlueText=styled.text`
    color: #0395F6;
    font-size: 12px;
`;

function InfoBox(){
    return (
        <Wrapper>
            <Wrapper1>
                <Profile>
                    <img src={profile_image} width="100%" height="100%" style={{objectFit:"cover"}}/>
                </Profile>
                <TextBox>
                    <BlackText>olrearny</BlackText>
                    <GrayText>정드림</GrayText>
                </TextBox>
                <BlueText>전환</BlueText>
            </Wrapper1>
            <Wrapper2>
                <TextBox2>
                    <GrayText>회원님을 위한 추천</GrayText>
                    <BlackText>모두 보기</BlackText>
                </TextBox2>
            </Wrapper2>
            <InfoText>소개ㆍ도움말ㆍ홍보 센터ㆍAPIㆍ채용 정보ㆍ개인정보처리방침ㆍ</InfoText>
            <InfoText>약관ㆍ위치ㆍ인기 계정ㆍ해시태그ㆍ언어</InfoText>
            <br />
            <InfoText>© 2021 INSTAGRAM FROM META</InfoText>

        </Wrapper>
    )
}

export default InfoBox;