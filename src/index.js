import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import './style.css'
import { ContextProvider } from "./SocketContext";

ReactDOM.render(
<ContextProvider>

<App/> 
</ContextProvider>

,document.getElementById('root'));