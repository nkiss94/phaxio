import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from "react-router";


class Homepage extends React.Component {
  render() {
    return (
        <div>

            <div className="wrapper">
                <div id="fullscreen-banner" className="parallax text-center vertical-align home-banner">
                    <div className="container-mid">
                        <div className="container">

                            <div className="banner-state text-center vertical-align">
                                <div className="container-mid">
                                    <div className="container">
                                        <div className="banner-box light-box">
                                            <h1 className="text-uppercase">Sculpt</h1>
                                            <h3 className="text-uppercase">the future of fitness</h3>
                                            <Link to="/register" className="btn-cta">Sign Up Free</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section className="body-content">
                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="m-bot-80 inline-block">

                                    <div className="heading-title-alt border-short-bottom text-center">
                                        <h3 className="text-uppercase">Results-driven fitness. Period.</h3>
                                        <div className="half-txt">We empower fitness professionals to change lives.  Create a website, sell your programming and build a fitness community.  Leave the analytics to us and focus on what really matters - building your athletes!</div>
                                    </div>
                                
                                </div>

                                <div className="col-md-4">
                                    <div className="featured-item feature-border-box text-left">
                                        <div className="icon">
                                            <i className="icon-laptop2"></i>
                                        </div>
                                        <div className="title text-uppercase">
                                            <h4>CREATE A WEBSITE</h4>
                                        </div>
                                        <div className="desc">
                                            Create your own website! We provide a platform for you to create your brand, sell programs, track athlete data, and build your community.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="featured-item feature-border-box text-left">
                                        <div className="icon">
                                            <i className="icon-mobile"></i>
                                        </div>
                                        <div className="title text-uppercase">
                                            <h4>MOBILE APP</h4>
                                        </div>
                                        <div className="desc">
                                            Your athletes can follow your program from anywhere. Enter data real-time as the workout is completed.  Time to ditch the paper and pen!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="featured-item feature-border-box text-left">
                                        <div className="icon">
                                            <i className="icon-twitter"></i>
                                        </div>
                                        <div className="title text-uppercase">
                                            <h4>SOCIAL MEDIA</h4>
                                        </div>
                                        <div className="desc">
                                            Sculpt incorporates ALL social media.  Athletes can tweet gains, post body transformations, or just remind followers how awesome your programming is!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="parallax-inner parallax-8">
                        <div className="container">
                            <div className="row">
                                <div className="heading-title-alt text-center m-bot-0 inline-block">
                                    <span className="heading-sub-title text-uppercase theme-color">awesome parallax effect </span>
                                    <h1 className="text-uppercase light-txt">Art is knowing which ones to keep</h1>

                                    <div className="m-top-50 inline-block">
                                        <a href="#" className="btn btn-medium  btn-theme-color light-hover"> Hang with us</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="m-bot-50 inline-block">
                                    <div className="heading-title-alt border-short-bottom text-center">
                                        <h3 className="text-uppercase">SCULPT PHILOSOPHY</h3>
                                        <div className="half-txt">We bring intelligent fitness to the masses.  Join the movement.</div>
                                    </div>

                                </div>


              
                                <div className="post-list-aside">
                                    <div className="post-single">
                                        <div className="col-md-6">
                                            <div className="post-img title-img">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ipFh55geIvk"></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="post-desk">
               
                                                <h4 className="text-uppercase">
                                                    <a href="#">always move forward</a>
                                                </h4>
                                                <div className="date">
                                                    <a href="#" className="author">tim corcoran</a> Toronto, Canada
                                                </div>
                                                <p>
                                                    Right down to the design of our website, we've cut away the superfluous and focused on the athlete.  The only thing we care about is empowering coaches to unlock the potential of their athletes.  Athletes receive detailed analysis and can track improvement.
                                                </p>
                                                <a href="#" className="p-read-more">Read More <i className="icon-arrows_slim_right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>


        <div className="dark-bg p-tb-100">
            <div className="container">
                <div className="row">
                    <div className=" inline-block">
                        <div className="col-md-3 ">
                            <div className="fun-factor fun-icon-text-parallel alt">
                                <div className="icon">
                                    <i className="icon-piechart light-txt"></i>
                                    <h1 className="timer light-txt" data-from="0" data-to="40" data-speed="1000"> </h1>
                                </div>
                                <div className="fun-info light-txt">
                                    <span>Data Analytics</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fun-factor fun-icon-text-parallel alt">
                                <div className="icon">
                                    <i className="icon-video light-txt"></i>
                                    <h1 className="timer light-txt" data-from="0" data-to="30" data-speed="1000"> </h1>
                                </div>
                                <div className="fun-info light-txt">
                                    <span>Video Coaching</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fun-factor fun-icon-text-parallel alt">
                                <div className="icon">
                                    <i className="icon-basic_smartphone light-txt"></i>
                                    <h1 className="timer light-txt" data-from="0" data-to="87" data-speed="1000"> </h1>
                                </div>
                                <div className="fun-info light-txt">
                                    <span>Smartphone Entry</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fun-factor fun-icon-text-parallel alt">
                                <div className="icon">
                                    <i className="icon-linegraph light-txt"></i>
                                    <h1 className="timer light-txt" data-from="0" data-to="17" data-speed="1000"> </h1>
                                </div>
                                <div className="fun-info light-txt">
                                    <span>Progression Tracker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="heading-title text-center">
                            <h3 className="text-uppercase">The Sculpt Team</h3>
                            <span className="text-uppercase">We live and breathe the Sculpt product</span>
                        </div>

                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="images/gilmour.jpg" alt="" />
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Bonafide Builder</h4>
                                        <p>I built Sculpt to help people realize their dreams</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Tim Corcoran</h5>
                                <span>founder &amp; ceo</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="images/clark.jpg" alt="" />
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Relentless Strategist</h4>
                                        <p>I love to help coaches navigate the business world</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Kev Corcoran</h5>
                                <span>Chief Legal Officer</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="images/burns.jpg" alt="" />
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Creative Guru</h4>
                                        <p>Building brands is my passion.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Dave Hurley</h5>
                                <span>Chief Technical Officer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-width promo-box dark-bg ">
                <div className="container">
                    <div className="col-md-12">
                        <div className="promo-info">
                            <span className="light-txt text-uppercase m-top-0">Ready to change lives? </span>
                            <h3 className="light-txt">start <span className="theme-color">building your business</span> with sculpt</h3>
                        </div>
                        <div className="promo-btn">
                            <a href="#" className="btn btn-medium btn-rounded btn-light-solid  btn-transparent  text-uppercase">Sign Up Free</a>
                        </div>
                    </div>
                </div>
            </div>



        <footer id="footer" className="dark">
        <div className="primary-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <a href="#" className="m-bot-20 footer-logo">
                            <img className="retina" src="images/logo.png" alt=""/>
                        </a>
                        <p>By using this website, you accept our Terms of Use and Privacy Policy.  Copyright 2016 Sculpt Fitness Inc.</p>

                    </div>
                    <div className="col-md-3">
                        <h5 className="text-uppercase">About</h5>
                        <ul className="f-list">
                            <li><a>Our Story</a></li>
                            <li><a>Why Sculpt</a></li>
                            <li><a>Video</a></li>
                            <li><a>Analytics</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-uppercase">Admin</h5>
                        <ul className="f-list">
                            <li><a>Careers</a></li>
                            <li><a>Terms of Use</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-uppercase">Social</h5>
                        <ul className="r-work">
                            <li>
                                <a><img src="images/instagram-64.png" alt=""/></a>
                            </li>
                            <li>
                                <a><img src="images/facebook-64.png" alt=""/></a>
                            </li>
                            <li>
                                <a><img src="images/twitter-64.png" alt=""/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
</div>
    )
  }
}

export default Homepage;