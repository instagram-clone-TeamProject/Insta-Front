import React from 'react';
import styled from 'styled-components';
import profile_image from '../../assets/profile_image.jpeg';

const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:80px;
    margin-left: 10px;
    margin-right:10px;
`;

const ProfileImage = styled.image`
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background: url(${props => props.src});
  background-size: 50px;
`

const BlackText=styled.text`
    color: black;
    font-size: 13px;
`;



function StoryList({id,read,special}){
    return(
        <Wrapper>
            <ProfileImage src={profile_image} />
            <BlackText>user {id}</BlackText>
        </Wrapper>
    )
}

export default StoryList;