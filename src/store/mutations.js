// SET_MEMEBYID => get one meme for edit 
// SET_MEMES => get all memes
// SET_USERMEMES => get user profile

export const SET_MEMES = (state, memes) => {
    state.memes = memes
}
export const SET_MEMEBYID = (state, item) => {
    state.item = item
}
