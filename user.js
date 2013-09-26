  
//edytuj te wartosci wprowadzajac numery kursow
var codes = ['z00-13a','z00-10a','z00-20e','z00-18h'];
// manualny reset jesli wprowadza zle wartosci
var reset = 0; 


function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + 31536000000); //1 year
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function delCookie(key) {
    var expires = new Date();
    expires.setTime(expires.getTime() - 1); //1 year
    document.cookie = key + '=' + ' ' + ';expires=' + expires.toUTCString();
}


if(reset == 0){
        if(document.getElementsByName('kodGrupy')[0] != null){
            if(getCookie('test') == null) setCookie('test', '0');
            var time = parseInt(getCookie('test'));   
            window.onload = insert();
            function insert(){
                if(time < codes.length){
                     document.getElementsByName('kodGrupy')[0].value=codes[time];
                     document.getElementsByName('event_ZapiszKodGrupy')[0].click();
                }
                 
            }
             time = time + 1;
             setCookie('test',time);
        } else {
        setCookie('test', '0');
        document.getElementsByName('event_Zapisy')[1].click();
        } 
}
else if(reset == 1){
    delCookie('test');
}


