//go to next page by changing css property display
export function nextPage(id, nextId) {
  document.getElementById(`${id}`).style.display = 'none';
  document.getElementById(`${nextId}`).style.display = 'block';
}

//remove container with current user result
export function removeWinDiv() {
  let winDiv = document.getElementById('win-div');
  //get container by id //remove from body
  document.body.removeChild(winDiv);
}
