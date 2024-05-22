const config = {
  wethAddress: '0x3241d55FC2D96dfa6cC21A1ADF0FDc7eAE844Dd5',
  factoryAddress: '0x86aBa1bB87BaAf1207e783e9eeA40433F1441130',
  managerAddress: '0x13251e89E486f69d22D262F7aE61Fb6b1350B824',
  quoterAddress: '0x0Ca50EFEbf50DCC2d08a1C6D41CC8c7C2c8B837A',
  ABIs: {
    'ERC20': require('./abi/ERC20.json'),
    'Factory': require('./abi/Factory.json'),
    'Manager': require('./abi/Manager.json'),
    'Pool': require('./abi/Pool.json'),
    'Quoter': require('./abi/Quoter.json')
  }
};

config.tokens = {};
config.tokens[config.wethAddress] = { symbol: 'WETH' };
config.tokens['0x96E125F6725E5D7f7681AC0558F3D6E81Bb4266e'] = { symbol: 'UNI' };
config.tokens['0x70c0d499b8c57C7CD2B1BC808dB06dF916A5b6f8'] = { symbol: 'WBTC' };
config.tokens['0xdB201B984143420209f4191E090cf95ceB5dab31'] = { symbol: 'USDT' };
config.tokens['0x7F3FEE2B98D7349828673f47792634bB4B1bc537'] = { symbol: 'USDC' };

export default config;
