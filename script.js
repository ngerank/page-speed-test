let startTime;

function testPageSpeed() {
    const url = document.getElementById('urlInput').value.trim();
    const frame = document.getElementById('testFrame');
    const loadTimeElem = document.getElementById('loadTime');
    const scoreElem = document.getElementById('scoreResult');
    const outputSection = document.getElementById('outputSection');

    if (!url) {
        alert('Please enter a valid URL.');
        return;
    }

    outputSection.style.display = 'none';
    loadTimeElem.innerText = '';
    scoreElem.innerText = '';
    scoreElem.style.color = '#CCCCCC';

    frame.src = '';
    setTimeout(() => {
        startTime = performance.now();
        frame.src = url;
    }, 100);

    frame.onload = function() {
        const endTime = performance.now();
        const loadTime = ((endTime - startTime) / 1000).toFixed(2);

        loadTimeElem.innerText = `Page loaded in ${loadTime} seconds.`;
        let score = '';
        let color = '';

        if (loadTime <= 2) {
            score = 'Excellent ✅';
            color = '#00FF00';
        } else if (loadTime <= 4) {
            score = 'Good 👍';
            color = '#FFD166';
        } else if (loadTime <= 7) {
            score = 'Average ⚠️';
            color = '#FFA500';
        } else {
            score = 'Poor 🚨';
            color = '#FF4D4D';
        }

        scoreElem.innerText = `Score: ${score}`;
        scoreElem.style.color = color;
        outputSection.style.display = 'block';
    };

    frame.onerror = function() {
        alert('Failed to load the page. Please check the URL.');
    };
}