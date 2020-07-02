var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});

// var li1 = document.getElementsByClassName('li_01');
// var header = document.getElementsByClassName('header-bcg');
// console.log(li1);
// console.log(header);

// li1.onmouseover = function(){
//     console.log(111);
//     // header.innerHTML= `background-color: #fff`;
//     header.display='block';
// }


$(function(){
    // 导航栏
    $.ajax({
        url:'../lib/index-shopping02.json',
        type:'get',
        dataType:'json',
        success: function(json){
            console.log(json);
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

    // 轮播图下
    $.ajax({
        url:'../lib/index-shopping.json',
        type:'get',
        dataType:'json',
        success: function(json){
            console.log(json);
            $.each(json,function(index,item){
                // console.log(item);
                var goodsDom = `
                <li>
                    <a href="javaseript:;">
                        <img src="${item.imgurl}" alt="">
                        <em>${item.title}</em>
                        <p>${item.Pwirte}</p>
                    </a>
                </li>
                `;
                $('.goodshop').append(goodsDom);
            })
        }
    });

    // 列表
    $.ajax({
        url:'../lib/index-shopping02.json',
        type:'get',
        dataType:'json',
        success: function(json){
            console.log(json);
            console.log(json[0].imgurl);
            
            var prev = `<li class="li_phone1">
            <a href="javascript:;">
                <img src="${json[0].imgurl}" alt="">
                <span class="box-iono">
                    <p class="box-1">${json[0].title}</p>
                    <p class="box-2">${json[0].pBox2}</p>
                    <p class="box-3"><i>￥</i>${json[0].price}</p>
                </span>
                <span class="box-sign">分期</span>
            </a>
        </li>
        <li class="li_phone2">
            <a href="javascript:;">
                <img src="${json[1].imgurl}" alt="">
                <span class="box-iono">
                    <p class="box-1">${json[1].title}</p>
                    <p class="box-2">${json[1].pBox2}</p>
                    <p class="box-3"><i>￥</i>${json[1].price}</p>
                </span>
                <span class="box-sign">分期</span>
            </a>
        </li>
        <li class="li_phone3">
            <a href="javascript:;">
                <img src="${json[2].imgurl}" alt="">
                <span class="box-iofo">
                    <p class="box-phone1">${json[2].title}</p>
                    <p class="box-phone2">${json[2].pBox2}</p>
                    <span class="box-phone3">
                        <i>￥</i>
                        ${json[2].price}
                    </span>
                </span>
            </a>
        </li>
        <li class="li_phone4">
            <a href="javascript:;">
                <img src="${json[3].imgurl}" alt="">
                <span class="box-iofo">
                    <p class="box-phone1">${json[3].title}</p>
                    <p class="box-phone2">${json[3].pBox2}</p>
                    <span class="box-phone3">
                        <i>￥</i>
                        ${json[3].price}
                    </span>
                </span>
            </a>
        </li>
        <li class="li_phone5">
            <a href="javascript:;">
                <img src="${json[4].imgurl}" alt="">
                <span class="box-iofo">
                    <p class="box-phone1">${json[4].title}</p>
                    <p class="box-phone2">${json[4].pBox2}</p>
                    <span class="box-phone3">
                        <i>￥</i>
                        ${json[4].price}
                    </span>
                </span>
            </a>
        </li>
        <li class="li_phone6">
            <a href="javascript:;">
                <img src="${json[5].imgurl}" alt="">
                <span class="box-iofo">
                    <p class="box-phone1">${json[5].title}</p>
                    <p class="box-phone2">${json[5].pBox2}</p>
                    <span class="box-phone3">
                        <i>￥</i>
                        ${json[5].price}
                    </span>
                </span>
            </a>
        </li>`;
        $('.goodshopping-2').append(prev);
        }
    });
})