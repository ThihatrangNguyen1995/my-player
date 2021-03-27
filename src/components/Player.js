import React, {Component, useEffect, useRef, useState} from 'react'
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "react-h5-audio-player";
import audio1 from "./Nothing on You - Barry brizzy [ Audio ].mp3";
import audio2 from "./Phải Chăng Em Đã Yêu (Lofi Ver.) - Juky San x RedT x Freak D.mp3"


const playlist ={
    'audio1': new Audio(audio1),
    'audio2': new Audio(audio2),
}

interface PlayListState {
    currentMusicIndex: number
}

class Player extends Component<null, PlayListState> {
    state = {
        currentMusicIndex: 0,
    }
    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'path/to/coverUrl',
                playlistName: 'playlist name',
                bandName: 'band name',
                songs: [
                    {
                        position: '1',
                        songName: 'foo',
                        songUrl: 'path/to/songUrl'
                    },
                    {
                        position: '2',
                        songName: 'bar',
                        songUrl: 'path/to/songUrl'
                    },
                    {
                        position: '3',
                        songName: 'baz',
                        songUrl: 'path/to/songUrl'
                    }
                ],
                type: 'album'
            }
        })

    handleClickPrevious = (): void => {
    this.setState((prevState) => ({
    currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
}))
}

handleClickNext = (): void => {
    this.setState((prevState) => ({
        currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
}

render(): React.ReactNode {
    const { currentMusicIndex } = this.state
    return (
        <div className="player-container">
            <div className="player">
                <h2>How are you doing?</h2>
                <div className="imgBg">
                    <img src="https://64.media.tumblr.com/176cf6cf9749551d5bf6c1c0e1a1335f/57a29ad27ccea348-6b/s640x960/aea0f3831f454daf95547c41248d9fff46aa193f.gifv"/>
                </div>
                <div className="nameSongs" >
                    <h2 style={{textAlign: "left"}}>Listen with me</h2>
                    <p>"Every big problem was at one time a wee disturbance."</p>
                </div>
                <AudioPlayer
                    autoPlayAfterSrcChange={true}
                    showSkipControls={true}
                    showJumpControls={false}
                    src={audio1}

                    autoPlay={true}
                    preload="metadata"
                    onClickPrevious={this.handleClickPrevious}
                    onClickNext={this.handleClickNext}
                    loop
                />


            </div>

        </div>


    )
}
}


export default Player;

