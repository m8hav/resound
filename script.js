"use strict";

// Global Variables
const body_wallpaper_overlay = document.getElementsByClassName("body-wallpaper-overlay")[0];

const nav_home_button_container = document.getElementById("nav-home-button-container");
const nav_explore_button_container = document.getElementById("nav-explore-button-container");
const nav_library_button_container = document.getElementById("nav-library-button-container");

const profile_button_container = document.getElementById("profile-button-container");
const profile_dropdown_overlay = document.getElementsByClassName("profile-dropdown-overlay")[0];

const content_window = document.getElementById("content-window");

const player = document.getElementById("player");

const like_button_container = document.getElementById("player-left-part-like-button-container");
const like_button_icon = like_button_container.firstElementChild;

const shuffle_button_container = document.getElementById("shuffle-button-container");
const shuffle_button_icon = shuffle_button_container.firstElementChild;

const previous_song_button_container = document.getElementById("previous-song-button-container");
const previous_song_button_icon = previous_song_button_container.firstElementChild;

const play_pause_button_container = document.getElementById("play-pause-button-container");
const play_pause_button_icon = play_pause_button_container.firstElementChild;

const next_song_button_container = document.getElementById("next-song-button-container");
const next_song_button_icon = next_song_button_container.firstElementChild;

const repeat_button_container = document.getElementById("repeat-button-container");
const repeat_button_icon = repeat_button_container.firstElementChild;

const player_options_button_container = document.getElementById("player-options-button-container");
const player_options_button_icon = player_options_button_container.firstElementChild;

const audio_controls = document.getElementById("player-audio-controls");
const audio_seek_bar = document.getElementById("player-seek-bar");
const audio_current_duration_label = document.getElementById("audio-current-duration");
const audio_total_duration_label = document.getElementById("audio-total-duration");

const queue_button_container = document.getElementById("queue-button-container");
const queue_button_icon = queue_button_container.firstElementChild;

const lyrics_button_container = document.getElementById("lyrics-button-container");
const lyrics_button_icon = lyrics_button_container.firstElementChild;

const volume_seek_bar = document.getElementById("volume-seek-bar");
const volume_button_container = document.getElementById("volume-button-container");
const volume_button_icon = volume_button_container.firstElementChild;

const player_extend_button_container = document.getElementById("player-extend-button-container");
const player_extend_button_icon = player_extend_button_container.firstElementChild;

const floating_queue_overlay = document.getElementById("floating-queue-overlay");
const floating_lyrics_overlay = document.getElementById("floating-lyrics-overlay");

const player_extended_overlay = document.getElementsByClassName("player-extended-overlay")[0];

audio_controls.volume = volume_seek_bar.value / 100;


