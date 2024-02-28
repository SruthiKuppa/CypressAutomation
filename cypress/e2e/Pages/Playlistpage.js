class PlaylistPage{

    elements={
        playlistTitle: () => cy.get("#header-description >h3>yt-formatted-string>a")
        
    }

}

//add export option to get the current page class object
module.exports=new PlaylistPage();