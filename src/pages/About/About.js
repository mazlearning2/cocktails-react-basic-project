import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="container about">
            <div className="about-image">
                <img src="/images/profile.jpg" alt="image not found" />
            </div>
            <h1 className="about-user">Page Developer: Mohammadali Zarei</h1>
        </section>
    );
};

export default About;
