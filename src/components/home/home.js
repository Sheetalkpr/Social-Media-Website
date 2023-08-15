import React, { useState } from 'react';
// import Profile from '../profile/Profile';
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
    const [likes, setLikes] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleHeaderClick = () => {
        setShowMessage(!showMessage);
    };

    return (

        <div className="App">
            <header>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <nav>
                    <ul>
                        <a href="new.js">
                            <button className="home-new-cls">
                                <i className="fa fa-home"></i> Home
                            </button>
                        </a>

                        <button className="home-new-cls">
                            <i className="fa fa-bars"></i> Menu
                        </button>
                        <button className="home-new-cls">
                            <i className="fa fa-"></i> Post
                        </button>
                        <a href="4.html">
                            <button className="home-new-cls" id="my_chat">
                                <i className="fa fa-"></i>
                                <Link to="/my_chat">Message</Link>
                            </button>
                        </a>

                        {/* Yahan pe hai my_pro */}
                        <button className="home-new-cls" id="my_pro">  
                            <i className="fa fa-"></i>
                            <Link to="/my_pro">My Profile</Link>
                        </button>

                        <button className="home-new-cls" id="my_login">
                            <i className="fa fa-"></i>
                            <Link to="/">Logout</Link>
                        </button>

                        {/* <a href="index.html">
                            <button className="home-new-cls">Logout</button>
                        </a> */}
                    </ul>
                </nav>
            </header>
            <br />
            <header className="home-new-header" onClick={handleHeaderClick}>
                <p style={{ fontSize: '20px' }}>New Posts</p>
                <p className="message" style={{ display: showMessage ? 'block' : 'none' }}>
                    (You are all caught up!)
                </p>
            </header>
            <main>
                <div className="home-post-main">
                    <div className="home-post">
                        <div className="home-user-profile">
                            <img src="https://www.newsbox.pk/wp-content/uploads/2020/03/cristiano-ronaldo.jpg" alt="Profile Picture" />
                            <h2>Cristiano Ronaldo</h2>
                        </div>
                        <img src="http://newsmobile.in/wp-content/uploads/2020/02/ronaldo-1.jpg" alt="New post" />
                        <div className="actions-container">
                            <button className="home-btn like-home-btn" onClick={handleLikeClick}>
                                <i className="fa fa-thumbs-up"></i>
                                <span className="home-like-count">{likes}</span> Like
                            </button>
                            <button className="home-btn">
                                <i className="fa fa-comment"></i> Comment
                            </button>
                            <button className="home-btn">
                                <i className="fa fa-share"></i> Share
                            </button>
                        </div>
                        <h3>#Euro 2016</h3>
                    </div>
                    <div class="home-post">
                        <div class="home-user-profile">
                            <img src="https://logos-download.com/wp-content/uploads/2016/10/Roland_Garros_logo.png" alt="Profile Picture" />
                            <h2>Roland Garros</h2>
                        </div>
                        <img src="https://static.india.com/wp-content/uploads/2020/10/Novak-Djokovic-Dominates-En-Route-To-Third-Round-At-Roland-Garros-2020%C2%A9Twitter.jpg" alt="New Post" />
                        <div class="actions-container">
                            <button class="home-btn like-home-btn"><i class="fa fa-thumbs-up"></i><span class="home-like-count">0</span> Like</button>
                            <button class="home-btn"><i class="fa fa-comment"></i> Comment</button>
                            <button class="home-btn"><i class="fa fa-share"></i> Share</button>
                        </div>
                        <h3>Victory belongs to the most Tenacious</h3>
                    </div>
                </div>
                <aside className="home-you-might-like">
                    <h2>You might like</h2>
                    <div class="home-user-profile">
                        <img src="https://media1.popsugar-assets.com/files/thumbor/rqMzX6YTGMEqjKmNc4huptTGOvE/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/19/660/n/1922398/dd59606f713944e3_GettyImages-476531715/i/Chris-Evans-Hot-Pictures.jpg" alt="User Profile Picture" />
                        <div class="user-details">
                            <h4>Chris Evans </h4>
                            <button class="home-btn follow-home-btn"> Follow</button>
                        </div>
                    </div>

                    <div class="home-user-profile">
                        <img src="https://4.bp.blogspot.com/-ZYkWIwd6gtQ/UoDnyNyve5I/AAAAAAAAWgo/UgRHw4n2mvY/s1600/Ian+Somerhalder+portrays+Damon+Salvatore.jpg" alt="User Profile Picture" />
                        <div class="user-details">
                            <h4>Damon_slv</h4>
                            <button class="home-btn follow-home-btn">Follow</button>
                        </div>
                    </div>

                    <div class="home-user-profile">
                        <img src="https://cdn-3.expansion.mx/dims4/default/1705caf/2147483647/strip/true/crop/1000x667+0+0/resize/1800x1201!/quality/90/?url=https:%2F%2Fcdn-3.expansion.mx%2Fcd%2F59%2Ffc8d73e642e487aa016c23759be1%2Fgettyimages-1202228893.jpg" alt="User Profile Picture" />
                        <div class="user-details">
                            <h4>rafaelnadal</h4>
                            <button class="home-btn follow-home-btn">Follow</button>
                        </div>
                    </div>

                    <div class="home-user-profile">
                        <img src="https://yt3.ggpht.com/a/AATXAJzsTQuK5n8TjgYnFxtx6kGe3obf5J-T_ZZCbw=s900-c-k-c0xffffffff-no-rj-mo" alt="User Profile Picture" />
                        <div class="user-details">
                            <h4>ATP Tour</h4>
                            <button class="home-btn follow-home-btn">Follow</button>
                        </div>
                    </div>
                </aside>
                <aside className="home-thought-section">
                    <h2>Your note / thought</h2>
                    <div class="thought">
                        <div class="home-user-profile">
                            <img src="https://cdn-3.expansion.mx/dims4/default/1705caf/2147483647/strip/true/crop/1000x667+0+0/resize/1800x1201!/quality/90/?url=https:%2F%2Fcdn-3.expansion.mx%2Fcd%2F59%2Ffc8d73e642e487aa016c23759be1%2Fgettyimages-1202228893.jpg" alt="User Profile Picture" />
                            <div class="user-details">
                                <h4>rafaelnadal</h4>
                            </div>
                        </div>
                        <p>King of the Clay. See you all tomorrow</p>
                    </div>
                    <div class="thought">
                        <div class="home-user-profile">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.Nolz7WP6ihgX54G98AcWnAHaEo&pid=Api&P=0&h=180" alt="User Profile Picture" />
                            <div class="user-details">
                                <h4>Era_2578</h4>
                            </div>
                        </div>
                        <p>"If you can meet with triumph and disaster<br /> And treat those two imposters just the same"</p>
                    </div>

                    <div class="thought">
                        <div class="home-user-profile">
                            <img src="https://wallpaperaccess.com/full/1502546.jpg" alt="User Profile Picture" />
                            <div class="user-details">
                                <h4>Jenny_24</h4>
                            </div>
                        </div>
                        <p>Hello everyone <br /> Hope you all are doing well</p>
                    </div>
                </aside>
                


            </main>
        </div>
    );
};

export default Home;
