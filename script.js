"use strict";

// Global Variables
const body_wallpaper_overlay = document.getElementsByClassName("body-wallpaper-overlay")[0];
const root = document.documentElement;

// Nav
const nav = document.getElementsByTagName("nav")[0];
const nav_home_button_container = document.getElementById("nav-home-button-container");
const nav_explore_button_container = document.getElementById("nav-explore-button-container");
const nav_library_button_container = document.getElementById("nav-library-button-container");
const nav_original_width = getComputedStyle(root).getPropertyValue("--nav-width");
const nav_original_min_width = getComputedStyle(root).getPropertyValue("--nav-min-width");
const nav_original_max_width = getComputedStyle(root).getPropertyValue("--nav-max-width");
const nav_shrinking_items = Array.from(document.getElementsByClassName("nav-shrinking-item"));
const nav_button_containers = Array.from(document.getElementsByClassName("nav-button-container"));

// Header
const profile_button_container = document.getElementById("profile-button-container");
const profile_dropdown_overlay = document.getElementsByClassName("profile-dropdown-overlay")[0];

// Content Window
const right_window = document.getElementsByClassName("right-window")[0];
const content_window = document.getElementById("content-window");


// Player
const player = document.getElementsByClassName("player")[0];

const player_song_cover_image = document.getElementById("player-song-cover-image");

const player_song_name = document.getElementById("player-song-name");
const player_song_artist = document.getElementById("player-song-artist");

const player_like_button_container = document.getElementById("player-left-part-like-button-container");
const player_like_button_icon = player_like_button_container.firstElementChild;

const player_shuffle_button_container = document.getElementById("shuffle-button-container");
const player_shuffle_button_icon = player_shuffle_button_container.firstElementChild;

const player_previous_song_button_container = document.getElementById("previous-song-button-container");
// const player_previous_song_button_icon = player_previous_song_button_container.firstElementChild;

const player_play_pause_button_container = document.getElementById("play-pause-button-container");
const player_play_pause_button_icon = player_play_pause_button_container.firstElementChild;

const player_next_song_button_container = document.getElementById("next-song-button-container");
// const player_next_song_button_icon = player_next_song_button_container.firstElementChild;

const player_repeat_button_container = document.getElementById("repeat-button-container");
const player_repeat_button_icon_one = player_repeat_button_container.firstElementChild;
const player_repeat_button_icon = player_repeat_button_container.lastElementChild;

const player_options_button_container = document.getElementById("player-options-button-container");
// const player_options_button_icon = player_options_button_container.firstElementChild;

const player_audio_controls = document.getElementById("player-audio-controls");
const player_audio_seek_bar = document.getElementById("player-seek-bar");
const player_audio_current_duration_label = document.getElementById("audio-current-duration");
const player_audio_total_duration_label = document.getElementById("audio-total-duration");

const player_queue_button_container = document.getElementById("queue-button-container");
const player_queue_button_icon = player_queue_button_container.firstElementChild;

const player_lyrics_button_container = document.getElementById("lyrics-button-container");
const player_lyrics_button_icon = player_lyrics_button_container.firstElementChild;

const player_volume_seek_bar = document.getElementById("volume-seek-bar");
const player_volume_button_container = document.getElementById("volume-button-container");
const player_volume_button_icon = player_volume_button_container.firstElementChild;

const player_extend_button_container = document.getElementById("player-extend-button-container");
const player_extend_button_icon = player_extend_button_container.firstElementChild;

const player_floating_part = document.getElementById("player-floating-part");
const player_floating_part_full_height = "calc(100% - var(--header-height) - 12rem)"

const floating_queue_overlay = document.getElementById("floating-queue-overlay");
const floating_queue_overlay_content_wrapper = floating_queue_overlay.getElementsByClassName("queue-lyrics-content-wrapper")[0];

const floating_lyrics_overlay = document.getElementById("floating-lyrics-overlay");
const floating_lyrics_overlay_content_wrapper = floating_lyrics_overlay.getElementsByClassName("queue-lyrics-content-wrapper")[0];

const player_extended_overlay = document.getElementsByClassName("player-extended-overlay")[0];
const player_extended_queue_content_wrapper = document.getElementById("player-extended-queue-content-wrapper");

const player_extended_cover = document.getElementById("player-extended-cover");
player_extended_cover.innerHTML = `<img id="player-extended-cover-image" src="">`;
const player_extended_cover_image = document.getElementById("player-extended-cover-image");

const player_extended_lyrics_content_wrapper = document.getElementById("player-extended-lyrics-content-wrapper");

player_audio_controls.volume = player_volume_seek_bar.value / 100;


// Content Objects
import songs_obj from "./media/obj_jsons/songs.json" assert {type: 'json'};
import playlists_obj from "./media/obj_jsons/playlists.json" assert {type: 'json'}
import tabs_obj from "./media/manual_obj_jsons/tabs.json" assert {type: 'json'}
import categories_obj from "./media/manual_obj_jsons/categories.json" assert {type: 'json'}

var first_play = true;

var queue_song_id_list = [];
var queue_played_song_indexes_list = [];
var queue_current_song_index;
var shuffle = localStorage.getItem("shuffle") ? JSON.parse(localStorage.getItem("shuffle")) : false;
var repeat = localStorage.getItem("repeat") ? JSON.parse(localStorage.getItem("repeat")) : 0;
var current_song_id;

var liked_song_ids_list = localStorage.getItem("liked_song_ids_list") ? JSON.parse(localStorage.getItem("liked_song_ids_list")) : [];
var saved_playlist_ids_list = localStorage.getItem("saved_playlist_ids_list") ? JSON.parse(localStorage.getItem("saved_playlist_ids_list")) : [];

if (shuffle){
    player_shuffle_button_icon.classList.remove("inactive-button");
}
if (repeat == 1){
    player_repeat_button_icon.classList.remove("inactive-button");
}
if (repeat == 2){
    player_repeat_button_icon_one.classList.remove("shrunk-element");
    player_repeat_button_icon.classList.add("small-button");
}


// Functions
// function scrollIntoViewIfNeeded(target) { 
//     if (target.getBoundingClientRect().bottom > target.parentElement.innerHeight) {
//         target.scrollIntoView(false);
//     }

//     if (target.getBoundingClientRect().top < 0) {
//         target.scrollIntoView();
//     } 
// }

function scroll_to_item(item) {
    let item_container = item.getBoundingClientRect();
    // scroll top of item into view if it is above visible area of content wrapper
    if (item_container.scrollTop > item.offsetTop) {
        console.log("scrolling for top");
        console.log("Parent ScrollTop: " + item_container.scrollTop);
        console.log("Parent ClientHeight: " + item_container.clientHeight);
        console.log("Item OffsetTop: " + item.offsetTop);
        console.log("Item ScrollHeight: " + item.scrollHeight);
        console.log(" ");
        item.scrollIntoView();
    }
    // scroll bottom of item into view if it is under visible area of content wrapper
    if (item_container.scrollTop + item_container.clientHeight < item.offsetTop + item.scrollHeight) {
        console.log("scrolling for bottom");
        console.log("Parent ScrollTop: " + item_container.scrollTop);
        console.log("Parent ClientHeight: " + item_container.clientHeight);
        console.log("Item OffsetTop: " + item.offsetTop);
        console.log("Item ScrollHeight: " + item.scrollHeight);
        console.log(" ");
        item.scrollIntoView(false);
    }
}

