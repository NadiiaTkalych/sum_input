const inputValue1 = Number(document.getElemetnById('input-1').value),
  inputValue2 = Number(document.getElemetnById('input-2').value),
  inputValue3 = Number(document.getElemetnById('input-3').value),
  inputResult = document.getElemetnById('input-result'),  
  btn = document.getElemetnById('btn');

let result;

const sumInpun = () => {
   result = inputValue1 + inputValue2 + inputValue3
}

btn.addEventListener('click', sumInpun());

inputResult.innerHTML = result;
