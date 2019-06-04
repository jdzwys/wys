window.onload = function() {
    var login = document.querySelector('#login');
    var reg = {
        "user-num": /^1[3-9]\d{9,}$/,
        "user-pwd": /^.{6,}$/
    }
    var em = document.querySelectorAll('#login em');
    var ipt = document.querySelectorAll('#login input');
    ipt.onkeyup = function() {
        if (reg.test(ipt.value)) {
            em.innerHTML = "";
        } else {
            em.innerHTML = "请输入正确的格式";
            // cont.style = "color:red"
        }
    }

}