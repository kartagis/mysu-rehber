function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'mysu: Search mySU directory for %s'
  });
}

resetDefaultSuggestion();

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("http://mysu.sabanciuniv.edu/apps/people/?keyword=" + text);
});