// Content Objects
const home_page_content = {
    "categories": [
        {
            "tag": "recents",
            "type": "song",
            "name": "Recently Played",
            "items": [
                {
                    "img_name": "the_chainsmokers-closer-cover.jpg",
                    "main_label": "Closer",
                    "sub_label": "The Chainsmokers"
                },
                {
                    "img_name": "benny_blanco-i_cant_get_enough-cover.png",
                    "main_label": "I Can't Get Enough",
                    "sub_label": "Benny Blanco"
                },
                {
                    "img_name": "clean_bandit-symphony-cover.jpg",
                    "main_label": "Symphony",
                    "sub_label": "Clean Bandit"
                },
                {
                    "img_name": "dnce-cake_by_the_ocean.jpg",
                    "main_label": "Cake By The Ocean",
                    "sub_label": "DNCE"
                },
                {
                    "img_name": "illenium-crawl_outta_love-cover.jpg",
                    "main_label": "Crawl Outta Love",
                    "sub_label": "ILLENIUM"
                },
                {
                    "img_name": "justin_timberlake-mirrors-cover.jpg",
                    "main_label": "Mirrors",
                    "sub_label": "Justin Timberlake"
                },
                {
                    "img_name": "martin_garrix-in_the_name_of_love-cover.jpeg",
                    "main_label": "In The Name Of Love",
                    "sub_label": "Martin Garrix"
                },
                {
                    "img_name": "sabrina_carpenter-why-cover.png",
                    "main_label": "Why",
                    "sub_label": "Sabrina Carpenter"
                },
                {
                    "img_name": "shawn_mendes-theres_nothing_holding_me_back-cover.jpeg",
                    "main_label": "There's Nothing Holding Me Back",
                    "sub_label": "Shawn Mendes"
                },
                {
                    "img_name": "zara_larsson-wow-cover.png",
                    "main_label": "Wow",
                    "sub_label": "Zara Larsson"
                },
            ]
        },
        {
            "tag": "recommended",
            "type": "song",
            "name": "Recommended For You",
            "items": [
                {
                    "img_name": "imagine_dragons-birds-cover.jpeg",
                    "main_label": "Birds",
                    "sub_label": "Imagine Dragons"
                },
                {
                    "img_name": "alan_walker-alone_pt_2-cover.png",
                    "main_label": "Alone Pt. II",
                    "sub_label": "Alan Walker"
                },
                {
                    "img_name": "charlie_puth-attention-cover.png",
                    "main_label": "Attention",
                    "sub_label": "Charlie Puth"
                },
                {
                    "img_name": "dj_snake-taki_taki-cover.png",
                    "main_label": "Taki Taki",
                    "sub_label": "DJ Snake"
                },
                {
                    "img_name": "halsey-him_and_i-cover.jpg",
                    "main_label": "Him & I",
                    "sub_label": "Halsey"
                },
                {
                    "img_name": "marshmello-happier-cover.png",
                    "main_label": "Happier",
                    "sub_label": "Marshmello"
                },
                {
                    "img_name": "martin_garrix-scared_to_be_lonely-cover.jpg",
                    "main_label": "Scared To Be Lonely",
                    "sub_label": "Martin Garrix"
                },
                {
                    "img_name": "sam_smith-how_do_you_sleep-cover.png",
                    "main_label": "How Do You Sleep",
                    "sub_label": "Sam Smith"
                },
                {
                    "img_name": "taylor_swift-i_did_something_bad-cover.jpg",
                    "main_label": "I Did Something Bad",
                    "sub_label": "Taylor Swift"
                },
                {
                    "img_name": "wiz_khalifa-see_you_again-cover.jpeg",
                    "main_label": "See You Again",
                    "sub_label": "Wiz Khalifa"
                },
            ]
        },
        {
            "tag": "genres",
            "type": "playlist",
            "name": "Popular Genres",
            "items": [
                {
                    "img_name": "pop-cover.jpg",
                    "main_label": "Pop",
                },
                {
                    "img_name": "hip_hop-cover.jpg",
                    "main_label": "Hip-Hop",
                },
                {
                    "img_name": "edm-cover.jpg",
                    "main_label": "EDM",
                },
                {
                    "img_name": "rap-cover.png",
                    "main_label": "Rap",
                },
                {
                    "img_name": "trap-cover.jpg",
                    "main_label": "Trap",
                },
                {
                    "img_name": "rnb-cover.jpg",
                    "main_label": "R&B",
                },
                {
                    "img_name": "dance-cover.jpeg",
                    "main_label": "Dance",
                },
                {
                    "img_name": "house-cover.jpeg",
                    "main_label": "House",
                },
                {
                    "img_name": "soul_blues-cover.png",
                    "main_label": "Soul/Blues",
                },
                {
                    "img_name": "rock-cover.jpg",
                    "main_label": "Rock",
                },
            ]
        },
        {
            "tag": "moods",
            "type": "playlist",
            "name": "Moods",
            "items": [
                {
                    "img_name": "chill-cover.png",
                    "main_label": "Chill",
                },
                {
                    "img_name": "commute-cover.jpg",
                    "main_label": "Commute",
                },
                {
                    "img_name": "energy_booster-cover.jpg",
                    "main_label": "Energy Booster",
                },
                {
                    "img_name": "feel_good-cover.jpg",
                    "main_label": "Feel Good",
                },
                {
                    "img_name": "focus-cover.jpg",
                    "main_label": "Focus",
                },
                {
                    "img_name": "sad-cover.jpg",
                    "main_label": "Sad",
                },
                {
                    "img_name": "party-cover.jpg",
                    "main_label": "Party",
                },
                {
                    "img_name": "romance-cover.jpeg",
                    "main_label": "Romance",
                },
                {
                    "img_name": "sleep-cover.png",
                    "main_label": "Sleep",
                },
                {
                    "img_name": "workout-cover.jpeg",
                    "main_label": "Workout",
                },
            ]
        },
    ]
}


