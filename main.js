function main() {
    console.log(renderProducts(Gnotebooks))
}
function chooseCategory(category) {
    
 var button0=document.getElementsByClassName('chosen')[0];
 button0.classList.remove('chosen');

    if (category === 'notebook') {
        renderProducts(Gnotebooks);
        var button=document.getElementById('note');
        button.classList.add('chosen');
        var title=document.getElementById('title');
        title.innerHTML="מחברות";
    } else {
        renderProducts(Gcraft);
        var button1=document.getElementById('craft');
        button1.classList.add('chosen');
        var title=document.getElementById('title');
        title.innerHTML="כלי כתיבה";
    }
}
main();