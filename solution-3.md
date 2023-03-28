Transaction url:-  https://explorer.public.zkevm-test.net/tx/0x65b27431a97b81953c03cd47e19acf67ccb8537da173e9c124f168ccea04d023


'''py

import json

from brownie import network, accounts, MyToken, config

from web3 import Web3

from web3.contract import Contract

def mint_Saatvik_token():

    # Set up the connection to the Ethereum network
    network.gas_limit(8000000)
    network.connect("mainnet")
	  #infura id removed
    w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/your_infura_project_id'))
    
    # Set the address of the account that will be used to sign the transaction
    account = get_account()

    # Set the contract address and ABI
    contract_address = '0xb0562d99d9236bea467bf3d779f5d48a01ce04eb'
    contract_abi = json.loads('MyTokenContractABI')

    # Instantiate the contract object
    contract = w3.eth.contract(address=contract_address, abi=contract_abi)

    # Set the address to mint the tokens to
    recipient = '0xfc3ccc5f8adb82de6Ff89262a4E6965BA711C9A1'

    # Set the initial supply of the token
    initial_supply = 1000000

    # Deploy the Saatvik contract using Brownie
    Saatvik_token = Saatvik.deploy(recipient, initial_supply, {'from': account})

    # Encode the mint function call data
    function_signature = 'mint(address,uint256)'
    function_params = [recipient, initial_supply]
    encoded_data = contract.encode_function_call(fn_name=function_signature, args=function_params)

    # Build the transaction dictionary
    tx_dict = {
        'nonce': w3.eth.getTransactionCount(account.address),
        'gasPrice': w3.eth.gas_price,
        'gas': 100000,
        'to': contract_address,
        'value': 0,
        'data': encoded_data,
        'chainId': 1442
    }

    # Sign and send the transaction
    signed_tx = account.sign_transaction(tx_dict)
    tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)

    # Wait for the transaction to be mined
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

    # Print the transaction receipt
    print(tx_receipt)
    '''
