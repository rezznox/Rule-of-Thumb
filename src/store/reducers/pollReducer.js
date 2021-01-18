import { act } from "@testing-library/react";
import { VOTE, SELECT, VOTE_AGAIN } from "../actions/actionTypes";
import cloneDeep from 'lodash/cloneDeep';

const initialState = {
  candidates: [
    {
      name: 'Kanye West',
      img: './assets/img/kanye.png',
      votes_up: 0,
      votes_down: 0,
      just_voted: false,
      selection: {
        up: false,
        down: false
      }
    },
    {
      name: 'Mark Zuckerberg',
      img: './assets/img/mark.png',
      votes_up: 0,
      votes_down: 0,
      just_voted: false,
      selection: {
        up: false,
        down: false
      }
    },
    {
      name: 'Cristina Fernandez de Kirchner',
      img: './assets/img/Cristina.png',
      votes_up: 0,
      votes_down: 0,
      just_voted: false,
      selection: {
        up: false,
        down: false
      }
    },
    {
      name: 'Malala Yousafzai',
      img: './assets/img/malala.png',
      votes_up: 0,
      votes_down: 0,
      just_voted: false,
      selection: {
        up: false,
        down: false
      }
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VOTE: {
      const i = state.candidates.findIndex((candidate)=> candidate.name === action.payload.name);
      const newState = cloneDeep(state);
      if (newState.candidates[i].selection.up) {
        newState.candidates[i].votes_up++;
        newState.candidates[i].just_voted = true;
      } else if (newState.candidates[i].selection.down) {
        newState.candidates[i].votes_down++;
        newState.candidates[i].just_voted = true;
      } else {

      }
      return newState;
    }
    case VOTE_AGAIN: {
      const i = state.candidates.findIndex((candidate)=> candidate.name === action.payload.name);
      const newState = cloneDeep(state);
      newState.candidates [i].just_voted = false;
      return newState;
    }
    case SELECT: {
      console.log(action);
      const i = state.candidates.findIndex((candidate)=> candidate.name === action.payload.candidate.name);
      console.log(i);
      const newState = cloneDeep(state);
      if (action.payload.kind === 'up') {
        newState.candidates[i].selection.up = true;
        newState.candidates[i].selection.down = false;
      } else if (action.payload.kind === 'down') {
        newState.candidates[i].selection.up = false;
        newState.candidates[i].selection.down = true;
      }
      console.log(newState);
      delete action.payload.candidate.kind;
      return newState;
    }
    default: {
      return state;
    }
  }
};
