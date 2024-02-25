document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".increment_btn");
  const btn_press = document.querySelector(".increement_pressed");
  const count = document.querySelector(".increement_count");
  var pressedCount = 0;
  var triggerdCount = 0;
  btn.addEventListener("click", () => {
    btn_press.innerHTML = ++pressedCount;
   // debounceCount();
  });
});


// const debounceCount = _.debounce(()=>{
//   count.innerHTML = ++triggerdCount;
// },800)

//const start = new Date().getTime();
//const ThrottleCount = _.throttle(()=>{
  // const now = new Date().getTime();
  // console.log(now=start)
//   count.innerHTML = ++triggerdCount;
// },800)
