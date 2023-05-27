var request = new XMLHttpRequest();

request.open("GET", "https://api.github.com/users/YosepWahid/repos");

request.onload = function () {
  var data = JSON.parse(request.responseText);
  let repos = "";
  let data_filter = data.filter((x) => {
    if (x.id != 645787860 && x.id != 645020964) {
      return x;
    }
  });
  data_filter.forEach((element) => {
    repos +=
      '<div class="col-md-4 mb-3"><div class="card"><div class="card-body"><h5 class="card-title"> ' +
      element.name +
      "</h5><div><small class='text-muted'>" +
      element.description +
      '</small></div> <br/> <a href="' +
      element.html_url +
      '" class="text-decoration-none" target="_blank">🔗️ url</a></div></div></div>';
  });
  document.getElementById("result").innerHTML = repos;
};
request.send();
