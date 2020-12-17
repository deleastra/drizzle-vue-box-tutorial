import Rental from './contracts/Rental.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545'
    }
  },
  contracts: [Rental],
  events: {
    SimpleStorage: ['Rental']
  },
  polls: {
    accounts: 15000
  }
}

export default options