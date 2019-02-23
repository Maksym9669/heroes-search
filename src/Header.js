import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark nav-main">
        <div class="container-fluid-nav text-center">
          <a class="navbar-brand" href="https://github.com/Maksym9669">
            <img
              width="130"
              height="130"
              src="https://github.blog/wp-content/uploads/2008/12/forkme_left_red_aa0000.png?resize=149%2C149"
              class="attachment-full size-full"
              alt="Fork me on GitHub"
              data-recalc-dims="1"
              style={{ marginLeft: -32, marginTop: -15 }}
            />
          </a>
          <a class="navbar-brand" id="header-text" href="#">
            Search
          </a>
          <img
            src="http://orig05.deviantart.net/97fe/f/2013/332/c/4/dota_2_icon_by_benashvili-d6w0695.png"
            width="32"
            height="32"
            alt=""
            style={{ marginTop: -12 }}
          />
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
        </div>
      </nav>
    </div>
  );
}
