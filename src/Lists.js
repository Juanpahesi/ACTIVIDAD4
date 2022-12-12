import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { listRestaurants } from './directoryService';


function Lists() {

    const [restaurants, setRestaurants] = useState([
        {
            id: "1",
            nombre: "Cabaña EL SABOR",
            descrip: `Carrera 27 Nro. 28 - A1 Bogotá 
            Platos Exquisitos`,
url: require(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT15H5Uv5U-EuxKmIweGhDXZAKVL6N1dxBgw&usqp=CAU`)
        },
        {
            id: "2",
            nombre: "DELICIAS RUTA DEL SABOR 55",
            descrip: "Av Oriental 24 Nro. 5 - 44 Villa de Leyva \n Deliciosa comida Típica",
            url: require(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPV19XAbGeGN91b6VM7jLPokG77mmNKQbVg&usqp=CAU`)
        },
        {
            id: "3",
            nombre: "Sabinos Pizzas y Más",
            descrip: "AV Colon #21 a 25 Tunja \n Platos a la Carta y Comidas rápidas",
            url: require(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYauf1Sy4glMijYAiDjM2NF3QJb_dg4W2-jA&usqp=CAU`)
        },
        {
            id: "4",
            nombre: "KRISBY DELICIAS",
            descrip: "Calle 19 # 20 - 64 Sáchica Boyacá \n Exquisito Pollo Asado y Broaster",
         url: require(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9Ry90W_GXby2OXEXN4ggXOOucCVWPkkUVg&usqp=CAU`)
        }
    ])

    /*
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try{
            const restaurantsFirebase = await listRestaurants();
            setRestaurants(restaurantsFirebase)
        } catch (error) {
            console.log(error);
        }
        
    }
    */
    return (
        <Container className="contain-restaurant">
            <h1 className="pt-4 pb-4">Directorio Restaurente</h1>
            <Row className="mt-4" md={3}>
                {restaurants.map(item => (
                    <Col className="md-4" key={item.id}>
                    <Card className="mb-4 box-shadow">
                        <Card.Img 
                            className="card-img-top"
                            src={item.url}
                            alt="foto restaurante"
                            style={{ height: '225px'}}
                        />

<Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>{item.descrip}</Card.Text>
                            
                        </Card.Body>
                        {
                            /*
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>{item.address}</Card.Text>
                        </Card.Body>
                        */
}
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Lists;