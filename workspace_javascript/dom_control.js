
function test(){
  const ul_tag = document.querySelector('.my-ul');
  let data = ``;

  for(let i = 0 ; i < 1500 ; i++){
    ul_tag.innerHTML = ul_tag.innerHTML + `<li>${i}</li>`;
  }
  ul_tag.innerHTML = date;
}