document.getElementById('click').onclick=function(){
    var box=document.getElementById('search');
    window.location.href='http://www.google.com/search?q='+escape(box.value);
}