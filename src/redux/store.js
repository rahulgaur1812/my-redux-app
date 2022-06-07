import { createStore } from "redux";
import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

const store = createStore(reducer,{},composeEnhancers(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

export default store;