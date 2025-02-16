function zmenProdukt(cisloProduktu) {
    
    document.querySelectorAll('.product-info').forEach(produkt => {
        produkt.classList.remove('active');
    });
    
    
    document.getElementById(`produkt-${cisloProduktu}`).classList.add('active');
    
    
    document.querySelectorAll('.thumbnail').forEach((obrazek, index) => {
        obrazek.classList.toggle('active', index === cisloProduktu);
    });
}