function shuffle_array(array) {
    let returnArray = [...array], currentIndex = returnArray.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [returnArray[currentIndex], returnArray[randomIndex]] = [returnArray[randomIndex], returnArray[currentIndex]];
    }
    return returnArray;
  }

function return_duration_string(duration){
    return new Date(duration * 1000).toISOString().slice(14, 19);
}

function update_audio_seek_bar_and_time_stamp(){
    // updating seek bar current position and max value
    player_audio_seek_bar.value = player_audio_controls.currentTime;
    player_audio_seek_bar.max = player_audio_controls.duration;
    // updating current timestamp
    player_audio_current_duration_label.innerText = return_duration_string(player_audio_controls.currentTime);
}

function render_tab(tab_tag){
    toggle_extended_player(false);      // to close extended player when tab clicked with it open
    content_window.innerHTML = "";
    
    let tab_obj = tabs_obj[tab_tag];

    let tab_category_ids = tab_obj.tab_category_ids;

    for (let category_index in tab_category_ids){

        let category_id = tab_category_ids[category_index];

        // getting category object
        let category_obj = categories_obj[category_id];

        let category_tag = category_obj.category_tag;
        let category_name = category_obj.category_name;
        let category_items_type = category_obj.category_items_type;
        let category_item_ids = category_obj.category_item_ids;

        // creating content window category
        let content_window_category = document.createElement("div");
        content_window_category.id = category_tag + "-category";
        content_window_category.classList.add("content-window-category");
        content_window.appendChild(content_window_category);

        // creating scroll buttons
        let content_window_category_scroll_left_button = document.createElement("button");
        content_window_category_scroll_left_button.classList.add("content-window-category-scroll-button");
        content_window_category_scroll_left_button.classList.add("content-window-category-scroll-left-button");
        content_window_category_scroll_left_button.classList.add("invisible-element");
        content_window_category_scroll_left_button.innerHTML = "<i class='fa-solid fa-chevron-left'></i>";
        content_window_category.appendChild(content_window_category_scroll_left_button);
        
        let content_window_category_scroll_right_button = document.createElement("button");
        content_window_category_scroll_right_button.classList.add("content-window-category-scroll-button");
        content_window_category_scroll_right_button.classList.add("content-window-category-scroll-right-button");
        content_window_category_scroll_right_button.innerHTML = "<i class='fa-solid fa-chevron-right'></i>";
        content_window_category.appendChild(content_window_category_scroll_right_button);

        // creating category label and items wrapper
        let content_window_category_label = document.createElement("p");
        content_window_category_label.classList.add("content-window-category-label");
        content_window_category_label.innerText = category_name;
        content_window_category.appendChild(content_window_category_label);

        let content_window_category_items_wrapper = document.createElement("div");
        content_window_category_items_wrapper.classList.add("content-window-category-items-wrapper");
        content_window_category.appendChild(content_window_category_items_wrapper);

        // adding scroll buttons event listeners
        content_window_category_scroll_left_button.onclick = () => {
            let scroll_amount = (Math.floor(content_window_category_items_wrapper.clientWidth/200) - 1) * 200;
            content_window_category_items_wrapper.scrollLeft -= scroll_amount;
        };
        content_window_category_scroll_right_button.onclick = () => {
            let scroll_amount = (Math.floor(content_window_category_items_wrapper.clientWidth/200) - 1) * 200;
            content_window_category_items_wrapper.scrollLeft += scroll_amount;
        };

        // adding scroll event listener to category items wrapper to show/hide scroll buttons
        content_window_category_items_wrapper.onscroll = () => {
            if (content_window_category_items_wrapper.scrollLeft == 0){
                content_window_category_scroll_left_button.classList.add("invisible-element");
            }
            else{
                content_window_category_scroll_left_button.classList.remove("invisible-element");
            }
            if (content_window_category_items_wrapper.scrollLeft >= content_window_category_items_wrapper.scrollWidth - content_window_category_items_wrapper.clientWidth){
                content_window_category_scroll_right_button.classList.add("invisible-element");
            }
            else{
                content_window_category_scroll_right_button.classList.remove("invisible-element");
            }
        }
        
        // adding items to category items wrapper
        for (let category_item_index in category_item_ids){

            let category_item_id = category_item_ids[category_item_index];
            
            let content_window_category_item = document.createElement("div");
            content_window_category_item.classList.add("content-window-category-item");
            content_window_category_items_wrapper.appendChild(content_window_category_item);

            let content_window_category_item_cover_wrapper = document.createElement("div");
            content_window_category_item_cover_wrapper.classList.add("content-window-category-item-cover-wrapper");
            content_window_category_item.appendChild(content_window_category_item_cover_wrapper);



            let category_item_obj, content_window_category_mainlabel, content_window_category_sublabel;

            let content_window_category_item_cover;

            if (category_items_type == "song"){
                category_item_obj = songs_obj[category_item_id];
                content_window_category_mainlabel = category_item_obj.song_name;
                content_window_category_sublabel = category_item_obj.song_artist_names;
                
                // adding image to cover if category item is a song
                content_window_category_item_cover = document.createElement("img");
                content_window_category_item_cover.src = "./media/covers/" + category_item_id + ".jpg";
                content_window_category_item_cover.alt = category_tag + "_item_cover";
            }
            else{
                category_item_obj = playlists_obj[category_item_id];
                content_window_category_mainlabel = category_item_obj.playlist_name;
                content_window_category_sublabel = category_item_obj.playlist_song_artist_names.join(", ");
                
                // adding collage container div to cover if category item is a playlist and has 4 or more songs
                if (category_item_obj.playlist_song_ids.length >= 4){
                    content_window_category_item_cover = document.createElement("div");
                    for (let i = 0; i < 4; i++){
                        let content_window_category_item_cover_collage_image = document.createElement("img");
                        content_window_category_item_cover_collage_image.src = "./media/covers/" + category_item_obj.playlist_song_ids[i] + ".jpg";
                        content_window_category_item_cover_collage_image.classList.add("content-window-category-item-cover-collage-image");
                        content_window_category_item_cover_collage_image.alt = category_tag + "_item_cover";
                        content_window_category_item_cover.appendChild(content_window_category_item_cover_collage_image);
                    }
                }
                // otherwise adding single image to cover
                else{
                    content_window_category_item_cover = document.createElement("img");
                    content_window_category_item_cover.src = "./media/covers/" + category_item_obj.playlist_song_ids[0] + ".jpg";
                    content_window_category_item_cover.alt = category_tag + "_item_cover";
                }
            }
            
            content_window_category_item_cover.classList.add("content-window-category-item-cover");
            content_window_category_item_cover_wrapper.appendChild(content_window_category_item_cover);

            let content_window_category_item_cover_overlay = document.createElement("div");
            content_window_category_item_cover_overlay.classList.add("content-window-category-item-cover-overlay");
            content_window_category_item_cover_wrapper.appendChild(content_window_category_item_cover_overlay);

            let content_window_category_item_cover_overlay_icon_wrapper = document.createElement("div");
            content_window_category_item_cover_overlay_icon_wrapper.classList.add("content-window-category-item-cover-overlay-icon-wrapper");
            content_window_category_item_cover_overlay.appendChild(content_window_category_item_cover_overlay_icon_wrapper);

            let content_window_category_overlay_wrapper_icon = document.createElement("i");
            content_window_category_overlay_wrapper_icon.classList.add("fa-solid", "fa-play");
            content_window_category_item_cover_overlay_icon_wrapper.appendChild(content_window_category_overlay_wrapper_icon);

            let content_window_category_item_labels = document.createElement("div");
            content_window_category_item_labels.classList.add("content-window-category-item-labels");
            content_window_category_item.appendChild(content_window_category_item_labels);

            let content_window_category_item_mainlabel = document.createElement("p");
            content_window_category_item_mainlabel.classList.add("content-window-category-item-mainlabel");
            content_window_category_item_mainlabel.innerText = content_window_category_mainlabel;
            content_window_category_item_labels.appendChild(content_window_category_item_mainlabel);

            let content_window_category_item_sublabel = document.createElement("p");
            content_window_category_item_sublabel.classList.add("content-window-category-item-sublabel");
            content_window_category_item_sublabel.innerText = content_window_category_sublabel;
            content_window_category_item_labels.appendChild(content_window_category_item_sublabel);

            // add event listener to play that song or render and play that playlist
            if (category_items_type == "song"){
                content_window_category_item.onclick = () => play_song(category_item_id);
            }
            else{
                content_window_category_item.onclick = () => render_playlist(category_item_id);
                content_window_category_item_cover_overlay_icon_wrapper.onclick = () => {
                    play_song(category_item_obj.playlist_song_ids[0], category_item_id);
                }
            }
        }
    }
    content_window.scrollTo(0, 0);
}

