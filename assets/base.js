// document.addEventListener("DOMContentLoaded",()=>{
whref = window.location.href
whost = window.location.host
urlpath_sp = whref.split(whost)[1]
// console.log(whref, whost, urlpath_sp)

ghlink = document.getElementById('ghlink')
a = document.createElement('a')
a.textContent = 'Source on Github'
a.href = 'https://github.com/tik9/rest-test/blob/master/' + urlpath_sp + '.html'
if (urlpath_sp != '/') {
    ghlink.appendChild(a)
}

links_arr = {
    Home: '/',
    'Date converter': 'convertdate',
    'Calculate': 'calculate',
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
document.querySelector('header').appendChild(ul)


title = 'Tiko\'s'
header = document.querySelector('h3')
header.textContent = title;

document.title = title

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>')

document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">')
document.write('<link rel=stylesheet href=assets/style.css>')

document.write('<link rel=icon href=https://github.com/github.png/>')

// })