// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require("electron");

loadWebsite = (event) => {
  // $("#tab").attr('data', event.target.attributes['href'].nodeValue )
  $.ajax({
    url: "https://nowmassage.me/api/business/" + event.target.attributes['id'].nodeValue,
    method: "GET",
    contentType: "application/json"
  }).done(data => {
      // $('#'+event.target.attributes['id'].nodeValue).addClass('has-background-info')
      // data.notes.map((note, key)=>{
      //   let li = 
      //       '<div id="' +
      //       key+note.business +
      //       '" class="navbar-item"><h6 class="title is-6">' +
      //       note.title +
      //       '</h6><p class="subtitle is-6">' +
      //       note.description +
      //       '</p></div>'
      //   $('#task-menu').append(li)
      // })

      // let li = '<div id="' +
      //           data.id +
      //           '" class="navbar-item user"><h6 class="title is-6" data-user="' +
      //           data.user + '" data-pass="' +
      //           data.password + '" onclick=setCreds(event)>' +
      //           data.user +
      //           '</h6></div>'
      // $('#password-menu').append(li)
      ipcRenderer.send('write-data', JSON.stringify(data))
    })   
    ipcRenderer.send('open-new-window', event.target.attributes['href'].nodeValue)
}

setCreds = (event) => {
  console.log($('#tab').find())
  $('#username').val("event.target.attributes['data-user'].nodeValue")
}

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
          '" class="navbar-item websites" href="' +
          business.default_url +
          '" onclick=loadWebsite(event)>' +
          business.name +
          "</div>";
        if (key < data.length - 1) li += '<hr class="navbar-divider">';
        $("#business-menu").append(li);
      });
    });


  // $(".navbar-item").click((event) => {
  //   // let data = {
  //   //     name : event.target.attributes['id'].nodeValue,
  //   //     url : event.target.attributes['href'].nodeValue,
  //   //     height : 600,
  //   //     width : 800
  //   // }
  //   console.log("here")
  //   // ipcRenderer.send('open-new-window', data)
  //   $("#tab").attr('src', event.target.attributes['href'].nodeValue )
  //   // $.ajax({
  //   //   url: "https://www.massagebook.com/login/doLogin",
  //   //   method: "POST",
  //   //   beforeSend: function(request) {
  //   //     request.setRequestHeader("Accept", "ext/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3");
  //   //     request.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
  //   //     request.setRequestHeader("Accept-Language", "en-GB,en-US;q=0.9,en;q=0.8");
  //   //     request.setRequestHeader("Cache-Control", "no-cache");
  //   //     request.setRequestHeader("Connection", "keep-alive");
  //   //     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //   //     request.setRequestHeader("Cookie", "optimizelyEndUserId=oeu1559717862386r0.1565110796322211; optimizelySegments=%7B%7D; optimizelyBuckets=%7B%7D; _ga=GA1.2.1811633333.1559717863; _gid=GA1.2.500420442.1559717863; km_ai=c60BFLwKq4HCJWGkuoAy%2FdrHWEg%3D; km_vs=1; _fbp=fb.1.1559717864005.803206685; _gat=1; _hjIncludedInSample=1; access_grant_type=client_credentials; logintime=1559717881; check_browser_version=1; __zlcmid=seiHyBoGhUxQgk; ci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%220200168a2029590722c03d4a04fbb46d%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A15%3A%22110.225.227.104%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A120%3A%22Mozilla%2F5.0+%28Linux%3B+Android+6.0%3B+Nexus+5+Build%2FMRA58N%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F75.0.3770.80+Mobile%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1559717905%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D5c24ff502046f39baa7fee035dbdf8c2; kvcd=1559717907091; km_lv=1559717907; _gali=submitlogin");
  //   //     request.setRequestHeader("Origin", "https://www.massagebook.com");
  //   //     request.setRequestHeader("Referer", "https://www.massagebook.com/login");
  //   //   },
  //   //   data: {
  //   //     username: "info@lazapis.com",
  //   //     password: "blue580!",
  //   //     redirect: ''
  //   //   }
  //   // }).done(data => {
  //   //   $("#tab").attr('srcdoc', data)
  //   // })
  //   $.ajax({
  //       url: "https://nowmassage.me/api/business/" + event.target.attributes['id'].nodeValue,
  //       method: "GET",
  //       contentType: "application/json"
  //     }).done(data => {
  //           console.log(data)
  //           $('#'+event.target.attributes['id'].nodeValue).addClass('has-background-info')
  //           data.notes.map((note, key)=>{
  //               let li = 
  //                   '<div id="' +
  //                   key+note.business +
  //                   '" class="navbar-item"><h6 class="title is-6">' +
  //                   note.title +
  //                   '</h6><p class="subtitle is-6">' +
  //                   note.description +
  //                   '</p></div>'
  //               console.log("li", li)
  //               $('#task-menu').append(li)
  //           })

  //           let li = '<div id="user_dyn_' +
  //                     data.id +
  //                     '" class="navbar-item user"><h6 class="title is-6" data-user="' +
  //                     data.user + '" data-pass="' +
  //                     data.password + '" onClick=this.setCreds()>' +
  //                     data.user +
  //                     '</h6></div>'
  //           $('#password-menu').append(li)
            
  //   })    
  // });
});
