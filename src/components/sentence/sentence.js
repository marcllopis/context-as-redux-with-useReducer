import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { MainContext } from "../../context-provider/context-provider";
import { Actions } from './actions'


export function Sentence() {
  const { state, dispatch } = useContext(MainContext);

  const getChuckFacts = async () => {
    const { data } = await axios('http://api.icndb.com/jokes/random?escape=javascript');
    dispatch({type: Actions.FACT, sentences: data.value.joke });
  }

  useEffect(() => getChuckFacts(), []);

  return (
    <div className='component'>
      <div className='sentence'>{state.sentences}</div>
      <br />
      <button onClick={() => getChuckFacts()}>
        New Random Sentence
      </button>
      <button onClick={() => dispatch({type: 'RESET_SENTENCE'})}>
        No More Sentences
      </button>
      <br />
    </div>
  );
};