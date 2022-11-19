## Writeup

Form nginx.conf location, we can know that `/flag` will be alias to `/var/www/html/flag/`.

So, if we need to acess `/var/www/html/flag.txt` we do it by acess `/var/www/html/flag/../flag.txt`. 

Relacing `/var/www/html/flag/` in `/var/www/html/flag/../flag.txt` to `/flag` will do the job.

The final url will be `http://chal.hkcert22.pwnable.hk:28308/flag../flag.txt`
