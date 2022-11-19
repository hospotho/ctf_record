let but1 = document.querySelector('body > div:nth-child(3) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > p:nth-child(2) > input[type=button]:nth-child(1)')
document.querySelector('#bid2').value = '1'
let money = parseInt(document.querySelector("body > div:nth-child(1) > span:nth-child(3) > b").innerHTML.split(' ')[0])
let count = Math.floor((money-1)/3)

for (let i = 0; i < count; i++) {
  but1.click()
  while (document.querySelector('#metumusk').style.display === 'none') {}
  await new Promise(res => setTimeout(res, 0))
  let but2 = document.querySelector('#metumusk > p:nth-child(11) > input[type=button]:nth-child(3)')
  document.querySelector('#gas').value = '3'
  but2.click()
  while (document.querySelector('#metumusk').style.display !== 'none') {}
}
