$(function () {

  if ($('.owl-2').length > 0) {
    $('.owl-2').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 2
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 3
        }
      }
    });
  }

})
const form1 = document.getElementById('form1');

form1.addEventListener('submit', function (e) {
  e.preventDefault();

  [...this.elements].forEach(formElement => {
    if (!formElement.checkValidity()) {

      if (!formElement.nextElementSibling || formElement.nextElementSibling.className !== 'error-msg') {
        const error = document.createElement('small');
        error.className = 'error-msg';
        error.innerText = formElement.validationMessage;
        formElement.insertAdjacentElement('afterend', error);
      }

    } else {
      if (formElement.nextElementSibling && formElement.nextElementSibling.className === 'error-msg') {
        formElement.nextElementSibling.remove();
      }
    }
  });
});


//  var btn = document.getElementById('btn');
//  btn.addEventListener('click', function (e) {
//  e.preventDefault();
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//    var phone = document.getElementById('phone').value;
//    var textarea = document.getElementById('textarea').value;
//    var body = 'name:' + name + '<br/> email: ' + email + '<br/> phone:' + phone + '<br/> textarea:' + textarea;


//    console.log("dfgdfg");
//    Email.send({
//     Host: "smtp.gmail.com",
//      Port: 587,
//     Username: "tugba.sengul612@gmail.com",
//      Password: "52DA8AF5CD433E079079273BA7218CD6E82F",
//      To: 'tugba.sengul612@gmail.com',
//      From: 'tugba.sengul612@gmail.com',
//     Subject: "This is the subject",
//      Body: body
//    }).then(function (message) {
//      alert(message);
//    });
//  });
// Get the checkbox element
var checkbox = document.getElementById("__BVID__73");

// Get the text element
var textElement = document.getElementById("_123");
// Get the text element
var textDanger = document.getElementById("danger");

// Add a click event listener to the checkbox
checkbox.addEventListener("click", function () {
  // Check if the checkbox is checked
  if (checkbox.checked) {
    // Change the text color to green (you can use any color you like)
    textElement.style.color = "green";
    textDanger.style.visibility = "hidden"
  } else {
    // Change the text color back to its original color
    textElement.style.color = "red"; // This will remove the inline style      
    textDanger.style.visibility = "visible"
  }
});
//1499790a-61e2-4b96-8f1d-d554bdfc1f9a
//ED4AD82424EFB7EB44D9006EF299866AAD4AEB7733882197D970C0CCC14C06B0D827130C08EC44E98D7FB1CF31F1CBF8    


document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

document.getElementById("deneme1").addEventListener("click", function() {
  // Tüm sayfa içeriğini değiştirmek için burada gerekli işlemleri yapabilirsiniz.
  // Örnek olarak, sadece başlık ve butonu değiştirdim.
  document.querySelector("h1").innerText = "Hello World!";
  document.getElementById("deneme1").innerText = "Türkçe";
  
  // Sayfanın dilini değiştirmek için aşağıdaki satırı ekleyebilirsiniz.
  // document.documentElement.lang = "en"; // İngilizce yapmak için
});



const moduleName = require('moduleName');

