const convertButton = document.querySelector(".convert-button")
const primeiroSelect = document.querySelector(".primeiro-select")
const segundoSelect = document.querySelector(".segundo-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5
    const euroToday = 5.4
    const libraToday = 6.3
    const bitcoinToday = 258.000


    if (segundoSelect.value == "euro") {
        // Se o select estiver selecionado o valor de dolarToday, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (segundoSelect.value == "dolar") {
        // Se o select estiver selecionado o valor de euroToday, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (segundoSelect.value == "libra") {
        // Se o select estiver selecionado o valor de euroToday, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (segundoSelect.value == "bitcoin") {
        // Se o select estiver selecionado o valor de euroToday, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}







// function changeCurrencyToConvert() {
//     const currencyNameToConvert = document.getElementById("currency-name-to-convert")
//     const currencyImageToConvert = document.querySelector(".currency-img-to-convert")

//     if (primeiroSelect.value == "REAL") {
//         currencyNameToConvert.innerHTML = "Real Brasileiro"
//         currencyImageToConvert.src = "./assets/real.png"
//     }

// if (primeiroSelect.value == "dolar") {
//     currencyNameToConvert.innerHTML = "Dólar americano"
//     currencyImageToConvert.src = "./assets/dolar.png"
// }

// if (primeiroSelect.value == "euro") {
//     currencyNameToConvert.innerHTML = "Euro"
//     currencyImageToConvert.src = "./assets/euro.png"
// }

// if (primeiroSelect.value == "libra") {
//     currencyNameToConvert.innerHTML = "Libra Esterlina"
//     currencyImageToConvert.src = "./assets/libra.png"
// }

// if (primeiroSelect.value == "bitcoin") {
//     currencyNameToConvert.innerHTML = "Bitcoin"
//     currencyImageToConvert.src = "./assets/bitcoin.png"
// }

// }





function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")

    if (primeiroSelect.value == "real") {
        currencyNameToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/real.png"
    }

    if (segundoSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (segundoSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (segundoSelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (segundoSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (segundoSelect.value == "real") {
        currencyName.innerHTML = "real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()

}


primeiroSelect.addEventListener("change", changeCurrency)
segundoSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

