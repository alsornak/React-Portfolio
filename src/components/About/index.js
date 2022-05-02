import React from 'react';
//import image1 from "../../assets/images/avatar.png"

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Sorna Kesavan</h2>
            <hr></hr>
            <div>
            <img class="mb-5" id="avatar" src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Sorna Kesavan" />

                <p>
                Dedicated and focused customer-oriented professional excels at prioritizing, completing
                multiple tasks simultaneously and following through to achieve project goals. Also adapt at
                developing and maintaining database. 
                </p>
                <p>
                Able to handle confidential information and identify
                areas for system improvement with ease.
                </p>
                <p>
                Successfully established effective systems for record retention by creating database for daily
                correspondence tracking.
                </p>
                <p>
                Excellent ability to troubleshoot and work with clients to solve problems or find solutions to requests.
                Solid background in managing interactive elements of websites to create a fulfilling user experience based upon client guidelines.
                </p>
                <p>
                Ability to work well under pressure to meet hard deadlines and stay within budget while still being able to provide clients with exactly what they want.
                </p>
            </div>
        </section>
    )
}

export default About;