import React from "react";
import Get from "./Get";
function Contact() {
 // fetch('http://example.com/movies.json')
 //     .then((response) => {
 //       return response.json();
 //     })
 //     .then((data) => {
 //       console.log(data);
 //     });
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"></h1>
              <Get/>
            <p>
              У тебя нет портофлио, дурачёк)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
