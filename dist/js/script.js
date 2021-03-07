var nav = document.querySelector('nav');
nav.classList.add('test');
var humberger_menu = document.getElementById('right');
humberger_menu.addEventListener('click' ,function(){
        // nav.classList.remove('test');
        // nav.classList.add('show_menu');
        nav.style.visibility = 'visible';
        nav.style.height = 7100+'px';
        document.getElementById('carousel').style.visibility = 'hidden';
        var test = document.querySelectorAll('svg');
        for(var i = 0 ; i<=test.length-1; i++){
                // console.log(test[i])
                test[i].style.visibility = 'hidden';
        }
});
var close_btn = document.getElementById('close_btn_img');
close_btn.addEventListener('click' , function(){
        // nav.classList.remove('show_menu');
        // nav.classList.add('test');
        nav.style.height = 4800+'px';
        nav.style.visibility = 'hidden';
        document.getElementById('carousel').style.visibility = 'visible';
        var test = document.querySelectorAll('svg');
        for(var i = 0 ; i<=test.length-1; i++){
                // console.log(test[i])
                test[i].style.visibility = 'visible';
        }

});