function render_explore_page(){
    content_window.innerHTML = "";
    // Render explore page

    content_window.scrollTo(0, 0);

}

function render_library_page(){
    content_window.innerHTML = "";
    // Render library page

    // Render playlists
    render_playlist();

    content_window.scrollTo(0, 0);

}

function render_playlist(playlist_id){
    content_window.innerHTML = "";
    
    let playlist_obj = playlists_obj[playlist_id];

    let playlist_name = playlist_obj.playlist_name;
    let playlist_song_artist_names = playlist_obj.playlist_song_artist_names.join(", ");
    let playlist_song_ids = playlist_obj.playlist_song_ids;

    // playlist description
    let playlist_description = document.createElement("div");
    playlist_description.id = "playlist-description";
    content_window.appendChild(playlist_description);


    // playlist descripton cover
    let playlist_description_cover_wrapper = document.createElement("div");
    playlist_description_cover_wrapper.id = "playlist-description-cover-wrapper";
    playlist_description.appendChild(playlist_description_cover_wrapper);
    
    let playlist_description_cover;

    // adding collage container div to cover if category item is a playlist and has 4 or more songs
    if (playlist_song_ids.length >= 4){
        playlist_description_cover = document.createElement("div");
        for (let i = 0; i < 4; i++){
            let playlist_description_cover_collage_image = document.createElement("img");
            playlist_description_cover_collage_image.src = "./media/covers/" + playlist_song_ids[i] + ".jpg";
            playlist_description_cover_collage_image.classList.add("playlist-description-cover-collage-image");
            playlist_description_cover_collage_image.alt = "playlist_cover";
            playlist_description_cover.appendChild(playlist_description_cover_collage_image);
        }
    }
    // otherwise adding single image to cover
    else{
        playlist_description_cover = document.createElement("img");
        playlist_description_cover.src = "./media/covers/" + playlist_song_ids[0] + ".jpg";
        playlist_description_cover.alt = "playlist_cover";
    }

    playlist_description_cover.id = "playlist-description-cover";
    playlist_description_cover_wrapper.appendChild(playlist_description_cover);

    // playlist description info and buttons
    let playlist_description_info_and_buttons = document.createElement("div");
    playlist_description_info_and_buttons.id = "playlist-description-info-and-buttons";
    playlist_description.appendChild(playlist_description_info_and_buttons);

    // playlist description info
    let playlist_description_info = document.createElement("div");
    playlist_description_info.id = "playlist-description-info";
    playlist_description_info_and_buttons.appendChild(playlist_description_info);

    let playlist_info_title = document.createElement("p");
    playlist_info_title.id = "playlist-info-title";
    playlist_info_title.innerText = playlist_name;
    playlist_description_info.appendChild(playlist_info_title);

    let playlist_info_artists = document.createElement("p");
    playlist_info_artists.id = "playlist-info-artists";
    playlist_info_artists.innerText = playlist_song_artist_names;
    playlist_description_info.appendChild(playlist_info_artists);

    let playlist_info_count_and_duration = document.createElement("div");
    playlist_info_count_and_duration.id = "playlist-info-count-and-duration";
    playlist_description_info.appendChild(playlist_info_count_and_duration);

    let playlist_info_song_count = document.createElement("p");
    playlist_info_song_count.id = "playlist-info-song-count";
    playlist_info_count_and_duration.appendChild(playlist_info_song_count);

    let playlist_info_song_count_number = document.createElement("span");
    playlist_info_song_count_number.id = "playlist-info-song-count-number";
    playlist_info_song_count_number.innerText = playlist_song_ids.length;
    playlist_info_song_count.appendChild(playlist_info_song_count_number);

    let playlist_info_song_count_label = document.createElement("span");
    playlist_info_song_count_label.id = "playlist-info-song-count-label";
    playlist_info_song_count_label.innerHTML = "&nbsp;songs &nbsp;•&nbsp;&nbsp;";
    playlist_info_song_count.appendChild(playlist_info_song_count_label);

    let playlist_info_duration = document.createElement("p");
    playlist_info_duration.id = "playlist-info-duration";
    playlist_info_count_and_duration.appendChild(playlist_info_duration);

    let playlist_info_duration_sum = 0;
    let playlist_info_duration_number = document.createElement("span");
    playlist_info_duration_number.id = "playlist-info-duration-number";
    playlist_info_duration.appendChild(playlist_info_duration_number);

    let playlist_info_duration_label = document.createElement("span");
    playlist_info_duration_label.id = "playlist-info-duration-label";
    playlist_info_duration_label.innerHTML = "&nbsp;minutes";
    playlist_info_duration.appendChild(playlist_info_duration_label);


    // playlist description buttons
    let playlist_description_buttons = document.createElement("div");
    playlist_description_buttons.id = "playlist-description-buttons";
    playlist_description_info_and_buttons.appendChild(playlist_description_buttons);

    // play button
    let playlist_description_play_button = document.createElement("button");
    playlist_description_play_button.id = "playlist-description-play-button";
    playlist_description_play_button.classList.add("playlist-description-button");
    playlist_description_play_button.title = "Play";
    playlist_description_buttons.appendChild(playlist_description_play_button);
    
    let playlist_description_play_button_icon = document.createElement("i");
    playlist_description_play_button_icon.classList.add("fa-solid");
    playlist_description_play_button_icon.classList.add("fa-play");
    playlist_description_play_button_icon.classList.add("playlist-description-button-icon");
    playlist_description_play_button.appendChild(playlist_description_play_button_icon);

    let playlist_description_play_button_label = document.createElement("p");
    playlist_description_play_button_label.classList.add("playlist-description-button-label");
    playlist_description_play_button_label.innerText = "Play";
    playlist_description_play_button.appendChild(playlist_description_play_button_label);

    // shuffle play button
    let playlist_description_shuffle_play_button = document.createElement("button");
    playlist_description_shuffle_play_button.id = "playlist-description-shuffle-play-button";
    playlist_description_shuffle_play_button.classList.add("playlist-description-button");
    playlist_description_shuffle_play_button.title = "Shuffle Play";
    playlist_description_buttons.appendChild(playlist_description_shuffle_play_button);
    
    let playlist_description_shuffle_play_button_icon = document.createElement("i");
    playlist_description_shuffle_play_button_icon.classList.add("fa-solid");
    playlist_description_shuffle_play_button_icon.classList.add("fa-shuffle");
    playlist_description_shuffle_play_button_icon.classList.add("playlist-description-button-icon");
    playlist_description_shuffle_play_button.appendChild(playlist_description_shuffle_play_button_icon);

    let playlist_description_shuffle_play_button_label = document.createElement("p");
    playlist_description_shuffle_play_button_label.classList.add("playlist-description-button-label");
    playlist_description_shuffle_play_button_label.innerText = "Shuffle Play";
    playlist_description_shuffle_play_button.appendChild(playlist_description_shuffle_play_button_label);

    // add to library button
    let playlist_description_add_to_library_button = document.createElement("button");
    playlist_description_add_to_library_button.id = "playlist-description-add-to-library-button";
    playlist_description_add_to_library_button.classList.add("playlist-description-button");
    playlist_description_add_to_library_button.title = "Add to Library";
    playlist_description_buttons.appendChild(playlist_description_add_to_library_button);
    
    let playlist_description_add_to_library_button_icon = document.createElement("i");
    playlist_description_add_to_library_button_icon.classList.add("fa-solid");
    playlist_description_add_to_library_button_icon.classList.add("fa-plus");
    playlist_description_add_to_library_button_icon.classList.add("playlist-description-button-icon");
    playlist_description_add_to_library_button.appendChild(playlist_description_add_to_library_button_icon);

    let playlist_description_add_to_library_button_label = document.createElement("p");
    playlist_description_add_to_library_button_label.classList.add("playlist-description-button-label");
    playlist_description_add_to_library_button_label.innerText = "Add to Library";
    playlist_description_add_to_library_button.appendChild(playlist_description_add_to_library_button_label);

    // more options button
    let playlist_description_more_options_button = document.createElement("button");
    playlist_description_more_options_button.id = "playlist-description-play-button";
    playlist_description_more_options_button.classList.add("playlist-description-button");
    playlist_description_more_options_button.title = "More Options";
    playlist_description_buttons.appendChild(playlist_description_more_options_button);
    
    let playlist_description_more_options_button_icon = document.createElement("i");
    playlist_description_more_options_button_icon.classList.add("fa-solid");
    playlist_description_more_options_button_icon.classList.add("fa-ellipsis-vertical");
    playlist_description_more_options_button_icon.classList.add("playlist-description-button-icon");
    playlist_description_more_options_button.appendChild(playlist_description_more_options_button_icon);

    let playlist_description_more_options_button_label = document.createElement("p");
    playlist_description_more_options_button_label.classList.add("playlist-description-button-label");
    playlist_description_more_options_button_label.innerText = "More Options";
    playlist_description_more_options_button.appendChild(playlist_description_more_options_button_label);

    // playlist buttons event listeners
    playlist_description_play_button.onclick = () => play_song(playlist_song_ids[0], playlist_id);
    
    playlist_description_shuffle_play_button.onclick = () => play_song(playlist_song_ids[Math.floor(Math.random() * playlist_song_ids.length)], playlist_id, false, true);

    playlist_description_add_to_library_button.onclick = () => add_playlist_to_library(playlist_id);

    
    // playlist contents
    let playlist_content = document.createElement("div");
    playlist_content.id = "playlist-content";
    content_window.appendChild(playlist_content);

    // playlist contents header
    let playlist_content_header = document.createElement("div");
    playlist_content_header.id = "playlist-content-header";
    playlist_content.appendChild(playlist_content_header);

    let playlist_content_header_cover_space = document.createElement("div");
    playlist_content_header_cover_space.classList.add("playlist-content-cover-column");
    playlist_content_header.appendChild(playlist_content_header_cover_space);

    let playlist_content_header_name = document.createElement("p");
    playlist_content_header_name.classList.add("playlist-content-name-column");
    playlist_content_header_name.innerText = "Name";
    playlist_content_header.appendChild(playlist_content_header_name);

    let playlist_content_header_artists = document.createElement("p");
    playlist_content_header_artists.classList.add("playlist-content-artists-column");
    playlist_content_header_artists.innerText = "Artists";
    playlist_content_header.appendChild(playlist_content_header_artists);

    let playlist_content_header_duration = document.createElement("p");
    playlist_content_header_duration.classList.add("playlist-content-duration-column");
    playlist_content_header_duration.innerText = "Duration";
    playlist_content_header.appendChild(playlist_content_header_duration);

    let playlist_content_header_options = document.createElement("p");
    playlist_content_header_options.classList.add("playlist-content-options-column");
    playlist_content_header_options.innerText = "Options";
    playlist_content_header.appendChild(playlist_content_header_options);

    let header_hr_line = document.createElement("hr");
    playlist_content.appendChild(header_hr_line);
    
    // playlist contents body
    let playlist_content_items = document.createElement("div");
    playlist_content_items.id = "playlist-content-items";
    playlist_content.appendChild(playlist_content_items);

    // playlist contents items
    for (let song_index in playlist_song_ids){

        // getting song object and info
        let song_id = playlist_song_ids[song_index];
        let song_obj = songs_obj[song_id];

        let song_name = song_obj.song_name;
        let song_artist_names = song_obj.song_artist_names;
        let song_duration = song_obj.song_duration;

        // playlist item
        let playlist_content_item = document.createElement("div");
        playlist_content_item.classList.add("playlist-content-item");
        playlist_content_item.id = "playlist-content-item-song-" + song_id;
        playlist_content_items.appendChild(playlist_content_item);

        // playlist item cover
        let playlist_content_item_cover = document.createElement("div");
        playlist_content_item_cover.classList.add("playlist-content-cover-column");
        playlist_content_item_cover.title = "Play";
        playlist_content_item.appendChild(playlist_content_item_cover);

        let playlist_content_item_cover_image = document.createElement("img");
        playlist_content_item_cover_image.classList.add("playlist-content-item-cover-image");
        playlist_content_item_cover_image.src = "./media/covers/" + song_id + ".jpg";
        playlist_content_item_cover_image.alt = "playlist_item_cover";
        playlist_content_item_cover.appendChild(playlist_content_item_cover_image);

        let playlist_content_item_cover_image_overlay_icon_wrapper = document.createElement("div");
        playlist_content_item_cover_image_overlay_icon_wrapper.classList.add("content-item-cover-overlay-icon-wrapper");
        playlist_content_item_cover.appendChild(playlist_content_item_cover_image_overlay_icon_wrapper);

        let playlist_content_item_cover_image_overlay_icon = document.createElement("i");
        playlist_content_item_cover_image_overlay_icon.classList.add("fa-solid");
        playlist_content_item_cover_image_overlay_icon.classList.add("fa-play");
        playlist_content_item_cover_image_overlay_icon.classList.add("playlist-content-item-cover-image-overlay-icon");
        playlist_content_item_cover_image_overlay_icon_wrapper.appendChild(playlist_content_item_cover_image_overlay_icon);

        // playlist item name
        let playlist_content_item_name = document.createElement("p");
        playlist_content_item_name.classList.add("playlist-content-name-column");
        playlist_content_item_name.innerText = song_name;
        playlist_content_item_name.title = song_name;
        playlist_content_item.appendChild(playlist_content_item_name);

        // playlist item artists
        let playlist_content_item_artists = document.createElement("p");
        playlist_content_item_artists.classList.add("playlist-content-artists-column");
        playlist_content_item_artists.innerText = song_artist_names;
        playlist_content_item_artists.title = song_artist_names;
        playlist_content_item.appendChild(playlist_content_item_artists);

        // playlist item duration
        let playlist_content_item_duration = document.createElement("p");
        playlist_content_item_duration.classList.add("playlist-content-duration-column");
        playlist_content_item_duration.innerText = return_duration_string(song_duration);
        playlist_info_duration_sum += song_duration;
        playlist_content_item.appendChild(playlist_content_item_duration);


        // playlist item options
        let playlist_content_item_options = document.createElement("div");
        playlist_content_item_options.classList.add("playlist-content-options-column");
        playlist_content_item.appendChild(playlist_content_item_options);

        // playlist item option like button
        let playlist_content_item_like_button = document.createElement("button");
        playlist_content_item_like_button.classList.add("playlist-content-item-like-button");
        playlist_content_item_like_button.classList.add("playlist-content-item-option-button");
        playlist_content_item_options.appendChild(playlist_content_item_like_button);

        let playlist_content_item_like_button_icon = document.createElement("i");
        if (liked_song_ids_list.includes(song_id)){
            playlist_content_item_like_button_icon.classList.add("fa-solid");
        } else {
            playlist_content_item_like_button_icon.classList.add("fa-regular");
        }
        playlist_content_item_like_button_icon.classList.add("fa-heart");
        playlist_content_item_like_button_icon.classList.add("playlist-content-item-option-button-icon");
        playlist_content_item_like_button_icon.id = "playlist-content-item-like-button-icon-song-" + song_id;
        playlist_content_item_like_button.appendChild(playlist_content_item_like_button_icon);

        playlist_content_item_like_button.onclick = () => {
            if (liked_song_ids_list.includes(song_id)){
                playlist_content_item_like_button_icon.classList.remove("fa-solid");
                playlist_content_item_like_button_icon.classList.add("fa-regular");
            } else {
                playlist_content_item_like_button_icon.classList.remove("fa-regular");
                playlist_content_item_like_button_icon.classList.add("fa-solid");
            }
            like_unlike_song(song_id);
        };

        // playlist item option options button
        let playlist_content_item_options_button = document.createElement("button");
        playlist_content_item_options_button.classList.add("playlist-content-item-options-button");
        playlist_content_item_options_button.classList.add("playlist-content-item-option-button");
        playlist_content_item_options.appendChild(playlist_content_item_options_button);

        let playlist_content_item_options_button_icon = document.createElement("i");
        playlist_content_item_options_button_icon.classList.add("fa-solid");
        playlist_content_item_options_button_icon.classList.add("fa-ellipsis-vertical");
        playlist_content_item_options_button_icon.classList.add("playlist-content-item-option-button-icon");
        playlist_content_item_options_button.appendChild(playlist_content_item_options_button_icon);
        
        // highlighting current playing song in playlist contents
        // highlight_playing_item alone doesn't do it because category_item_overlay_icon_wrapper event calls play_song before the category_item_overlay event that renders playlist
        // so the play_song function is called before the playlist is rendered and the current song is not highlighted
        if (song_id == current_song_id){
            playlist_content_item.classList.add("content-item-playing");
            playlist_content_item.classList.add("content-item-playing");
            playlist_content_item_cover_image_overlay_icon.classList.remove("fa-play");
            playlist_content_item_cover_image_overlay_icon.classList.add("fa-volume-high");
            playlist_content_item_cover_image_overlay_icon_wrapper.classList.add("opacity-1");
        }
        
        // add event listeners to play that song
        playlist_content_item_cover.addEventListener("click", function(){
            play_song(song_id);
        });
        playlist_content_item_name.addEventListener("click", function(){
            play_song(song_id);
        });
    }

    playlist_info_duration_number.innerText = Math.ceil(playlist_info_duration_sum / 60);
    
    content_window.scrollTo(0, 0);
}

