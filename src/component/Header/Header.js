import { useContext, useEffect, useRef } from 'react';
import { playAction, prevAction, nextAction, repeatAction, randomAction } from '../../action/action';
import { ContextPlayer } from '../../context/Context';
import './Header.css'
function Header() {

    const { state, dispatch } = useContext(ContextPlayer)
    const { songs, currentIndex, isPlaying, isRandom, isRepeat } = state
    const currentSong = songs[currentIndex]
    const refAudio = useRef()
    const refProgress = useRef()
    const refCd = useRef()
    const refCdThumb = useRef()

    const handlePlay = () => {
        const value = {
            play,
            pause
        }
        dispatch(playAction(value))
    }

    const play = () => {
        refAudio.current.play()
    }

    const pause = () => {
        refAudio.current.pause()
    }

    const handleTimeUpdate = () => {
        const duration = refAudio.current.duration
        const currentTime = refAudio.current.currentTime
        refProgress.current.value = currentTime * 100 / duration
    }

    const handleChangeProgress = () => {
        const duration = refAudio.current.duration
        refAudio.current.currentTime = refProgress.current.value * duration / 100
    }

    const handlePrev = () => {
        dispatch(prevAction())
    }

    const handleNext = () => {
        dispatch(nextAction())
    }

    const handleRepeat = () => {
        dispatch(repeatAction())
    }

    const handleRandom = () => {
        dispatch(randomAction())
    }

    const handleEnded = () => {
        isRepeat ? play() : handleNext()
    }

    useEffect(() => {
        // const animate = refCdThumb.current.animate({
        //     transform: 'rotate(360deg)'
        // }, {
        //     duration: 10000,
        //     iterations: Infinity
        // })

        if (isPlaying) {
            play()
        }
    }, [currentIndex, isPlaying])

    useEffect(() => {
        const cdWidth = refCd.current.offsetWidth
        document.onscroll = () => {
            const scrollValue = window.scrollY || document.documentElement.scrollTop
            const newWidth = cdWidth - scrollValue
            refCd.current.style.width = newWidth > 0 ? newWidth + 'px' : 0
            refCd.current.style.opacity = newWidth / cdWidth
        }
    }, [])


    return (
        <div className="dashboard">
            <header>
                <h4>Now playing:</h4>
                <h2>{currentSong.name}</h2>
            </header>

            <div className="cd" ref={refCd}>
                <div
                    className="cd-thumb"
                    ref={refCdThumb}
                    style={{ backgroundImage: `url(${require(`../../image/${currentSong.img}`)})` }}
                ></div>
            </div>

            <div className="control">
                <div className={`btn btn-repeat ${isRepeat ? 'active' : ''}`} onClick={handleRepeat}>
                    <i className="fas fa-redo"></i>
                </div>
                <div className="btn btn-prev" onClick={handlePrev}>
                    <i className="fas fa-step-backward"></i>
                </div>
                <div className={`btn btn-toggle-play ${isPlaying ? 'playing' : ''}`} onClick={handlePlay}>
                    <i className="fas fa-pause icon-pause"></i>
                    <i className="fas fa-play icon-play"></i>
                </div>
                <div className="btn btn-next" onClick={handleNext}>
                    <i className="fas fa-step-forward"></i>
                </div>
                <div className={`btn btn-random ${isRandom ? 'active' : ''}`} onClick={handleRandom}>
                    <i className="fas fa-random"></i>
                </div>
            </div>

            <input
                id="progress"
                className="progress"
                type="range"
                value="0"
                step="1"
                min="0"
                max="100"
                ref={refProgress}
                onChange={handleChangeProgress}
            />

            <audio
                id="audio"
                ref={refAudio}
                src={require(`../../audio/${currentSong.path}`)}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            >
            </audio>
        </div>
    );
}

export default Header;
