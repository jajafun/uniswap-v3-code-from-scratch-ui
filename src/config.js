const config = {
  wethAddress: '0x50b357824293402d12b172AA113e755658e433Ba',
  factoryAddress: '0xfb569102F77879AB2DbDE8f5fe3E4fea0B13AABE',
  managerAddress: '0xdb6BC10f3e9B1A05c26c6AD4eC72981048Ed297F',
  quoterAddress: '0x0E6dF02426523deB016975F14ddBCA66caAceB72',
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
config.tokens['0xAf3D16BA9139B47A50bBc357578A79b05f6878Be'] = { symbol: 'UNI' };
config.tokens['0x54e20264F04394e5209D8b3a7D2Bc4a0cCDAc69B'] = { symbol: 'WBTC' };
config.tokens['0xB39a4B8e076FE98217eC412660b93D9Eb7D9b87c'] = { symbol: 'USDT' };
config.tokens['0x93554ea9F4F406529bd29679c7dc580391F1F47b'] = { symbol: 'USDC' };

export default config;
