## Memory Forensic: ATP - 1 記憶體取證: ATP - 1

google tools for memdump<br>
=> download volatility 3<br>
=> follow guide and read volatility help message<br>

```sh
python vol.py -f HK_ATP_2024.mem windows.info.Info
python vol.py -f HK_ATP_2024.mem hivelist
python vol.py -f HK_ATP_2024.mem windows.registry.printkey.PrintKey --offset 0xb68618e68000 --key 'ControlSet001\Control\ComputerName\ComputerName'
python vol.py -f HK_ATP_2024.mem windows.pslist.PsList
```

PUCTF24{2024-02-24_13:07:56_11_hops_WIN11-HOPS-PC_FTK_Imager.exe_3664}
