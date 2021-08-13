import styled from 'styled-components'
import { Link } from 'react-router-dom'

function CheckCard() {
    return (
        <>
            <Container>
                <Price>
                     Price<Span>₹499</Span>
                </Price>
                <Price>
                     Status <Span>In Stock</Span>
                </Price>
                <Price>
                    Qty <Span>
                    <Select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                         <option value="3">3</option>
                          <option value="4">4</option>
                    </Select>
                     </Span>
                </Price>
                <Link to="/cart">
                <Button>Add To Cart</Button>
                </Link>
           
            </Container>
            
        </>
    )
}

export default CheckCard

const Container = styled.div`
width:200px;
margin-right:2em;
display: flex;


flex-direction: column;

`
const Price = styled.p`
padding:1em 0px;
`
const Span = styled.span`
padding-left:1em;
`
const Select = styled.select`

`
const Button = styled.button`
background:white;
border:none;
box-shadow: 0px 1px 8px green;
padding: 1em 2em;
color:green;
margin-top:10px;
font-weight:700;
    letter-spacing:1px;
    
a{
    text-decoration: none;
    color:green;
   
}
`