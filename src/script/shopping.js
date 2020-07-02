$(function (){
    // 判断购物车是否有数据
    if (localStorage.getItem('goods')){
        // 本地存储中购物车的数据
        var goodsData = JSON.parse(localStorage.getItem('goods'));

        // 根据商品code获取数据
        $.ajax({
            url: '../lib/index-shopping03.json',
            type: 'get',
            dataType: 'json',
            success: function (json){
                var prev =
                           `<tr>
                                <td width="100px">
                                    <input type="checkbox">&nbsp;全选
                                </td>
                                <td width="600px">商品详情</td>
                                <td>单价（元）</td>
                                <td>数量</td>
                                <td>小计</td>
                                <td>编辑</td>
                            </tr>`;
                        $('.table').append(prev);
                $.each(goodsData,function (index,item){
                    $.each(json,function (i,obj){
                        if (obj.code == item.code){                     
                            var goodsDom = `
                            <tr class="tr-1">
                                <td>
                                    <input type="checkbox">
                                </td>
                                <td>
                                <img src="${obj.imgurl}" alt="">
                                <div class="img-dd">
                                    <h3>${obj.title}</h3>
                                    <p class="item-c">${obj.pBox2}</p>
                                </div>
                                </td>
                                <td>￥${obj.price}</td>
                                <td>
                                    <button type="button" class="btn reduceBtn btn-default">+</button>
                                    <span>${item.num}</span>
                                    <button type="button" class="btn addBtn btn-default">-</button>
                                </td>
                                <td>￥${obj.price}</td>
                                <td><b code="${obj.code}">删除</b></td>
                            </tr>
                            `;
                            $('.table').append(goodsDom);
                        }
                    })
                })
                var pwert = `
                <tr>
                    <td colspan="6" style="text-align: center" >
                        总金额：<span>0</span>
                    </td>
                </tr>
                `;
                $('.table').append(pwert);
            }
        });

        // 删除购物车商品
        $('.table').on('click','td b',function (){
            $(this).parent().parent().remove();//删除对应的节点
            // [{"code":"abc1","num":2},{"code":"abc3","num":1},{"code":"abc4","num":1},{"code":"abc7","num":3}]
            var code = $(this).attr('code');// 'abc3'
            console.log(code);
            
            // pop unshift splice(x,1)
            $.each(goodsData,function (index,item){
                // console.log(item);
                if (item.code == code) {
                    goodsData.splice(index,1);//删除本地存储中的数据
                    return false;
                }
            })
            if (goodsData.length > 0) {
                // 更新本地存储中的数据
                localStorage.setItem('goods',JSON.stringify(goodsData));
            } else {
                localStorage.clear();
                var noData = '<li style="line-height:80px;text-align:center;">购物车暂无数据</li>';
                $('.table').append(noData);
            }
        })

    } else{
        var noData = '<li style="line-height:80px;text-align:center;">购物车暂无数据</li>';
        $('.table').append(noData);
    }
})



// ajax({
//     url:'../lib/index-shopping03.json',
    
// })