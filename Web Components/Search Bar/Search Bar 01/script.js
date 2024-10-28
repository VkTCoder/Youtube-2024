const searchItems = [
    {title: 'Apple', url: 'apple.com'},
    {title: 'Amazon', url: 'amazon.com'},
    {title: 'Blackrock', url: 'blackrock.com'},
    {title: 'Blue Berry', url: 'blueberry.com'},
    {title: 'Google', url: 'google.com'},
    {title: 'Flipcart', url: 'flipcart.com'},
    {title: 'Microsoft', url: 'microsoft.com'},
    {title: 'Samsung', url: 'samsung.com'},
    {title: 'Wipro', url: 'wipro.com'}
];

const searchFuction = () =>{
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";
    const filteredItems = searchItems.filter(item => 
        item.title.toLowerCase().includes(input)
    );
    if(filteredItems.length === 0){
        resultContainer.innerHTML = '<p> No results found </p>';
    }
    else{
        filteredItems.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result');
            resultElement.textContent = item.title;

            resultElement.addEventListener('click', () =>{
                window.location.href = item.url;
            });
            resultContainer.appendChild(resultElement);
        });
    }
}