function add_playlist_to_library(playlist_id){
    saved_playlist_ids_list.push(playlist_id);
    localStorage.setItem("saved_playlist_ids_list", JSON.stringify(saved_playlist_ids_list));
}

function render_queue(item_id, song = false, append_queue = false, shuffle_current_queue = false){

    // song == true means item_id is a song id
    // replacing queue with the new song's playlist
    if (song) {
        if ( ! queue_song_id_list.includes(item_id) ){
            let playlist_id = songs_obj[item_id].song_playlist_ids[0];
            queue_song_id_list = [...playlists_obj[playlist_id].playlist_song_ids];
        }
    }
    // appending queue with new playlist's songs if append_queue == true
    // otherwise replacing queue with new playlist's songs if append_queue == false
    else {
        if (append_queue){
            queue_song_id_list = queue_song_id_list.concat([...playlists_obj[item_id].playlist_song_ids]);
        }else {
            if (shuffle_current_queue){
                queue_song_id_list = shuffle_array([...playlists_obj[item_id].playlist_song_ids]);
                queue_song_id_list = queue_song_id_list.filter(song_id => song_id != current_song_id);
                queue_song_id_list.unshift(current_song_id);
            }
            else
                queue_song_id_list = [...playlists_obj[item_id].playlist_song_ids];
        }
    }

    queue_current_song_index = queue_song_id_list.lastIndexOf(current_song_id);

    floating_queue_overlay_content_wrapper.innerHTML = "";
    player_extended_queue_content_wrapper.innerHTML = "";
    
    for (let song_index in queue_song_id_list){

        // getting song object and info
        let song_id = queue_song_id_list[song_index];
        let song_obj = songs_obj[song_id];

        let song_name = song_obj.song_name;
        let song_artist_names = song_obj.song_artist_names;
        let song_duration = song_obj.song_duration;

        // creating queue overlay item
        let queue_overlay_content_item = document.createElement("div");
        queue_overlay_content_item.classList.add("queue-overlay-content-item");
        queue_overlay_content_item.id = "queue-overlay-content-item-song-" + song_id;
        floating_queue_overlay_content_wrapper.appendChild(queue_overlay_content_item);

        // queue overlay item cover
        let queue_overlay_content_item_cover = document.createElement("div");
        queue_overlay_content_item_cover.classList.add("queue-content-item-cover-column");
        queue_overlay_content_item.appendChild(queue_overlay_content_item_cover);    

        let queue_overlay_content_item_cover_image = document.createElement("img");
        queue_overlay_content_item_cover_image.classList.add("queue-content-item-cover-image");
        queue_overlay_content_item_cover_image.src = "./media/covers/" + song_id + ".jpg";
        queue_overlay_content_item_cover_image.alt = "queue_item_cover";
        queue_overlay_content_item_cover.appendChild(queue_overlay_content_item_cover_image);

        let queue_overlay_content_item_cover_image_overlay_icon_wrapper = document.createElement("div");
        queue_overlay_content_item_cover_image_overlay_icon_wrapper.classList.add("content-item-cover-overlay-icon-wrapper");
        queue_overlay_content_item_cover.appendChild(queue_overlay_content_item_cover_image_overlay_icon_wrapper);

        let queue_overlay_content_item_cover_image_overlay_icon = document.createElement("i");
        queue_overlay_content_item_cover_image_overlay_icon.classList.add("fa-solid");
        queue_overlay_content_item_cover_image_overlay_icon.classList.add("fa-play");
        queue_overlay_content_item_cover_image_overlay_icon.classList.add("queue-content-item-cover-overlay-icon");
        queue_overlay_content_item_cover_image_overlay_icon_wrapper.appendChild(queue_overlay_content_item_cover_image_overlay_icon);

        // queue overlay item name and artists
        let queue_overlay_content_item_name_and_artists_column = document.createElement("div");
        queue_overlay_content_item_name_and_artists_column.classList.add("queue-content-item-name-and-artists-column");
        queue_overlay_content_item.appendChild(queue_overlay_content_item_name_and_artists_column);

        let queue_overlay_content_item_name = document.createElement("p");
        queue_overlay_content_item_name.classList.add("queue-content-item-name-row");
        queue_overlay_content_item_name.innerText = song_name;
        queue_overlay_content_item_name_and_artists_column.appendChild(queue_overlay_content_item_name);

        let queue_overlay_content_item_artists = document.createElement("p");
        queue_overlay_content_item_artists.classList.add("queue-content-item-artists-row");
        queue_overlay_content_item_artists.innerText = song_artist_names;
        queue_overlay_content_item_name_and_artists_column.appendChild(queue_overlay_content_item_artists);
        
        // queue overlay item duration
        let queue_overlay_content_item_duration = document.createElement("p");
        queue_overlay_content_item_duration.classList.add("queue-content-item-duration-column");
        queue_overlay_content_item_duration.innerText = return_duration_string(song_duration);
        queue_overlay_content_item.appendChild(queue_overlay_content_item_duration);

        // adding clone of queue overlay item to player extended overlay queue part
        let player_extended_queue_content_item = queue_overlay_content_item.cloneNode(true);
        player_extended_queue_content_item.id = "player-extended-queue-content-item-song-" + song_id;
        player_extended_queue_content_wrapper.appendChild(player_extended_queue_content_item);
        if (song_id == current_song_id){
            player_extended_queue_content_item.scrollIntoView();
        }

        // add event listeners to play that song
        queue_overlay_content_item.onclick = () => play_song(song_id);
        player_extended_queue_content_item.onclick = () => play_song(song_id);
    }
}

