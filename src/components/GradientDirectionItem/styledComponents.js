// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
    list-style-type: none;
    width: 49%;
    @media screen and (min-width: 768px){
        width: 24%;
    }
`

export const DirectionButton = styled.button`
    background-color: #ffffff;
    text-align: center;
    color: ${props => (props.isActive ? '#334155' : '#1e293b')}
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    border-radius: 6px;
    border: none;
    padding-top: 12px;
    padding-left: 24px;
    padding-bottom: 24px;
    padding: 12px;
    margin-bottom: 10px;
    outline: none;
    opacity: ${props => (props.isActive ? 1 : 0.5)}
    cursor: pointer;
`
