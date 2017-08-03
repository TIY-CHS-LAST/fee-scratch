console.log(fighters);

function createFighterListItem (fighterObj) {
  // first_name
  // last_name
  // profile_image
  // wins
  // losses
  const tmplStr = `
    <section class="fighter">
      <div class="division">${fighterObj.weight_class}</div>
      <img src="${fighterObj.profile_image}" alt="${fighterObj.first_name} ${fighterObj.last_name}">
      <p class="name">${fighterObj.first_name} ${fighterObj.last_name}</p>
      <p class="record">${fighterObj.wins}-${fighterObj.losses}-${fighterObj.draws} ( W-L-D )</p>
      <button>More</button>
    </section>
  `
  return tmplStr;
}

let allHTML = "";

fighters.forEach(function (item, idx, arr) {
  allHTML += createFighterListItem(item)
})

// let j = 0
// while (j < 100) {
//   allHTML += createFighterListItem(fighters[j])
//   j++
// }




const fighterDOM = document.querySelectorAll('.fighters')[0]
fighterDOM.innerHTML = allHTML;
