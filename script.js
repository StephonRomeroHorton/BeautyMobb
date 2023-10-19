let targetDiv = document.getElementById("style-chosen");
let originalDiv;
let clonedDiv;
let styleNum;
let isCloningEnabled = false; // Initially, cloning is disabled
let bookingDiv = document.getElementById("booking-section");
let closeX = document.getElementById("close-booking-section");
let price;
let newStyle;
let newButton;
let newStyleDiv;

closeX.addEventListener("click", function (){
  bookingDiv.style.display = "none";
});


document.getElementById("button1").addEventListener("click", function() {
  styleNum = "1";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button2").addEventListener("click", function() {
  styleNum = "2";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button3").addEventListener("click", function() {
  styleNum = "3";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button4").addEventListener("click", function() {
  styleNum = "4";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button5").addEventListener("click", function() {
  styleNum = "5";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button6").addEventListener("click", function() {
  styleNum = "6";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button7").addEventListener("click", function() {
  styleNum = "7";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button8").addEventListener("click", function() {
  styleNum = "8";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button9").addEventListener("click", function() {
  styleNum = "9";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button10").addEventListener("click", function() {
  styleNum = "10";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button11").addEventListener("click", function() {
  styleNum = "11";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button12").addEventListener("click", function() {
  styleNum = "12";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button13").addEventListener("click", function() {
  styleNum = "13";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button14").addEventListener("click", function() {
  styleNum = "14";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button15").addEventListener("click", function() {
  styleNum = "15";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button16").addEventListener("click", function() {
  styleNum = "16";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button17").addEventListener("click", function() {
  styleNum = "17";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button18").addEventListener("click", function() {
  styleNum = "18";
  copyDiv();
  bookingDiv.style.display = "block";
});
document.getElementById("button19").addEventListener("click", function() {
  styleNum = "19";
  copyDiv();
  bookingDiv.style.display = "block";
});




    function copyDiv() {
      if (isCloningEnabled && targetDiv.innerHTML == "") {
        // If cloning is enabled, disable it
        isCloningEnabled = false;
        targetDiv.innerHTML = "";
      } else {
        // If cloning is disabled, enable it
        isCloningEnabled = true;
        // Get a reference to the original div
        originalDiv = document.getElementById(`style-${styleNum}`);
        // Create a clone of the original div
        clonedDiv = originalDiv.cloneNode(true);
        // Insert the cloned div into the target div
        targetDiv.innerHTML = "";
        targetDiv.appendChild(clonedDiv);
        clonedDiv.id = "newDiv";
        let clonedParagraph = clonedDiv.querySelector("#booking-section .content-container");


clonedParagraph.style.display = "flex";
clonedParagraph.style.flexDirection = "row";



// ... (your existing code)



  // Media query code starts here
  const mediaQuery = window.matchMedia("(max-width: 630px)");

  function handleMediaChange(event) {
    if (event.matches) {
      clonedParagraph.style.flexDirection = "column";
    } else {
      clonedParagraph.style.flexDirection = "row"; // Reset to row layout if not matching media query
    }
  }

  mediaQuery.addEventListener("change", handleMediaChange);
  handleMediaChange(mediaQuery);
  // Media query code ends here

 

// ... (the rest of your code)


     
        newStyle = document.querySelector('#booking-section .style-info h2').innerHTML;
        price = document.querySelector('#booking-section #style-chosen li .style-info span').innerHTML;
        newButton = document.querySelector('#booking-section #style-chosen li .book-btn');
        newButton.style.display = "none";
     
      }
    }

    let monthChosen;
    let yearChosen;
    let dateSelected;

