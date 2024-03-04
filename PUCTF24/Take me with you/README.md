## Take me with you 把手指留給自己 Part-1

foremost USB image and get 00030179.zip<br>
=> unzip and read super secret flag.rtf

PUCTF24{de1ete_d0es_n0t_me4n_d3l3t3_b2a0539}


## Take me with you 把手指留給自己 Part-2

binwalk USB image<br>
=> unzip file and found sus.png<br>
=> `binwalk -dd=".*" sus.png`


PUCTF24{file_carving_101_4d9c7b89}


## Take me with you 把手指留給自己 Part-3

read plain text from "That file"

PUCTF24{h1dd3n_1n_pla1n_51ght_437d8660}