function render_lyrics(song_id){
    floating_lyrics_overlay_content_wrapper.innerHTML = songs_obj[song_id].song_lyrics_markup;
    player_extended_lyrics_content_wrapper.innerHTML = songs_obj[song_id].song_lyrics_markup;
}

function profile_dropdown_open_close(){
    profile_dropdown_overlay.classList.toggle("invisible-element");
    profile_dropdown_overlay.classList.toggle("shrunk-element");
}

function like_unlike_song(song_id){
    let liked;
    if (liked_song_ids_list.includes(song_id)){
        liked = false;
        liked_song_ids_list = liked_song_ids_list.filter( id => id != song_id);
    } else {
        liked = true
        liked_song_ids_list.push(song_id);
    }
    // and in playlist contents
    let playlist_current_playing_item_like_icon_id = "#playlist-content-item-like-button-icon-song-" + current_song_id;
    let playlist_current_playing_item_like_icon_element = content_window.querySelector(playlist_current_playing_item_like_icon_id);
    if (current_song_id == song_id){
        if (liked_song_ids_list.includes(song_id)){
            // if the song whose like is changed in playlist contents is currently playing, change its like button icon in player
            player_like_button_icon.classList.add("fa-solid");
            player_like_button_icon.classList.remove("fa-regular");
            // if the song whose like is changed in player is in visible playlist contents, change its like button icon in playlist contents
            if (playlist_current_playing_item_like_icon_element){
                playlist_current_playing_item_like_icon_element.classList.remove("fa-regular");
                playlist_current_playing_item_like_icon_element.classList.add("fa-solid");
            }
        } else {
            // if the song whose like is changed in playlist contents is currently playing, change its like button icon in player
            player_like_button_icon.classList.add("fa-regular");
            player_like_button_icon.classList.remove("fa-solid");
            // if the song whose like is changed in player is in visible playlist contents, change its like button icon in playlist contents
            if (playlist_current_playing_item_like_icon_element){
                playlist_current_playing_item_like_icon_element.classList.add("fa-regular");
                playlist_current_playing_item_like_icon_element.classList.remove("fa-solid");
            }
        }
    }
    localStorage.setItem("liked_song_ids_list", JSON.stringify(liked_song_ids_list));
}

