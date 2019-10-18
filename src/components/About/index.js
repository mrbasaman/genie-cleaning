import React from "react";

export default function About(props) {
  return (
    <div>
      <header>
        <div>
          <img />
          <h1></h1>
          <p></p>
        </div>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <p>Call for a free quotation</p>
              <a href="tel:+61423728837">0423 blah blah</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>hello from {props.name}</p>
        <p>jahsfjashgfd</p>
      </main>
      <footer>Copyright at michael bs....</footer>
    </div>
  );
}
