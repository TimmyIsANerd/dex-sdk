import invariant from 'tiny-invariant';
import { ChainId } from '../constants';
import { validateAndParseAddress } from '../utils';
import { Currency } from './currency';

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId;
  public readonly address: string;
  public readonly projectLink?: string;

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string, projectLink?: string) {
    super(decimals, symbol, name);
    this.chainId = chainId;
    this.address = validateAndParseAddress(address);
    this.projectLink = projectLink;
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }
    return this.chainId === other.chainId && this.address === other.address;
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS');
    invariant(this.address !== other.address, 'ADDRESSES');
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}

export const WETH = {
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x69c5207A60C8e34311E44A2E10afa0CB4dbFC8df',
    18,
    'WtBNB',
    'Wrapped tBNB',
    'https://www.binance.org'
  ),
  [ChainId.BITGERT_MAINNET]: new Token(
    ChainId.BITGERT_MAINNET,
    '0xD75411C6A3fEf2278E51EEaa73cdE8352c59eFEd',
    18,
    'WBRISE',
    'Wrapped Brise',
    'https://bitgert.com'
  ),
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x2F856544d28c793F4461CE639709AA8C01D12745',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.GATECHAIN_MAINNET]: new Token(
    ChainId.GATECHAIN_MAINNET,
    '0x5CaD84E500d73A9bcCdeB21eDD9720FFb7531c56',
    18,
    'WGATE',
    'Wrapped Gatecoin',
    'https://www.gatechain.io'
  ),
  [ChainId.OMAX_MAINNET]: new Token(
    ChainId.OMAX_MAINNET,
    '0x2e19F01B81628CCd8cFce9F7d9F2fACC77343b7c',
    18,
    'WOMAX',
    'Wrapped OMAX',
    'https://www.omaxcoin.com'
  )
};
