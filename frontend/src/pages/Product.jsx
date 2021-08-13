import styled from "styled-components"
import CheckCard from "../components/CheckCard"
import ProductCard from "../components/ProductCard"

function product() {
    // name: "PlayStation 5",
// imageUrl:
//   "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
// description:
//   "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
// price: 499,
// countInStock: 15,
    return (
        <>
            <Container>
                <Img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" />
                <ProductCard />
                <CheckCard/>
            </Container>            
        </>
    )
}

export default product

const Container = styled.div`
margin-top: 2em;
margin-left:2em;
display: flex;
justify-content: space-between;


`
const Img = styled.img`
width: 500px;

`
