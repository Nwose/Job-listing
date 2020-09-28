import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export function InPageLoader({ loader }) {
  return (
    <>
      {loader ? (
        <div className="row justify-content-md-center">
          <Loader type="Rings" color="#1E1E2D" height={100} width={100} />
        </div>
      ) : null}
    </>
  );
}
