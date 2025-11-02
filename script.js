// Note: Our website does not require much JS, so it is more niche and not very visible

// Keep Copyright In Footer Up-To-Date
document.getElementById("footerYear").innerText = (new Date()).getFullYear();

// Update Price For Currency In Pricing Page
document.getElementById("currencyMenu").onchange = (event) => {
    const currency = event.target.value;
    productPrice = 0;
    if (currency == "cad") {
        productPrice = 24.99
    } else {
        productPrice = 17.79
    }
    document.getElementById("price").innerText = productPrice;
}