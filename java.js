var audio = new Audio('music/aerohead-path-of-the-fireflies.mp3');

function insert(num){
    document.form.textview.value=document.form.textview.value+num
}

function equal(){
    var exp=document.form.textview.value;
    if(exp){
        document.form.textview.value=eval(exp)
    }
}

function clean(){
    document.form.textview.value=""
}

function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
}

function play1(){
audio.volume = 0.03
audio.play();
}

