/*
* index.js
*/


$(function(){
	console.log("in the website");
    localStorage.setItem('vdoMagId','1');
    localStorage.setItem('userMagId','1');
    localStorage.setItem('comMagId','1');
    localStorage.setItem('vdoComId','1');


    $('.left-side-nav li:nth-of-type(3)').css('display','none');
    $('.left-side-nav li:nth-of-type(4)').css('display','none');
    $('.left-side-nav li:nth-of-type(5)').css('display','none');
    $('.left-side-nav li:nth-of-type(6)').css('display','none');

    /* 把时间戳转换为本地时间 */
    function getLocalTime(nS) {     
       return new Date(parseInt(nS)).toLocaleString();     
    }


    /* 切换下拉框的性别，用户信息界面 */
    function changeSex() {
        console.log('进入性别切换');
        $('.sec-drop-box').click(function() {
            let btnSex = $('.sex-box button').text(),
                liSex = $('.sec-drop-box li a').text();
                $('.sex-box button').text(liSex);
                $('.sec-drop-box li a').text(btnSex);
        });
    }
changeSex();

    /* 切换下拉框的性别,注册界面 */
    function changeSex2() {
        console.log('进入性别切换');
        $('.sec-drop-box2').click(function() {
            let btnSex = $('.sex-box2 button').text(),
                liSex = $('.sec-drop-box2 li a').text();
                $('.sex-box2 button').text(liSex);
                $('.sec-drop-box2 li a').text(btnSex);
        });
    }
changeSex2();


    /* 下面这个函数是选中所有背景为红色的，返回其中选中的a的index数组 */
    function pitchOn(els) {
        let pickArr = [],
            len = els.length;
        for (let i=0;i<len;i++) {
            if(els[i].style.background == 'red') {
                pickArr.push(i);
            }
        }
        return pickArr;
    }

    /* 切换背景颜色 */
    function changeBg(el) {
        console.log('进入changeBg！！');
        let background = $(el).css('background');
        console.log(background);
        if (el.style.background == 'red') {
            $(el).css('background','#fff');
        } else {
            $(el).css('background','red');
        }
    }
    /* //切换背景颜色 */


    /* 获取个人信息，然后把信息填入页面,用户密码是存入localstorage里面的 */
    function showPerMsg() {
        $.post('getUserById',{
            id: +localStorage.getItem('userId')
        }, function(res) {
        let uUserName = $('.u-user-name'),
        uUserEmail = $('.u-user-email'),
       // 性别 uUserSex = $('.u-user-sex'),
        uUserLoc = $('.u-user-loc'),
        uUserPic = $('.u-user-pic');
        
        localStorage.setItem('userPassword',res.data.User.userPassword);
        localStorage.setItem('userPhoto',res.data.User.userPhoto);
        
        uUserName.val(res.data.User.userName);
        uUserEmail.val(res.data.User.userEmail);
        uUserLoc.val(res.data.User.userCity);
        uUserPic.attr('src',res.data.User.userPhoto);
        if (res.data.User.userSex) {
            $('.sex-box button').text('woman');
            $('.sec-drop-box li a').text('man');
        } else {
            $('.sex-box button').text('man');
            $('.sec-drop-box li a').text('woman');
        }
        });
        
    }
    /* //获取个人信息，然后把信息填入页面 */





    /* 登陆、注册、关闭、注销、用户按钮点击 */
    let doc = document,
        registerBtn = doc.querySelector('.register-btn'),
        loginBtn = doc.querySelector('.login-btn'),
        popUp1 = doc.querySelector('.pop-up1'),
        popUp2 = doc.querySelector('.pop-up2'),
        closeIt1 = $(".close-it1"),
        closeIt2 = $(".close-it2");
    registerBtn.onclick = function(ev) {
        $(popUp1).hide(500);    
        $(popUp2).toggle(500);
    };
    loginBtn.onclick = function(ev) {
        $(popUp2).hide(500);
        $(popUp1).toggle(500);
    };
    closeIt1.click(function() {
        $(popUp1).hide(500);
    });
    closeIt2.click(function() {
    	$(popUp2).hide(500);
    });
    $('.register1').click(function() {
        $(popUp1).hide(500);
        $(popUp2).show(500);
    });
    $('.user-name-btn').click(function() {
        $(".left-side-nav li").removeClass('active');
        $($(".left-side-nav li")[2]).addClass('active');
        $(".sec").css("display","none");
        $($(".sec")[2]).css("display","block");
        showPerMsg();
    });
    $('.log-off-btn').click(function() {
        $('.user-name-btn').hide();
        $('.log-off-btn').hide();
        $('.register-btn').show();
        $('.login-btn').show();
        $('.left-side-nav li:nth-of-type(3)').css('display','none');
        $('.left-side-nav li:nth-of-type(4)').css('display','none');
        $('.left-side-nav li:nth-of-type(5)').css('display','none');
        $('.left-side-nav li:nth-of-type(6)').css('display','none');

        $('.sec').css("display","none");
        $($('.sec')[0]).addClass('active');
        $($('.sec')[0]).css("display","block");
        
        
    });
    /* //登陆、注册、关闭、注销、用户按钮点击 */



    /* 点击按钮显示界面 */
    let leftSideNav = $(".left-side-nav li"),
        section = $(".sec");
    console.log();
    let clearActive = function() {
        leftSideNav.removeClass('active');
    }
    leftSideNav.click(function(ev) {
        /* 清空背景颜色 */
        $('.user-inf-list').find('a').css('background','#fff');
        $('.vdo-msg-list').find('a').css('background','#fff');
        $('.com-mag-list').find('a').css('background','#fff');

    	let index = $(this).index();
    	console.log(this.index,' ',ev.target,' ',index);
        if(index == 0) {
            showHome();
        }
        if(index == 2) {
            showPerMsg();
            
        }
        if(index == 3) {
            showUserMsg(1);
        }
        if(index == 4) {
            showVdoMsg(1);
        }
        if(index == 5) {
            showComMsg(1);
        }
    	clearActive();
    	$(this).addClass('active');
    	section.css("display","none");
        $('.comment-box').css("display","none");
        $('.my-vdo')[0].pause();
        $(section[index]).css("display","block");
    });
    /* //点击按钮显示界面 */



    /* 登录模块 */
    let login = $('.login'),
        logUserName = $("#login2 input:nth-of-type(1)"),
        logUserPas = $("#login2 input:nth-of-type(2)"),
        /* *选择记住用户名，当返回成功的时候，就会存stoUserName
           *然后，后来就先判断这个stoUserName是否存在
         */
        stoUserName = localStorage.getItem('stoUserName');
        localStorage.setItem('userId','-1');
    if (stoUserName) {
        logUserName.val(stoUserName);
        console.log('the name is:' + stoUserName);
    }
    login.click(function() {
        $.post("login", {
        userName: logUserName.val(),
        userPassword: logUserPas.val()
    }, function(res) {
        if (res.msg == 'success') {
            if ($('.checkbox').is(':checked')){
                localStorage.setItem('stoUserName',logUserName.val());
            }
            localStorage.setItem('userId',res.data.userId);
            
            $(popUp1).hide();
            $(registerBtn).hide();
            $(loginBtn).hide();
            $('.user-name-btn').text(logUserName.val());
            $('.user-name-btn').show();
            $('.log-off-btn').show();

            /* 显示用户侧边栏 */
            $('.left-side-nav li:nth-of-type(3)').css('display','block');

            /* 管理员功能隐藏 */
            let role = res.data.userRole;
            localStorage.setItem('userRole',role);
            if (role) {
                $('.left-side-nav li:nth-of-type(4)').css('display','block');
                $('.left-side-nav li:nth-of-type(5)').css('display','block');
                $('.left-side-nav li:nth-of-type(6)').css('display','block');
            } else {
                $('.left-side-nav li:nth-of-type(4)').css('display','none');
                $('.left-side-nav li:nth-of-type(5)').css('display','none');
                $('.left-side-nav li:nth-of-type(6)').css('display','none');
            }
        } else {
            $(popUp1).hide(500);
        }
        console.log("登录返回数据为：" + res);
    });
    });
    /* //登录模块 */



    /* 注册模块 */
    let regUserName = $('.reg-user-name'),
        regUserPas = $('.reg-user-pas'),
        regConPas = $('.reg-confirm-pas'),
        regEmail = $('.reg-email'),
        /*regSex = $('.reg-sex'),*/
        regLocation = $('.reg-location'),
        registerNow = $('.register-now'),
        isMan = 0;

    /* 判断用户名 */
    regUserName.change(function() {
        $.post('checkUserName', {
            userName: regUserName.val()
        }, function(data) {
            console.log('进入，用户名判断返回',data);
            if (data.msg == 'success') {
            $('.user-wrg').hide(500);
            } else {
                $('.user-wrg').show(500);
            }
        });
    });
    /* 判断第二个密码输入 */
    regConPas.change(function() {
        if (regUserPas.val() == regConPas.val()) {
            $('.psd-wrg').hide(500);
        } else {
            $('.psd-wrg').show(500);
        }
    });
    /* 判断email */
    regEmail.change(function() {
        let reg = /@.*\.com/g,
            isOK = reg.test(regEmail.val());
        if (isOK) {
            $('.email-wrg').hide(500);
        } else {
            $('.email-wrg').show();
        }
    });
    /* 判断性别 */
    if ($('.sex-box2 button').text() != 'man') {
        isMan = 1;
    }
    registerNow.click(function() {
        let defPhoto = `data:image/jpeg;base64,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`;
        $.post('register', {
            userName: regUserName.val(),
            userPassword: regUserPas.val(),
            userSex: isMan,
            userEmail: regEmail.val(),
            userCity: regLocation.val(),
            userPhoto: defPhoto
        }, function(data){
            if (data.msg == 'success') {
                $(popUp2).hide(500);
            } else {
            }
        });
    });
    /* //注册模块 */



    /* 用户模块 */
    let userPho = $('#user-pho'),
        changeInfBtn = $('.change-inf'),
        uUserName = $('.u-user-name'),
        uUserEmail = $('.u-user-email'),
        uUserSex = $('.u-user-sex'),
        uUserLoc = $('.u-user-loc'),
        uUserPas = $('.u-user-pas'),
        uNewPas = $('.u-new-pas'),
        uNewPas2 = $('.u-new-pas2'),
        oldPsdWrg = $('.old-psd-wrg'),
        psdWrg2 = $('.psd-wrg2'),
        uUserPic = $('.u-user-pic');

    /* 下面这个就是判断输入的密码是否和真实密码一样 */
    uUserPas.change(() => {
        if(localStorage.getItem('userPassword') == uUserPas.val()){
            oldPsdWrg.hide(500);
        } else {
            oldPsdWrg.show(500);
        }
    });
    /* //判断输入的密码是否和真实密码一样 */
    uNewPas2.change(() => {
        if(uNewPas.val() == uNewPas2.val()) {
            psdWrg2.hide(500);
        } else {
            psdWrg2.show(500);
        }
    });
    userPho.change(function() {
        let files = this.files,
            reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function(ev) {
            let userDataUrl = ev.target.result;
            uUserPic.attr('src',userDataUrl);
            localStorage.setItem('userPhoto',userDataUrl);
            console.log(userDataUrl);
        }
    });
    /* 点击之后，就把所有的信息全部发送过去 */
    changeInfBtn.click(function() {
        let sex;
        if ($('.sex-box button').text() == 'man') {
            sex = 0;
        } else {
            sex = 1;
        }

        $.post('updateUser', {
            userId: localStorage.getItem('userId'),
            userName: uUserName.val(),
            userPassword: uNewPas.val(),
            userSex: sex,
            userEmail: uUserEmail.val(),
            userCity: uUserLoc.val(),
            userPhoto: localStorage.getItem('userPhoto')
        }, function(res) {
            if (res.msg == 'success') {
            } else {
            }
        });
    });
    /* //用户模块 */



    /* 视频上传模块 */
    let videoFile,
        posterPic,
        vdoName = '',
        confirmUpBtn = $('.confirm-upload-all'),
        vdoPosBtn = $('#video-poster'),
        posPic = $('.poster-pic'),
        vdoNameInp = $('.vdo-name');
    /* 改变poster图片 */
    vdoPosBtn.change(function() {
        let posFiles = this.files,
            reader = new FileReader();

        reader.readAsDataURL(posFiles[0]);
        reader.onload = function(ev) {
            posPic.attr('src',ev.target.result);
            console.log(ev.target.result);
        }
    });
    /* //改变poster图片 */
    /* 修改文件名 */
    vdoNameInp.change(function() {
        vdoName = $(this).val() + '.mp4';
    });
    /* //修改文件名 */
    $('#video').change(function(){
        videoFile = this.files;
        let fileName = videoFile[0].name,
            size = videoFile[0].size,
            type = videoFile[0].type,
            lastModified = getLocalTime(videoFile[0].lastModified),
            path = URL.createObjectURL(videoFile[0]);
        $('.file-name span').text(fileName);
        $('.file-size span').text(size);
        $('.file-type span').text(type);
        $('.file-lastModified span').text(lastModified);
        $('.file-path span').text(path);

    });
    /* 上传 */
    confirmUpBtn.click(function() {
        console.log('in????????');
        videoFile = doc.querySelector('#video').files;
        /* 下面这个就用的七牛云的上传方法，上传到七牛云去 */
        let file = videoFile[0],
            key = vdoName ? vdoName : videoFile[0].name;
       // token = `1AkEJ34HwNKA6oRflx6yeO6okys3NYHF4qilLY5N:I1LU2DNOdsVqEBvRkZo3Ofmp_sY=:eyJzY29wZSI6ImlwbGF5IiwicmV0dXJuQm9keSI6IntcImtleVwiOlwiJChrZXkpXCIsXCJoYXNoXCI6XCIkKGV0YWcpXCIsXCJidWNrZXRcIjpcIiQoYnVja2V0KVwiLFwiZnNpemVcIjokKGZzaXplKX0iLCJkZWFkbGluZSI6MTU1Mzk0MDcyMn0=`;
      
      $.post('uploadFile',{
                        videoTitle: key,
                        videoUserId: localStorage.getItem('userId'),
                        videoUserName: localStorage.getItem('stoUserName')
                    },function(res){
                        if (res.msg == 'success') {
                            let token = res.data.Token;
                            let observable = qiniu.upload(file,key,token),
                                observer = {
                                    next(res){
                                        console.log(res);
                                        let rate = res.total.percent + '%';
                                        $('.my-pro div')[0].style.width = rate;
                                        $('.my-pro div').text(rate);
                                    },
                                    error(res){
                                        console.log(res.message);
                                    },
                                    complete(res){
                                        console.log(res);
                                    }
                                };
                            observable.subscribe(observer);
                            
                        } else {
                        }
                    });


        
    });
    /* //上传 */
    /* //视频上传模块 */




    /* 显示用户管理模块的信息 */
    function showUserMsg(page) {
        $('.user-inf-list').empty();
        console.log('进入showUserMsg');
        $.post('getAlluser',{
            pageNum: page
        },function(res){
            let list = res.list,
                len = list.length,
                userList = $('.user-inf-list');
                console.log('首先再来看看返回的东西res：',res);
            for (let i=0;i<len;i++) {
                let user = list[i].userName,
                    userId = list[i].userId;
                    /* 根据userid来删 */
                let str = `<a userid="` + userId + `" href="#" class="list-group-item">`+ user +`</a>`;
                userList.append(str);

            }
            /* 用户信息管理模块 */
            let uInfEls = $('.user-inf-list').find('a'),
                delUser = $('.del-user');
            uInfEls.click(function() {
                changeBg(this);
            });
            console.log('看看list是不是没有东西哟，真的没有莫00000：',$('.user-inf-list'));
            console.log('现在这个a应该可以获取到了，再showUserMsg的回掉里面：',uInfEls);
            delUser.click(function(){
            let elArr = pitchOn(uInfEls),
                userIdArr = [];
                console.log('选中的元素是',elArr);
            elArr.forEach(function(value,index,arr){
                let id = $(uInfEls[value]).attr('userid');
                userIdArr.push(id);
            });
            /* 下面这个userIdArr就是存用户id的数组 */
            $.post('deleteUsers',{
                userIds: userIdArr.join('%')
            }, function(res) {
                if(res.msg == 'success') {
                    $('.user-inf-list').empty();
                    showUserMsg(1);
                } else {
                }
            });
            console.log(userIdArr);
            });
                /* 分页操作 */
            $('.del-user-next').click(function(){
                let prePage = +localStorage.getItem('userMagId');
                    let nowPage = prePage + 1;
                    localStorage.setItem('userMagId',nowPage);
                    showUserMsg(nowPage);
            });
            $('.del-user-up').click(function(){
                let prePage = +localStorage.getItem('userMagId');
                if (prePage > 1) {
                    let nowPage = prePage - 1;
                    localStorage.setItem('userMagId',nowPage);
                    showUserMsg(nowPage);
                } 
            });
            /* //用户信息管理模块 */
        });
    }
    /* //显示用户管理模块的信息 */
    





    /* 显示视频管理模块的信息 */
    function showVdoMsg(page) {
        $('.vdo-msg-list').empty();
        console.log('进入showVdoMsg');
        $.post('getAllVideoInfo',{
            pageNum: page
        },function(res){
            console.log('进入showVdoMsg,并且res为 ',res);
            let list = res.data.Video,
                len = list.length,
                vMsgList = $('.vdo-msg-list');
            for (let i=0;i<len;i++) {
                let vdoTitle = list[i].videoTitle,
                    /*vdoUrl = list[i].videoUrl,*/
                    vdoId = list[i].videoId;
                    /* 通过vdourl来删除 */
                let str = `<a vdoId="` + vdoId + `" vdourl="` + 'vdoUrl' + `" href="#" class="list-group-item">`+ vdoTitle +`</a>`;
                vMsgList.append(str);
            }

            /* 视频管理模块 */
            /* 删除视频的话，是把选中的用户(选它的url)全存在一个数组，然后删除 */
            let vInfEls = $('.vdo-msg-list').find('a'),
                delVdo = $('.del-vdo');
            vInfEls.click(function() {
                changeBg(this);
            });
            delVdo.click(function(){
                let elArr = pitchOn(vInfEls),
                    vdoIdArr = [];
                elArr.forEach(function(value,index,arr){
                    let vdoId = $(vInfEls[value]).attr('vdoId');
                    vdoIdArr.push(vdoId);
                });
                /* 下面这个vdoIdArr就是存url的数组 */
                /* !!!!!这里改成vdo id的数组 */
                $.post('deleteVideo',{
                    videoIds: vdoIdArr.join('%')
                }, function(res) {
                    if(res.msg == 'success') {
                        $('.vdo-msg-list').empty();
                        showVdoMsg(1);
                    } else {
                    }
                });
            });
            /* 分页操作 */
            $('.del-vdo-next').click(function(){
                let prePage = +localStorage.getItem('vdoMagId');
                    let nowPage = prePage + 1;
                    localStorage.setItem('vdoMagId',nowPage);
                    showVdoMsg(nowPage);
            });
            $('.del-vdo-up').click(function(){
                let prePage = +localStorage.getItem('vdoMagId');
                if (prePage > 1) {
                    let nowPage = prePage - 1;
                    localStorage.setItem('vdoMagId',nowPage);
                    showVdoMsg(nowPage);
                } 
            });
            /* //视频管理模块 */
        });
    }
    /* 显示视频管理模块的信息 */




    /* 显示评论管理模块的信息 */
    function showComMsg(page) {
        console.log("这里是进入评论模块：");
        $('.com-mag-list').empty();
        $.post('getAllComment',{
            pageNum: page
        },function(res){
            console.log("这里评论模块返回的这个res为：", res);
            $('.com-mag-list').empty();
            let list = res.data.pageInfo.list,
                len = list.length,
                cMagList = $('.com-mag-list');
            for (let i=0;i<len;i++) {
                let content = list[i].content,
                    userName = list[i].userName,
                    comid = list[i].commentId,
                    vdoId = list[i].videoId;
                    /* 通过comId来删除 */
                let str = `<a comid="` + comid + `"href="#" class="list-group-item">` + content + `<span>write by: ` + userName + `, At video` + vdoId + `</span></a>`;
                cMagList.append(str);
            }
            
            console.log('这个评论模块也要进来哟！！');
            /* 评论模块 */
            /* 删除评论的话，是把选中的评论(选它的comId)全存在一个数组，然后删除 */
            let cInfEls = $('.com-mag-list').find('a'),
                delCom = $('.del-com');
            cInfEls.click(function() {
                changeBg(this);
            });
            delCom.click(function(){
                let elArr = pitchOn(cInfEls),
                    comIdArr = [];
                elArr.forEach(function(value,index,arr){
                    let comId = $(cInfEls[value]).attr('comid');
                    comIdArr.push(comId);
                });
                /*  */
                $.post('deleteComment',{
                    commentIds: comIdArr.join('%')
                }, function(res) {
                    if(res.msg == 'success') {
                        $('.com-mag-list').empty();
                        showComMsg(1);
                    } else {
                    }
                });
            });
                /* 分页操作 */
            $('.del-com-next').click(function(){
                let prePage = +localStorage.getItem('comMagId');
                    let nowPage = prePage + 1;
                    localStorage.setItem('comMagId',nowPage);
                    showComMsg(nowPage);
            });
            $('.del-com-up').click(function(){
                let prePage = +localStorage.getItem('comMagId');
                if (prePage > 1) {
                    let nowPage = prePage - 1;
                    localStorage.setItem('comMagId',nowPage);
                    showComMsg(nowPage);
                } 
            });
            /* //评论模块 */
        });
    }
    /* 显示评论管理模块的信息 */




function getVdoCom(id,page) {
    $('.the-all-com').empty();
    console.log('进入获取评论这里了没有');
    /* 这里做个分页,这个一个页面7个 */
    $.post('getCommentByVideoId', {
        videoId: id,
        pageNum: page
    },function(res) {
        console.log('获取的服务器返回是：',res);
        if(res.msg == 'success') {
            let allCom = res.data.pageInfo.list,
                len = allCom.length,
                theAllCom = $('.the-all-com');

            for (let i=0;i<len;i++) {

            let userName = allCom[i].userName,
            content = allCom[i].content,
            publishTime = getLocalTime(allCom[i].publishTime);

            let str =   `<div class="media">
                            <h5>` + userName + `</h5>
                            <div class="media-body">
                                <p>` + content + `</p>
                            </div>
                            <span class="glyphicon glyphicon-remove delete-com"></span>
                            <span class="publish-time">` + publishTime + `</span>
                        </div>`;
            theAllCom.append(str);
            }
        } else {
        }
    });
}




    /* 显示主体模块的信息 */
    function showHome() {
        $.post('getAllVideoInfo',{},function(res){
            let allHotVdo = res.data.Video,
                len = allHotVdo.length,
                hotVdo = $('.hot-vdo');
            $('.hot-vdo').empty();
            $('.vdo-title').text('HOT Videos');
            for (let i=0;i<len;i++) {
                let vdoUrl = allHotVdo[i].videoUrl,
                    vdoPosterUrl = allHotVdo[i].videoPosterUrl,
                    vdoViewCount = allHotVdo[i].videoViewCount,
                    vdoTitle = allHotVdo[i].videoTitle,
                    /*vdoTime = allHotVdo[i].videoUpTime,*/
                    vdoUserName = allHotVdo[i].videoUserName,
                    vdoId = allHotVdo[i].videoId;
                
                let str = `<div class="hot-vdo-box col-md-4 resent-grid recommended-grid slider-top-grids">
                    <div class="resent-grid-img recommended-grid-img">
                        <a vdoid="` + vdoId + `" vdourl="` + vdoUrl + `" href="#"><img width="400px" height="300px" src="` + vdoPosterUrl + `" alt="" /></a>
                        <div class="time">
                            <p></p>
                        </div>
                        <div class="clck">
                            <span class="" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div class="resent-grid-info recommended-grid-info">
                        <h3><a vdoid="` + vdoId + `" vdourl="` + vdoUrl + `"  href="#" class="title title-info">` + vdoTitle + `</a></h3>
                        <ul>
                            <li><p class="author author-info"><a vdoid="` + vdoId + `" vdourl="` + vdoUrl + `"  href="#" class="author">` + vdoUserName + `</a></p></li>
                            <li class="right-list"><p class="views views-info">` + vdoViewCount + ` views</p></li>
                        </ul>
                    </div>  
                </div>`;
                hotVdo.append(str);
            }

            /* 主体模块,主评论模块 */
            let urlEl = $('.hot-vdo-box a');
            /* 跳转与信息操作 */
            urlEl.click(function() {
                let url = $(this).attr('vdourl'),
                    vdoId = $(this).attr('vdoid'),
                    title = $(this).parent().parent().find('a[class^=title]').text();
                /* 显示主评论模块 */
                $($('.sec')[0]).css("display","none");
                $('.comment-box').css("display","block");
                localStorage.setItem('vdoId',vdoId);
                console.log('获取的vdoId是： ', vdoId);
                getVdoCom(vdoId,1);

                $.post('addVideoViewCount',{
                    videoId: vdoId
                },function(res){
                   if(res.msg == 'success') {
                   } else {
                   }
                });

                /* 改变评论模块信息 */
                let video = $('.my-vdo'),
                    mytitle = $('.my-title');
                video.attr('src',url);
                video.attr('vdoid',vdoId);
                mytitle.text(title);
            });
            let subCom = $('.sub-com'),
                uVdoCom = $('.user-vdo-com');
console.log('进入发表评论之前');

           /* subCom.click(subComFun);*/

/* 函数去抖 */
function debounce(fn){
  let timer = null
  return function(...args){
    if(timer != null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, 300)
  }
}


subCom[0].onclick = debounce(function() {
                console.log('进入发表评论');
                console.log('输入的信息是');
                console.log($('.user-vdo-com').val());
                console.log('输入的信息是2223333333333');
                if (+localStorage.getItem('userId') == "-1") {
                    alert('请先登录，再发表评论');
                    $('.user-vdo-com').val('');
                } else {
                    $.post('subCommit',{
                        videoId: $('.my-vdo').attr('vdoid'),
                     /*   publishTime: new Date(),*/
                        content: $('.user-vdo-com').val(),
                        userId: localStorage.getItem('userId'),
                        userName: localStorage.getItem('stoUserName')
                    },function(res) {
                        console.log('数据库返回的消息是：',res);
                        if(res.msg == 'success') {
                            $('.user-vdo-com').val('');
                            getVdoCom(+localStorage.getItem('vdoId'),1);
                        } else {
                        }
                    });
                }
            });
/* 函数去抖 */


            $('.cli-next').click(function(){
                let prePage = +localStorage.getItem('vdoComId');
                    let nowPage = prePage + 1;
                    localStorage.setItem('vdoComId',nowPage);
                    let vdoId = +localStorage.getItem('vdoId');
                    getVdoCom(vdoId,nowPage);
            });
            $('.cli-up').click(function(){
                let prePage = +localStorage.getItem('vdoComId');
                if (prePage > 1) {
                    let nowPage = prePage - 1;
                    localStorage.setItem('vdoComId',nowPage);
                    let vdoId = +localStorage.getItem('vdoId');
                    getVdoCom(vdoId,nowPage);
                } 
            });
            /* //主体模块,主评论模块 */
        });
    }
    showHome();
    /* 显示主体模块的信息 */




 

    /* 搜索模块 */
    let subSearch = $('.sub-search'),
        searchContent = $('.search-content');
    subSearch.click(function() {
        $.post('searchVideos',{
            videoName: searchContent.val()
        },function(res){
            if (res.msg == 'success') {

            let allHotVdo = res.data.Video,
                len = allHotVdo.length,
                hotVdo = $('.hot-vdo');
            $('.hot-vdo').empty();
            $('.vdo-title').text('Search Result');
            for (let i=0;i<len;i++) {
                let vdoUrl = allHotVdo[i].videoUrl,
                    vdoPosterUrl = allHotVdo[i].videoPosterUrl,
                    vdoViewCount = allHotVdo[i].videoViewCount,
                    vdoTitle = allHotVdo[i].videoTitle,
                    /*vdoTime = allHotVdo[i].vdoTime,*/
                    vdoUserName = allHotVdo[i].videoUserName,
                    vdoId = allHotVdo[i].videoId;
                
                let str = `<div class="hot-vdo-box col-md-4 resent-grid recommended-grid slider-top-grids">
                    <div class="resent-grid-img recommended-grid-img">
                        <a vdoid="` + vdoId + `" vdourl="` + vdoUrl + `" href="#"><img width="400px" height="300px" src="` + vdoPosterUrl + `" alt="" /></a>
                        <div class="time">
                            <p></p>
                        </div>
                        <div class="clck">
                            <span class="" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div class="resent-grid-info recommended-grid-info">
                        <h3><a vdoid="` + vdoId + `" vdourl="` + vdoUrl + `"  href="#" class="title title-info">` + vdoTitle + `</a></h3>
                        <ul>
                            <li><p class="author author-info"><a vdoid="` + vdoId + `" vdourl="` + vdoUrl + `"  href="#" class="author">` + vdoUserName + `</a></p></li>
                            <li class="right-list"><p class="views views-info">` + vdoViewCount + ` views</p></li>
                        </ul>
                    </div>  
                </div>`;
                hotVdo.append(str);
            }
        } else {
        }
        });
    });
    /* //搜索模块 */

    

});
