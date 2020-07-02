var login = document.querySelector('.btn');
var username = document.querySelector('.username');
var password = document.querySelector('.password');
var check = document.querySelector('.checked');

login.onclick = function(){
    if (!username.value || !password.value){
        alert('账号或密码不能为空');
        return false;
    }
    if (check.checked){
       
    } else {
        alert('请先勾选同意服务');
        return false;
    }
    // console.log(111);
    ajax({
        url:'../lib/user.php',
        type:'get',
        data:{            
            type:'add',
            username: username.value,
            password: password.value
        },
        success:function(data){
            console.log(data);
            var json = JSON.parse(data);
            if (json.err == 0){
                alert(json.msg);
            }
        }
    });
}



// username.onblur = function(){
//     isUser();
// }


// password.onblur = function(){
//     isPass();
// }


// function isUser(){
//     // 数字11位
//     var reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
//     if(reg.test(oUser.value)){
//         isRight[0]=1;
//         oUser.nextElementSibling.innerHTML = "√";
//     }else{
//         isRight[0]=0;
//         oUser.nextElementSibling.innerHTML = "×，数字11位";
//     }
// }



// function isPass(){
//     //6-16位数字和字母
//     var reg = /^[\da-zA-Z]{6,16}$/;
//     if(reg.test(oPass.value)){
//         isRight[1]=1;
//         oPass.nextElementSibling.innerHTML = "√";
//     }else{
//         isRight[1]=0;
//         oPass.nextElementSibling.innerHTML = "×，6-16位数字和字母";
//     }
// }