// our happy customer slider

jQuery(".happy-customer-slider").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 20,
  responsive: {
    0: {
      items: 2
    },
    575: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 6
    }
  }
});

// Counter jquery

let count = document.querySelectorAll(".count")
let arr = Array.from(count)
  arr.map(function(item){
  let startnumber = 0
    function counterup(){
    startnumber++
    item.innerHTML= startnumber
      if(startnumber == item.dataset.number){
          clearInterval(stop)
      }
    }
    let stop =setInterval(function(){
    counterup()
    },50)
  })

  // AOS

  AOS.init();