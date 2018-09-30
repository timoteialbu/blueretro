import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  items: [
    {"id":"ce49f479-7593-4f66-b512-c6160ae1945f","type":"good","body":"Please enter something good", "owner": "zach"},
    {"id":"d04f0fc6-2a6c-4973-ad73-c354d52f018f","type":"good","body":"Please enter something good", "owner": "timotei"},
    {"id":"b48ccc30-4d34-4ada-8b25-30ab4ff94a0c","type":"bad","body":"Please enter something bad", "owner": "dave"},
    {"id":"c7ac12e4-bed5-47e4-b6aa-dfe559cf6902","type":"good","body":"Please enter something good", "owner": "timotei"},
    {"id":"3cc67729-0317-4206-b20c-757dfbfdfe12","type":"good","bad":"Please enter something bad", "owner": "timotei"},
    {"id":"395d712d-3050-4bac-a28b-25651dc815c0","type":"good","body":"Please enter something good", "owner": "dave"}
  ],
  selected: null,
};

export const store = createStore(reducer, initialState);