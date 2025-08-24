// Toggle sound on button click
function toggleSound() {
    const video = document.getElementById('background-video');
    video.muted = !video.muted;
    const button = document.querySelector('.buttons button');
    button.textContent = video.muted ? 'Enable Sound' : 'Disable Sound';
}

// Wallet connection (example for MetaMask)
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert('Wallet connected!');
        } catch (error) {
            console.error('Wallet connection failed:', error);
            alert('Failed to connect wallet. Please try again.');
        }
    } else {
        alert('Please install MetaMask or another Web3 wallet.');
    }
}

// Attempt to unmute after user interaction
document.body.addEventListener('click', () => {
    const video = document.getElementById('background-video');
    if (video.muted) {
        video.muted = false;
    }
});