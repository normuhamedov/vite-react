import { Card, Button } from "react-bootstrap"

const StoreItem = ({ id, name, price, imgUrl }) => {
    return (

        <Card className='card-wrapper h-100 rounded-5'>
            <div className='card-image--wrapper'>
                <Card.Img className='card-img h-100' variant="top" src={imgUrl} style={{ objectFit: "cover", objectPosition: "center"}} />
            </div>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-center mb-4'>
                    <span className='fs-2 card-title'>{name}</span>
                    <span className='ms-2 text-muted'>{price}</span>
                </Card.Title>
                <div className='mt-mt-auto'>
                    <Button className='card-button w-100'>
                        + Add to Cart
                    </Button>
                </div>
            </Card.Body >
        </Card >

    )
}

export default StoreItem