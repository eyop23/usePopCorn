import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { useState } from "react";
import StarRating from "./StarRating";
// import reportWebVitals from './reportWebVitals';
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={5}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This Movie was rated {movieRating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" className="test" defaultRating={3} />
    <Test /> */}
    <App />
    {/* <StarRating /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
