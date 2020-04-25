let el_total_volume = document.getElementById("total_volume");
let el_coffee_weight = document.getElementById("coffee_weight");
let el_bloom_ammount = document.getElementById("bloom_ammount");
let el_main_pour = document.getElementById("main_pour");
let el_final_pour = document.getElementById("final_pour");

el_total_volume.addEventListener("change", function (){
	let vol = el_total_volume.value;
  
  // uses the 60g/L coffee/water ratio recommended by JH
  let coffee_weight = ((6/100)*vol).toFixed(1);
  el_coffee_weight.innerHTML = coffee_weight;
  el_bloom_ammount.innerHTML = coffee_weight * 2;
  let initial_pour = ((60/100)*vol).toFixed(1);
  el_main_pour.innerHTML = initial_pour;
  el_final_pour.innerHTML = vol;
});
