import React from "react";
import '../../styles/ChapterApp.css'
import RegisterForm from "../../containers/Register";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="info-section">
            <div className="container max-width-extend">
                <div className="row disp-flex">
                    <div className="col-md-7">
                        <div className="description">
                            Think about the last good book you read. Did it make you feel more connected to others? Maybe it served as a welcome escape. Maybe it helped you rediscover the beauty in life. Did it surprise you?
                    <br />
                            <br />
                    As an independent bookstore, we strive to offer the same variety and richness of experience as the books on our shelves. And because the only people we’re beholden to are our customers and ourselves, we can focus on what really matters — promoting diverse perspectives, upholding the free exchange of ideas, championing the enduring power of books, and bolstering the great community of readers and authors we’re lucky to be a part of.
                    <br />
                            <br />
                    Thank you for supporting these lofty goals. Your choice sustains a family business with over 500 local booksellers, and allows us to follow our passion for getting the right books into the right hands, 365 days a year.
                </div>

                        <div className="row center-div">
                            <p> <Link to="/shop" className="btn btn-primary shopping-button">Start Shopping</Link></p>
                        </div>

                    </div>
                    <div className="col-md-5 register-block">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;