import React from 'react'
import LandingImage from '../assets/images/landingimage.jpg'
class Landing extends React.Component{
    render(){
        return(
<div className="px-4 pt-5 my-5 text-center border-bottom">
  <h1 className="display-4 fw-bold">Nygel Porterfield</h1>
  <p className="display-4 fw-bold">Front End Developer</p>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">React.js | MongoDB | HTML | Javascript | CSS | BootStrap.js | MYSQL | Angular | Express |  Firebase | Fundamental understanding of API usage | Node JS </p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <button href='https://github.com/ccmstudios' target='_blank' type="button" className="btn btn-info btn-lg px-4 me-sm-3">GITHUB</button>

    </div>
  </div>
  <div className="overflow-hidden" >
    <div className="container px-5">
      <img src={LandingImage} alt='sitepics'className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
</div>
            </div>
            </div>
            
        )
    }
}

export default Landing;