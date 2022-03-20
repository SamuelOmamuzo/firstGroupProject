import React from "react";
import styled from "styled-components"

const Card = ({fd,discription,cl,Title,Info,icon,text}) =>{
    return(
        <Content fd = {fd}>
            <BoxHolder cl = {cl}>
                <Icon src = {icon}/>
                <Text>
                    <h3>{text}</h3>
                    {Info}
                </Text>
            </BoxHolder>
            <Discription>
                <h3>{Title}</h3>
                {discription}
            </Discription>
        </Content>
    )
}
export default Card;

const Text = styled.div`
    width:90%;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
    flex-direction:column;
    font-size:14px;

    h3{
        font-size:20px;
    }

    @midea screen and (max-width:499px){
        h3{
            font-size:15px;
        }
        font-size:10px;
    }
`

const Icon = styled.div`
    width:50px;
    height:50px;
    background-color:lightgrey;
`

const Discription = styled.div`
    width:64%;
    height:100%;
    word-brake:brake-all;
    font-size:13px;
    display:flex;
    flex-direction:column;
    justify-content:center;

    h3{
        margin-top:0px;
        font-size:25px;
        color:blue;
    }

    @media screen and (max-width:768px){
        width:100%;
        height:200px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        font-size:13px;
        word-brake:brake-all;
    }

    @media screen and (max-width:499px){
        font-size:10px;
        height:230px;
        h3{
            font-size:15px;
            color:blue;
        }
    }

    
    @media screen and (max-width:920px){
        text-align:center;
        width:100%;
        font-size:10px;
    }

    @media screen and (max-width:942px){
        text-align:center;
        width:100%;
        font-size:10px;
    }

    @media screen and (max-width:946px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:955px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }
`

const BoxHolder = styled.div`
    width:300px;
    height:220px;
    background-color:${({cl})=>cl};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:5px;
    color:#fff;

    @media screen and (max-width:768px){
        width:300px;
        height:200px;
        background-color:${({cl})=>cl};
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    @media screen and (max-width:499px){
        font-size:10px;
        margin-bottom:10px;
    }
`

const Content = styled.div`
    width:90%;
    // height:250px;
    margin-top:30px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:${({fd})=> fd};
    justify-content:space-between;

    
    @media screen and (max-width:768px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:907px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:920px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:942px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:946px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:955px){
        width:90%;
        // height:100%;
        justify-content:center;
        align-items:center;
    }

    // @media screen and (max-width:966px){
    //     width:90%;
    //     // height:100%;
    //     justify-content:center;
    //     align-items:center;
    // }
`