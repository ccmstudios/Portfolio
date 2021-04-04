import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Author from '../assets/images/authorsnap.PNG'
import RZN8 from '../assets/images/rzn8snap.PNG'
import Golem from '../assets/images/golemsnap.PNG'
class Slideshow extends React.Component{
  render(){
    return(
      <div>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Author}
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Golem}
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={RZN8}
      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}

export default Slideshow;