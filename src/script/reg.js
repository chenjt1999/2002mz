(function (){
    // 构造函数（类）
    function Tab(tits,cons,index){
        this.tits = tits;
        this.cons = cons;
        this.prevIndex = index;
    }
    // 设置类名的小工具
    Tab.prototype.setClass = function (dom,oClass){
        dom.className = oClass;
    }
    // 绑定事件
    Tab.prototype.bindEvent = function (){
        var _this = this;//保存指针
        for (var i = 0, len = this.tits.length; i < len; i++){
            this.tits[i].index = i;
            this.tits[i].onclick = function (){
                _this.clickHandler(this.index);
            }
        }
    }
    // 点击事件的处理函数
    Tab.prototype.clickHandler = function (index){
        // 清除上次选中元素的类名
        this.setClass(this.tits[this.prevIndex],'');
        this.setClass(this.cons[this.prevIndex],'');
        // 当前选中元素添加类名
        this.setClass(this.tits[index],'active');
        this.setClass(this.cons[index],'show');
        // 更新上次选中元素的下标值
        this.prevIndex = index;
    }
    // 初始化
    Tab.prototype.init = function (){
        this.bindEvent();//绑定事件
        // 设置默认显示项
        this.setClass(this.tits[this.prevIndex],'active');
        this.setClass(this.cons[this.prevIndex],'show');
        return this;
    }
    // 返回当前选中元素的索引
    Tab.prototype.getIndex = function (){
        return this.prevIndex;
    }
    // 工厂函数（作用就是返回一个实例对象）
    function factory(t,c,i){
        return new Tab(t,c,i).init();//返回一个初始化之后的实例对象
    }
    window.$ = factory;//对外公开接口
})();

var tits = document.querySelectorAll('.user-name h3');
var cons = document.querySelectorAll('.user-pass div');

var tab1 = $(tits,cons,0);

// 登录
var add = document.querySelector('.btn');
var username = document.querySelector('.username');
var password = document.querySelector('.password');

add.onclick = function(){
    ajax({
        url:'../lib/user.php',
        type:'get',
        data:{
            type:'login',
            username: username.value,
            password: password.value
        },
        success:function(data){
            console.log(data);
            var json = JSON.parse(data);
            if (json.err == 0){
                alert(json.msg);
            }
            window.location.href="http://localhost:8082/test/2002/dist/html/index.html";
        }
    });
}

