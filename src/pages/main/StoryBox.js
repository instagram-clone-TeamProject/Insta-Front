import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
    display:flex;
    flex-direction: row;
    width:612px;
    height:84px;
    background-color:white;
    padding-top:16px;
    padding-bottom:16px;
    margin-bottom:24px;
    border:1px solid #DBDBDB;
`;

function StoryBox(){
    return (
        <Wrapper />
    )
}

export default StoryBox;