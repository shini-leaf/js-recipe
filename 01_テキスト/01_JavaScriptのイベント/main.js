const button = document.getElementById("button")

button.onclick = function () {
  alert("クリックしたね")
}
// 関数を登録
// eslint-disable-next-line no-undef

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e)
}

inputText.oninput = logValue
inputDate.oninput = logValue
