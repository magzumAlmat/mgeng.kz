import React, { Component } from 'react'

class mobilemenu extends Component {

  componentDidMount() {
    const getData=()=>{
     return(
        <div class="site-mobile-menu-body"></div>
     )
    }
  }
  render() {
    
    return (<>
    {console.log(' привет с мобильного компонента')}
      <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
       <getData/>
      </div>
   </> )
  }
}

export default mobilemenu()