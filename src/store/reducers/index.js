import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

export default (history) =>
    combineReducers({
      router: connectRouter(history),
    });
