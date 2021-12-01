import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {FiMoreHorizontal} from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FaHeart, FaRegHeart,FaRegBookmark } from 'react-icons/fa';
import {FiMessageCircle} from 'react-icons/fi';
import {MdTagFaces} from 'react-icons/md';

const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:614px;
    height:auto;
    border: 1px solid #dbdbdb;
    margin-bottom: 25px;
`;

const Wrapper1=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:60px;
    margin: 0;
    padding:0;
    background-color: white;
`;

const Wrapper2=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width:594px;
    height:50px;
    padding-left: 16px;
    padding-right: 4px;
    background-color: white;
`;

const Wrapper3=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:50px;
    border: none;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`;

const IconBox=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    width:120px;
    height: 50px;
    background-color: white;
`

const ContentBox=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width:100%;
    min-height: 50px;
    background-color: white;
    border: none;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`

const CommentBox=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:50px;
    border-top:1px solid #DBDBDB;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`;

const ProfileImage = styled.image`
  border:1px solid #EFEEEF;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin-right: 14px;
  background: url(${props => props.src});
  background-size: 30px;
  
`;

const BlackText=styled.text`
    color: black;
    font-size: 13px;
`;


const InputConsol = styled.input`
  background-color: white;
  border: none;
  outline: none;
  width: 500px;
  ::-webkit-input-placeholder {
    color: gray;
  }
`


function FeedList({id,user,profile,text,file}){
    const [liked,setLiked]=useState(false);
    const [likeNum,setLikeNum]=useState(0);
    const [likeList,setLikeList]=useState([]);

    useEffect(()=>{
        const getLike = async () => {
            try{
                const response = await axios.get(`http://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/${id}/likeList`);
                setLikeList(response.data);
                setLikeNum(likeList.length);
            }
            catch(e){
              console.log("getLike error");
            }
          }

          getLike();
          if (likeList.length!==0){
              console.log('likelist',likeList);
              const finduser=likeList.find(lk => lk.userId===String({user}.user));
              if (finduser!=undefined){
                  setLiked(true);
                  console.log('set liked~');
              }

            }
        },[]);

        useEffect(()=>{
            const getLike = async () => {
                try{
                    const response = await axios.get(`http://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/${id}/likeList`);
                    setLikeList(response.data);
                    setLikeNum(likeList.length);
                }
                catch(e){
                  console.log("getLike error");
                }
              }
    
              getLike();
              if (likeList.length!==0){
                  console.log('likelist',likeList);
                  const finduser=likeList.find(lk => lk.userId===String({user}.user));
                  if (finduser!=undefined){
                      setLiked(true);
                      console.log('set liked~');
                  }
    
                }
            },[liked]);
    
    const patchLike = async () => {
        try{
            const response = await axios.patch(`http://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/${id}/1/like`);
            console.log(response);
        }
        catch(e){
            console.log("patchLike error");
        }

    }
    const clickLike=()=>(
        liked?
        (
        patchLike(),
        setLiked(false),
        setLikeNum(likeNum-1)
        ):(
        patchLike(),
        setLiked(true),
        setLikeNum(likeNum+1)
        )
    )
    return(
        <Wrapper>
            <Wrapper1>
                <Wrapper2>
                    <ProfileImage src={profile} />
                    <p style={{fontSize:'14px', fontWeight:'bold', margin:'0'}}>{user}</p>
                </Wrapper2>
                <FiMoreHorizontal size="18px" style={{margin:"20px"}}/>
            </Wrapper1>
            <img src={file} width="100%" onDoubleClick={clickLike} />
            <Wrapper3>
                <IconBox>
                    {liked?
                    <FaHeart size="22px" color="red" onClick={clickLike} />
                    :<FaRegHeart size="22px" onClick={clickLike}
                    onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                    onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}/>
                }

                    <FiMessageCircle
                    size="24px"
                    onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                    onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}
                    />
                    <IoPaperPlaneOutline
                    size="24px"
                    onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                    onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}
                    />
                </IconBox>
                <FaRegBookmark
                size="22px"
                onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}
                />
            </Wrapper3>

            <ContentBox>
                <p style={{fontSize:'13px', color:'black', fontWeight:'bold' }}>좋아요 {likeNum}개</p>
                <div>
                    <BlackText style={{fontWeight:"bold"}}>{user}&nbsp;</BlackText>
                    <BlackText>{text}</BlackText>
                </div>
                <p style={{ fontSize: '10px', color:'gray'}}>
                    2일 전
                </p>
            </ContentBox>
            <CommentBox>
                <MdTagFaces size="26px" />
                <InputConsol placeholder='댓글 달기...' />
                <p style={{fontSize:'14px', color:'skyblue', margin:'0'}}>게시</p>
            </CommentBox>
        </Wrapper>
    )
}

export default FeedList;