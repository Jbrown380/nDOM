// .textContent
// .innerHTML
// document.body.appendChild()
// ${}
// .innerHTML = ``

const main = document.querySelector(`main`);
var joke1 = "Why did the scarecrow win an award? Because he was outstanding in his field.";
var joke2 = "What do you call a pig that does karate? A pork chop.";
var joke3 = "How do you tell if a vampire is sick? By how much he is coffin.";


var templateHTML =`
  <h2>My Jokes</h2>
  <ul>
  <li>${joke1}</li>
  <li>${joke2}</li>
  <li>${joke3}</li>
  </ul>
  `
  main.innerHTML = templateHTML;
       

  var p1 = document.createElement(p) 
 p1.textContent = "That's all folks!";
    
document.getElementById(body).appendChild(p);