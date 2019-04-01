/*
* index.js
*/



$(function(){
	console.log("in");
    localStorage.setItem('vdoMagId','1');
    localStorage.setItem('userMagId','1');
    localStorage.setItem('comMagId','1');
    localStorage.setItem('vdoComId','1');

    /* 把时间戳转换为本地时间 */
    function getLocalTime(nS) {     
       return new Date(parseInt(nS)).toLocaleString();     
    }

    /* 获取个人信息，然后把信息填入页面,用户密码是存入localstorage里面的 */
    function showPerMsg() {
        $.post('getUserById',{
            userId: +localStorage.getItem('userId')
        }, function(res) {
        let uUserName = $('.u-user-name'),
        uUserEmail = $('.u-user-email'),
        uUserSex = $('.u-user-sex'),
        uUserLoc = $('.u-user-loc'),
        uUserPic = $('.u-user-pic'),
        sex = res.data.User.userSex ? 'man' : 'woman';

        localStorage.setItem('userPassword',res.data.User.userPassword);
        localStorage.setItem('userPhoto',res.data.User.userPhoto);
        
        uUserName.val(res.data.User.userName);
        uUserEmail.val(res.data.User.userEmail);
        uUserSex.val(sex);
        uUserLoc.val(res.data.User.userCity);
        uUserPic.attr('src',res.data.User.userPhoto);
        });
    }
    /* //获取个人信息，然后把信息填入页面 */


    /* 切换背景颜色 */
    function changeBg(el) {
        console.log('进入背景颜色切换');
        let background = $(el).css('background');
        console.log(background);
        if (el.style.background == 'red') {
            $(el).css('background','#fff');
        } else {
            $(el).css('background','red');
        }
    }
    /* //切换背景颜色 */


    /* 显示用户管理模块的信息 */
    function showUserMsg(page) {
        console.log('进入用户管理文件');
        //$('.user-inf-list').empty();
        $.post('getAlluser',{
            pageNum: page
        },function(res){
            let list = res.list,
                len = list.length,
                userList = $('.user-inf-list');
            for (let i=0;i<len;i++) {
                let user = list[i].userName,
                    userId = list[i].userId;
                    /* 根据userid来删 */
               // let str = `<a userid="` + 1 + `" href="#" class="list-group-item">`+ user +`</a>`;
               // userList.append(str);
            }
        });
    }
    /* 显示用户管理模块的信息 */

    /* 显示视频管理模块的信息 */
    function showVdoMsg(page) {
      //  $('.vdo-msg-list').empty();
        $.post('getAllVideoInfo',{
            pageNum: page
        },function(res){
            let list = res.list,
                len = list.length,
                vMsgList = $('.vdo-msg-list');
            for (let i=0;i<len;i++) {
                let vdoTitle = list[i].videoTitle,
                    vdoUrl = list[i].videoUrl,
                    vdoId = list[i].videoId;
                    /* 通过vdourl来删除 */
                let str = `<a vdoId="` + vdoId + `" vdourl="` + vdoUrl + `" href="#" class="list-group-item">`+ vdoTitle +`</a>`;
                vMsgList.append(str);
            }
        });
    }
    /* 显示视频管理模块的信息 */

    /* 显示评论管理模块的信息 */
    function showComMsg(page) {
        $('.com-mag-list').empty();
        $.post('getAllComment',{
            pageNum: page
        },function(res){
            let list = res.list,
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
        });
    }
    /* 显示评论管理模块的信息 */

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
        });
    }
    showHome();
    /* 显示主体模块的信息 */


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
        $($(".left-side-nav li")[1]).addClass('active');
        $(".sec").css("display","none");
        $($(".sec")[1]).css("display","block");
        showPerMsg();
    });
    $('.log-off-btn').click(function() {
        $('.user-name-btn').hide();
        $('.log-off-btn').hide();
        $('.register-btn').show();
        $('.login-btn').show();
        
    });
    /* //登陆、注册、关闭按钮点击 */



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
        if(index == 1) {
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
            
            alert('登录成功');
            $(popUp1).hide();
            $(registerBtn).hide();
            $(loginBtn).hide();
            $('.user-name-btn').text(logUserName.val());
            $('.user-name-btn').show();
            $('.log-off-btn').show();

            /* 管理员功能隐藏 */
            let role = res.data.userRole;
            localStorage.setItem('userRole',);
            if (!role) {
                $('.left-side-nav li:nth-of-type(4)').css('display','none');
                $('.left-side-nav li:nth-of-type(5)').css('display','none');
                $('.left-side-nav li:nth-of-type(6)').css('display','none');
            }
        } else {
            alert('登录失败');
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
        regSex = $('.reg-sex'),
        regLocation = $('.reg-location'),
        registerNow = $('.register-now'),
        isMan = 0;

    /* 判断用户名 */
    regUserName.change(function() {
        $.post('checkUserName', {
            username: regUserName.val()
        }, function(data) {
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
    if (regSex.val() != '男') {
        isMan = 1;
    }
    registerNow.click(function() {
        $.post('register', {
            userName: regUserName.val(),
            userPassword: regUserPas.val(),
            userSex: isMan,
            userEmail: regEmail.val(),
            userCity: regLocation.val()
        }, function(data){
            if (data.msg == 'success') {
                alert('注册成功');
            } else {
                alert('注册失败');
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
        $.post('updateUser', {
            userId: localStorage.getItem('userId'),
            userName: uUserName.val(),
            userPassword: uNewPas.val(),
            userSex: uUserSex.val(),
            userEmail: uUserEmail.val(),
            userCity: uUserLoc.val(),
            userPhoto: localStorage.getItem('userPhoto')
        }, function(res) {
            if (res.msg == 'success') {
                alert('成功修改');
            } else {
                alert('修改失败');
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
        vdoName = $(this).val();
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
                        videoName: key,
                        userId: localStorage.getItem('userId'),
                        userName: localStorage.getItem('stoUserName')
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
                        }
                    });


        
    });
    /* //上传 */
    /* //视频上传模块 */



    /* 用户信息管理模块 */
    /* 删除用户的话，是把选中的视频(选它的userid)全存在一个数组，然后删除 */
    let uInfList = $('.user-inf-list'),
        uInfEls = uInfList.find('a'),
        delUser = $('.del-user');
    console.log('获取的列表是',uInfEls);
    uInfEls.click(function() {
        console.log('进入点击，有反应');
        changeBg(this);
    })
    delUser.click(function(){
        let elArr = pitchOn(uInfEls),
            userIdArr = [];
        elArr.forEach(function(value,index,arr){
            let id = $(uInfEls[value]).attr('userid');
            userIdArr.push(id);
        });
        /* 下面这个userIdArr就是存用户id的数组 */
        $.post('deleteUsers',{
            userIds: userIdArr.join('%')
        }, function(res) {
            if(res.msg == 'success') {
                alert('删除成功');
                uInfList.empty();
                showUserMsg(1);
            } else {
                alert('删除失败');
            }
        });
        console.log(userIdArr);
    });
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

    /* 视频管理模块 */
    /* 删除视频的话，是把选中的用户(选它的url)全存在一个数组，然后删除 */
    let vMsgList = $('.vdo-msg-list'),
        vInfEls = vMsgList.find('a'),
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
        $.post('deleteVideos',{
            videoIds: vdoIdArr.join('%')
        }, function(res) {
            if(res.msg == 'success') {
                alert('删除成功');
                vMsgList.empty();
                showVdoMsg(1);
            } else {
                alert('删除失败');
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


    /* 评论模块 */
    /* 删除评论的话，是把选中的评论(选它的comId)全存在一个数组，然后删除 */
    let cMagList = $('.com-mag-list'),
        cInfEls = cMagList.find('a'),
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
                alert('删除成功');
                cMagList.empty();
                showComMsg(1);
            } else {
                alert('删除失败');
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



function getVdoCom(id,page) {
    $('.the-all-com').empty();
    /* 这里做个分页,这个一个页面7个 */
    $.post('getCommentByVideoId', {
        videoId: id,
        pageNum: page
    },function(res) {
        if(res.msg == 'success') {
            alert('获取评论成功');
            let allCom = res.list,
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
            alert('获取评论失败');
        }
    });
}

    /* 主体模块,主评论模块 */
    let urlEl = $('.hot-vdo-box a');
    /* 跳转与信息操作 */
    console.log('进入跳转之前');

    urlEl.click(function() {
        console.log('进入跳转');
        let url = $(this).attr('vdourl'),
            vdoId = $(this).attr('vdoid'),
            title = $(this).parent().parent().find('a[class^=title]').text();
        /* 显示主评论模块 */
        $($('.sec')[0]).css("display","none");
        $('.comment-box').css("display","block");
        localStorage.setItem('vdoId',vdoId);
        getVdoCom(vdoId,1);

        /* 改变评论模块信息 */
        let video = $('.my-vdo'),
            mytitle = $('.my-title');
        video.attr('src',url);
        video.attr('vdoid',vdoId);
        mytitle.text(title);
    });
    let subCom = $('.sub-com'),
        uVdoCom = $('.user-vdo-com');

    subCom.click(function() {
        $.post('subCommit',{
            videoId: $('.my-vdo').attr('vdoid'),
         /*   publishTime: new Date(),*/
            content: $('.my-title').text(),
            userId: localStorage.getItem('userId'),
            userName: localStorage.getItem('stoUserName')
        },function(res) {
            if(res.msg == 'success') {
                alert('提交成功');
                getVdoCom(+localStorage.getItem('vdoId'),1);
            } else {
                alert('提交失败');
            }
        });
    });
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
            alert('没有找到内容');
        }
        });
    });
    /* //搜索模块 */

    

});
