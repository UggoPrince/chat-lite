App = {
    init: function() {
        return App.initWeb3();
    },
    initWeb3: function() {
        if (typeof web3 !== 'undefined') {
            // Use MetaMask's provider
            App.web3Provider = web3.currentProvider;
            App.setStatus('MetaMask detected');
        } else {
            // set the provider you want Web3.providers
            alert('Error: Please install MetaMask then refresh the page');
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
            return null;
        }

        // Get the initial account balance so it can be displayed
        web3.eth.getAccounts(function(err, accs) {
            if (err !== null) {
                alert('There was an error fetching your account, please try again later.');
                return;
            }
            account = accs[0];
            if (!account) {
                App.setStatus('Please login to MetaMask');
                alert('Could not fetch your account. Make sure you are logged in to MetaMask, then refresh the page.');
                return;
            }
            return App.initContract();
        });
    },
    // todos
    initContract: function() {},

    // todod
    getContractProperties: function() {},

    setStatus: function(message) {
        document.getElementById('status').innerHTML = message;
    },
};

$(document).ready(function() {
    App.init();
});
