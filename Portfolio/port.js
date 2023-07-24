var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #0ef }";
  document.body.appendChild(css);
};
  
// dark-theme

var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "img/moon.png";
  }else{
    icon.src = "img/sun.png";
    }
}

// form
// function sendEmail(){
//   sendEmail.send({
//     Host : "smtp.gmail.com",
//     Username : "takeandfake12@gmail.com",
//     Password : "23762308",
//     To : 'takeandfake12@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New Contact Form Enquiry",
//     Body : "Name: " + document.getElementById("name").value
//     + "<br> Email: " + document.getElementById("email").value
//     + "<br> Phone no: " + document.getElementById("phone").value
//     + "<br> Message: " + document.getElementById("message").value
//   }).then(
//     message => alert("Message sent successfully")
//   );
// }

