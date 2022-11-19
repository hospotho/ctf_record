## Writeup

Reference: https://www.youtube.com/watch?v=gw04ULXLUuM

To perform `Block Stuffing Attack`, we need to occupy all the channel capacity during biddling phase. This can be achieve by place bids multiple times and paying a high transaction fee for each bid.

Back to the auction website, the max gas price is 3. Therefore, we should place as many bids as possible with gas price set to 3.

Manually confirm each transaction is slow, so just write a js script to do it for you.
