import React from 'react';
import image1 from "../../assets/images/avatar.png"

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Sorna Kesavan</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={image1} alt="Sorna Kesavan" />

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
            </div>
        </section>
    )
}

export default About;