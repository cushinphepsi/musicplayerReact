import { PLAY_MUSIC, NEXT_MUSIC, PREV_MUSIC, REPEAT_MUSIC, RANDOM_MUSIC, CHOOSE_MUSIC } from "../constant/constant";

const initValue = {
    currentIndex: 0,
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    songs: [
        {
            "path": "GieoQue.mp3",
            "name": "Gieo Quẻ",
            "img": "edm1.jpg",
            "singer": "singer 1",
            "id": "1"
        },
        {
            "path": "BonChuLam.mp3",
            "name": "Bốn Chữ Lắm",
            "img": "edm2.jpg",
            "singer": "singer 2",
            "id": "2"
        },
        {
            "path": "DeMiNoiChoMaNghe.mp3",
            "name": "Để Mị Nói Cho Mà Nge",
            "img": "edm3.jpg",
            "singer": "singer 3",
            "id": "3"
        },
        {
            "path": "LonRoiConKhocNhe.mp3",
            "name": "Lớn Rồi Còn Khóc Nhè",
            "img": "edm4.jpg",
            "singer": "singer 4",
            "id": "4"
        },
        {
            "path": "NgayDauTien.mp3",
            "name": "Ngày Đầu Tiên",
            "img": "edm5.jpg",
            "singer": "singer 5",
            "id": "5"
        },
        {
            "path": "SaiGonDauLongQua.mp3",
            "name": "Sài Gòn Đau Lòng Quá",
            "img": "edm6.jpg",
            "singer": "singer 6",
            "id": "6"
        },
        {
            "path": "SangMatChua.mp3",
            "name": "Sáng Mắt Chưa",
            "img": "edm7.jpg",
            "singer": "singer 7",
            "id": "7"
        },
        {
            "path": "YeuDuongKhoQuaThiChayVeKhocVoiAnh.mp3",
            "name": "Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh",
            "img": "edm8.jpg",
            "singer": "singer 8",
            "id": "8"
        }
    ]
}

const getRandomValues = (lenArr) => {
    return Math.floor(Math.random() * lenArr)
}

const reducer = (state, action) => {
    switch (action.type) {
        case PLAY_MUSIC:
            state.isPlaying ? action.value.pause() : action.value.play()
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        case NEXT_MUSIC:
            let indexNext = state.currentIndex
            if (state.isRandom) {
                indexNext = getRandomValues(state.songs.length)
            }
            else {
                if (indexNext >= state.songs.length - 1) {
                    indexNext = 0
                } else {
                    indexNext++
                }
            }

            return {
                ...state,
                isPlaying: true,
                currentIndex: indexNext
            }
        case PREV_MUSIC:
            let indexPrev = state.currentIndex
            if (state.isRandom) {
                indexPrev = getRandomValues(state.songs.length)
            }
            else {
                if (indexPrev <= 0) {
                    indexPrev = state.songs.length - 1
                } else {
                    indexPrev--
                }
            }

            return {
                ...state,
                isPlaying: true,
                currentIndex: indexPrev
            }
        case RANDOM_MUSIC:
            return {
                ...state,
                isRandom: !state.isRandom
            }
        case REPEAT_MUSIC:
            return {
                ...state,
                isRepeat: !state.isRepeat
            }
        case CHOOSE_MUSIC:
            return {
                ...state,
                currentIndex: action.value
            }
        default:
            return initValue;
    }
}


export { initValue, reducer }
