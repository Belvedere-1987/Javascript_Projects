function Rock_Bands() {
    var Led_Zeppelin = {
        Singer: "Robert Plant",
        Drummer: "Jon Bonham",
        Bassist: "John Paul Jones",
        Guitarist:"Jimmy Page"
        };
        delete Led_Zeppelin.Guitarist
        document.getElementById("Dictionary").innerHTML=Led_Zeppelin.Guitarist;
    }
    