const search = function () {
   const input = document.querySelector('.search-block > input');
   const searchBtn = document.querySelector('.search-block > button');

   function inputVal() {
         console.log(input.value);
      }

   searchBtn.onclick = () => {
      inputVal();
   }
}
search()