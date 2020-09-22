// Script button 1 RESTApi call
const button1_div = document.getElementById("first_b");
// Collect center-box to animate on button press
const center_box_div = document.getElementById("insert-quote");

button1_div.addEventListener('click', function() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://l7djd3q5p7.execute-api.ap-southeast-2.amazonaws.com/get_kanye_quote")
    request.send()
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            center_box_div.innerHTML = JSON.parse(request.response)
        } else {
            center_box_div.innerHTML = "Quote could not be obtained"
        }
    }    
})

