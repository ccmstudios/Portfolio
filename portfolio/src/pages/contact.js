import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Mac from '../assets/images/mac.jpg'
class Contact extends React.Component{
    render(){
        return(
           <div>

<Card id='contacth1' className="text-center">
  <Card.Header><h1 >Contact Details</h1></Card.Header>
  <Card.Body>
    <Card.Title><h3>Thank you for viewing my Portfolio</h3></Card.Title>
    <img src={Mac} alt='sitepics' className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>

    <Card.Text>
<h2>To Contact Nygel, please email him at Nygel.Porterfield@gmail.com </h2>   </Card.Text>
    <Card.Text>
<h2>You can also reach out to him by phone @ <strong>980-279-9329 </strong></h2>   </Card.Text>
    <Button href='https://www.linkedin.com/in/nygelporterfield/' target='_blank' variant="info" size='lg' block>LinkedIn</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
           </div>
        )
    }
}

export default Contact;