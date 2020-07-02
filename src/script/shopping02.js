
$('.table').on('click','tr',function() { 
    $("table :checkbox:eq(0)").check($("table :checkbox:gt(0)"));
    
console.log(111);

    
    $(":checkbox").click(function(){
        totalMoney();
    });

    $(".addBtn").click(function(){
        // 数量
        let count = $(this).prev().html();
        count++;
        $(this).prev().html(count);
        // 单价
        let price = $(this).parent().prev().html();
        // 计算金额
        let money = price*count;
        $(this).parent().next().html(money);

        // 总金额
        totalMoney();
    });

    
    $(".reduceBtn").click(function(){
        // 数量
        let count = $(this).next().html();
        count--;
        if(count<1){
            count=0;
        }
        $(this).next().html(count);
        // 单价
        let price = $(this).parent().prev().html();
        // 计算金额
        let money = price*count;
        console.log(money);
        
        $(this).parent().next().html(money);

        // 同时改变当前行的复选框的状态
        if(count==0){
            $(this).parent().parent().find(":checkbox").prop("checked",false);
            // $(this).parent().parent().remove();
        }

        // 总金额
        totalMoney();
    });

    $(".delBtn").click(function(){
        if(confirm("您要删除吗？")){
            $(this).parent().parent().remove();
            totalMoney();
        }
    });
})


// $(function(){   

// })
// 感觉用户体验不怎么好，
// 其实应该点击 + 或者 - 的时候或者点击选框的弟弟们任何一个时就触发选框的事件，
// - 到 0 的时候就不选中选框了

// 计算总金额
function totalMoney(){
    // 
    let money =0;
    let $tr = $("table tr:gt(0)").not("table tr:last");
    $tr.each(function(){
        // 复选框是不是选中了
        if($(this).find(":checkbox").prop("checked")){
            money += parseFloat($(this).find("td").eq(5).html());
        }
    });
    $("table tr:last").find("span").html(money);    
}
