function getChoices() {
    clear()

    console.log('get choices called')
    month = document.querySelector("#month").value
    cdn = document.querySelector("#cdn").value
    ip = document.querySelector("#ip").value
    reg = document.querySelector("#region").value


    choices = {"month": month, "cdn": cdn, "ip": ip, "reg": reg}
    console.log(choices)
    
    if (cdn=="All") {
        const cdns = ["Akamai", "Cloudflare", "Edgecast", "Fastly"]
        
        for (var i=0; i<4; i++) { 
            element = cdns[i]
            console.log(element)
            const copy = Object.assign({}, choices)
            copy["cdn"] = element
            addFourGraphs(copy)
            //setTimeout(() => {addFourGraphs(copy)}, i*400);
        }
    } else {
        addFourGraphs(choices)
    }        
}

function addFourGraphs(choices) {
    console.log('add four graphs called')
    const avg = ["Median", "Mean"]
    const msm = ["DNS", "SSL"]
    
    for (var i=0; i<2; i++) {
        for(var x=0; x<2; x++) {
            const copy = Object.assign({}, choices)
            copy["avg"] = avg[i]
            copy["msm"] = msm[x]
            getGraphs(copy)
            //setTimeout(() => {getGraphs(copy)}, (i+x)*100);
        }
    }
}

function getGraphs(choices) {
    //console.log('get graphs called')
    const lowers = ["cdn", "msm", "avg"]
    lowers.forEach((key) => choices[key] = choices[key].toLowerCase())

    region = choices["reg"]
    ip = choices["ip"]

    choice_string = `${choices['cdn']}_${choices['msm']}_${choices['avg']}`

    //console.log(`choice string: ${choice_string}`)

    path = `${choices['month']}/${region}/${ip}/${choice_string}.png`
    console.log(path)
    const myImage = new Image()
    myImage.src = path
    document.querySelector("#images").appendChild(myImage); 
}

function clear() {
    images = document.querySelectorAll("img")
    images.forEach((img) => img.remove())
    document.querySelector("#map-container").style.visibility = "hidden"
}