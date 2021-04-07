import React from 'react'

import Resume1 from '../assets/images/Resumeimg1.PNG'
import Resume2 from '../assets/images/Resumeimg2.PNG'

class Resume extends React.Component {
    render(){
        return(

<div id='resumediv'>
    <header>
    <h1>Resume</h1>
<div>
      <img alt='page1'src={Resume1}/>
      <img  alt='pg2'src={Resume2}/>

</div>
    </header>
    <br></br>
      </div>
        )
    }
}

export default Resume;
         