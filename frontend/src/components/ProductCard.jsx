import styled  from 'styled-components'

function ProductCard() {
    return (
        <>
            <Card>
                <Tittle>
                PlayStation 5
                </Tittle>
                
                <p>
                PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.
                </p>
                <Price>
                    Price: ₹499
                </Price>
           </Card> 
        </>
    )
}

export default ProductCard

const Card = styled.div`

width: 400px;
padding: 1em 2em;
box-shadow: 0px 1px 8px #888;

`
const Tittle = styled.p`
font-size: 20px;
padding: 1em;
font-weight:600;
display: flex;
justify-content: center;
color:#FF5E78;



`
const Price = styled.p`
color:#61B15A;
padding: 1em;
display: flex;
justify-content: center;

`
