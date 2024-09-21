import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, sepolia } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '4109113d3ddb3b66413ca87daeda836b'

// 2. Create a metadata object - optional
const metadata = {
    name: 'AppKit',
    description: 'AppKit Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

export const networks = [mainnet, arbitrum, sepolia]

// 3. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
    ssr: true,
    networks,
    projectId
})

// 4. Create modal
createAppKit({
    adapters: [WagmiAdapter],
    networks: [mainnet, arbitrum],
    metadata,
    projectId,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    }
})

export function AppKitProvider({ children }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}