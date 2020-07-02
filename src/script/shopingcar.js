class ShoppingCar{
    // 构造函数（方法）
    constructor(boxDom){
        // 属性        
        this.boxDom = boxDom;
    }

    // 方法
    // 添加事件
    addEvent(){       
        // 取出所有的tr标签
        let trs = this.boxDom.firstElementChild.children;
        // 循环的是tr
        for(let i=1;i<trs.length-1;i++){
            // 有加减号的那个单元格
            let td = trs[i].lastElementChild.previousElementSibling;
            let reduceBtn = td.firstElementChild;
            //1)、给减号按钮绑定事件
            reduceBtn.onclick = (event)=>{
                let e = event || window.event;
                // 传入参数（被点击减法按钮）
                this.reduce(e.target);//reduce函数是类的，前面的this肯定不能事件源。如果不用箭头函数，这个this就是事件源。
            }
             //2)、加号按钮绑定事件
             let addBtn = td.lastElementChild;
            addBtn.onclick = (event)=>{
                let e = event || window.event;
                this.add(e.target);
            }
            //3）、给文本框绑定事件（onblur ，onchange） 

            let inputNum = td.children[1];
            inputNum.onchange = (event)=>{
                let e = event || window.event;
                this.changeCount(e.target);
            }            
        }
    }

    // 文本框直接改变的数量（通过文本框的方式改变数量）
    changeCount(inputNum){
        // 1、计算数量（直接从文本框获取）
        let count = parseFloat(inputNum.value);

        
        // 根据数量计算金额和合计
        this.calculateMoney(inputNum,count);        
    }

    // 减法 （通过点击加法按钮数量累加一）
    reduce(btn){
        //1、获取文本框
        let input = btn.parentNode.children[1];
        //2、计算数量（减一）
        let count = parseFloat(input.value);
        count--;
        if(count<0){
            count = 0;
        }
        input.value = count;

        this.calculateMoney(btn,count);

    }

    // 加法（通过点击减法按钮数量减一）
    add(btn){
        // 1、获取文本框值
        let input = btn.parentNode.children[1];
        // 2、加一
        let count = parseFloat(input.value);
        count++;        
        input.value = count;

        this.calculateMoney(btn,count);
    }
  
    // 根据数量 计算金额和合计
    calculateMoney(domObj,count){
        // 2、金额：(单价*数量)
        let price = parseFloat(domObj.parentNode.previousElementSibling.innerHTML);
        let money = price*count;
        domObj.parentNode.nextElementSibling.innerHTML = money;

        // 3、合计
        let trs = this.boxDom.firstElementChild.children;
        let totalMoney = 0;
        for(let i=1;i<trs.length-1;i++){
            totalMoney += parseFloat(trs[i].lastElementChild.innerHTML);
        }
        // 最后一行的单元格
        let tdTotalMoney = this.boxDom.firstElementChild.lastElementChild.firstElementChild;
        tdTotalMoney.innerHTML ="合计："+ totalMoney;
    }
    
}