//获取节点
let artEle = document.querySelector("article");
let secEle = document.getElementsByTagName("section")[0];
 
//创建数组
let arr = [
    { name: "Анонимный", time: "2023-01-01", content: "Сегодня пятница, завтра суббота!" },
    { name: "Анонимный", time: "2023-02-01", content: "С Праздником середины осени!" },
    { name: "Анонимный", time: "2023-03-01", content: "Завтра не занятия!  Шуай - куй!" },
    { name: "Анонимный", time: "2023-04-01", content: "Сегодня мне приснился хороший сон" },
]
 
//将数据渲染到页面上
function render() {
    let str = "";
    arr.forEach((item, index) => {
        str += `
        <div>
           <p>
              <span>${item.name}</span>
              <span>${item.time}</span>
           </p>
           <p>
              <span>${item.content}</span>
              <span data-index="${index}">删除</span>
           </p>
        </div>
        `;
    });
    secEle.innerHTML = str;
}
 
//给祖先元素article绑定一个事件监听器（事件代理）
artEle.addEventListener("click", function (e) {
    let index = e.target.dataset.index - 0;
    if (e.target.value == "Сообщение") {
        let textAreaEle = document.getElementsByTagName("textarea")[0];
 
        //获取本地时间
        let date = new Date();
        let localTime = date.toLocaleString();//年月日、时分秒同时获取
        //将原本的/ 换成-
        //replace该方法主要用于将字符串中符合匹配条件的字串替换成其他的字符串，
        //返回替换后的字符串，且原字符串不变。
        let gang = localTime.replace(/\//g, "-");
        //将用户输入的内容容作为对象存进数组
        arr.push(
            { name: "Анонимный", time: gang, content: textAreaEle.value }
        )
        //清空输入框，方便下次输入
        textAreaEle.value = "";
        //再次渲染
        render();
    }
    if (e.target.innerHTML == "删除") {
        arr.splice(index, 1);
        render();
    }
})
render();