function shuffle_on_off(){
    shuffle = !shuffle;
    localStorage.setItem("shuffle", shuffle);
    if (shuffle){
        player_shuffle_button_icon.classList.remove("inactive-button");
    } else {
        player_shuffle_button_icon.classList.add("inactive-button");
    }
}

function play_previous_song(){
    // if current time is greater than 5 seconds, then play the current song from the beginning
    if (player_audio_controls.currentTime > 5){
        player_audio_controls.currentTime = 0;
        return;
    }
    if (shuffle){
        queue_current_song_index = queue_played_song_indexes_list.pop();
        let previous_random_song_id = queue_song_id_list[queue_current_song_index];
        play_song(previous_random_song_id);
    } else {
        // if shuffle off, current time is less than 5 seconds, and queue not at beginning then play the previous song
        if (queue_current_song_index > 0){
            queue_current_song_index--;
            let previous_song_id = queue_song_id_list[queue_current_song_index];
            play_song(previous_song_id);
        }
    }
    // if shuffle off, current time is less than 5 seconds, and queue at beginning then do nothing
}

function toggle_play_pause_icon(play){
    if (play){
        player_play_pause_button_icon.classList.remove("fa-circle-play");
        player_play_pause_button_icon.classList.add("fa-circle-pause");
    }
    else{
        player_play_pause_button_icon.classList.remove("fa-circle-pause");
        player_play_pause_button_icon.classList.add("fa-circle-play");
    }
}

function play_pause(play = false){
    if (player_play_pause_button_icon.classList.contains("fa-circle-play") || play){
        player_audio_controls.play();
        player_play_pause_button_container.title = "Pause";
    }
    else{
        player_audio_controls.pause();
        player_play_pause_button_container.title = "Play";
    }
}

function play_song(song_id, playlist_id = null, append_queue = false, shuffle_current_queue = false){
    if (first_play){
        nav.classList.remove("full-height");
        right_window.classList.remove("full-height");
        player.classList.remove("inactive-player");
    }

    // if the song is already playing, do nothing
    if (song_id == current_song_id){
        return;
    }

    // updating queue current song id for current queue index to use when rendering new songs from tabs
    let last_song_id = current_song_id;
    current_song_id = song_id;
    
    let song_obj = songs_obj[song_id];

    // update player song info
    let img_src = "./media/covers/" + song_id + ".jpg";
    player_song_cover_image.src = img_src;
    player_extended_cover_image.src = img_src;
    player_extended_cover_image.alt = "song_cover_image";
    player_song_name.innerText = song_obj.song_name;
    player_song_artist.innerText = song_obj.song_artist_names;
    player_audio_total_duration_label.innerText = return_duration_string(song_obj.song_duration);

    render_lyrics(song_id);

    if (liked_song_ids_list.includes(song_id)){
        player_like_button_icon.classList.add("fa-solid");
        player_like_button_icon.classList.remove("fa-regular");
    }
    else{
        player_like_button_icon.classList.add("fa-regular");
        player_like_button_icon.classList.remove("fa-solid");
    }

    player_audio_controls.innerHTML = `<source src="./media/audios/${song_id}.mp3" type="audio/mpeg">`;
    player_audio_controls.load();
    play_pause(true);

    if (playlist_id != null){
        render_queue(playlist_id, false, append_queue, shuffle_current_queue);
    }
    else{
        render_queue(song_id, true);
    }
    highlight_playing_item(last_song_id, current_song_id);
    first_play = false;
}

