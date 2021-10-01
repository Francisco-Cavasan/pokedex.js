function createCard(name,link,health,attack,defense){
    return `<div class="card">
<div class="ds-top"></div>
<div class="avatar-holder">
  <img src="${link}" alt="">
</div>
<div class="name">
  <a href="" target="_blank">${name}</a>
</div>
<div class="ds-skill">
  <h6>Stats <i class="fa fa-code" aria-hidden="true"></i></h6>
  <div class="skill html">
    <h6><i class="fab fa-html5"></i>Health</h6>
    <div class="bar bar-health">
    <label>${health}</label>
      <progress value="${Math.floor((health/100) * 100)}" max="255"></progress>
    </div>
  </div>
  <div class="skill css">
    <h6><i class="fab fa-css3-alt"></i> Attack </h6>
    <div class="bar bar-attack">
    <label>${attack}</label>
    <progress value="${Math.floor((attack/100) * 100)}" max="255"></progress>
    </div>
  </div>
  <div class="skill javascript">
    <h6><i class="fab fa-js"></i> Defense </h6>
    <div class="bar bar-defense">
    <label>${defense}</label>
    <progress value="${Math.floor((defense/100) * 100)}" max="255"></progress>
    </div>
  </div>
</div>
</div>`
}

export default createCard
