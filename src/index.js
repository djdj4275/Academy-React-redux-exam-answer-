import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux 연결을 위해 가져옴
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// module의  rootreducer를 들고와 연결
import rootReducer from './modules';

// 가져온 rootreducer를 store로 연결
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provider를 이용해 만든 store를 app에서 사용하게끔 덮어줌 */}
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
