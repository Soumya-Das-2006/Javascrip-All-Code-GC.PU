// GET Method
document.getElementById('getDataBtn').addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1") // sample API
        .then(response => response.json())
        .then(data => {
            document.getElementById("getResult").innerText =
                `Title: ${data.title}\nBody: ${data.body}`;
        })
        .catch(error => {
            console.error('GET Error:', error);
        });
});

// POST Method
document.getElementById('postDataBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: name,
            body: "Test body",
            userId: 1
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('postResult').innerText =
                `Posted Data:\nTitle: ${data.title}\nBody: ${data.body}`;
        })
        .catch(error => {
            console.error('POST Error:', error);
        });
});
