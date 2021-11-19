import React from "react";
import styled from "styled-components";
import StoryList from "./StoryList";
import Slider from "react-slick";
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai';

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
    overflow: hidden;
`;


const stories=[
    {id:1,read:0,special:0},
    {id:2,read:0,special:1},
    {id:3,read:0,special:0},
    {id:4,read:0,special:1},
    {id:5,read:0,special:0},
    {id:6,read:0,special:1},
    {id:7,read:1,special:0},
    {id:8,read:1,special:1},
    {id:9,read:1,special:0},
    {id:10,read:1,special:1},
    {id:11,read:1,special:0},
    {id:12,read:1,special:1},
]

function StoryBox(){
    const settings={
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:4,
        slidesToScroll:4
    };
    return (
        <Wrapper>

            {stories.map(story => (
                <StoryList
                    id={story.id}
                    text={story.read}
                    special={story.special}
                />
            ))}

        </Wrapper>
    )
}

export default StoryBox;