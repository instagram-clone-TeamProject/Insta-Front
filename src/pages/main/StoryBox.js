import React from "react";
import styled from "styled-components";
import StoryList from "./StoryList";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dog1 from '../../assets/stories/dog1.png'
import dog2 from '../../assets/stories/dog2.png'
import dog3 from '../../assets/stories/dog3.png'
import dog4 from '../../assets/stories/dog4.png'
import dog5 from '../../assets/stories/dog5.png'
import dog6 from '../../assets/stories/dog6.png'
import dog7 from '../../assets/stories/dog7.png'
import dog8 from '../../assets/stories/dog8.png'
import dog9 from '../../assets/stories/dog9.png'
import dog10 from '../../assets/stories/dog10.png'
import dog11 from '../../assets/stories/dog11.png'
import dog12 from '../../assets/stories/dog12.png'


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
    overflow:visible;
`;


const stories=[
    {id:1,name:'docs',read:0,photo:dog1},
    {id:2,name:'choco',read:0,photo:dog2},
    {id:3,name:'beozzi',read:0,photo:dog3},
    {id:4,name:'bee',read:0,photo:dog4},
    {id:5,name:'dogdog',read:0,photo:dog5},
    {id:6,name:'mong',read:0,photo:dog6},
    {id:7,name:'seol',read:1,photo:dog7},
    {id:8,name:'yorky',read:1,photo:dog8},
    {id:9,name:'darong',read:1,photo:dog9},
    {id:10,name:'cogi',read:1,photo:dog10},
    {id:11,name:'hehe',read:1,photo:dog11},
    {id:12,name:'jindo',read:1,photo:dog12},
]


const StoryBox=()=>{
    const settings={
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:8,
        slidesToScroll:4,
        arrows:true
    };
    return (

            <Slider {...settings}>
                
            {stories.map(story => (
                <StoryList
                    id={story.id}
                    name={story.name}
                    text={story.read}
                    photo={story.photo}
                />
            ))}
            </Slider>

    )
}

export default StoryBox;