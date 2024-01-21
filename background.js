chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: () => {
      fetch('http://127.0.0.1:5000/')
        .then(response => response.text())
        .then(data => {
          let popup = window.open('', 'Hour', 'width=400,height=400');
          popup.document.write(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
});