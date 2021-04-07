import React from 'react'
import Cutter from '../assets/images/cutter.png'
import Signature from '../assets/images/signature.png'
import RZN8 from '../assets/images/RZN8RAIN.GIF'
import Authorpage from '../assets/images/authorpage.PNG'
import RZN8page from '../assets/images/rzn8page.PNG'
import Golempage from '../assets/images/golempage.PNG'
class Content extends React.Component{
    render(){
        return(
                <div className="container marketing">

<div className="row">
  <div className="col-lg-4">
    <img src={Cutter} alt='sitepics' width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>

    <h2>Golem Genesis</h2>
    <p>The official website for Golem Genesis the series</p>
    <p><a className="btn btn-info" href="golemgenesis.com" target='_blank'>Check it out! &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    <img id='rzn8img'src={RZN8} alt='sitepics' width="240" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>

    <h2>RZN8 Publishing</h2>
    <p>The official website for RZN8 Print and Publishing</p>
    <p><a className="btn btn-info" href="resonate-publishing.com" target='_blank'>Check it out! &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    <img src={Signature} alt='sitepics'width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>

    <h2>URFAVORITEAUTHOR</h2>
    <p>The Official website for N.M. Porterfield the author.</p>
    <p><a className="btn btn-info" href="nmporterfield.com" target='_blank'>Check it out! &raquo;</a></p>
  </div>
</div>


<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">Golem Genesis<span className="text-muted"></span></h2>
    <p className="lead">In the world of Terra, Humans and Golems live side by side. Golems are living monoliths, beings that come from an ancient race of warriors and protectors. Golems still battle today in the G-Arena where Golems and their Guardians battle each other for the title of Gladiator Supreme. Chris Carter, the son of a world renowned Golem specialist gone missing, finds a Golem buried in a cave on his way home from school. After helping him out of the cave and protecting him in his first fight, the Golem takes to him and Chris finds, not only a new friend but a new adventure to embark on full of lots of awesome battles and new Golems. Let's Rock!</p>
  </div>
  <div className="col-md-5">
    <img src={Golempage} alt='sitepics' width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>

  </div>
</div>


<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">RZN8 Publishing<span className="text-muted"></span></h2>
    <p className="lead">Resonate Print and Publishing was created to give storytellers a home to grow and thrive in. Everyone has a story to tell and with RZN8 yours can change the world. We help gifted writers resonate with readers and broaden the horizons of possibility.</p>
  </div>
  <div className="col-md-5 order-md-1">
    <img src={RZN8page} alt='sitepics' width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>

  </div>
</div>


<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">N.M. Porterfield<span className="text-muted"></span></h2>
    <p className="lead">N.M. Porterfield is an author from NC, who writes across different genres and platforms. Through his writing he intends to change the lives of his readers</p>
  </div>
  <div className="col-md-5">
    <img src={Authorpage} alt='sitepics' width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>

  </div>
</div>

            </div>
        )
    }
}

export default Content;