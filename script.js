//Locomotive Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault();
    scroll.scrollTo('#box3'); // Smooth scroll to the target section
});

document.getElementById('service-link').addEventListener('click', function (e) {
    e.preventDefault();
    scroll.scrollTo('#box2'); // Smooth scroll to the target section
});



//Landing page animation

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


//Email js for uploading email and messages

//public key of the email js account
emailjs.init('public key');

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // const name = document.getElementById('name').value;

    emailjs.send("service id", "template  id", {
        // name:name,
        subject: email,
        message: message
    })
        .then(function (response) {

            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            alert('Email sent successfully!');

        }, function (error) {
            alert('Failed to send email: ' + error.text);
        });
});
