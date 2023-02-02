import React from 'react'
import "./Youtube.css"

function Youtube() {
    return (
        <div className='youtube'>
            <div className='heading'>
                <h1 className='heading_text'>"We Simplify the process for students wanting to <br /><span style={{ color: "red" }}> Study in Canada</span>".</h1>
            </div>
            <div className='heading_two'>
                <h1
                    className='heading_text'>
                    Our <span style={{ color: "red", margin: "0" }}>Results</span> Speak a Lot!</h1>
            </div>
            <div className="youtube_videos">
                <div className='youtube_video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GIROhtCnRJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='youtube_video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ic6vKcZ_CIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='youtube_video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8afe7JZhLCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='youtube_video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GIROhtCnRJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='youtube_video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ic6vKcZ_CIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='youtube_video'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8afe7JZhLCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>






            </div>
        </div >
    )
}

export default Youtube