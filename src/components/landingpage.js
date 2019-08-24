import React, {Component} from 'react'; 
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render() {
        return(
            <div style = {{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://image.flaticon.com/icons/png/512/67/67902.png"
                            alt="avatar"
                            className="avatar-ima"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Programmer</h1> Full Stack Programmer
                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | React | Angular | NodeJS | Express | MongoDB</p> 

                            <div className="social-links">
                                {/* LinkedIn*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/* Github*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                                {/* FreeCodeCamp*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                                </a>

                                {/* Youtube*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                                </a>

                            </div>



                        </div>

                    </Cell>
                </Grid>
            </div>
        )

    }
}

export default Landing; 