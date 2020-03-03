import React, { Component, Fragment } from 'react';
import { render } from '@testing-library/react';

// class Video extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: true
//         };
//     }
// }

const Video = () => (
        <Fragment>
            <video
                muted
                autoplay
                loop
                poster='assets/backgroundStill.png' type='video/mp4'
                >
                    <source src='assets/backgroundVid.mp4' type='video/mp4' />
            </video>
        </Fragment>
    )



export default Video;