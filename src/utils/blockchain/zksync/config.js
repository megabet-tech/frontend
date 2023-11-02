const config = {
    testnet: {
        contract_address: {
            megabet_token: "0xc1Bf6B65d41ffE6A3B85986c2C096BFebaEf40Ae",
            megabet_staking: "0x4cAC254B42D9164573AFC8dffC57F8813FAEF491",
            megabet_main: "0x935697D2CEBeed2A03d9BB3C7c80ff1225177B12",
            megabet_sale: "0x42413BfDE99a7CC2e0C2834662e93E26e26f8879"
        },
        network: {
            url: "https://zksync2-testnet.zksync.dev",
            ethNetwork: "goerli",
            zksync: true,
            verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification"
        },
    }
    
};

export default config;