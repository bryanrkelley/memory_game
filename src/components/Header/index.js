import React from "react";

function Header() {
  return (
    <div className="row">
    <div className="col-sm-1"></div>

    <div className="col-sm-10">
        <div className="jumbotron">
            <h1 className="display-4">Drag Memory Game</h1>


            <h2>
                Try to click on each character, but don't hit any duplicates, or your wig will be snatched!
            </h2>

            <br />

            <a className="btn btn-primary btn-lg" href="https://bryanrkelley.github.io/Basic-Portfolio/" role="button"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank">Main Page</a>
        </div>
    </div>

    <div className="col-sm-1"></div>
</div>
  );
}

export default Header;
