export default function redirectPayment(removeCartAllProducts: () => void) {
    window.location.href = "/Payment";
    removeCartAllProducts(); 
}