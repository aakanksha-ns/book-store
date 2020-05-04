import React from "react";
import '../styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer id="fh5co-footer" className="fh5co-bg" role="contentinfo">
            <div className="overlay"></div>
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-4 fh5co-widget">
                        <h3>A Little About Chapter.</h3>
                        <p className="chapter-desc">We're an independent book store based in San Francisco, CA.
                        We focus on promoting diverse perspectives, upholding the free exchange of ideas,
                        championing the enduring power of books, and bolstering the great community of readers and authors we’re lucky to be a part of.
                        </p>
                        <p> <Link to="/" className="btn btn-primary">Become A Member</Link></p>
                    </div>
                    <div className="col-md-8 chapter-desc">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <ul className="fh5co-footer-links">
                                    <h3>Address</h3>
                                    <dd>Chapter Book Store, San Francisco, US</dd>
                                </ul>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <ul className="fh5co-footer-links">
                                    <h3>Email</h3>
                                    <dd><a href="mailto:#" className="footer-link">chapter_store@chapterSF.com</a></dd>
                                </ul>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <ul className="fh5co-footer-links">
                                    <h3>Links</h3>
                                    <li><a href="#" className="footer-link">About</a></li>
                                    <li><a href="#" className="footer-link">Projects</a></li>
                                    <li><a href="#" className="footer-link">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p className="chapter-desc">
                            <small className="block">&copy; 2020 | All Rights Reserved.</small>
                        </p>
                    </div>
                </div>

            </div>
        </footer >
    );
}

export default Footer;