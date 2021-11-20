import React from "react";
import styled from "styled-components";
import FeedList from "./FeedList";

const Wrapper=styled.div`
    width:614px;
    background-color:none;
    border:none;
`;

const feeds=[
    {id:1,user:'user1',text:'게시글 1'},
    {id:2,user:'user2',text:'게시글 2'},
    {id:3,user:'user3',text:'게시글 3'},
    {id:4,user:'user4',text:'게시글 4'},
    {id:5,user:'user5',text:'게시글 5'}
]

function FeedBox(){
    return (
        <Wrapper>
            {feeds.map(feed => (
                <FeedList
                    id={feed.id}
                    user={feed.user}
                    text={feed.text}
                />
            ))}
        </Wrapper>
    )
}

export default FeedBox;