import React from 'react';
import vg from '../assets/2.webp';
import {
    AiFillGoogleCircle, 
    AiFillAmazonCircle, 
    AiFillYoutube, 
    AiFillInstagram
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>Ishan Here</h1>
                <p>I'm a hard working guy!</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.</p>
            </div>
        </div>
        <div className="home3" id='about'>
            <div>
                <h1>Who I Am?</h1>
                <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story.</p>
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay: "0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay: "0.5s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay: "0.7s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay: "1s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home