document.addEventListener("DOMContentLoaded", function () {
    let vote_info = JSON.parse(localStorage.getItem("votes"));

    if (vote_info && typeof vote_info === 'object') {
        for (let id in vote_info) {
            if (Array.isArray(vote_info[id].times) && vote_info[id].times.length > 0) {
                vote_info[id].times.forEach(time => {
                    generate(id, time);
                });
                    localStorage.setItem("votes", JSON.stringify(vote_info));
            }
        }
    }
});


function generate(id, time) {
    // 创建一个包含投票记录的 div
    let vote_info = JSON.parse(localStorage.getItem("votes"));
    console.log(vote_info);
    // for(let dd in vote_info){
    //     console.log(vote_info[dd].vtb_name);
    // }
    const voteDiv = document.createElement('div');
    voteDiv.classList.add('vtuber_that_you_vote_for');
    const imagePath = `picture_base/${id}.jpg`;

    voteDiv.innerHTML = `
    <div class="vtuber_that_you_vote_for">
        <div class="vtb_container">
            <img src="${imagePath}" alt="${id}" class="vtuber_picture">
            <p class="vtb_name">${vote_info[id].vtb_name}</p>
            <p class="person_intruduction">${vote_info[id].vtb_des}</p>
        </div>
        <div class="vote_man_info">
            <span class="time">时间: ${time}</span>
            <span class="name">用户名: ${time}</span>
        </div>
        <button class="delete_info">删除记录</button>
        </div>
    `;
    document.querySelector('.your_vote_record').appendChild(voteDiv);
    
    voteDiv.querySelector('.delete_info').addEventListener('click', function () {
        voteDiv.remove();  
        
        if (vote_info && Array.isArray(vote_info[id].times)) {
            const index = vote_info[id].times.indexOf(time);
            if (index > -1) {
                vote_info[id].times.splice(index, 1); 
            }

            localStorage.setItem("votes", JSON.stringify(vote_info));
        }
        
    });

}