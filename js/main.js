var newLink;

function switchTheme() {
    if (newLink) {
        newLink.remove();
        newLink = false;
        return;
    }

    var link = document.createElement( "link" );
    var number = Math.random() * 1000000;
    link.href = "css/dark" + ".css" + "?" + Math.floor(number);
    link.type = "text/css";
    link.rel = "stylesheet";
    
    document.getElementsByTagName( "head" )[0].appendChild( link );   
    
    newLink = $(link);
    console.log(newLink)
}

