const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const text = memoInput.value
  console.log(text)

  const memo = document.createElement("div")
  memo.className = "memo"
  memo.textContent = text

  memoContainer.append(memo)
  //memoをmemoContainerに追加する

  memoInput.value = ""
}
