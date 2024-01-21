fetch('http://127.0.0.1:5000')
  .then(response => response.text())
  .then(data => {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = data;
  })
  .catch(error => {
    console.error(error);
  });