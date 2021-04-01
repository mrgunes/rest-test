// if (!String.prototype.quote) {
String.prototype.quote = function () {
    return this
        .replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n')
        .replace(/\t/g, '\\t')
        .replace(/\r/g, '\\r')
        .replace(/\f/g, '\\f')
        .replace(/\"/g, '\\"')
        .replace(/\'/g, "\\'");
};
// }

if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
    };
}
// text = console.log(1); 
document.getElementById('convert').addEventListener('click', function(){
text=document.getElementById('multiline').value.quote();
document.getElementById('oneline').innerText = text
eval(text)
// console.log('text',text);
  });