import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import "./index.css";
import Institutions from "./institutions";

let institutions = {
  seanInstitutions: [
    {
      name: "Centennial",
      date: "2011-2015",
      description: "This  is the highschool I attended",
    },
    {
      name: "Olympic",
      date: "2022-2024",
      description: "This is the college I attended",
    },
  ],
  calebInstitutions: [],
  jeremyInstitution: [],
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>institutions I have attended</h1>
   {
     institutions.seanInstitutions.map((i) => <Institutions key = {i.name} name = {i.name} date = {i.date} description = {i.description}></Institutions>)
   }


    
  </React.StrictMode>
);