// Functions
function render_home_page(){
    content_window.innerHTML = "";

    for (let category_index in home_page_content.categories){
        let category = home_page_content.categories[category_index];

        let category_tag = category.tag;
        let category_type = category.type;
        let category_name = category.name;
        let category_items = category.items;

        let category_div = document.createElement("div");
        category_div.id = category_tag + "-category";
        category_div.classList.add("content-window-category");
        content_window.appendChild(category_div);

        let category_label = document.createElement("p");
        category_label.classList.add("content-window-category-label");
        category_label.innerText = category_name;
        category_div.appendChild(category_label);

        let category_items_wrapper = document.createElement("div");
        category_items_wrapper.classList.add("content-window-category-items-wrapper");
        category_div.appendChild(category_items_wrapper);
        
        for (let index in category_items){
            let item_details = category_items[index];
            let img_name = item_details["img_name"];
            let mainlabel, sublabel;
            mainlabel = item_details["main_label"];
            if (category_type == "song"){
                sublabel = item_details["sub_label"];
            }
            
            let item = document.createElement("div");
            item.classList.add("content-window-category-item");
            category_items_wrapper.appendChild(item);

            let item_cover = document.createElement("div");
            item_cover.classList.add("content-window-category-item-cover");
            item.appendChild(item_cover);

            let item_cover_image = document.createElement("img");
            item_cover_image.src = "./media/covers/" + img_name;
            item_cover_image.classList.add("content-window-category-item-cover-image");
            item_cover_image.alt = "recents_cover";
            item_cover.appendChild(item_cover_image);

            let item_cover_image_overlay = document.createElement("div");
            item_cover_image_overlay.classList.add("content-window-category-item-cover-image-overlay");
            item_cover.appendChild(item_cover_image_overlay);

            let item_cover_image_overlay_icon_wrapper = document.createElement("div");
            item_cover_image_overlay_icon_wrapper.classList.add("content-window-category-item-cover-image-overlay-icon-wrapper");
            item_cover_image_overlay.appendChild(item_cover_image_overlay_icon_wrapper);

            let overlap_wrapper_icon = document.createElement("i");
            overlap_wrapper_icon.classList.add("fa-solid", "fa-play");
            item_cover_image_overlay_icon_wrapper.appendChild(overlap_wrapper_icon);

            let item_labels = document.createElement("div");
            item_labels.classList.add("content-window-category-item-labels");
            item.appendChild(item_labels);

            let item_mainlabel = document.createElement("p");
            item_mainlabel.classList.add("content-window-category-item-mainlabel");
            item_mainlabel.innerText = mainlabel;
            item_labels.appendChild(item_mainlabel);

            if (category_type == "song"){
                let item_sublabel = document.createElement("p");
                item_sublabel.classList.add("content-window-category-item-sublabel");
                item_sublabel.innerText = sublabel;
                item_labels.appendChild(item_sublabel);
            }
        }
    }
}

function render_explore_page(){
    content_window.innerHTML = "";
    // Render explore page
}

function render_library_page(){
    content_window.innerHTML = "";
    // Render library page
}

function profile_dropdown_open_close(){
    profile_dropdown_overlay.classList.toggle("hidden-element");
    profile_dropdown_overlay.classList.toggle("shrunk-overlay");
}

function like_unlike_song(){
    if (like_button_icon.classList.contains("fa-regular")){
        // Add song to liked songs
    }
    else{
        // Remove song from liked songs
    }
    like_button_icon.classList.toggle("fa-regular");
    like_button_icon.classList.toggle("fa-solid");
}

function shuffle_on_off(){
    if (shuffle_button_icon.classList.contains("inactive-button")){
        // turn shuffle on
    }
    else{
        // turn shuffle off
    }
    shuffle_button_icon.classList.toggle("inactive-button");
}

function play_previous_song(){
    // Play previous song
    audio_controls.currentTime = 0;
}

function play_pause(){
    if (play_pause_button_icon.classList.contains("fa-circle-play")){
        audio_controls.play();
        play_pause_button_container.title = "Pause";
        var update_seek_bar_interval = setInterval(update_audio_seek_bar, 500);
    }
    else{
        audio_controls.pause();
        play_pause_button_container.title = "Play";
        clearInterval(update_seek_bar_interval);
    }
    play_pause_button_icon.classList.toggle("fa-circle-play");
    play_pause_button_icon.classList.toggle("fa-circle-pause");
}

