import Card from './Card';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";


import Detail from './Detaill';
export default function Home(props){
    const [isbn, setIsbnToFind]= useState("");
      ;
      const handleCardClick = (id) => {
        setIsbnToFind(id);
      };
    const renderBooks = () => {
        const books_jx = props.books.map((car, index) => (
          <Col key={index} md={3}> {}
            <Card
              carModel={car.carModel}
              image={car.image}
              partName={car.partName}
              id_loc ={index}
              price ={car.price}
              carYear = {car.carYear}
              onClick={handleCardClick} 
            />
          </Col>
        ));      
        const rows = [];
        for (let i = 0; i < books_jx.length; i += 4) {
          const row = books_jx.slice(i, i + 4);
          rows.push(
            <Row key={i}>
              {row}
            </Row>
          );
        }     
        return rows;
      };
    return (
<section >
    <div ><h1><FormattedMessage id = "title"/></h1></div>
    <div>
        <div>
        {renderBooks()}
        </div>
        {isbn!==""?
        <div >
            <Detail bookDetail ={props.books[isbn]} editable = {props.editable}/>
        </div>:true }
    </div>
  </section>
    );
}