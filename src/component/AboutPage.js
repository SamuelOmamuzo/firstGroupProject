import React from "react";
import styled from "styled-components";
import img from "./image/pexels-lagos-food-bank-initiative-8060425.jpg"
import Card from "./Card"
import OurTeam from "./OurTeam"

const AboutPage = () =>{
    return(
        <Content>
            <LandingPage>
                <Image src = {img}/>
                <OverLayer>
                    <Span>ABOUT US</Span>
                    <Button>donate</Button>
                </OverLayer>
            </LandingPage>
            <Cards>
                <Card 
                    discription="Our vision is buliding people with dignity and self-worth.Every human being should have the 
                    same opportunity. More than 100 million Nigerians lack access to basic amenities-from clean were and 
                    electricity quility education and liberty to participatein the economy, as equal cityzens. We are about 
                    changing these phenomena, We belive everyone should be able to love with dignity. without dependence. We are 
                    a Non-Govermental Organization, based in Lageos Nigeria.We strive to protectand feed th poor, advocate and
                    elighten communities, empower young people, serve as the voice to the voiceless, we give grants and schoolarship,
                    we serve as an outstretched arm of God, we being succer and hope to the need." 
                    Title="OUR VISION" 
                    cl="blue" 
                    icon=""
                    Info="At the core of our values, is the utmost
                    goal of making individual lives, wether old or young,
                    and communities of people, better than we meet it."
                    text="OUR VISION"
                />
                <Card 
                    discription="Our vision is buliding people with dignity and self-worth.Every human being should have the 
                    same opportunity. More than 100 million Nigerians lack access to basic amenities-from clean were and 
                    electricity quility education and liberty to participatein the economy, as equal cityzens. We are about 
                    changing these phenomena, We belive everyone should be able to love with dignity. without dependence. We are 
                    a Non-Govermental Organization, based in Lageos Nigeria.We strive to protectand feed th poor, advocate and
                    elighten communities, empower young people, serve as the voice to the voiceless, we give grants and schoolarship,
                    we serve as an outstretched arm of God, we being succer and hope to the need." 
                    Title="OUR MISION" 
                    cl="lightblue" 
                    icon=""
                    Info="At the core of our values, is the utmost
                    goal of making individual lives, wether old or young,
                    and communities of people, better than we meet it."
                    text="OUR MISSION"
                    fd="row-reverse"
                    />
                <Card 
                    discription="Our vision is buliding people with dignity and self-worth.Every human being should have the 
                    same opportunity. More than 100 million Nigerians lack access to basic amenities-from clean were and 
                    electricity quility education and liberty to participatein the economy, as equal cityzens. We are about 
                    changing these phenomena, We belive everyone should be able to love with dignity. without dependence. We are 
                    a Non-Govermental Organization, based in Lageos Nigeria.We strive to protectand feed th poor, advocate and
                    elighten communities, empower young people, serve as the voice to the voiceless, we give grants and schoolarship,
                    we serve as an outstretched arm of God, we being succer and hope to the need." 
                    Title="OUR VOLUNTEERS/TEAM" 
                    cl="green" 
                    icon=""
                    Info="At the core of our values, is the utmost
                    goal of making individual lives, wether old or young,
                    and communities of people, better than we meet it."
                    text="VOLUNTEER"
                />
            </Cards>
            <OurTeam/>
        </Content>
    );
};
export default AboutPage;

const Cards = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`

const Button = styled.button`
    width:100px;
    border:none;
    outline:none;
    height:40px;
    border-radius:7px;
    color:#ffff;
    background-color:#1BF940;
    margin-top:10px;
    transition:all 590ms;
    transform:scale(1);

    :hover{
        cursor:pointer;
        transform:scale(1.10)
    }
`

const Span = styled.div`
    font-size:25px;
    color:#ffff;
    font-weight:bold;
`

const OverLayer = styled.div`
    height:100%;
    width:100%;
    background-color:rgb(9,82,252, 40%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    position: absolute;
`

const LandingPage = styled.div`
    width:100%;
    height:100vh;
    background-color:blue;
`

const Content = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
`