function update_audio_seek_bar(){
    audio_seek_bar.value = audio_controls.currentTime;
    update_current_duration_time_stamp();
}

function update_current_duration_time_stamp(){
    audio_current_duration_label.innerText = new Date(audio_controls.currentTime * 1000).toISOString().slice(14, 19);
}

function play_next_song(){
    // Play next song
    audio_controls.currentTime = 0;
}

function repeat_on_off(){
    if (repeat_button_icon.classList.contains("inactive-button")){
        // turn repeat on
    }
    else{
        // turn repeat off
    }
    repeat_button_icon.classList.toggle("inactive-button");
}

function options_dialog_open_close(){
    // open or close options dialog
}

function queue_overlay_open_close(){
    if (shuffle_button_icon.classList.contains("inactive-button")){
        floating_queue_overlay.classList.toggle("shrunk-overlay");
    }
    else{
        floating_queue_overlay.classList.toggle("shrunk-overlay");
    }
    queue_button_icon.classList.toggle("inactive-button");
}

function lyrics_overlay_open_close(){
    if (lyrics_button_icon.classList.contains("fa-regular")){
        floating_lyrics_overlay.classList.toggle("shrunk-overlay");
    }
    else{
        floating_lyrics_overlay.classList.toggle("shrunk-overlay");
    }
    lyrics_button_icon.classList.toggle("fa-regular");
    lyrics_button_icon.classList.toggle("fa-solid");
}

function update_volume_icon(){
    volume_button_icon.classList = "fa-solid";
    if (audio_controls.volume == 0 || audio_controls.muted){
        volume_button_icon.classList.add("fa-volume-xmark");
    }
    else{
        volume_button_icon.classList.add("fa-volume-high");
    }
}

function mute_unmute(){
    if (audio_controls.muted){
        audio_controls.muted = false;
        volume_button_container.title = "Mute";
    }
    else{
        audio_controls.muted = true;
        volume_button_container.title = "Unmute";
    }
    update_volume_icon();
}

function update_volume_seek_bar(){
    audio_controls.volume = volume_seek_bar.value / 100;
    update_volume_icon();
}

function extend_shrink_player(){
    player_extended_overlay.classList.toggle("shrunk-overlay");
    content_window.classList.toggle("hidden-element");

    queue_button_container.classList.toggle("shrunk-overlay");
    queue_button_container.classList.toggle("hidden-element");
    lyrics_button_container.classList.toggle("shrunk-overlay");
    lyrics_button_container.classList.toggle("hidden-element");
    
    player_extend_button_icon.classList.toggle("rotate-180");
}


// Event Listeners
nav_home_button_container.onclick = render_home_page;

nav_explore_button_container.onclick = render_explore_page;

nav_library_button_container.onclick = render_library_page;

profile_button_container.onclick = profile_dropdown_open_close;

like_button_container.onclick = like_unlike_song;

shuffle_button_container.onclick = shuffle_on_off;

previous_song_button_container.onclick = play_previous_song;

play_pause_button_container.onclick = play_pause;

next_song_button_container.onclick = play_next_song;

repeat_button_container.onclick = repeat_on_off;

player_options_button_container.onclick = options_dialog_open_close;

document.onkeydown = (event) => {
    if (event.key == " " && !(document.activeElement.tagName == "INPUT" && document.activeElement.type == "text")){
        event.preventDefault();
        play_pause();
    }
}

audio_controls.onloadedmetadata = () => {
    audio_seek_bar.max = audio_controls.duration;
    update_current_duration_time_stamp();
    audio_total_duration_label.innerText = new Date(audio_controls.duration * 1000).toISOString().slice(14, 19);
}

audio_controls.onended = () => {
    audio_controls.currentTime = 0;
    audio_seek_bar.value = 0;
    play_pause();
}

audio_seek_bar.oninput = () => {
    audio_controls.currentTime = audio_seek_bar.value;
    update_current_duration_time_stamp();
}

queue_button_container.onclick = queue_overlay_open_close;

lyrics_button_container.onclick = lyrics_overlay_open_close;

volume_button_container.onclick = mute_unmute;

volume_seek_bar.oninput = update_volume_seek_bar;

player_extend_button_container.onclick = extend_shrink_player;


// Function Calls
render_home_page();