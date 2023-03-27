# 🌳 Challenge III: Interact With A Deployed Contract On zkEVM Testnet

```Typescript
import React, { useState } from 'react';
import { useContract, useSigner } from 'wagmi';
import { Button } from '@nextui-org/react';

const ZKMint = () => {
  const [address, setAddress] = useState('');
  const [hash, setHash] = useState('');

  const { data: signer } = useSigner();

  const contractAbi = [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'safeMint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

  const mainContract: any = useContract({
    address: '0x232b6ca8d85e5f69c4e945ab786af9B50326eE70',
    abi: contractAbi,
    signerOrProvider: signer,
  });

  const mintNow = async () => {
    try {
      const pending = await mainContract.functions['safeMint(address)'](
        address
      );
      const txResult = await pending.wait();
      setHash(txResult.transactionHash);

      console.log(txResult.transactionHash);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="mb-4">
          <input
            className=" border rounded py-2 px-3 text-white"
            id="address"
            required={true}
            type="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="mt-4">
            <Button color="secondary" onClick={mintNow}>
              Mint
            </Button>
          </div>
        </div>
        <div>
          {hash && (
            <div>
              <Button
                flat
                auto
                onClick={() =>
                  window.open(
                    `https://testnet-zkevm.polygonscan.com/tx/${hash}`,
                    '_blank'
                  )
                }
              >
                View on Explorer
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ZKMint;
```

**Transaction Hash:**

```bash
https://testnet-zkevm.polygonscan.com/tx/0x70d6767f60dd2ededeb35da1a20f93a26d872401fd76e4722001ebb8455f7c64
```

## Explorer Links

- [Deploy Contract](https://testnet-zkevm.polygonscan.com/address/0x232b6ca8d85e5f69c4e945ab786af9b50326ee70)
- [Transaction Hash](https://testnet-zkevm.polygonscan.com/tx/0x70d6767f60dd2ededeb35da1a20f93a26d872401fd76e4722001ebb8455f7c64)
