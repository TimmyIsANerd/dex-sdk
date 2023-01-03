import JSBI from 'jsbi';

// exports for external consumption
export type BigintIsh = JSBI | number | string;

export enum ChainId {
  BSC_TESTNET = 97,
  BITGERT_MAINNET = 32520,
  GATECHAIN_MAINNET = 86,
  OMAX_MAINNET = 311,
  BSC_MAINNET = 56,
  WANCHAIN_MAINNET = 888,
  OKX_MAINNET = 66,
  ETH_MAINNET = 1,
  MATIC_MAINNET = 137,
  ASTAR_MAINNET = 592,
  TELOS_MAINNET = 40
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS_MAP = {
  [ChainId.BSC_TESTNET]: '0x583DD96cD23602979333B98bB81dFd22b55faa46',
  [ChainId.BSC_MAINNET]: '0x6A6CFF59de25175A5BC9e4796C88a73b2c581b49',
  [ChainId.GATECHAIN_MAINNET]: '0xb562b09Bc2317D18a82FD415B7Fb33540Db7e723',
  [ChainId.OMAX_MAINNET]: '0x64FAF984Bf60dE19e24238521814cA98574E3b00',
  [ChainId.BITGERT_MAINNET]: '0x46e65AfC0BBF7cc037D82AC2eA9aaf560dD962Cc',
  [ChainId.WANCHAIN_MAINNET]: '0x64FAF984Bf60dE19e24238521814cA98574E3b00',
  [ChainId.OKX_MAINNET]: '0x64FAF984Bf60dE19e24238521814cA98574E3b00',
  [ChainId.ETH_MAINNET]: '0x2CF6165c121EFadab70C42CEd85De8f742B29AA4',
  [ChainId.MATIC_MAINNET]: '0xcA01ffA17C46ba079572147EDE463B9F0690e1e6',
  [ChainId.ASTAR_MAINNET]: '0x2CF6165c121EFadab70C42CEd85De8f742B29AA4',
  [ChainId.TELOS_MAINNET]: '0x0f3f2b6BE393A2536291F1e93471C7fEFf7Fed96'
};

export const INIT_CODE_HASH_MAP = {
  [ChainId.BSC_TESTNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.BITGERT_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.BSC_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.GATECHAIN_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.OMAX_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.WANCHAIN_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.OKX_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.ETH_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.MATIC_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.ASTAR_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857',
  [ChainId.TELOS_MAINNET]: '0xde779d283b8738f357e793b9d75c6a3c198479994ba2b4882e5843d46b762857'
};

export const DEFAULT_RPC_URLS_MAP = {
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s3.binance.org:8545',
  [ChainId.BITGERT_MAINNET]: 'https://nodes.vefinetwork.org/bitgert',
  [ChainId.BSC_MAINNET]: 'https://bsc-dataseed4.defibit.io',
  [ChainId.GATECHAIN_MAINNET]: 'https://evm.gatenode.cc',
  [ChainId.OMAX_MAINNET]: 'https://mainapi.omaxray.com',
  [ChainId.WANCHAIN_MAINNET]: 'https://gwan-ssl.wandevs.org:56891',
  [ChainId.OKX_MAINNET]: 'https://exchainrpc.okex.org',
  [ChainId.ETH_MAINNET]: 'https://eth-rpc.gateway.pokt.network',
  [ChainId.MATIC_MAINNET]: 'https://polygon-rpc.com/',
  [ChainId.ASTAR_MAINNET]: 'https://nodes.vefinetwork.org/astar',
  [ChainId.TELOS_MAINNET]: 'https://mainnet.telos.net/evm'
};

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

// exports for internal consumption
export const ZERO = JSBI.BigInt(0);
export const ONE = JSBI.BigInt(1);
export const TWO = JSBI.BigInt(2);
export const THREE = JSBI.BigInt(3);
export const FIVE = JSBI.BigInt(5);
export const TEN = JSBI.BigInt(10);
export const _100 = JSBI.BigInt(100);
export const FEES_NUMERATOR = JSBI.BigInt(9975);
export const FEES_DENOMINATOR = JSBI.BigInt(10000);

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
};
