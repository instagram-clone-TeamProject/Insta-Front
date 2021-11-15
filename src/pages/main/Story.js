import React from "react";
import styled from "styled-components";

const StoryBox=styled.div`
    width:612px;
    height:84px;
    background-color:white;
    padding-top:16px;
    padding-bottom:16px;
    margin-bottom:24px;
    border:1px solid #DBDBDB;
`;

function Story(){
    return (
        <StoryBox />
    )
}

export default Story;