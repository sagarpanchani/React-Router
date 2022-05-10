import React from "react";
import {Link}  from "react-router-dom"
class Home extends React.Component{
    render(){
        return(
            <div >
                <Link to={'./Contact'}>Go to contact</Link>
              
            <h1>Home page</h1>
            </div>
        )
    }
}

export default Home;