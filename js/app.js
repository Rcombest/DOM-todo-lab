const input = document.getElementById('input')
const button = document.querySelector('#submit-button')
const uList = document.querySelector('#to-do list')

button.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = input.value
  document.querySelector('ul').appendChild(li)
  input.value = ''
})
