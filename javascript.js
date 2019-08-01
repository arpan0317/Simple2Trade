var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$("#search").keyup(function() {
  //when key is pressed in search bar
  var searchTerm = $(this).val(); //val of search bar
  var myExp = new RegExp(searchTerm, "i"); //regular experation

  $.getJSON("data.json", function(data) {
    //get the json file

    var output = "<ul id='result'>";
    $.each(data, function(key, val) {
      if (val.name.search(myExp) != -1 || val.type.search(myExp) != -1) {
          //search for the data in the json file
          output += '<img src="./images/test2.png" class="article_img" style="height:30px;width:30px;display:inline;" ><a href="' + val.link + '" class="' + val.class + '" style="display:inline;"><h3 style="display:inline;">'+val.name +'     |   '+val.type+'</h3><br>';
        //   output +=  '<h3>' + val.name + "   |   " + val.type +  '</h3>';
      }
    }); //end each
    output += "</ul>";
    $("#update").html(output); //output result to the update div
  });
});

document.getElementById("showHideContainer").onclick = function() {
  divTest = document.getElementById("update");
  if (divTest.style.display === "block") {
    divTest.style.display = "none";
  } else {
    divTest.style.display = "block";
  }
};
