document.addEventListener("DOMContentLoaded", function () {
    // 从 localStorage 中获取投票信息
    let vote_info = JSON.parse(localStorage.getItem("votes"));
    console.log(vote_info);
    let voteArray = Object.entries(vote_info);

    // 按照 count 降序排序
    voteArray.sort((a, b) => b[1].count - a[1].count);


    // 遍历排序后的数组，生成每个投票项
    voteArray.forEach(([id, value], index) => {
        generate(id, value, index + 1);  // 传递排名信息，从 1 开始
    });

    // 再次存储数据到 localStorage（可选步骤，根据具体需求）
    localStorage.setItem("votes", JSON.stringify(vote_info));
});

  function generate(id, value, rank) {
    // 创建一个包含投票记录的 div
    const voteDiv = document.createElement('div');
    voteDiv.classList.add('vtb_rank');
    const imagePath = `picture_base/${id}.jpg`;

    // 设置 voteDiv 的内容，添加排名信息
    voteDiv.innerHTML = `
        <div class="vtb_rank">
            <img src="${imagePath}"  class="vtuber_picture">
            <div class="container_for_text">
                <span class="name">昵称: ${value.vtb_name}</span>
                <span class="votes">得票数: ${value.count}</span>
            </div>
                <span class="rank">排名: ${rank}</span>
        </div>
    `;
    
    // 使用类选择器选择 .ranking_container 并追加生成的元素
    document.querySelector('.ranking_container').appendChild(voteDiv);
}