function play_next_song(){
    // if repeat == 2 i.e. repeat one, play the same song again
    if (repeat == 2){
        player_audio_controls.currentTime = 0;
        play_pause(true);
        return;
    }
    // if repeat == 1 or 0 i.e. repeat all or no repeat
    queue_played_song_indexes_list.push(queue_current_song_index);
    queue_current_song_index++;
    // if repeat == 1 i.e. repeat all, move to first song in queue if last song is playing
    if (repeat == 1){
        if (shuffle){
            // repeat == 1 and shuffle on so moving to random old song in queue if last song is playing
            if (queue_played_song_indexes_list.length == queue_song_id_list.length){
                queue_played_song_indexes_list = [];
            }
            queue_current_song_index = Math.floor(Math.random() * queue_song_id_list.length);
            while (queue_played_song_indexes_list.includes(queue_current_song_index)){
                queue_current_song_index = Math.floor(Math.random() * queue_song_id_list.length);
            }
        }
        else{
            // repeat == 1 and shuffle off so moving to first song in queue if last song is playing
            if (queue_current_song_index == queue_song_id_list.length){
                queue_current_song_index = 0;
            }
        }
        let next_song_id = queue_song_id_list[queue_current_song_index];
        play_song(next_song_id);
        return;
    }
    // if repeat == 0 i.e. no repeat
    if (shuffle){
        // repeat == 0 and shuffle on so appending next random playlist to queue if last song is playing
        if (queue_played_song_indexes_list.length == queue_song_id_list.length){
            let current_playlist_id = songs_obj[current_song_id].song_playlist_ids[0];
            let next_random_playlist_id = Math.floor(Math.random() * Object.keys(playlists_obj).length);
            while (next_random_playlist_id == current_playlist_id){
                next_random_playlist_id = Math.floor(Math.random() * Object.keys(playlists_obj).length);
            }
            let next_song_id = playlists_obj[next_random_playlist_id].playlist_song_ids[0];
            play_song(next_song_id, next_random_playlist_id, true);
            return;
        }
        queue_current_song_index = Math.floor(Math.random() * queue_song_id_list.length);
        while (queue_played_song_indexes_list.includes(queue_current_song_index)){
            queue_current_song_index = Math.floor(Math.random() * queue_song_id_list.length);
        }
        let next_song_id = queue_song_id_list[queue_current_song_index];
        play_song(next_song_id);
        return;
    }
    // if repeat == 0 i.e. no repeat, append next playlist in queue if last song is playing
    if (queue_current_song_index == queue_song_id_list.length){
        let current_playlist_id = songs_obj[current_song_id].song_playlist_ids[0];
        let next_playlist_id = (current_playlist_id + 1) % Object.keys(playlists_obj).length;
        let next_song_id = playlists_obj[next_playlist_id].playlist_song_ids[0];
        play_song(next_song_id, next_playlist_id, true);
        return;
    }
    let next_song_id = queue_song_id_list[queue_current_song_index];
    play_song(next_song_id);
}

function repeat_toggle(){
    repeat = ++repeat % 3;
    localStorage.setItem("repeat", repeat);
    if (repeat == 0){
        player_repeat_button_icon.classList.add("inactive-button");
        player_repeat_button_icon.classList.remove("small-button");
        player_repeat_button_icon_one.classList.add("shrunk-element");
    }
    else if (repeat == 1){
        player_repeat_button_icon.classList.remove("inactive-button");
    }
    else{
        player_repeat_button_icon.classList.remove("inactive-button");
        player_repeat_button_icon.classList.add("small-button");
        player_repeat_button_icon_one.classList.remove("shrunk-element");
    }
}

function options_dialog_open_close(){
    // open or close options dialog
}

function queue_overlay_open_close(open = true){
    if (player_queue_button_icon.classList.contains("inactive-button") && open){
        player_queue_button_icon.classList.remove("inactive-button");
        floating_queue_overlay.classList.remove("shrunk-element");
        player_floating_part.style.height = player_floating_part_full_height;
    }
    else{
        player_queue_button_icon.classList.add("inactive-button");
        floating_queue_overlay.classList.add("shrunk-element");
        if (floating_lyrics_overlay.classList.contains("shrunk-element")){
            player_floating_part.style.height = 0;
        }
    }
}

function lyrics_overlay_open_close(open = true){
    if (player_lyrics_button_icon.classList.contains("fa-regular") && open){
        floating_lyrics_overlay.classList.remove("shrunk-element");
        player_floating_part.style.height = player_floating_part_full_height;
        player_lyrics_button_icon.classList.remove("inactive-button");
        player_lyrics_button_icon.classList.add("fa-solid");
        player_lyrics_button_icon.classList.remove("fa-regular");
    }
    else{
        floating_lyrics_overlay.classList.add("shrunk-element");
        if (floating_queue_overlay.classList.contains("shrunk-element")){
            player_floating_part.style.height = 0;
        }
        player_lyrics_button_icon.classList.add("inactive-button");
        player_lyrics_button_icon.classList.remove("fa-solid");
        player_lyrics_button_icon.classList.add("fa-regular");
    }
}

function update_volume_icon(){
    player_volume_button_icon.classList = "fa-solid";
    if (player_audio_controls.volume == 0 || player_audio_controls.muted){
        player_volume_button_icon.classList.add("fa-volume-xmark");
    }
    else{
        player_volume_button_icon.classList.add("fa-volume-high");
    }
}

function mute_unmute(){
    if (player_audio_controls.muted){
        player_audio_controls.muted = false;
        player_volume_button_container.title = "Mute";
    }
    else{
        player_audio_controls.muted = true;
        player_volume_button_container.title = "Unmute";
    }
    update_volume_icon();
}

function update_volume(){
    player_audio_controls.volume = player_volume_seek_bar.value / 100;
    update_volume_icon();
}

