// Cargar el encabezado desde header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerPage').innerHTML = data;
    });

// Cargar el pie de página desde footer.html
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerPage').innerHTML = data;
    });
