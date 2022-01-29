import React from "react";
import "./MyProfileMain.css";


let portfolioArray = [
	['EKdgmo', '/c_scale,w_370/v1462193109/Portfolio/Game_of_Life.jpg', 'Game of Life (React.js)'],
	['aNaEXP', '/c_scale,w_370/v1461674231/Portfolio/Recipe_Box.jpg', 'Recipe Box (React.js)'],
	['mPXbBZ', '/c_scale,w_370/v1461674203/Portfolio/Campsite_Leaderboard.jpg', 'Campsite Leaderboard (React.js)'],
	['YqYGEL', '/c_scale,w_370/v1460055446/Portfolio/Markdown_Previewer.jpg', 'Markdown Previewer (React.js)'],
	['QNObQq', '/c_scale,w_370/v1459861409/Portfolio/Simon_Game.jpg', 'Simon game'],
	['BKwxaE', '/c_scale,w_370/v1459621831/Portfolio/Tic_Tac_Toe.jpg', 'Tic Tac Toe'],
	['YqQdgX', '/c_scale,w_370/v1459177430/Portfolio/Pomodoro_clock.jpg', 'Pomodoro Clock'],
	['pyPKBo', '/c_scale,w_370/v1458909566/Portfolio/Calculator.jpg', 'Calculator'],
	['reWZOE', '/c_scale,w_370/v1458465106/Portfolio/Twitch_viewer.jpg', 'Twitch Viewer'],
	['grwNzW', '/c_scale,w_370/v1458047625/Portfolio/Wikipedia_viewer.jpg', 'Wikipedia Viewer'],
	['mPrbZP', '/c_scale,w_370/v1458909823/Portfolio/Local_Weather.jpg', 'Local Weather'],
	['BKKVvd', '/c_scale,w_370/v1457778043/Portfolio/Random_Quotes.jpg', 'Random Quotes'],
    ['BKaWad', '/c_scale,w_370/v1457777866/Portfolio/Tolkien_750.jpg', 'Tribute page'] 
];

class PortfolioElement extends React.Component{
    render() {
        return (
            <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4">
                <div className="thumbnail">
                    <a href={"//codepen.io/AchiPapakon/full/" + this.props.codepen} target="_blank">
                        <img className="img-responsive" src={"//res.cloudinary.com/achipapakon/image/upload" + this.props.img} />
                        <h1 className="ast-captions">{this.props.title}</h1>
                    </a>
                </div>
            </div>
        );
    }
}

class Portfolio extends React.Component {
    render() {
        var i = 0;
        var _thumbnails = portfolioArray.map(ele => {
            return (
                <PortfolioElement key={i++} codepen={ele[0]} img={ele[1]} title={ele[2]} />
            );
        })
        return (
            <div className="row">
                {_thumbnails}
            </div>
        );
    }
}

class MyProfileMain extends React.Component {
    render() {
        return (
            <div>
              

                <div id="Home" className="sections container-fluid" style={{color: "#fff"}}>
                    <div className="text-center" style={{maxWidth:'1000px', marginLeft:'auto', marginRight:'auto'}}>
                        <h1 className="ast-home-title">Ankit <br />Parashar</h1>
                        <h2 className="ast-home-subtitle">My personal portfolio page.</h2>
                        <hr style={{boxShadow:'2px 2px 2px #323232'}} />
                    </div>
                </div>

                <div id="About" className="sections container-fluid">
                    <div className="container">
                        <div className="row">
                           
                            <div className="row col-sm-pull-3 col-sm-6 col-md-6">
                                <div style={{fontSize:'130%', maxWidth:'400px'}}>
                                    <div className="well text-center">
                                        <h1 className="ast-about-title">About me</h1>
                                    </div>
                                    <div className="well">
                                        <p>I am a Computer Science Engineer.</p>
                                        <p>I love coding and mathematics!</p>

                                        <p>Tools & expertise:</p>
                                        <ul>
                                            <li><strong>Web:</strong> NodeJS/Express/React, HTML5, CSS3, jQuery, Bootstrap, MongoDB,ASP.net,C#</li>
                                            <li><strong>Operating System:</strong> Windows,Macintosh,Ubuntu</li>
                                            <li>Some knowledge with: Android, LUA, Bash scripting, FORTRAN</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-push-6 col-sm-1 col-sm-offset-2 col-md-1 col-md-offset-2">
                                <img src="//res.cloudinary.com/achipapakon/image/upload/c_scale,w_200/v1462181841/profile_pic.jpg" alt="profile_picture" style={{borderRadius:'50%', maxWidth:'200px'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Portfolio" className="sections container-fluid text-center">
                    <div style={{maxWidth:'1200px', marginLeft:'auto', marginRight:'auto'}}>
                        <div className="well text-center">
                            <h1 className="ast-about-title">My web development portfolio</h1>
                            <p style={{fontSize:'140%'}}>This is some of my work (most recent first):</p>
                        </div>
                        <Portfolio />
                    </div>
                </div>

                <div id="Contact" className="sections container-fluid" style={{minHeight:'350px'}}>
                    <div style={{marginLeft:'10%', maxWidth:'500px'}}>
                        <h1 className="ast-about-title" style={{color:'#E1E1E1'}}>Contact me</h1>
                        <br />
                        <button className="btn">
                            <span className="fa-stack">
                            <i className="fa fa-twitter fa-2x fa-stack-1x" style={{color:'#4099FF'}}></i>
                            <i className="fa fa-ban fa-stack-2x text-danger"></i>
                            </span>
                        </button>
                        &nbsp;
                        <button className="btn">
                            <span className="fa-stack">
                            <i className="fa fa-facebook fa-2x fa-stack-1x" style={{color:'#3B5998'}}></i>
                            <i className="fa fa-ban fa-stack-2x text-danger"></i>
                            </span>
                        </button>
                        &nbsp;
                        <a className="btn btn-default" href="https://gr.linkedin.com/in/achilleas-papakonstantinou-aa6447113" target="_blank">
                            <i className="fa fa-linkedin fa-2x" style={{color:'#007bb5'}}></i>
                        </a>
                        {/* mailto: doesn't work on codepen.io */}
                        <a className="hidden btn btn-default" href="mailto:ankitparashar700@gmail.com" target="_blank">
                            <i className="fa fa-envelope fa-2x" style={{color:'#dd4b39'}}> E-mail</i>
                        </a>
                        <br />
                        <br />
                        <p style={{color:'#fff', fontSize:'150%'}} className="ast-lucida">AnkitParashar700 (at) gmail.com</p>
                        <hr />
                        <p style={{color:'#fff', fontSize:'150%'}} className="ast-lucida">Bonus portfolio:
                            <br />
                            <a className="btn btn-default" href="https://github.com/AchiPapakon" target="_blank">
                            {/* <FontAwesomeIcon icon={faCopyright} /> */}
                            </a>
                            &nbsp;
                            <a className="btn btn-default" href="https://freecodecamp.com/achipapakon" target="_blank">
                                <i className="fa fa-free-code-camp fa-2x" style={{color:'#006400'}}></i>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="text-center" style={{backgroundColor:'#fff', fontSize:'120%'}}>
                    <br />
                    Coded by <a href='https://freecodecamp.com/achipapakon' target='_blank'> Ankit Parashar </a>
                    <br />
                    {/* <FontAwesomeIcon icon={faCopyright} />  */}
                    2016 - 2022
                    <br />&nbsp;
                </div>
            </div>
        );
    }
}

export default MyProfileMain;

// ReactDOM.render(<Body />, document.getElementById('react-root'));