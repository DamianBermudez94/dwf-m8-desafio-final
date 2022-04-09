import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppRoutes} from "./router";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil"

ReactDOM.render(
  <RecoilRoot>
      <React.Suspense fallback={null}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.Suspense>
    </RecoilRoot>
  ,document.getElementById("hello-example")
);

