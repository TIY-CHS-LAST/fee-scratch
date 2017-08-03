console.log(fighters);

function createFighterListItem (fighterObj) {
  // first_name
  // last_name
  // profile_image
  // wins
  // losses
  const tmplStr = `
    <li>
     <div><img src="${fighterObj.profile_image}" /></div>
     <div>
       <h3>${fighterObj.first_name} ${fighterObj.last_name}</h3>
       <p>Wins: ${fighterObj.wins} Losses: ${fighterObj.losses}</p>
     </div>
    </li>
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
