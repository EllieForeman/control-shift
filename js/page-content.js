$(document).ready(function(){
    // run on page load
    createPage();
});


// create and show modal
// function to populate modal with artist info from json file, matching the url to the id
function createPage() {
    // clicking on the thumbnail image
    let urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('artwork')) {
        urlParams = urlParams.get('artwork');
        urlParams = urlParams.replace(/-/g, ' ');
        let id;
        $.ajax({    
            type: "GET", 
            url: './artworks.json',
            dataType: 'json',
            cache: true,
            success: function(data){  
                // finding the right id from the artist name which is located in the query string
                for (let i = 0; i < data.length; i++) {
                    if (urlParams === data[i].artwork.artwork_name) {
                        id = [i];
                    }
                }
                //removing any paragraphs which do not belong to this artist id
                $("p.modal-text:not(.text" + data[id].id + ")").hide();
                const infoModal = $('#infoModal');
                // artwork name
                document.querySelector('.artwork-title-text').innerHTML = data[id].artwork.artwork_name;
                // artist name
                document.querySelector('.artist-name-text').innerHTML = data[id].artist.name;
                // Set modal images for slider


                const imageLoaded = (data[id].artwork.sliderImages ? data[id].artwork.sliderImages : []).map(function(image, i) {
                    let sliderContainer = document.getElementById('slider-container');
                    let imageOuterDiv = document.createElement('div');
                    imageOuterDiv.setAttribute("class", "project project" + i);
                    let imageInnerDiv = document.createElement('div');
                    if (i === 0) {
                        imageInnerDiv.setAttribute("class", "project-image project-image01");
                    } else {
                        imageInnerDiv.setAttribute("class", "project-image");
                    }
                    // if image.

                    // create slider element
                    let sliderElem;
                    // if image.url contains iframe
                    if (image.url.includes("iframe")) {
                        console.log("iframe");
                        sliderElem = image.url;
                        imageInnerDiv.innerHTML = sliderElem;
                        imageOuterDiv.appendChild(imageInnerDiv);
                        sliderContainer.appendChild(imageOuterDiv);
                    }
                    // else (is an image)
                    else {
                        sliderElem = document.createElement('img');
                        sliderElem.setAttribute("class", "sliderImage");
                        sliderElem.setAttribute("src", "../2020/img/" + image.url);
                        // add slider element
                        imageInnerDiv.appendChild(sliderElem);
                        const loaded = new Promise(function(resolve) {
                            sliderElem.onload = resolve;
                        });
                        imageOuterDiv.appendChild(imageInnerDiv);
                        sliderContainer.appendChild(imageOuterDiv);
                        return loaded
                    };
                })
                
                // Action Link
                if (data[id].artwork.details.actionLink) {                    
                    let action = document.getElementById('actionLink');
                    action.getAttributeNode("href").value = data[id].artwork.details.actionLink;
                    action.innerHTML = data[id].artwork.details.actionText;
                } else {
                    $(".actionContainer").addClass('hide')
                };

                // Artist Info: loop through array of artist bio - print new string as a <p> so displays on new line
                for (let i = 0; i < data[id].artist.bio_100w.length; i++) {
                    let mainContainer = document.getElementById("aboutArtist");
                    var p = document.createElement('p');
                    p.setAttribute("class", "about-modal-text text" + data[id].id);
                    p.innerHTML = data[id].artist.bio_100w[i];
                    mainContainer.appendChild(p);
                }
          
                // Artwork Description
                let mainContainer = document.getElementById("aboutArtwork");
                var p = document.createElement('p');
                p.setAttribute("class", "modal-text text" + data[id].id);
                p.innerHTML = data[id].artwork.artwork_description_50w_short;
                mainContainer.appendChild(p);       
                // SOCIAL MEDIA SECTION - if no social media accounts in json, then hide div
                let socialAccounts = Object.keys(data[id].social_media).length; //count how many social media accounts artist needs displaying
                if (socialAccounts === 0) {
                    $( "#socialMediaContainer" ).addClass( "hide" );
                } else {
                    $( "#socialMediaContainer" ).removeClass( "hide" );
                }
                // Show/Hide Website & add personal link
                if (data[id].social_media["website"]) {  
                    $( "#websiteIcon" ).removeClass( "hide" );
                    var l = document.getElementById('websiteLink');
                    l.getAttributeNode("href").value = data[id].social_media.website;
                } else {
                    $( "#websiteIcon" ).addClass( "hide" )
                }
                // Show/Hide Instagram & add personal link
                if (data[id].social_media["instagram"]) {  
                    $( "#instagram" ).removeClass( "hide" );
                    var i = document.getElementById('instaLink');
                    i.getAttributeNode("href").value = data[id].social_media.instagram;
                } else {
                    $( "#instagram" ).addClass( "hide" )
                }
                // Show/Hide Twitter & add personal link
                if (data[id].social_media["twitter"]) {  
                    $( "#twitter" ).removeClass( "hide" );
                    var t = document.getElementById('twitLink');
                    t.getAttributeNode("href").value = data[id].social_media.twitter;
                } else {
                    $( "#twitter" ).addClass( "hide" )
                }
                // Show/Hide LinkedIn & add personal link
                if (data[id].social_media["linkedIn"]) {  
                    $( "#linkedIn" ).removeClass( "hide" );
                    var l = document.getElementById('linkedInLink');
                    l.getAttributeNode("href").value = data[id].social_media.linkedIn;
                } else {
                    $( "#linkedIn" ).addClass( "hide" )
                }
                infoModal.modal('show');
                Promise.all(imageLoaded.slice(0, 2).concat(imageLoaded.slice(-1))).then(init)
            }
        });
        return false;
    }  
}