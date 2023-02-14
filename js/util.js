// number => $$
function toUSDollars(number, language="en", country="US", currency="USD"){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