const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, year, and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth ,1).getDay();// gets the first day of month
  let lastDateOfMonth = new Date(currYear, currMonth + 1,0).getDate();// gets last date of month
  let lastDayOfMonth = new Date(currYear, currMonth ,lastDateOfMonth).getDay();// gets the last day of month
  let lastDateOfLastMonth = new Date(currYear, currMonth,0).getDate();// gets last date of month
  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--){
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++){
    let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
    && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class=${isToday}>${i}</li>`;
    dayNum = liTag;
  }

  for (let i = lastDayOfMonth; i < 6; i++){
    liTag += `<li  class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
daysTag.innerHTML = liTag;
monthChosen = months[currMonth];
yearChosen = currYear;
dateSelected = date.getDate();


}
renderCalendar();

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {// adding click events on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1: currMonth + 1;

    if(currMonth < 0 || currMonth > 11){
      date = new Date(currYear, currMonth);
      currYear =date.getFullYear();
      currMonth = date.getMonth();
    }
    else{
      date = new Date();
    }
    renderCalendar();
  });
});



let result = document.querySelector(".result");
let resultContainer = document.querySelector(".date-selected");

// Get a reference to the <ul> element


// Add a click event listener to the <ul> element
daysTag.addEventListener('click', function(event) {
  // Check if the clicked element is an <li> element
  if (event.target.tagName === 'LI'  && !event.target.classList.contains('inactive')) {
    // Get the inner HTML of the clicked <li> element
    dateSelected= event.target.innerHTML;
    resultContainer.style.display = "flex";
    result.innerHTML = `Your appointment is on ${monthChosen} ${dateSelected} ${yearChosen} at ${timeChosen}`;
    bookingDiv.style.display = "block";
  }
});


let time = document.querySelector(".time");
let timeChosen = "9:00am";
time.addEventListener('click', function(event) {
  // Check if the clicked element is an <li> element
  if (event.target.tagName === 'LI') {
    // Get the inner HTML of the clicked <li> element
    timeChosen = event.target.innerHTML;
    resultContainer.style.display = "flex";
    result.innerHTML = `Your appointment is on ${monthChosen} ${dateSelected} ${yearChosen} at ${timeChosen}`; 
  }
});

// https://tame-lime-xerus-suit.cyclic.app/email



let passFail= document.getElementById('modal-context');
console.log(passFail);
let successMsg = document.getElementById("returnMsg");;

function openModal(res) {
  successMsg.innerHTML = res;
  var modalOverlay = document.getElementById("modal-overlay");
  var modal = document.getElementById("modal");
  modalOverlay.style.display = "flex"; // Show the overlay
  modal.style.display = "block"; // Show the modal
}

function closeModal() {
  var modalOverlay = document.getElementById("modal-overlay");
  var modal = document.getElementById("modal");
  modalOverlay.style.display = "none"; // Hide the overlay
  modal.style.display = "none"; // Hide the modal
}










let user = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let alertBox = document.querySelector('.thank-you');
let finalMsg = document.querySelector('.final-msg');
let alertBtn = document.querySelector('.thank-you button');
        document.getElementById('sendEmail').addEventListener('click', () => {
         

        // Get the values from the input fields
        let nameValue = user.value;
        let phoneValue = phone.value;
        let emailValue = email.value;



        // Create an object with the data to be sent
        let dataToSend = {
          name: nameValue,
          phone: phoneValue,
          email: emailValue,
          month: monthChosen,
          day: dateSelected,
          year: yearChosen,
          time: timeChosen,
          style: newStyle,
          price: price,
        };
        console.log(dataToSend);
        console.log(dataToSend.price);
        console.log(dataToSend.style);


          fetch('https://tame-lime-xerus-suit.cyclic.app/email',{ 
            method: 'POST',
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(dataToSend)
          })
          .then(response => response.json())
          .then(data => {
           let res = data.message;
           if (res == 'Booking Successful! Check email for appointment details'){
            passFail.innerHTML = "Thank You!";
           }else {
            passFail.innerHTML = "Invalid Email";
           }
            openModal(res);
          })
          .catch(error => {
            
            console.error('Error sending email: ', error);
            alert('Error sending email');
            
          });
    }); 

let navLinks = document.querySelectorAll('nav ul li');
let checkBox = document.getElementById('check');
//navLinks.addEventListener("click", () => checkBox.checked = false);
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    checkBox.checked = false;
  });
});
