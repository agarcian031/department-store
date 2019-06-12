import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios'; 
import {Card, Header, Divider, Button, Icon} from 'semantic-ui-react';

const ProductList = (props) => {
  const [products, setProducts] = useState([]); 


  useEffect( () => { 
    const {department_id} = props
    axios.get(`/api/departments/${department_id}/products`)
    .then( res => {
      setProducts(res.data);
    });
  }, []); 

  //  Delete Product 
  const deleteProduct = (id) => {
    // const id = props.match.params.department_id
    const department_id = props.department_id
    axios.delete(`/api/departments/${department_id}/products/${id}`)
    .then(res=>{
     setProducts(products.filter( p => p.id !== id))
    });
  }


 const renderProducts = () => {
    if (products.length <= 0)
      return <Header as="h3" textAlign="center">No Products Listed</Header>
    return products.map( product => (
      <Card color="blue" key={product.id}>
        <Card.Content>
          <Card.Header textAlign="center">{product.name}</Card.Header>
          <Divider/>
        </Card.Content>
        <Card.Description textAlign="center">
              {product.description}
        </Card.Description>
        <Card.Content extra>
          <p>${product.price}</p>
          <Button.Group size="tiny" floated="right"> 
          <Button icon onClick={() => deleteProduct(product.id)}>
            <Icon name="pencil"/>
          </Button>
          <Button icon color="red" onClick={() => deleteProduct(product.id)}>
            <Icon name="trash"/>
          </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    ))
  }


  return (
    <div>
      <Header as="h3" textAlign="center">Products Available:</Header>
      <Divider/>
      <br/>
      <Button as={Link} to={`/departments/${props.department_id}/products/new`} icon size="tiny" color="blue"> 
        <Icon name="plus"/>Add Products
      </Button>
      <br/>
      <br/>
      <Card.Group>
        {renderProducts()}
      </Card.Group>
    </div>
  )
}

export default ProductList; 
