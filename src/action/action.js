
import {NEXT_MUSIC, PLAY_MUSIC, PREV_MUSIC, RANDOM_MUSIC, REPEAT_MUSIC, CHOOSE_MUSIC} from '../constant/constant'

export const playAction = (value) => {
    return {
        type: PLAY_MUSIC,
        value
    }
}

export const nextAction = () => {
    return {
        type: NEXT_MUSIC
    }
}

export const prevAction = () => {
    return {
        type: PREV_MUSIC
    }
}

export const randomAction = () => {
    return {
        type: RANDOM_MUSIC
    }
}

export const repeatAction = () => {
    return {
        type: REPEAT_MUSIC
    }
}

export const chooseSong = (value) => {
    return {
        type: CHOOSE_MUSIC,
        value
    }
}
