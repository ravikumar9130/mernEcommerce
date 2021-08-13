import styled from 'styled-components'
import { Link } from "react-router-dom"

function Card() {
    return (
        <Div>
        <Link className="link" to="/product/:id">
        <CardComponent>
            <ImgCard src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" />
            <Tittle> PlayStation 5</Tittle>
            <Price><Span>From </Span>₹499</Price>
        </CardComponent>
        </Link>     
        </Div>
    )
}

export default Card


const Div = styled.div`

`
const CardComponent = styled.div`
 box-shadow: 0px 2px 8px #888888;
border-radius:7px;
background:white;
margin-top:2em;
padding: 20px;

display: flex;
justify-content: center;
align-items: center;
flex-direction:column ;
`
const ImgCard = styled.img`
width:220px;
height: 200px;
`
const Tittle = styled.p`
padding: 15px 0;
text-decoration: none;
color:#FF5E78;
`
const Span = styled.span`
color:green;
`
const Price = styled.p`
color:black;
`


