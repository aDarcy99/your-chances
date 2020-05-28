import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from "react-router-dom";

//pages
import IndexPage from "./pages/IndexPage.jsx";

function App(){
    return(
        <BrowserRouter>
            <Route exact path="/">
                <IndexPage />
            </Route>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector("#page-content"));