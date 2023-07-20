

  function animText(words){
    let text = document.querySelector('#'+words);
    let arr = text;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr.charAt(i));
    }
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letters' aria-hidden='true'>$&</span>"); 

    anime.timeline({loop: false}) 
      .add({
        targets: '.letters',
        translateY: [20, 0],
        opacity: [0,1],
        easing: "easeOutExpo",
        delay: (el, i) => 90 * i
      
      });
    
  }
  animText('words');
  var doc, bod, htm;
  addEventListener('load', function(){
    doc = document; bod = doc.body; htm = doc.documentElement;
    addEventListener('scroll', function(){
    doc.querySelector('.nav').style.backgroundColor = htm.scrollTop > 100 ? '#d3cccc' : '#fff';
    doc.querySelector('.topnav').style.backgroundColor = htm.scrollTop > 100 ? '#d3cccc' : '#fff';

  });
});
 