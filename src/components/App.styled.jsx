import styled from '@emotion/styled'

export const Title = styled.h1`font-size: 30px
`
export const Buttons = styled.div`gap: 20px;
margin-top: 40px;
margin-bottom: 40px;
    display: flex;
    align-items: center;
    width: 300px;
    justify-content: center;`

export const Button = styled.button`
:hover{
    border: 1px solid black;
}
background-color: #03a9f438;
height: 40px;
border-radius: 15%;
width: 60px;
list-style: none;
cursor: pointer;
border: none;
font-weight: 600;

    :first-of-type {
  background: #3b8d3b;}
  :last-of-type{
    background-color: #c85757;
  }
}`

export const ListTitle = styled.ul`font-size: 25px;
margin-left: 50px`

export const StatItems = styled.li`list-style: none;
font-size: 25px;
margin-bottom: 10px;
`

export const NotificationMessage = styled.p`font-size: 25px;
margin-left: 50px;`