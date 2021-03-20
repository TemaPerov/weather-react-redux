import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, applyMiddleware} from "redux"
import rootReducer from "./componets/reducer/rootReducer"
import thunk from "redux-thunk"
import {Provider} from 'react-redux'

 const store = createStore(rootReducer, applyMiddleware(thunk));

 const app =(
     <Provider store ={store}>
<App /> 
     </Provider>
 )
 
ReactDOM.render(app, document.getElementById("root"));
