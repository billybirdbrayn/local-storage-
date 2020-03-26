/// STANDARD SCORES
//const form = document.querySelector('form')
//const ul = document.querySelector('ul')
let buttonStd = document.getElementById("stdButton")
let formStd = document.getElementById("stdForm")
let ulStd = document.getElementById("stdUl")
let inputStd = document.getElementById('stdscore')

  let stdArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : []

  localStorage.setItem('scores', JSON.stringify(stdArray))
  const data = JSON.parse(localStorage.getItem('scores'))

  let liMaker = text => {
    let li = document.createElement('li')
    li.textContent = text
    ulStd.appendChild(li)
  }

  formStd.addEventListener('submit', function(e) {
    e.preventDefault()

    stdArray.push(inputStd.value)
    localStorage.setItem('scores', JSON.stringify(stdArray))
    liMaker(inputStd.value)
    inputStd.value = ''
})

    data.forEach(item => {
      liMaker(item)
    })

    stdButton.addEventListener('click', function() {
      localStorage.clear()
      while (ulStd.firstChild) {
        ulStd.removeChild(ulStd.firstChild)
      }
    })
    
    let sumStd = 0;
    for(let i=0; i < stdArray.length; i++){
      sumStd += parseInt(stdArray[i]);
    }
    console.log(sumStd);





///////////JUMPERS SCORE

