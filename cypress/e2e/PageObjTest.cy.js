import Homepage from "./Pages/Homepage"
import Playlistpage from "./Pages/Playlistpage"
import Resultpage from "./Pages/Resultpage"


describe('PageObject Demo',()=>{

    it('PageObject test',()=>{
        //open youtube
        Homepage.visit();

        //search the youtube
        Homepage.searchInYoutube();

        //open playlist
        Resultpage.goToPlaylist();

        //validate playlist title
        Playlistpage.elements.playlistTitle().should('have.text','API Testing by Testers Talk')
    })
})