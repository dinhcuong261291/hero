const connectBtn = document.getElementById("connectBtn");
const walletAddress = document.getElementById("walletAddress");

async function connectWallet() {

    if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
    }

    try {

        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });

        const address = accounts[0];

        walletAddress.innerText =
            address.substring(0,6) +
            "..." +
            address.substring(address.length - 4);

        connectBtn.innerText = "Connected";

    } catch (error) {

        console.log(error);

        walletAddress.innerText =
            "Connection Failed";
    }
}

connectBtn.addEventListener(
    "click",
    connectWallet
);
