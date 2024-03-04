## The dice is cast 骰子已經擲下

```py
num_set = "0123456789"
char_set = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
cipher = "W2J1M9b Hslh phj1h l01 Slnpv 5PPP Jyv00pun 1ol Y2ipjvu 9ggkafemlcdgalgkf9jhkhehdcecjcac"

for char in cipher:
    if char == " ":
        print(" ", end="")
        continue
    index = char_set.find(char)
    shift = -8 if char in num_set and num_set.find(char) < 7 else -7
    new_index = (index + shift) % len(char_set)
    next_char = char_set[new_index]
    print(next_char, end="")
```

PUCTF24{Alea_iacTa_eST_Legio_XIII_CroSSing_The_RUbicon_299d387fe5693e9d82cada7a6575c535}