function highlight_playing_item(last_song_id, current_song_id){
    let playlist_last_playing_item = "#playlist-content-item-song-" + last_song_id;
    let queue_overlay_last_playing_item = "#queue-overlay-content-item-song-" + last_song_id;
    let player_extended_queue_last_playing_item = "#player-extended-queue-content-item-song-" + last_song_id;

    let playlist_last_playing_item_element = content_window.querySelector(playlist_last_playing_item);
    let queue_overlay_last_playing_item_element = floating_queue_overlay_content_wrapper.querySelector(queue_overlay_last_playing_item);
    let player_extended_queue_last_playing_item_element = player_extended_queue_content_wrapper.querySelector(player_extended_queue_last_playing_item);

    let last_playing_item_elements = [playlist_last_playing_item_element, queue_overlay_last_playing_item_element, player_extended_queue_last_playing_item_element];
    last_playing_item_elements.forEach((element) => {
        if (element){
            element.classList.remove("content-item-playing");
            let playing_item_overlay_icon_wrapper = element.querySelector(".content-item-cover-overlay-icon-wrapper");
            let playing_item_overlay_icon = element.getElementsByTagName("i")[0];
            playing_item_overlay_icon_wrapper.classList.remove("opacity-1");
            playing_item_overlay_icon.classList.remove("fa-volume-high");
            playing_item_overlay_icon.classList.add("fa-play");
        }
    });

    let playlist_current_playing_item = "#playlist-content-item-song-" + current_song_id;
    let queue_overlay_current_playing_item = "#queue-overlay-content-item-song-" + current_song_id;
    let player_extended_queue_current_playing_item = "#player-extended-queue-content-item-song-" + current_song_id;

    let playlist_current_playing_item_element = content_window.querySelector(playlist_current_playing_item);
    let queue_overlay_current_playing_item_element = floating_queue_overlay_content_wrapper.querySelector(queue_overlay_current_playing_item);
    let player_extended_queue_current_playing_item_element = player_extended_queue_content_wrapper.querySelector(player_extended_queue_current_playing_item);

    let current_playing_item_elements = [playlist_current_playing_item_element, queue_overlay_current_playing_item_element, player_extended_queue_current_playing_item_element];
    current_playing_item_elements.forEach((element) => {
        if (element){
            element.classList.add("content-item-playing");
            let playing_item_overlay_icon_wrapper = element.querySelector(".content-item-cover-overlay-icon-wrapper");
            let playing_item_overlay_icon = element.getElementsByTagName("i")[0];
            playing_item_overlay_icon_wrapper.classList.add("opacity-1");
            playing_item_overlay_icon.classList.add("fa-volume-high");
            playing_item_overlay_icon.classList.remove("fa-play");
        }
    });
}

function toggle_extended_player(extend = true){
    if (player_extended_overlay.classList.contains("shrunk-element") && extend){
        player_extended_overlay.classList.remove("shrunk-element");
        content_window.classList.add("invisible-element");
        queue_overlay_open_close(false);
        lyrics_overlay_open_close(false);
        player_queue_button_container.classList.add("shrunk-element");
        player_queue_button_container.classList.add("invisible-element");
        player_lyrics_button_container.classList.add("shrunk-element");
        player_lyrics_button_container.classList.add("invisible-element");
        player_extend_button_icon.classList.add("rotate-180");
        shrink_unshrink_nav_bar(true);
    } else {
        player_extended_overlay.classList.add("shrunk-element");
        content_window.classList.remove("invisible-element");
        player_queue_button_container.classList.remove("shrunk-element");
        player_queue_button_container.classList.remove("invisible-element");
        player_lyrics_button_container.classList.remove("shrunk-element");
        player_lyrics_button_container.classList.remove("invisible-element");
        player_extend_button_icon.classList.remove("rotate-180");
        shrink_unshrink_nav_bar(false);
    }
}

function shrink_unshrink_nav_bar(shrink = true){
    if (!nav_shrinking_items[0].classList.contains("shrunk-element") && shrink){
        nav_shrinking_items.forEach((nav_shrinking_item) => {
            nav_shrinking_item.classList.add("shrunk-element");
            nav_shrinking_item.classList.add("invisible-element");
        });
        nav_button_containers.forEach(nav_button_container => nav_button_container.classList.add("nav-button-container-shrunk"));
        root.style.setProperty('--nav-width', '4.5rem');
        root.style.setProperty('--nav-min-width', 'unset');
        root.style.setProperty('--nav-max-width', 'unset');
    }
    else {
        nav_shrinking_items.forEach(nav_shrinking_item => {
            nav_shrinking_item.classList.remove("shrunk-element");
            nav_shrinking_item.classList.remove("invisible-element");
        });
        nav_button_containers.forEach(nav_button_container => nav_button_container.classList.remove("nav-button-container-shrunk"));
        root.style.setProperty('--nav-width', nav_original_width);
        root.style.setProperty('--nav-min-width', nav_original_min_width);
        root.style.setProperty('--nav-max-width', nav_original_max_width);
    }
}


// Event Listeners
nav.onmouseenter = () => shrink_unshrink_nav_bar(false);
nav.onmouseleave = () => {
    if (! player_extended_overlay.classList.contains("shrunk-element"))
        shrink_unshrink_nav_bar(true);
}

nav_home_button_container.onclick = () => render_tab("home");

nav_explore_button_container.onclick = () => render_tab("explore");

nav_library_button_container.onclick = () => render_tab("library");

player_audio_controls.onplay = () => toggle_play_pause_icon(true);
player_audio_controls.onpause = () => toggle_play_pause_icon(false);

profile_button_container.onclick = profile_dropdown_open_close;

player_like_button_container.onclick = () => like_unlike_song(queue_song_id_list[queue_current_song_index]);

player_shuffle_button_container.onclick = shuffle_on_off;

player_previous_song_button_container.onclick = play_previous_song;

player_play_pause_button_container.onclick = () => play_pause();
player_extended_cover_image.onclick = () => play_pause();

player_next_song_button_container.onclick = play_next_song;

player_repeat_button_container.onclick = repeat_toggle;

player_options_button_container.onclick = options_dialog_open_close;

document.onkeydown = (event) => {
    if (document.activeElement.tagName == "INPUT" && document.activeElement.type == "text"){
        return;
    }
    if (event.key == " "){
        event.preventDefault();
        play_pause();
    }
    if (event.key == "Escape"){
        event.preventDefault();
        toggle_extended_player();
    }
    if (event.key == "ArrowLeft" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        player_audio_controls.currentTime -= 5;
    }
    if (event.key == "ArrowRight" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        player_audio_controls.currentTime += 5;
    }
    if (event.key == "ArrowUp" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        player_volume_seek_bar.value = parseInt(player_volume_seek_bar.value) + 5;
        update_volume();
    }
    if (event.key == "ArrowDown" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        player_volume_seek_bar.value = parseInt(player_volume_seek_bar.value) - 5;
        update_volume();
    }
    if (event.key.toUpperCase() == "S" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        shuffle_on_off();
    }
    if (event.key.toUpperCase() == "R" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        repeat_toggle();
    }
    if (event.key.toUpperCase() == "Q" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        queue_overlay_open_close();
    }
    if (event.key.toUpperCase() == "L" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        lyrics_overlay_open_close();
    }
    if (event.shiftKey && event.key.toUpperCase() == "P" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        play_previous_song();
    }
    if (event.shiftKey && event.key.toUpperCase() == "N" && player_extended_overlay.classList.contains("shrunk-element")){
        event.preventDefault();
        play_next_song();
    }
}

player_audio_controls.onloadedmetadata = () => player_audio_controls.currentTime = 0;

player_audio_controls.onended = play_next_song;

player_audio_controls.ontimeupdate = update_audio_seek_bar_and_time_stamp;

player_audio_seek_bar.oninput = () => player_audio_controls.currentTime = player_audio_seek_bar.value;

player_queue_button_container.onclick = queue_overlay_open_close;

player_lyrics_button_container.onclick = lyrics_overlay_open_close;

player_volume_button_container.onclick = mute_unmute;

player_volume_seek_bar.oninput = () => update_volume();

player_extend_button_container.onclick = toggle_extended_player;


// Function Calls
render_tab("home");