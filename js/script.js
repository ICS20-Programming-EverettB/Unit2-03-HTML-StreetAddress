
// Created by: Everett Bernard
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's address and displays it back to user

  // get street number from text field
  let firstName = document.getElementById("street-number").value
	// get street name from text field and cast it to integer
  let userAge = parseInt(document.getElementById("street-name").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your address is," + firstName +  + userAge + "."
}
