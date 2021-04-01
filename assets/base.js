// console.log(1)
{/* <i class="fas fa-home"></i> */}
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css

function replaceGlobal(orig, search, replace) {
    regex = new RegExp(search, 'g')
    return orig.replace(regex, replace)
}
whref = window.location.href;whost = window.location.host
urlpathSplit = whref.split(whost)[1]
fileNameTmp = urlpathSplit.split('.')[0];localhost = whost.split(':')[0]


h4 = document.querySelector('h4')
if (fileNameTmp != '/') {fileName=fileNameTmp.split('public/')[1]}
else {  fileName='Home_'}
console.log('fn',fileName)

console.log(whref, whost, urlpathSplit, 'filename', 
fileName,'fn2')
console.log('fn',fileName)


fileName = replaceGlobal(fileName, '_', ' ')
h4.textContent = fileName[0].toUpperCase() + fileName.slice(1)

ghlink = document.getElementById('ghlink')
a = document.createElement('a')
a.textContent = 'Source on Github'
a.href = 'https://github.com/tik9/rest-test/blob/master' + urlpathSplit
// if (urlpathSplit != '/') {
ghlink.appendChild(a)

links_arr = {
    Home: '/public/index.html',
    'Markdown': '/public/test_md_client.html',
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

head = document.querySelector('head')

livereload = document.createElement('script')
livereload.src = 'http://localhost:35729/livereload.js?snipver=1'
head.appendChild(livereload)

icon = document.createElement('link');
icon.rel = 'icon'
icon.href = 'https://github.com/github.png'
head.appendChild(icon)

boots = document.createElement('link')
boots.rel = 'stylesheet'
boots.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"

head.appendChild(boots)

css = document.createElement('link')
css.rel = 'stylesheet'
css.href = '/assets/style.css'
head.appendChild(css)
footer = document.querySelector('footer')
footer.textContent = title + ' made in 2021'