const loadPhone = async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = "";

    const showAllBtn = document.getElementById('show-all-btn');
    if (phones.length <= 12) {
        showAllBtn.classList.remove('hide')
    } else {
        showAllBtn.classList.add('hide')
    }
    
    phones = phones.slice(0, 12)

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


const searchPhone = () => {
    const inputText = document.getElementById('search-input')
    const textValue = inputText.value;
    loadPhone(textValue)
}

// loadPhone();