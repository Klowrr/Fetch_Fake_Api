import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Produk = () => {
  const [produk,setProduk]= React.useState([])

  // Fetch Cara Ke 2

  // const url = 'https://fakestoreapi.com/products';
  // const getData = async () => {
  //   const response = await fetch(url)
  //   const dataProduk = await response.json()
  //   setProduk(dataProduk)
  // }
  // React.useEffect(()=>{
  //   getData()
  // })


  //Fetch Cara ke 2
  
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((result)=>{
      setProduk(result)
    })
  })

  return(
    <div className="container"> 
      <div className="row">
        <h1>TokoCina</h1> 

        { produk.map( (produk) => { 
          return (
            <div className="col-3 d-flex">
              <ItemProduk 
              key={produk.id}
              title={produk.title}
              img={produk.image}
              desc={produk.description}
              price={produk.price}
              />
            </div>
          )}
        )}
        
      </div>
    </div>
    
  )
}

function ItemProduk(props) {
  const mouseon = (e) => {
    e.target.innerHTML = "BUY"
  }
  const mouseleave = (e) => {
    e.target.innerHTML = props.price
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="mb-5">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
        </div>
        <Button onMouseEnter={mouseon} onMouseLeave={mouseleave} variant="primary">$ {props.price}</Button>
      </Card.Body>
    </Card>
  );
}


export default Produk;