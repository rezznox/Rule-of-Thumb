import {VOTE, VOTE_AGAIN, SELECT} from './actionTypes';

export const vote = content => {
    return {
        type: VOTE,
        payload: content
    }
}

export const voteAgain = content => {
    return {
        type: VOTE_AGAIN,
        payload: content
    }
}


export const select = content => {
    return {
        type: SELECT,
        payload: content
    }
}
