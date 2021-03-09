import "./ShowCountry.css";
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const ShowCountry = (props) => {
    // console.log(props)
    const { name, flag, region } = props.oneCountry;
    // const handleClick = props.handleClick
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/name/${name}`)
    }


    return (

        <div className="col-md-3 my-3 mx-2">
            <Card className="card-holder" style={{ width: '18rem', height: '28rem', margin: '20px' }}>
                <Card.Img className="cardImage" variant="top" src={flag} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title><h2>{name}</h2></Card.Title>
                        <Card.Text>
                            {region}
                        </Card.Text>
                        {/* <Link to></Link> */}

                        <Button onClick={() => handleClick(name)} >View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>


    );
}

export default ShowCountry;