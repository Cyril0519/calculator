var expression_real, expression= '', res, count = 0, num1;

dash = document.getElementsByClassName('dash')[0]


btns= document.getElementsByClassName('btn');
for(n in btns){
    (function(m){btns[m].onclick=function(){
        expression +=  btns[m].innerText
        dash.innerText = expression
    };})(n)
}


equal = document.getElementsByClassName('equal')[0]
equal.onclick=function(){
    // 修改表达式
    expression_real = expression.replace(/√/g,'Math.sqrt');  //根号修改
    expression_real = expression_real.replace(/tan/g,'Math.tan') // tan修改
    expression_real = expression_real.replace(/sin/g,'Math.sin') // sin修改
    expression_real = expression_real.replace(/cos/g,'Math.cos') // cos修改
    expression_real = expression_real.replace(/×/g,'*')   // x号修改
    expression_real = expression_real.replace(/÷/g,'/')   // ÷号修改
    expression_real = expression_real.replace(/e/g,'Math.E')   // e修改
    expression_real = expression_real.replace(/Pi/g,'Math.PI')   // Pi修改
    expression_real = expression_real.replace(/mod/g,'%')   // %修改
    // pow计算
    if(expression.indexOf('^') != -1){
        nums = expression.split('^')
        num1 = eval(nums[0])
        num2 = eval(nums[1])
        res = Math.pow(num1,num2)
        console.log(num1,num2)
        dash.innerText = res;
        return 0;
    }
    // log计算
    else if(expression.indexOf('log') != 1){
        nums = expression.split('ln')
    }
    console.log(expression_real)
    try{res = eval(expression_real);}
    catch{res='error'}
    finally{
    dash.innerText = res;}
    expression = res;   
}


// 退格键
backspace = document.getElementById('backspace')
backspace.onclick = function(){
    expression = expression.substring(0, expression.length-1);
    dash.innerText = expression
}
// 清空
clear = document.getElementById('clear')
clear.onclick = function(){
    expression = ''
    dash.innerText = expression
}
