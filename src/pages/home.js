import React, { Component } from 'react';
import Nav from '../components/nav';
// import Video from '../components/video';
import classes from '../components/video.css'
import Video from '../components/video';

class Home extends Component {
    render() {
            const source = 'https://ctala.com/wp-content/uploads/2020/03/drone-video-edit-V3.mp4'
        
        return (
            <div>
                    <div className={classes.Content}>
                < Nav />
                <div className='flexbox'>
                    <h1>Unique Gun Shooting Experience LA</h1>
                </div>
                <div className={classes.Container} >
                        <div className={classes.SubContent}>

                        </div>
                    </div>
                </div>
                    <video
                        muted className={classes.Container}
                        autoplay='autoPlay'
                        loop='loop'>
                        < source src={source} type='video/mp4' />

                    </video>
                {/* < Video /> */}
            </div>
        )
    
}
}

export default Home;