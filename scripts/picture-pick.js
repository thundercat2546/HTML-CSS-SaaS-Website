const roundButton_1 = document.getElementById("round-button-1");

// Неоптимизированная херня снизу!

roundButton_1.addEventListener('click', 
    () => {
        document.getElementById('js-picturePlace').src = 'http://127.0.0.1:5500/HTML-CSS/training-SaaS-Website/files/bird.jpeg';
    }
);

const roundButton_2 = document.getElementById("round-button-2");

roundButton_2.addEventListener('click', 
    () => {
        document.getElementById('js-picturePlace').src = 'http://127.0.0.1:5500/HTML-CSS/training-SaaS-Website/files/lion.jpeg';
    }
);

const roundButton_3 = document.getElementById("round-button-3");

roundButton_3.addEventListener('click', 
    () => {
        document.getElementById('js-picturePlace').src = 'http://127.0.0.1:5500/HTML-CSS/training-SaaS-Website/files/butterfly.jpeg';
    }
);