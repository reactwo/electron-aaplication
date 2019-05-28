// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require("electron");

$(document).ready(() => {


  $.ajax({
    url: "https://nowmassage.me/api/business",
    method: "GET",
    contentType: "application/json"
  }).done(data => {
      console.log(data)
    data.map((business, key) => {
      let li =
        '<div id="' +
        business.id +
        '" name="' +
        business.name +
        '" class="navbar-item" href="' +
        business.default_url +
        '">' +
        business.name +
        "</div>";
      if (key < data.length - 1) li += '<hr class="navbar-divider">';
      $("#business-menu").append(li);
    });
  });


  $(".navbar-item").click((event) => {
    // let data = {
    //     name : event.target.attributes['id'].nodeValue,
    //     url : event.target.attributes['href'].nodeValue,
    //     height : 600,
    //     width : 800
    // }

    // ipcRenderer.send('open-new-window', data)
    $("#tab").attr('src', event.target.attributes['href'].nodeValue )
    $.ajax({
        url: "https://nowmassage.me/api/business/" + event.target.attributes['id'].nodeValue,
        method: "GET",
        contentType: "application/json"
      }).done(data => {
            console.log(data)
            $('#'+event.target.attributes['id'].nodeValue).addClass('has-background-info')
            data.notes.map((note, key)=>{
                let li = 
                    '<div id="' +
                    key+note.business +
                    '" class="navbar-item"><h6 class="title is-6">' +
                    note.title +
                    '</h6><p class="subtitle is-6">' +
                    note.description +
                    '</p></div>'
                console.log("li", li)
                $('#task-menu').append(li)
            })
            
    })
    
  });
});
