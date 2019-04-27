import React from "react";

function Header() {
  return (
    <div class="row">
    <div class="col-sm-1"></div>

    <div class="col-sm-10">
        <div class="jumbotron">
            <h1 class="display-4">Train Scheduler</h1>

            <p>Input your own train schedule and watch the page dynamically update!</p>

            <a class="btn btn-primary btn-lg" href="https://bryanrkelley.github.io/Basic-Portfolio/" role="button"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank">Main Page</a>
        </div>
    </div>

    <div class="col-sm-1"></div>
</div>
  );
}

export default Header;
