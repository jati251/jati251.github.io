  let nama = ''
let kosong= document.getElementById('kosong')


document.getElementById('myButton').onclick = function () {
  nama = document.getElementById('myText').value;
  if(nama===''||!nama){
    kosong.style.display= 'inline';
  } else {
    location.href = "./homepage.html";
  }
};

let baru=nama

export {baru}


