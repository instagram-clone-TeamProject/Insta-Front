import React, { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import FeedList from "./FeedList";

const Wrapper=styled.div`
    width:614px;
    background-color:none;
    border:none;
`;

function FeedBox(){
    const [feeds, setFeeds] = useState([]);
    useEffect(()=>{
    const getFeeds = async () => {
        try{
            const response = await axios.get("http://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/postList");
            setFeeds(response.data);
        }
        catch(e){
          console.log("getFeeds error");
        }
      }
      getFeeds();
      console.log(feeds);
    },[]);
    


    return (
        <Wrapper>
            {feeds.map(feed => (
                <FeedList
                    id={feed.postNo}
                    user={feed.userInfo.userId}
                    profile={feed.userInfo.originalFileName}
                    text={feed.content}
                    file={feed.filePath}
                />
            ))}
        </Wrapper>
    )
}

export default FeedBox;