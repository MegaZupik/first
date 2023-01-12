
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree= ()=>{

    root.render(

        <React.StrictMode>
{/*            <App State ={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
                 />*/}
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree();
store.subscribe(()=>{
    rerenderEntireTree()
})
let x=(y)=>{
    return (y) ? (console.log(123)):(console.log(555))

};
x(231);
window.store = store;









