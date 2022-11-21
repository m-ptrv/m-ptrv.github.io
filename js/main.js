var newLink;
var newLinkNum = 0;

function switchTheme() {
    if (newLink && newLinkNum === 2) {
        newLink.remove();
        newLink = false;
        newLinkNum = 0;
        return;
    }

    if (newLinkNum === 0) {
        var link = document.createElement( "link" );
        var number = Math.random() * 1000000;
        link.href = "css/dark" + ".css" + "?" + Math.floor(number);
        link.type = "text/css";
        link.rel = "stylesheet";
        
        document.getElementsByTagName( "head" )[0].appendChild( link );   
        
        newLink = $(link);
        newLinkNum = 1;
        return;
    }

    if (newLinkNum === 1) {
        newLink.remove();
        var link = document.createElement( "link" );
        var number = Math.random() * 1000000;
        link.href = "css/green" + ".css" + "?" + Math.floor(number);
        link.type = "text/css";
        link.rel = "stylesheet";
        
        document.getElementsByTagName( "head" )[0].appendChild( link );   
        
        newLink = $(link);
        newLinkNum = 2;
        return;
    }
}

