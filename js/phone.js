const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <h2>Brand: ${phone.brand}</h2>
        <h3>Phone: ${phone.phone_name}</h3>
        <h2>Model: ${phone.slug}</h2>
        <img src="${phone.image}" alt="phone image">
        `
        phoneContainer.appendChild(phoneDiv)
    })
}

loadPhone();