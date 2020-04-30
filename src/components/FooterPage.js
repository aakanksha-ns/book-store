import React from "react";
import '../styles/FooterPage.css'

const FooterPage = () => {
    return (
        <footer className="section footer-classic context-dark bg-image">
            <div className="container">
                <div className="row row-30">
                    <div className="col-md-4 col-xl-5">
                        <div className="pr-xl-4 padding-top"><a className="brand" href="index.html"></a>
                            <p className="rights"><span>©  </span><span className="copyright-year">2020</span><span> </span><span>Chapter</span><span>. </span><span>All Rights Reserved.</span></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacts</h5>
                        <dl className="contact-list">
                            <dt>Address:</dt>
                            <dd>Chapter Book Store, San Francisco, US</dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>email:</dt>
                            <dd><a href="mailto:#">chapter_store@chapterSF.com</a></dd>
                        </dl>
                    </div>
                    <div className="col-md-4 col-xl-3">
                        <h5>Other Links</h5>
                        <ul className="nav-list">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row no-gutters social-container">
                <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
            </div>
        </footer>
    );
}

export default FooterPage;