const inputValue1 = document.getElementById('input-1'),
   inputValue2 = document.getElementById('input-2'),
   inputValue3 = document.getElementById('input-3'),
   inputResult = document.getElementById('input-result'),  
   btn = document.getElementById('btn');

const strToNum = str => str.value ? parseInt(str.value) : 0

btn.addEventListener('click', () => {
   inputResult.value = strToNum(inputValue1) + strToNum(inputValue2) + strToNum(inputValue3)
});

// const inputValue1 = Number(document.getElemetnById('input-1').value),
//   inputValue2 = Number(document.getElemetnById('input-2').value),
//   inputValue3 = Number(document.getElemetnById('input-3').value),
//   inputResult = document.getElemetnById('input-result'),  
//   btn = document.getElemetnById('btn');

// let result;

// const sumInpun = () => {
//    result = inputValue1 + inputValue2 + inputValue3
// }

// btn.addEventListener('click', sumInpun());

// inputResult.innerHTML = result;
// // или это
// //inputResult.innerHTML = sumInpun();
