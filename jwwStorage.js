
let buttonJww = document.getElementById("jwwButton")
let formJww = document.getElementById("jwwForm")
let ulJww = document.getElementById("jwwUl")
let inputJww = document.getElementById('jwwscore')

  let jwwArray = localStorage.getItem('points') ? JSON.parse(localStorage.getItem('points')) : []

  localStorage.setItem('points', JSON.stringify(jwwArray))
  const dataJww = JSON.parse(localStorage.getItem('points'))

  let listMaker = text => {
    let list = document.createElement('li')
    list.textContent = text
    ulJww.appendChild(list)
  }

  formJww.addEventListener('submit', function(e) {
    e.preventDefault()

    jwwArray.push(inputJww.value)
    localStorage.setItem('points', JSON.stringify(jwwArray))
    listMaker(inputJww.value)
    inputJww.value = ''
})

    dataJww.forEach(item => {
      listMaker(item)
    })

    jwwButton.addEventListener('click', function() {
      localStorage.clear()
      while (ulJww.firstChild) {
        ulJww.removeChild(ulJww.firstChild)
      }
    })
    
    let sumJww = 0;
    for(let i=0; i < jwwArray.length; i++){
      sumJww += parseInt(jwwArray[i]);
    }
    console.log(sumJww);


