// document.addEventListener("DOMContentLoaded",()=>{

links_arr = {
    Home: '/',
    'Date converter': 'convert',
    'Buy me a coffee': 'https://www.buymeacoffee.com/tik1',
    Github: 'https://github.com/tik9/rest-test',
    Games: 'https://tik9.github.io/game',
}

ul = document.createElement('ul')
ul.classList.add('list-unstyled')
Object.keys(links_arr).forEach(key => {
    toplinksitem = document.createElement('li')
    ul.appendChild(toplinksitem)
    a = document.createElement('a')
    toplinksitem.appendChild(a)
    a.href = links_arr[key]
    a.textContent = key
})
document.querySelector('footer').appendChild(ul)


title = 'Tiko\'s'
header = document.querySelector('h3')
header.textContent = title;

document.title = title

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>')

document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">')
document.write('<link rel=stylesheet href=assets/style.css>')


// })