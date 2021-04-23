// SET_MEMEBYID => get one meme for edit 
// SET_MEMES => get all memes
// SET_USERMEMES => get user profile

export const SET_MEMES = (state, memes) => {
    state.memes = memes
}
export const SET_MEMEBYID = (state, item) => {
    state.item = item
}
export const SET_USERMEMES = (state, usermeme) => {
    state.usermeme = usermeme
}

export const SET_MEMEGACHA = (state, memegacha) => {
    state.memegacha = memegacha
}