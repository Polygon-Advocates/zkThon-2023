    
    # Contract Address
    
    https://explorer.public.zkevm-test.net/address/0xa9e2e5928B0AF13cEFB1d75D1A57dEe20f200A55/contracts

    # Transaction Address

    https://explorer.public.zkevm-test.net/tx/0x8c99080a4dfcd6896c8f6253c3579970781a163b68ce682421603981a10b1ba3
    
    
    # Contract Code 
    
    // SPDX-License-Identifier: MIT

    pragma solidity ^0.8.9;

    contract MyToken {
    
    mapping (address => uint256) public balanceOf;
    string public name = "Shalimar";
    string public symbol = "SLM";
    uint8 public decimals = 18;
    uint256 public totalSupply = 100000 * (10 ** decimals);
    
    mapping (address => mapping (address => uint256)) public allowance;
    
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    
    constructor () {
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }
    
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Not enough tokens to transfer.");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(allowance[_from][msg.sender] >= _value, "Not approved to transfer.");
        require(balanceOf[_from] >= _value, "Not enough tokens to transfer.");
        
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        
        emit Transfer(_from, _to, _value);
        
        return true;
    }
    
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
    }
