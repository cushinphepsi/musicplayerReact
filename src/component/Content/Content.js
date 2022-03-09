import { useContext, useEffect, useRef } from "react";

import { chooseSong } from '../../action/action'
import { ContextPlayer } from "../../context/Context";
import "./Content.css";

function Content() {

    const { state, dispatch } = useContext(ContextPlayer)
    const { songs, currentIndex } = state
    const refSong = useRef()
    const handleChooseSong = (event, id) => {
        if (event.target.closest('.song .option')) {

        } else {
            dispatch(chooseSong(id))
        }
    }

    useEffect(() => {
        refSong.current.scrollIntoView(
            { 
                behavior: "smooth", 
                block: "nearest", 
                inline: "center" 
            }
        )
    }, [currentIndex])

    return (
        <div className="playlist">
            {songs.map((item, index) => (
                <div
                    className={`song ${currentIndex === index ? 'active' : ''}`}
                    ref={refSong}
                    key={index}
                    onClick={(e) => handleChooseSong(e, index)}
                >
                    <div className="thumb"
                        style={{ backgroundImage: `url(${require(`../../image/${item.img}`)})` }}
                    >
                    </div>
                    <div className="body">
                        <h3 className="title">{item.name}</h3>
                        <p className="author">{item.singer}</p>
                    </div>
                    <div className="option">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content;
