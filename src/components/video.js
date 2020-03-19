import React from 'react';
import classes from './main.css';

const Video = () => {
    const source = 'https://ctala.com/wp-content/uploads/2020/03/drone-video-edit-V3_1.mp4'
    return (
        <div className={classes.Container} >
            <video
                muted className={classes.Container}
                autoplay='autoPlay'
                loop='loop'>
                < source src={source} type='video/mp4' />

            </video>
        </div>
    )
}

export default Video;