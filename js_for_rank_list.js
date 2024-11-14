document.addEventListener("DOMContentLoaded", function () {
    let vote_info = JSON.parse(localStorage.getItem("votes"));
    console.log(vote_info);
    let voteArray = Object.entries(vote_info);
    voteArray.sort((a, b) => b[1].count - a[1].count);


    
    voteArray.forEach(([id, value], index) => {
        generate(id, value, index + 1);  
    });

    localStorage.setItem("votes", JSON.stringify(vote_info));
});

  function generate(id, value, rank) {
    const voteDiv = document.createElement('div');
    voteDiv.classList.add('vtb_rank');
    const imagePath = `picture_base/${id}.jpg`;
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
    
    document.querySelector('.ranking_container').appendChild(voteDiv);
}