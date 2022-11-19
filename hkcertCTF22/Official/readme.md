## Writeup

AES-256-GCM is a stream cipher, if the key (initialization vector) is fixed, then the encryption stream will be the same.

From the code comment, two messages were encrypted using same key. The encryption stream will be the same for two ciphers.

```
msg1 xor stream = c1

msg2 xor stream[:-8] = c2
```

As the reverse of any xor operation is itself. We can use c1 and msg1 to recover the encryption stream.

```
c1 =
31b9e00aafcd3f7edbd394dc2cb05e7aca8b6bf01fae094a15979062bf190f4d8b0f32ca1a1a6aace3a6efc64b4f15f64a02d9b128

msg1 = hex("My treasure is buried behind Carl's Jr. on Telegraph.") =
4d792074726561737572652069732062757269656420626568696e64204361726c2773204a722e206f6e2054656c6567726170682e


c1 xor msg1 = stream

stream =
7cc0c07edda85e0daea1f1fc45c37e18bff902957b8e6b2f7dfefe069f5a6e3fe72841ea5068448c8cc8cf922e2370913863a9d906
```

As we have the encryption stream, we can xor c2 and encryption stream to recover the flag.

```
stream[:-8] =
7cc0c07edda85e0daea1f1fc45c37e18bff902957b8e6b2f7dfefe069f5a6e3fe72841ea5068448c8cc8cf922e23709138

c2 =
14aba31bafdc6c3fd5ce979a2ca0172cd3d471a10eed0e5c508d8a32eb3f0a128e5c6c8323452abcf8e5bcf74d5602f445

c2 xor stream[:-8] = m2

m2 =
686b6365727432327b6f6666696369346c2d7334756365732d7374347465642d69742d69732d6e30742d7365637572657d

str(m2) =
hkcert22{offici4l-s4uces-st4ted-it-is-n0t-secure}
```
