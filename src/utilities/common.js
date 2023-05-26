export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}


function timeLines() {
  const timeLine = document.querySelector(".box-timeline");
  const btnTimeLine = document.querySelector(".open-timeline");
  const removeTimeLine = document.querySelector(".remove-timeLine");
  btnTimeLine.addEventListener("click", function () {
    timeLine.classList.add("left-0");
  });
  removeTimeLine.addEventListener("click", function () {
    timeLine.classList.remove("left-0");
  });
}