const quotes = [
    "be the best version of yourself",
    "learn to code now not later",
    "the future belongs to you",
    "siting down wont pay you ",
    " just a random word",
    "Learn javascript hope it worth it",
]

const usedIndexed = new Set()
const generateQuote = () => {
    if(usedIndexed.size >= quotes.length){
        usedIndexed.clear()
    }
    while(true){
        let randomQuote = Math.floor(Math.random() * quotes.length);
        if(usedIndexed.has()) continue
        let realQuote = quotes[randomQuote]
        document.getElementById('quote').innerHTML = realQuote;
        usedIndexed.add(randomQuote)
        break
    }

}
