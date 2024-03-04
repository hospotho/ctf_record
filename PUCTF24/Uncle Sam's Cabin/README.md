## Uncle Sam's Cabin 山姆叔叔的小屋

google Southern Army encryption<br>
=> Vigenère Cipher


```py
char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
ans =    "PUCTF24{Shermans_March_to_the_Sea_Special_Field_Orders,No.120_"
cipher = "RIOXW24{Wavznuga_Angwj_mt_loi_Jqa_Fhqczcs_Ywxsh_Gvdwgw,Pw.120_"
for c1, c2 in zip(cipher, ans):
    index1 = char_set.find(c1.upper())
    if index1 == -1:
        print(c1, end="")
        continue
    index2 = char_set.find(c2.upper())
    diff = index1 - index2
    print(char_set[diff], end="")
```

from answer `PUCTF24`<br>
=> update key to `COMER`<br>
=> use info from question<br>
=> update key to `COMERETRIBUTION`<br>
=> get longer answer `PUCTF24{Shermans`

Search "Southern Army Shermans 120"<br>
=> find wiki page "Special Field Orders No. 120"<br>
=> find wiki page "Sherman's March to the Sea"<br>
=> string match flag length<br>

from answer `PUCTF24{Shermans_March_to_the_Sea_Special_Field_Orders,No.120`<br>
=> update key to `COMERETRIBUTIONPUCTFSHERMANSMARCHTOTHESEASPECIALFIELDORDERSNO`

```py
char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
cipher = "RIOXW24{Wavznuga_Angwj_mt_loi_Jqa_Fhqczcs_Ywxsh_Gvdwgw,Pw.120_0fqg94m393jof3tu8hg0w5x729s49pfh}"
password = "COMERETRIBUTIONPUCTFSHERMANSMARCHTOTHESEASPECIALFIELDORDERSNO"
index = 0
for i in range(len(cipher)):
    char = cipher[i].upper()
    if char not in char_set:
        print(char, end="")
        continue
    char_index = char_set.find(char)
    key = password[index]
    shift = char_set.find(key)
    key_index = char_index - shift
    ans = char_set[key_index]
    if not cipher[i] == char:
        ans = ans.lower()
    print(ans, end="")
    index += 1
```

get longer answer with missing hash
`PUCTF24{Shermans_March_to_the_Sea_Special_Field_Orders,No.120_0ffb94e393fdc3fd8ec0f5f729f49b__}`<br>
=> test md5 of `Shermans_March_to_the_Sea_Special_Field_Orders,No.120`<br>
=> hash `0ffb94e393fdc3fd8ec0f5f729f49bac` match

PUCTF24{Shermans_March_to_the_Sea_Special_Field_Orders,No.120_0ffb94e393fdc3fd8ec0f5f729f49bac}