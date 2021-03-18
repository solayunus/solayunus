import React from "react";
import "./Top.css";


export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction()
  };

  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <button onClick={scrollToTop} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>

      <div class="elfsight-app-2bf6c497-5271-40bd-98c1-de20e9614340"></div>
    </button>

  );
}
