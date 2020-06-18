gsap.from('.page-header', { duration: 2.5, opacity: 0, y: -150, stagger: 0.25 });
gsap.from('.page-header a', { duration: 2.5, opacity: 0, x: -3000 });
gsap.from('.top-text', { duration: 1, opacity: 0, y: 100 });

const controller = new ScrollMagic.Controller();
// build scene
new ScrollMagic.Scene({
  triggerElement: '#trigger1',
  triggerHook: 0.5, // show, when scrolled 10% into view
  duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
  .setClassToggle('#reveal1', 'visible') // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

const revealElements = document.getElementsByClassName('digit');

for (let i = 0; i < revealElements.length; i++) {
  const revealElement = revealElements[i];
  new ScrollMagic.Scene({
    triggerElement: revealElement,
    offset: 50,
    triggerHook: 0.7
  })
    .setClassToggle(revealElements[i], 'visible')
    .addIndicators({ name: 'digit ' + (i + 1) })
    .addTo(controller);
}
