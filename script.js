let votes = JSON.parse(localStorage.getItem("votes")) || {
    "tiandou": { count: 0, times: [] ,vtb_name:"恬豆发芽了",vtb_des:"咦？这里有颗豆豆好像快要发芽了。"},
    "shengge": { count: 0, times: [] ,vtb_name:"帅比笙歌超可爱ovo",vtb_des:"psplive所属 国风温柔美少女歌势"},
    "falida": { count: 0, times: [] ,vtb_name:"法里达",vtb_des:"生活索然无味 尸体cos人类"},
    "shuoshuo": { count: 0, times: [] ,vtb_name:"说说Crystal",vtb_des:"原创演唱音乐人/ 个人势Vup"},
    "xiaorou": { count: 0, times: [] ,vtb_name:"络宝",vtb_des:"天选R&B人 陶喆方大同丁世光单依纯"},
    "luobao": { count: 0, times: [] ,vtb_name:"心宜不是心仪",vtb_des:"到我出场了吗！所有目光看向我！"},
    "sinuosnow": { count: 0, times: [] ,vtb_name:"小柔Channel",vtb_des:"虚研社二期生小柔（ρ），自主型柔情三语歌唱AI."},
    "xinyi": { count: 0, times: [] ,vtb_name:"思诺snow",vtb_des:"一首歌征服不了你，那就两首。"},
};
localStorage.setItem("votes",JSON.stringify(votes));
update_votes();

document.querySelectorAll(".vote_btn").forEach(button => {
    button.addEventListener("click", () => {
        const button_id = button.id;  // 获取按钮的 id
        const time = new Date().toLocaleString();  // 获取当前时间并格式化
        vote(button_id,time);  // 调用 vote 函数，传递按钮 id 和时间
        
    });
});

function vote(button_id, time) {
    // 获取并更新投票记录
    let votes = JSON.parse(localStorage.getItem("votes"));


    
    // 更新对应 Vtuber 的投票次数和投票时间
    votes[button_id].count++;
    votes[button_id].times.push(time);
    console.log(votes[button_id].count);
    console.log(votes[button_id].times);

    // 将更新后的数据存储回 localStorage
    localStorage.setItem("votes", JSON.stringify(votes));

    // 更新页面上的投票数显示
    update_votes();
}


function update_votes(){
    // let change_id=`${id}'s_votes`;
    let votes=JSON.parse(localStorage.getItem("votes"));
    for (let id in votes) {
        let element = document.getElementById(`${id}'s_votes`);
        if (element) {
            element.innerHTML = `votes: ${votes[id].count}`;
        }
    }
    localStorage.setItem("votes",JSON.stringify(votes));
}

function reset_votes(){
    localStorage.setItem("votes",JSON.stringify({
        "tiandou": { count: 0, times: [] ,vtb_name:"恬豆发芽了",vtb_des:"咦？这里有颗豆豆好像快要发芽了。"},
        "shengge": { count: 0, times: [] ,vtb_name:"帅比笙歌超可爱ovo",vtb_des:"psplive所属 国风温柔美少女歌势"},
        "falida": { count: 0, times: [] ,vtb_name:"法里达",vtb_des:"生活索然无味 尸体cos人类"},
        "shuoshuo": { count: 0, times: [] ,vtb_name:"说说Crystal",vtb_des:"原创演唱音乐人/ 个人势Vup"},
        "xiaorou": { count: 0, times: [] ,vtb_name:"络宝",vtb_des:"天选R&B人 陶喆方大同丁世光单依纯"},
        "luobao": { count: 0, times: [] ,vtb_name:"心宜不是心仪",vtb_des:"到我出场了吗！所有目光看向我！"},
        "sinuosnow": { count: 0, times: [] ,vtb_name:"小柔Channel",vtb_des:"虚研社二期生小柔（ρ），自主型柔情三语歌唱AI."},
        "xinyi": { count: 0, times: [] ,vtb_name:"思诺snow",vtb_des:"一首歌征服不了你，那就两首。"},
    }));
    update_votes();
}


document.getElementById("reset_btn").addEventListener("click",reset_votes);

document.getElementById("console_btn").addEventListener("click",()=>{
    let votes=JSON.parse(localStorage.getItem("votes"));
    console.log(votes);
    localStorage.setItem("votes",JSON.stringify(votes));
})
