// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
    background-image: linear-gradient(${props => props.gradientValue});
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 550px;
    @media screen and (min-width: 768px){
        width: 85%;
        max-width: 1140px;
    }
`

export const Heading = styled.h1`
    color: #ffffff;
    font-family: "Roboto";
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    @media screen and (min-width: 768px){
        font-size: 32px;
    }
    
`

export const DirectionDescription = styled.p`
    color: #ededed;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 22px;
    line-height: 1.5;
`

export const GradientDirectionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px;
    @media screen and (min-width: 768px){
        width: 60%;
        max-width: 425px;
    }
`

export const ColorPickersDescription = styled.p`
    color: #ededed;
    font-family: "Roboto";
    font-size: 22px;
    line-height: 1.5;
    font-weight: 500;
`

export const ColorPickerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    min-width:320px;
`

export const CustomInputAndColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ColorValue = styled.p`
    color: #ededed;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 500;
`

export const CustomInput = styled.input`
    width: 100px;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`

export const GenerateButton = styled.button`
    background-color: #00c9b7;
    color: #1e293b;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 24px;
    outline: none;
    cursor: pointer;
`
