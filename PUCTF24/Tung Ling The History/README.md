## Tung Ling The History 通靈過去

Decompile program<br>
=> some part failed<br>
=> read structure and check string<br>
=> some kind of encryption and set random seed to a time<br>
=> found a date in question

run program<br>
=> show error missing module flag<br>
=> `touch flag.py`<br>
=> show error missing var flag in flag module<br>
=> `echo "flag=''" > flag.py`<br>
=> no error and create a output.txt<br>
=> update flag to `PUCTF`<br>
=> new output.txt have same length with flag<br>
=> some kind of xor encryption<br>
=> change system date to question provided date and test<br>
=> `sudo date 022018092024.38 && python3.12 chall.cpython-312.pyc`<br>
=> output.txt show some text same as question<br>
=> write script to brute force original flag

```py
import subprocess

def get_correct_index(file1, file2):
    with open(file1, "r") as f1:
        with open(file2, "r") as f2:
            byte_index = 0
            while byte_index < 73:
                byte1 = f1.read(1)
                byte2 = f2.read(1)
                if byte1 != byte2:
                    return byte_index - 1
                byte_index += 1
            return byte_index

def test_ans(ans):
    with open("flag.py", "w", encoding="utf-8") as f:
        f.write(f"flag='{ans}'")
    _ = subprocess.run(["sudo", "date", "022018092024.38"], capture_output=True)
    _ = subprocess.run(["sudo", "python3.12", "chall.cpython-312.pyc"], capture_output=True)


file1 = "ans.txt"
file2 = "output.txt"

# ans = ""
ans = "PUCTF"
test_ans(ans)
last_correct_index = get_correct_index(file1, file2)
print(last_correct_index)

char_set = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+-{}!"
while last_correct_index < 73:
# if True:
    for char in char_set:
        test_str = ans + char
        print("\nTesting Ans:", test_str)
        test_ans(test_str)
        current_index = get_correct_index(file1, file2)
        if current_index > last_correct_index:
            last_correct_index = current_index
            ans = test_str
            print(ans)
            break
```

test script<br>
=> init work when fail in loop<br>
=> output.txt unchange<br>
=> guess flag maybe never changed even after rewrite file<br>
=> guess cause by some module load cause<br>
=> overtime<br>

after competition<br>
=> found folder `__pycache__` within 1 min<br>
=> add `os.unlink("__pycache__/flag.cpython-312.pyc")` before subprocess.run<br>
=> script worked

PUCTF24{n0w_1_can_tung11ng_the_history_677e48204d85705361a1d6b35e3a72b8}
