import styled from "styled-components";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Container>
      <Logo>
        <h3><Span>Tech </Span>Kart</h3>
      </Logo>

          <Wrapper>
         
        <Link to="/">Shop</Link>
       
        <Linker>
        <Link to="/cart">
          Cart
          <Badge>0</Badge>
                  </Link>
        </Linker>
      </Wrapper>

      {/* <Line>
                <div></div>
                <div></div>
                <div></div>
            </Line> */}
    </Container>
  );
}

export default navbar;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:70px;
  background-color:#FF5E78;
  color:white;
  
`;
const Wrapper = styled.div`
padding-right: 5em;
display: flex;
a
{
    color:white;
    text-decoration: none;
   

}

`;
const Linker = styled.div`
 display: flex;
    align-items: center;
    padding:0  1.2em;
`
const Logo = styled.div`
padding-left: 2.5em;

display: flex;
justify-content: space-between;
`;
const Badge = styled.span`
border-radius:50%;
background-color:white;
color:violet;
padding: 2px 4px;
margin-left: 8px;
`;
const Span = styled.span`
font-size:22px;
letter-spacing: 1px;
font-weight:900;
`
// const Line = styled.div`

// `