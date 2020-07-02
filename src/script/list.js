$(function(){
// 导航栏
$.ajax({
    url:'../lib/index-shopping02.json',
    type:'get',
    dataType:'json',
    success: function(json){
        // console.log(json);
        $.each(json,function(index,item){
            // console.log(item);
            var goodsDom = `
            <li>
            <a href="javascript:;">
            <img src="${item.imgurl}" alt="">
            ${item.title}
            <p>￥${item.price}</p>
            </a>
            </li>
            `;
            $('.nav-shopping-1').append(goodsDom);
        })
    }
});


//列表
$.ajax({
    url:'../lib/index-shopping03.json',
    type:'get',
    dataType:'json',
    success: function(json){
        // console.log(json);
        $.each(json,function(index,item){
            // console.log(item);
            var goodsDom = `
            <li class="Shop">
                <a href="javaseript:;">
                    <img src="${item.imgurl}" alt="">
                    <ul></ul>
                    <h3>${item.title}</h3>
                    <p class="item-c">${item.pBox2}</p>
                    <p class="item-p">
                        <em>￥</em>
                        <span class="item-s">${item.price}</span>
                    </p>
                </a>
                <div class="shopCar">
                    <div code="${item.code}"><span class="iconfont">&#xe63b;</span></div>
                </div>
            </li>
            `;
            $('.main-shopping-01').append(goodsDom);
        })
    }
});

// 加入购物车
$('.main-shopping-01').on('click','.shopCar div',function (){
   
    if (localStorage.getItem('goods')) {
        var goodsArr = JSON.parse( localStorage.getItem('goods') );
    } else {
        var goodsArr = [];
    }
    // 获取当前点击商品的商品编码
    var code = $(this).attr('code');
    console.log(code);
    
    
    // 记录是否加入过购物车
    var hasCode = false;

    // 遍历数组，判断是否已加入过购物车
    $.each(goodsArr,function (index,item){
        if (item.code === code) {
            item.num++;
            hasCode = true;
        }
    })

    if (!hasCode) {
        goodsArr.push({"code":code,"num":1});
    }

    var strArr = JSON.stringify(goodsArr);
    localStorage.setItem('goods',strArr);

    alert('加入购物车成功');
})
})