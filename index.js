let nama = ''

var pageName = document.getElementById('page-name')
var intro1 = document.getElementById('intro1')

document.getElementById('myButton').onclick = function () {
  nama = document.getElementById('myText').value;
  document.getElementById('introcon').style.display = 'none';
  intro1.style.display= 'inline'
  pageName.innerHTML = `Haloo ${nama} !`;
};

document.getElementById('button-back').onclick = function (){
  document.getElementById('introcon').style.display = 'inline';
  intro1.style.display= 'none'
}



