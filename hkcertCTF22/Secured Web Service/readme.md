## Writeup

Form nginx.conf location, we can find that `/flag` alias to `/var/www/html/flag/`.

So, if we need to access `/var/www/html/flag.txt` we can do it by access `/var/www/html/flag/../flag.txt`. 

For url replacing `/var/www/html/flag/` in `/var/www/html/flag/../flag.txt` to `/flag` will do the job.

The final url would be `http://chal.hkcert22.pwnable.hk:28308/flag../flag.txt`
