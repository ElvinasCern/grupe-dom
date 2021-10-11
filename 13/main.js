const homeBoardDOM = document.querySelector('.rezultatas[data-komanda="namu"]');
const awayBoardDOM = document.querySelector('.rezultatas[data-komanda="sveciu"]');
const homeScoreDOM = document.querySelectorAll('.komanda[data-komanda="namu"] button');
const awayScoreDOM = document.querySelectorAll('.komanda[data-komanda="sveciu"] button');
function updateScore(score, dom) {
  dom.innerText = +dom.innerText + score;
}
for (let i = 0; i < 3; i++) {
  homeScoreDOM[i].addEventListener("click", () => {
    updateScore(i + 1, homeBoardDOM);
  });
  awayScoreDOM[i].addEventListener("click", () => {
    updateScore(i + 1, awayBoardDOM);
  });
}
// for (const button of homeScoreDOM) {
//   button.addEventListener("click", () => {
//     updateScore(+button.dataset.points, homeBoardDOM);
//   });
// }
// for (const button of awayScoreDOM) {
//   button.addEventListener("click", () => {
//     updateScore(+button.dataset.points, awayBoardDOM);
//   });
// }