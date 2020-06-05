$(document).ready(function() {

    // Adding current date to the top of the page
    var currentDate = moment().format('dddd,  MMMM Do YYYY');
    $("#currentDay").text(currentDate);
    
    LocalStorage();
    
    // Add function to check localStorage for userInput and render them to the page
    function LocalStorage() {
        var userInput8 = localStorage.getItem("userInput8");
        console.log(userInput8);
        if (userInput8 !== null) {
          $("#8").text(userInput8);
        };
        var userInput9 = localStorage.getItem("userInput9");
        if (userInput9 !== null) {
          $("#9").text(userInput9);
        };
        var userInput10 = localStorage.getItem("userInput10");
        if (userInput10 !== null) {
          $("#10").text(userInput10);
        };
        var userInput11 = localStorage.getItem("userInput11");
        if (userInput11 !== null) {
          $("#11").text(userInput11);
        };
        var userInput12 = localStorage.getItem("userInput12");
        if (userInput12 !== null) {
          $("#12").text(userInput12);
        };
        var userInput13 = localStorage.getItem("userInput13");
        if (userInput13 !== null) {
          $("#13").text(userInput13);
        };
        var userInput14 = localStorage.getItem("userInput14");
        if (userInput14 !== null) {
          $("#14").text(userInput14);
        };
        var userInput15 = localStorage.getItem("userInput15");
        if (userInput15 !== null) {
          $("#15").text(userInput15);
        };
        var userInput16 = localStorage.getItem("userInput16");
        if (userInput16 !== null) {
          $("#16").text(userInput16);
        };
        var userInput17 = localStorage.getItem("userInput17");
        if (userInput17 !== null) {
          $("#17").text(userInput17);
        };
        var userInput18 = localStorage.getItem("userInput18");
        if (userInput18 !== null) {
          $("#18").text(userInput18);
        };
    };

    

    // On click on Save button
    $(".saveBtn").on("click", function() {
        var eventID = event.currentTarget.parentElement.previousElementSibling.id;
        console.log(eventID);
        var currentTableCell = event.currentTarget.parentElement.previousElementSibling;
        console.log(currentTableCell.innerText);
        localStorage.setItem(["userInput"+ eventID], currentTableCell.innerText);
       
        
    });
    
    // Setting interval to run checkTime function every 10 seconds; at the beginning of the hour, runs function to update screen
    setInterval(function(){
        if (moment().minute() == 0) {
            renderScreen();
        }
    }, 10000);
    
    // Render event table with appropriate color
    function renderScreen() {
      var currentTime = (moment().hour());
      console.log(currentTime);
      var idHour = [];
      $(".eventCol").each(function(){
        idHour.push($(this).attr("id"));
      })
      console.log(idHour);
     for (i = 0; i < idHour.length; i++){
       if (currentTime == idHour[i]){
         $("#" + idHour[i]).addClass("table-danger");
       } 
       if (idHour[i] < currentTime) {
         $("#" + idHour[i]).addClass("table-secondary");
       }
       if (idHour[i] > currentTime) {
         $("#" + idHour[i]).addClass("table-success");
       }
     }
    };
    renderScreen();
    
    // On Click to Clear All button, clears localStorage and all todos
    $(".clearEventsBtn").on("click", function(){
        localStorage.clear();
        $(".eventCol").text("");
    });
    
    });