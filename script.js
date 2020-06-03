$(document).ready(function() {

    // Adding current date to the top of the page
    var currentDate = moment().format('dddd,  MMMM Do YYYY');
    $("#currentDay").text(currentDate);
    
    
    
    // Add function to check localStorage for userEdits and render them to the page
    function LocalStorage() {
        var userEdits8 = JSON.parse(localStorage.getItem("userEdits8"));
        if (userEdits8 !== null) {
          $("#8").text(userEdits8);
        };
        var userEdits9 = JSON.parse(localStorage.getItem("userEdits9"));
        if (userEdits9 !== null) {
          $("#9").text(userEdits9);
        };
        var userEdits10 = JSON.parse(localStorage.getItem("userEdits10"));
        if (userEdits10 !== null) {
          $("#10").text(userEdits10);
        };
        var userEdits11 = JSON.parse(localStorage.getItem("userEdits11"));
        if (userEdits11 !== null) {
          $("#11").text(userEdits11);
        };
        var userEdits12 = JSON.parse(localStorage.getItem("userEdits12"));
        if (userEdits12 !== null) {
          $("#12").text(userEdits12);
        };
        var userEdits13 = JSON.parse(localStorage.getItem("userEdits13"));
        if (userEdits13 !== null) {
          $("#13").text(userEdits13);
        };
        var userEdits14 = JSON.parse(localStorage.getItem("userEdits14"));
        if (userEdits14 !== null) {
          $("#14").text(userEdits14);
        };
        var userEdits15 = JSON.parse(localStorage.getItem("userEdits15"));
        if (userEdits15 !== null) {
          $("#15").text(userEdits15);
        };
        var userEdits16 = JSON.parse(localStorage.getItem("userEdits16"));
        if (userEdits16 !== null) {
          $("#16").text(userEdits16);
        };
        var userEdits17 = JSON.parse(localStorage.getItem("userEdits17"));
        if (userEdits17 !== null) {
          $("#17").text(userEdits17);
        };
        var userEdits18 = JSON.parse(localStorage.getItem("userEdits18"));
        if (userEdits18 !== null) {
          $("#18").text(userEdits18);
        };
    };

    LocalStorage();

    // On click on Save button
    $(".saveBtn").on("click", function() {
        var eventID = event.currentTarget.parentElement.previousElementSibling.id;
        console.log(eventID);
        var currentTableCell = event.target.parentElement.previousElementSibling;
        console.log(currentTableCell.innerText);
        localStorage.setItem(["userEdits"+ eventID], JSON.stringify(currentTableCell.innerText));
       
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