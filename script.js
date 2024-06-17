const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 200) 
});

const sr = ScrollReveal ({
    distance : '40px',
    duration : 2050,
    delay: 200,
    reset: true
});

sr.reveal('.herotext',{delay:300, origin:'top'});
sr.reveal('.aboutimg, .serviceitem, .abouttext',{delay:300, origin:'bottom'});
sr.reveal('.abouttext h2, .textcenter, .rightcontact h2',{delay:300, origin:'top'});
sr.reveal('.leftcontact',{delay:300, origin:'left'});
sr.reveal('.rightcontact',{delay:300, origin:'right'});
sr.reveal('.endsection',{delay:300, origin:'top'});
sr.reveal('.projects',{delay:300, origin:'top'});
