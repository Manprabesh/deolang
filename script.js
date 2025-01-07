const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim() {
    var tl = gsap.timeline();
    console.log(tl)

    tl.to(".h1_popup", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2.5,
        delay: -1,
        stagger: 0.6,
      })

  }

  firstPageAnim()



emailjs.init('UkVHZ3UvAPJXrXFav');

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // const name = document.getElementById('name').value;

    emailjs.send("service_32c6dn9", "template_db73v0h", {
        // name:name,
        subject: email,
        message: message
    })
    .then(function (response) {

   document.getElementById('email').value="";
  document.getElementById('message').value="";
        alert('Email sent successfully!');

    }, function (error) {
        alert('Failed to send email: ' + error.text);
    });
});

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    scroll.scrollTo('#box3'); // Smooth scroll to the target section
});

// document.getElementById('contact-link').addEventListener('click', function (e) {
//     e.preventDefault();
//     scroll.scrollTo(document.querySelector('#target-section'), {
//         duration: 1000,
//         offset: 0,
//         easing: [0.25, 0.0, 0.35, 1.0]
//     });
// });