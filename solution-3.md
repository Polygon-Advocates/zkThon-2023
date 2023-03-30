import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

const { address } = useAccount();
const ZKTHON_ADDRESS = '0x3aC587078b344a3d27e56632dFf236F1Aff04D56'
const ZKTHON_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_username","internalType":"string"}]},{"type":"event","name":"NewSubmission","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":false},{"type":"string","name":"message","internalType":"string","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getCurrentSubmission","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"submitUsername","inputs":[{"type":"string","name":"_username","internalType":"string"}]}]

const { config: zkthonConfig } = usePrepareContractWrite({
        address: ZKTHON_ADDRESS,
        abi: ZKTHON_ABI,
        functionName: "submitUsername",
        args: ['itz-jherie'],

    })
const { write: zkthonWrite } = useContractWrite({
        ...zkthonConfig,
        onSuccess() {
            console.log(Done!!)
        }
    })