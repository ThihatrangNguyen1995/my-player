import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as url from "url";
import AudioPlayer from 'react-cl-audio-player';
import 'react-cl-audio-player/lib/AudioPlayer.css';


class MusicPlayer extends PureComponent {
    propTypes = {
        songs: PropTypes.array.isRequired,
        autoplay: PropTypes.bool,
        onTimeUpdate: PropTypes.func,
        onEnded: PropTypes.func,
        onError: PropTypes.func,
        onPlay: PropTypes.func,
        onPause: PropTypes.func,
        onPrevious: PropTypes.func,
        onNext: PropTypes.func,
    };
   render() {
       const songs = [
           {
               url: './Nothing on You - Barry brizzy [ Audio ].mp3',
               cover: './img/bg.gif',
               artist: {
                   name: 'Nothing on You',
                   song: 'Barry brizzy'
               }
           }
       ];
       return (
           <div className="player-container">
               <AudioPlayer
                   songs={songs}
                   autoplay

               />

           </div>


       )
   }
   }

    export default MusicPlayer;