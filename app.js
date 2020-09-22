/*
Author: Navid Bhuiyan
Date: 22/09/2020

This program is used to add an API get request call to the "Get Yeezin'" button.

However for future renditions of this website 
*/

// Script button 1 RESTApi call
const button1_div = document.getElementById("first_b");
// Collect center-box to animate and insert text on button press
const center_box_div = document.getElementById("insert-quote");

// Add an action to button1
button1_div.addEventListener('click', function() {

    // HTTP API Call to get quotes from Lambda Function
    let request = new XMLHttpRequest();
    request.open("GET", "https://l7djd3q5p7.execute-api.ap-southeast-2.amazonaws.com/get_kanye_quote")
    request.send()
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            center_box_div.innerHTML = JSON.parse(request.response)
        } else {
            center_box_div.innerHTML = "Quote could not be obtained :("
        }
    }    
})

