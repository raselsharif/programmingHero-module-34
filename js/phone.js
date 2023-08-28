
// get data from API
const loadPhone = async (text = 'a', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShowAll);
}

// display phones
const displayPhone = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = "";

    const showAllBtn = document.getElementById('show-all-btn');
    if (phones.length <= 12 && !isShowAll) {
        showAllBtn.classList.remove('hide')
    } else {
        showAllBtn.classList.add('hide')
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12)
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <h2>Brand: ${phone.brand}</h2>
        <h3>Phone: ${phone.phone_name}</h3>
        <h2 style="word-break: break-all;">Model: ${phone.slug}</h2>
        <img src="${phone.image}" alt="phone image">
        `
        phoneContainer.appendChild(phoneDiv)
    });
    dataLoading(false)
}

// search input and button
const searchPhone = (isShowAll) => {
    dataLoading(true)
    const inputText = document.getElementById('search-input')
    const textValue = inputText.value;
    loadPhone(textValue, isShowAll)
}

//  data loading spinner
const dataLoading = (isLoading) => {
    const dataLoadingDiv = document.getElementById('data-loading');
    if (isLoading) {
        dataLoadingDiv.classList.add('data-hide')
    } else {
        dataLoadingDiv.classList.remove('data-hide')
    }
}

// show all button
const showAll = () => {
    searchPhone(true)
}


// loadPhone();