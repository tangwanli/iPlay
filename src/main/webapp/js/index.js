/*
* index.js
*/



$(function(){
	console.log("in");

    /* 登陆、注册、关闭按钮点击 */
    let doc = document,
        registerBtn = doc.querySelector('.register-btn'),
        loginBtn = doc.querySelector('.login-btn'),
        popUp1 = doc.querySelector('.pop-up1'),
        popUp2 = doc.querySelector('.pop-up2'),
        closeIt1 = $(".close-it1"),
        closeIt2 = $(".close-it2");
    registerBtn.onclick = function(ev) {
    	//console.log($(popUp1).css("display"));
        $(popUp2).css('display',"block");
    };
    loginBtn.onclick = function(ev) {
    	//console.log($(popUp1).css("display"));
        $(popUp1).css('display',"block");
    };
    closeIt1.click(function() {
    	$(popUp1).css('display',"none");
    });
    closeIt2.click(function() {
    	$(popUp2).css('display',"none");
    });
    /* //登陆、注册、关闭按钮点击 */



    /* 点击按钮显示界面 */
    let leftSideNav = $(".left-side-nav li"),
        section = $(".sec");
    console.log();
    let clearActive = function() {
        leftSideNav.removeClass('active')
    }
    leftSideNav.click(function(ev) {
    	let index = $(this).index();
    	console.log(this.index,' ',ev.target,' ',index);
    	clearActive();
    	$(this).addClass('active');
    	section.css("display","none");
        $(section[index]).css("display","block");
    });
    /* //点击按钮显示界面 */



    /* 登录操作 */
    let login = $('.login'),
        logUserName = $("#login2 input:nth-of-type(1)"),
        logUserPas = $("#login2 input:nth-of-type(2)");
        console.log(logUserName,logUserPas);
    login.click(function() {
        $.post("login", {
        userName: logUserName.val(),
        userPassword: logUserPas.val()
    }, function(data) {
        console.log(data);
    });
    });
    

});
