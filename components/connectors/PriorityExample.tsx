import { getPriorityConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import { WalletLink } from '@web3-react/walletlink'
import { hooks as metaMaskHooks, metaMask } from '../../connectors/metaMask'

function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof WalletConnect) return 'WalletConnect'
  if (connector instanceof WalletLink) return 'WalletLink'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

const { usePriorityConnector } = getPriorityConnector(
  [metaMask, metaMaskHooks],
)

export default function PriorityExample() {
  const priorityConnector = usePriorityConnector()
  console.log(`Priority Connector: ${getName(priorityConnector)}`)
  return null
}
