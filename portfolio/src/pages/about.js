import React from 'react'
import Dev from '../assets/images/Author.jpg'
class About extends React.Component{
    render(){
        return(
            <div>
                <div id='aboutdivh1'>
                    <h1>About</h1>
                </div>
<div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src={Dev} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3">Meet Nygel M. Porterfield</h1>
      <p class="lead">Nygel Porterfield is a husband and father of three children living on the outskirts of Charlotte NC. When he's not developing websites for various projects, he is writing. Nygel has self published over two dozen books and three comic books. He is also an avid gamer, lover of anime, and football fan. Go Niners! Nygel is someone who is constantly seeking his next challenge and loves to tackle projects of any size. His current project is developing a Fantasy football application that will allow users to track players from college all the way to the NFL.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button href='https://twitter.com/URxFAVxAUTHOR' target='_blank' type="button" class="btn btn-info btn-lg px-4 me-md-2">Twitter</button>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}

export default About;