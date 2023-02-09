const container = document.querySelector('#container')
//container.classList.add('container', 'box-center')
const cls = ['container', 'box-center']
container.classList.add(...cls)

container.innerHTML += '<p id="hello">Hello CF!</p>'
const hello = document.querySelector('#hello')
const cf = document.querySelector('#cf')

// hello.style.textAlign = 'center'
// cf.style.textAlign = 'center'

hello.classList.add('center')
cf.classList.add('center')

// const p = document.querySelector('p')
// p.textContent = 'Hello!'