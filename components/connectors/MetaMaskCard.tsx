import {useEffect} from 'react'
import {hooks, metaMask} from '../../connectors/metaMask'
import {Accounts} from '../Accounts'
import {Card} from '../Card'
import {Chain} from '../Chain'
import {ConnectWithSelect} from '../ConnectWithSelect'
import {Status} from '../Status'
import {Contract} from "@ethersproject/contracts";
import {ABI} from "../../api-smart-contract";
import {toast} from 'react-nextjs-toast'

const {useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function MetaMaskCard() {
    const chainId = useChainId()
    const accounts = useAccounts()
    const error = useError()
    const isActivating = useIsActivating()

    const isActive = useIsActive()

    const provider = useProvider()
    const ENSNames = useENSNames(provider)

    // attempt to connect eagerly on mount
    useEffect(() => {
        void metaMask.connectEagerly()
    }, [])

    const deposit = () => {
        console.log('deposit');
        const contract = new Contract('0x9F165540c90094900c71AB760803895A801E401E', ABI, provider);
        const daiWithSigner = contract.connect(provider.getSigner());
        daiWithSigner.deposit({
            value: '1000000000000000'
        })
            .then((response) => {
                console.log(response);
                if (response.hash) {
                    toast.notify('Send request success!', {
                        duration: 5,
                        type: "success"
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                toast.notify(error.message, {
                    duration: 60,
                    type: "error"
                });
            });
    }

    return (
        <Card>
            <div>
                <b>MetaMask</b>
                <Status isActivating={isActivating} error={error} isActive={isActive}/>
                <div style={{marginBottom: '1rem'}}/>
                <Chain chainId={chainId}/>
                <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames}/>
            </div>
            <div style={{marginBottom: '1rem'}}/>
            <ConnectWithSelect
                connector={metaMask}
                chainId={chainId}
                isActivating={isActivating}
                error={error}
                isActive={isActive}
            />
            {isActive ? (
                <>
                    <div style={{marginBottom: '1rem'}}/>
                    <button onClick={() => deposit()}>
                        Deposit
                    </button>
                </>
            ) : (<></>)}
        </Card>
    )
}
