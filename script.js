"use strict";

// Global Variables
const body_wallpaper_overlay = document.getElementsByClassName("body-wallpaper-overlay")[0];

// Nav
const nav_home_button_container = document.getElementById("nav-home-button-container");
const nav_explore_button_container = document.getElementById("nav-explore-button-container");
const nav_library_button_container = document.getElementById("nav-library-button-container");

// Header
const profile_button_container = document.getElementById("profile-button-container");
const profile_dropdown_overlay = document.getElementsByClassName("profile-dropdown-overlay")[0];

// Content Window
const content_window = document.getElementById("content-window");


// Player
const player = document.getElementById("player");

const player_like_button_container = document.getElementById("player-left-part-like-button-container");
const player_like_button_icon = player_like_button_container.firstElementChild;

const player_shuffle_button_container = document.getElementById("shuffle-button-container");
const player_shuffle_button_icon = player_shuffle_button_container.firstElementChild;

const player_previous_song_button_container = document.getElementById("previous-song-button-container");
const player_previous_song_button_icon = player_previous_song_button_container.firstElementChild;

const player_play_pause_button_container = document.getElementById("play-pause-button-container");
const player_play_pause_button_icon = player_play_pause_button_container.firstElementChild;

const player_next_song_button_container = document.getElementById("next-song-button-container");
const player_next_song_button_icon = player_next_song_button_container.firstElementChild;

const player_repeat_button_container = document.getElementById("repeat-button-container");
const player_repeat_button_icon = player_repeat_button_container.firstElementChild;

const player_options_button_container = document.getElementById("player-options-button-container");
const player_options_button_icon = player_options_button_container.firstElementChild;

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
const player_floating_part_full_height = "calc(100% - var(--header-height) - 8rem)"

const floating_queue_overlay = document.getElementById("floating-queue-overlay");
const floating_queue_overlay_content_wrapper = floating_queue_overlay.getElementsByClassName("floating-overlay-content-wrapper")[0];

const floating_lyrics_overlay = document.getElementById("floating-lyrics-overlay");
const floating_lyrics_overlay_content_wrapper = floating_lyrics_overlay.getElementsByClassName("floating-overlay-content-wrapper")[0];

const player_extended_overlay = document.getElementsByClassName("player-extended-overlay")[0];

player_audio_controls.volume = player_volume_seek_bar.value / 100;


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

        // getting category data
        let category = home_page_content.categories[category_index];

        let category_tag = category.tag;
        let category_type = category.type;
        let category_name = category.name;
        let category_items = category.items;

        // creating content window category
        let content_window_category = document.createElement("div");
        content_window_category.id = category_tag + "-category";
        content_window_category.classList.add("content-window-category");
        content_window.appendChild(content_window_category);

        // creating scroll buttons
        let content_window_category_scroll_left_button = document.createElement("button");
        content_window_category_scroll_left_button.classList.add("content-window-category-scroll-button");
        content_window_category_scroll_left_button.classList.add("content-window-category-scroll-left-button");
        content_window_category_scroll_left_button.classList.add("hidden-element");
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
                content_window_category_scroll_left_button.classList.add("hidden-element");
            }
            else{
                content_window_category_scroll_left_button.classList.remove("hidden-element");
            }
            if (content_window_category_items_wrapper.scrollLeft >= content_window_category_items_wrapper.scrollWidth - content_window_category_items_wrapper.clientWidth){
                content_window_category_scroll_right_button.classList.add("hidden-element");
            }
            else{
                content_window_category_scroll_right_button.classList.remove("hidden-element");
            }
        }
        
        // adding items to category items wrapper
        for (let category_index in category_items){
            let content_window_category_item_details = category_items[category_index];
            let content_window_category_img_name = content_window_category_item_details["img_name"];
            let content_window_category_mainlabel, content_window_category_sublabel;
            content_window_category_mainlabel = content_window_category_item_details["main_label"];
            if (category_type == "song"){
                content_window_category_sublabel = content_window_category_item_details["sub_label"];
            }
            
            let content_window_category_item = document.createElement("div");
            content_window_category_item.classList.add("content-window-category-item");
            content_window_category_items_wrapper.appendChild(content_window_category_item);

            let content_window_category_item_cover = document.createElement("div");
            content_window_category_item_cover.classList.add("content-window-category-item-cover");
            content_window_category_item.appendChild(content_window_category_item_cover);

            let content_window_category_item_cover_image = document.createElement("img");
            content_window_category_item_cover_image.src = "./media/covers/" + content_window_category_img_name;
            content_window_category_item_cover_image.classList.add("content-window-category-item-cover-image");
            content_window_category_item_cover_image.alt = "recents_cover";
            content_window_category_item_cover.appendChild(content_window_category_item_cover_image);

            let content_window_category_item_cover_image_overlay = document.createElement("div");
            content_window_category_item_cover_image_overlay.classList.add("content-window-category-item-cover-image-overlay");
            content_window_category_item_cover.appendChild(content_window_category_item_cover_image_overlay);

            let content_window_category_item_cover_image_overlay_icon_wrapper = document.createElement("div");
            content_window_category_item_cover_image_overlay_icon_wrapper.classList.add("content-window-category-item-cover-overlay-icon-wrapper");
            content_window_category_item_cover_image_overlay.appendChild(content_window_category_item_cover_image_overlay_icon_wrapper);

            let content_window_category_overlay_wrapper_icon = document.createElement("i");
            content_window_category_overlay_wrapper_icon.classList.add("fa-solid", "fa-play");
            content_window_category_item_cover_image_overlay_icon_wrapper.appendChild(content_window_category_overlay_wrapper_icon);

            let content_window_category_item_labels = document.createElement("div");
            content_window_category_item_labels.classList.add("content-window-category-item-labels");
            content_window_category_item.appendChild(content_window_category_item_labels);

            let content_window_category_item_mainlabel = document.createElement("p");
            content_window_category_item_mainlabel.classList.add("content-window-category-item-mainlabel");
            content_window_category_item_mainlabel.innerText = content_window_category_mainlabel;
            content_window_category_item_labels.appendChild(content_window_category_item_mainlabel);

            if (category_type == "song"){
                let content_window_category_item_sublabel = document.createElement("p");
                content_window_category_item_sublabel.classList.add("content-window-category-item-sublabel");
                content_window_category_item_sublabel.innerText = content_window_category_sublabel;
                content_window_category_item_labels.appendChild(content_window_category_item_sublabel);
                // add event listener to play that song
                content_window_category_item.addEventListener("click", function(){
                    play_next_song();
                });
            }
            else{
                content_window_category_item.addEventListener("click", function(){
                    render_playlist();
                });
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
    
    // playlist description
    let playlist_description = document.createElement("div");
    playlist_description.id = "playlist-description";
    content_window.appendChild(playlist_description);


    // playlist descripton cover
    let playlist_description_cover = document.createElement("div");
    playlist_description_cover.id = "playlist-description-cover";
    playlist_description.appendChild(playlist_description_cover);

    let playlist_description_cover_image = document.createElement("img");
    playlist_description_cover_image.id = "playlist-description-cover-image";
    playlist_description_cover_image.src = "./media/covers/the_chainsmokers-closer-cover.jpg";
    playlist_description_cover_image.alt = "playlist_cover";
    playlist_description_cover.appendChild(playlist_description_cover_image);


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
    playlist_info_title.innerText = "Playlist Title";
    playlist_description_info.appendChild(playlist_info_title);

    let playlist_info_artists = document.createElement("p");
    playlist_info_artists.id = "playlist-info-artists";
    playlist_info_artists.innerText = "Playlist Artists";
    playlist_description_info.appendChild(playlist_info_artists);

    let playlist_info_count_and_duration = document.createElement("div");
    playlist_info_count_and_duration.id = "playlist-info-count-and-duration";
    playlist_description_info.appendChild(playlist_info_count_and_duration);

    let playlist_info_song_count = document.createElement("p");
    playlist_info_song_count.id = "playlist-info-song-count";
    playlist_info_count_and_duration.appendChild(playlist_info_song_count);

    let playlist_info_song_count_number = document.createElement("span");
    playlist_info_song_count_number.id = "playlist-info-song-count-number";
    playlist_info_song_count_number.innerText = 23;
    playlist_info_song_count.appendChild(playlist_info_song_count_number);

    let playlist_info_song_count_label = document.createElement("span");
    playlist_info_song_count_label.id = "playlist-info-song-count-label";
    playlist_info_song_count_label.innerHTML = "&nbsp;songs &nbsp;•&nbsp;&nbsp;";
    playlist_info_song_count.appendChild(playlist_info_song_count_label);

    let playlist_info_duration = document.createElement("p");
    playlist_info_duration.id = "playlist-info-duration";
    playlist_info_count_and_duration.appendChild(playlist_info_duration);

    let playlist_info_duration_number = document.createElement("span");
    playlist_info_duration_number.id = "playlist-info-duration-number";
    playlist_info_duration_number.innerText = 69;
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
    playlist_description_shuffle_play_button.id = "playlist-description-play-button";
    playlist_description_shuffle_play_button.classList.add("playlist-description-button");
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
    playlist_description_add_to_library_button.id = "playlist-description-play-button";
    playlist_description_add_to_library_button.classList.add("playlist-description-button");
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
    for (let i = 0; i < 10; i++){

        let playlist_content_item = document.createElement("div");
        playlist_content_item.classList.add("playlist-content-item");
        playlist_content_items.appendChild(playlist_content_item);

        // playlist item cover
        let playlist_content_item_cover = document.createElement("div");
        playlist_content_item_cover.classList.add("playlist-content-cover-column");
        playlist_content_item.appendChild(playlist_content_item_cover);    

        let playlist_content_item_cover_image = document.createElement("img");
        playlist_content_item_cover_image.classList.add("playlist-content-item-cover-image");
        playlist_content_item_cover_image.src = "./media/covers/the_chainsmokers-closer-cover.jpg";
        playlist_content_item_cover_image.alt = "playlist_item_cover";
        playlist_content_item_cover.appendChild(playlist_content_item_cover_image);

        let playlist_content_item_cover_image_overlay_icon_wrapper = document.createElement("div");
        playlist_content_item_cover_image_overlay_icon_wrapper.classList.add("playlist-content-item-cover-overlay-icon-wrapper");
        playlist_content_item_cover.appendChild(playlist_content_item_cover_image_overlay_icon_wrapper);

        let playlist_content_item_cover_image_overlay_icon = document.createElement("i");
        playlist_content_item_cover_image_overlay_icon.classList.add("fa-solid");
        playlist_content_item_cover_image_overlay_icon.classList.add("fa-play");
        playlist_content_item_cover_image_overlay_icon.classList.add("playlist-content-item-cover-image-overlay-icon");
        playlist_content_item_cover_image_overlay_icon_wrapper.appendChild(playlist_content_item_cover_image_overlay_icon);

        // playlist item name
        let playlist_content_item_name = document.createElement("p");
        playlist_content_item_name.classList.add("playlist-content-name-column");
        playlist_content_item_name.innerText = "Closer";
        playlist_content_item.appendChild(playlist_content_item_name);
        
        // add event listeners to play that song
        playlist_content_item_cover.addEventListener("click", function(){
            play_next_song();
        });
        playlist_content_item_name.addEventListener("click", function(){
            play_next_song();
        });

        // playlist item artists
        let playlist_content_item_artists = document.createElement("p");
        playlist_content_item_artists.classList.add("playlist-content-artists-column");
        playlist_content_item_artists.innerText = "The Chainsmokers & Halsey";
        playlist_content_item.appendChild(playlist_content_item_artists);

        // playlist item duration
        let playlist_content_item_duration = document.createElement("p");
        playlist_content_item_duration.classList.add("playlist-content-duration-column");
        playlist_content_item_duration.innerText = "04:03";
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
        playlist_content_item_like_button_icon.classList.add("fa-regular");
        playlist_content_item_like_button_icon.classList.add("fa-heart");
        playlist_content_item_like_button_icon.classList.add("playlist-content-item-option-button-icon");
        playlist_content_item_like_button.appendChild(playlist_content_item_like_button_icon);

        playlist_content_item_like_button.addEventListener("click", function(){
            if (playlist_content_item_like_button_icon.classList.contains("fa-regular")){
                playlist_content_item_like_button_icon.classList.remove("fa-regular");
                playlist_content_item_like_button_icon.classList.add("fa-solid");
            } else {
                playlist_content_item_like_button_icon.classList.remove("fa-solid");
                playlist_content_item_like_button_icon.classList.add("fa-regular");
            }
        });

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
    }

    content_window.scrollTo(0, 0);
}

function render_queue(playlist_id){
    floating_queue_overlay_content_wrapper.innerHTML = "";

    for (let i = 0; i < 10; i++){
        // creating queue overlay item
        let queue_overlay_content_item = document.createElement("div");
        queue_overlay_content_item.classList.add("queue-overlay-content-item");
        floating_queue_overlay_content_wrapper.appendChild(queue_overlay_content_item);

        // queue overlay item cover
        let queue_overlay_content_item_cover = document.createElement("div");
        queue_overlay_content_item_cover.classList.add("queue-overlay-content-item-cover-column");
        queue_overlay_content_item.appendChild(queue_overlay_content_item_cover);    

        let queue_overlay_content_item_cover_image = document.createElement("img");
        queue_overlay_content_item_cover_image.classList.add("queue-overlay-content-item-cover-image");
        queue_overlay_content_item_cover_image.src = "./media/covers/the_chainsmokers-closer-cover.jpg";
        queue_overlay_content_item_cover_image.alt = "queue_item_cover";
        queue_overlay_content_item_cover.appendChild(queue_overlay_content_item_cover_image);

        let queue_overlay_content_item_cover_image_overlay_icon_wrapper = document.createElement("div");
        queue_overlay_content_item_cover_image_overlay_icon_wrapper.classList.add("queue-overlay-content-item-cover-overlay-icon-wrapper");
        queue_overlay_content_item_cover.appendChild(queue_overlay_content_item_cover_image_overlay_icon_wrapper);

        let queue_overlay_content_item_cover_image_overlay_icon = document.createElement("i");
        queue_overlay_content_item_cover_image_overlay_icon.classList.add("fa-solid");
        queue_overlay_content_item_cover_image_overlay_icon.classList.add("fa-play");
        queue_overlay_content_item_cover_image_overlay_icon.classList.add("queue-overlay-content-item-cover-image-overlay-icon");
        queue_overlay_content_item_cover_image_overlay_icon_wrapper.appendChild(queue_overlay_content_item_cover_image_overlay_icon);

        // queue overlay item name and artists
        let queue_overlay_content_item_name_and_artists_column = document.createElement("div");
        queue_overlay_content_item_name_and_artists_column.classList.add("queue-overlay-content-item-name-and-artists-column");
        queue_overlay_content_item.appendChild(queue_overlay_content_item_name_and_artists_column);

        let queue_overlay_content_item_name = document.createElement("p");
        queue_overlay_content_item_name.classList.add("queue-overlay-content-item-name-column");
        queue_overlay_content_item_name.innerText = "Closer";
        queue_overlay_content_item_name_and_artists_column.appendChild(queue_overlay_content_item_name);

        let queue_overlay_content_item_artists = document.createElement("p");
        queue_overlay_content_item_artists.classList.add("queue-overlay-content-item-artists-column");
        queue_overlay_content_item_artists.innerText = "The Chainsmokers";
        queue_overlay_content_item_name_and_artists_column.appendChild(queue_overlay_content_item_artists);
        
        // add event listener to play that song
        queue_overlay_content_item_cover.addEventListener("click", function(){
            play_next_song();
        });
        queue_overlay_content_item_name_and_artists_column.addEventListener("click", function(){
            play_next_song();
        });

        // queue overlay item duration
        let queue_overlay_content_item_duration = document.createElement("p");
        queue_overlay_content_item_duration.classList.add("queue-overlay-content-item-duration-column");
        queue_overlay_content_item_duration.innerText = "04:03";
        queue_overlay_content_item.appendChild(queue_overlay_content_item_duration);
    }
    
}

function render_lyrics(song_id){
    let lyrics = `Hey, I was doing just fine before I met you<br>I drink too much and that's an issue, but I'm okay<br>Hey, you tell your friends it was nice to meet them<br>But I hope I never see them again<br><br>I know it breaks your heart<br>Moved to the city in a broke-down car, and<br>Four years, no calls<br>Now you're looking pretty in a hotel bar<br>And I, I, I, I, I can't stop<br>No, I, I, I, I, I can't stop<br><br>So, baby, pull me closer<br>In the back seat of your Rover<br>That I know you can't afford<br>Bite that tattoo on your shoulder<br>Pull the sheets right off the corner<br>Of that mattress that you stole<br>From your roommate back in Boulder<br>We ain't ever getting older<br><br>We ain't ever getting older<br><br>We ain't ever getting older<br><br>You look as good as the day I met you<br>I forget just why I left you, I was insane<br>Stay and play that Blink-182 song<br>That we beat to death in Tucson, okay<br><br>I know it breaks your heart<br>Moved to the city in a broke-down car, and<br>Four years, no call<br>Now I'm looking pretty in a hotel bar<br>And I, I, I, I, I can't stop<br>No, I, I, I, I, I can't stop<br><br>So, baby, pull me closer<br>In the back seat of your Rover<br>That I know you can't afford<br>Bite that tattoo on your shoulder<br>Pull the sheets right off the corner<br>Of that mattress that you stole<br>From your roommate back in Boulder<br>We ain't ever getting older<br><br>We ain't ever getting older<br><br>We ain't ever getting older`;
    floating_lyrics_overlay_content_wrapper.innerHTML = lyrics;
}

function profile_dropdown_open_close(){
    profile_dropdown_overlay.classList.toggle("hidden-element");
    profile_dropdown_overlay.classList.toggle("shrunk-overlay");
}

function like_unlike_song(){
    if (player_like_button_icon.classList.contains("fa-regular")){
        // Add song to liked songs
    }
    else{
        // Remove song from liked songs
    }
    player_like_button_icon.classList.toggle("fa-regular");
    player_like_button_icon.classList.toggle("fa-solid");
}

function shuffle_on_off(){
    if (player_shuffle_button_icon.classList.contains("inactive-button")){
        // turn shuffle on
    }
    else{
        // turn shuffle off
    }
    player_shuffle_button_icon.classList.toggle("inactive-button");
}

function play_previous_song(){
    // Play previous song
    player_audio_controls.currentTime = 0;
    play_pause(true);
}

function play_pause(play = false){
    if (player_play_pause_button_icon.classList.contains("fa-circle-play") || play){
        player_audio_controls.play();
        player_play_pause_button_container.title = "Pause";
        player_play_pause_button_icon.classList.remove("fa-circle-play");
        player_play_pause_button_icon.classList.add("fa-circle-pause");
    }
    else{
        player_audio_controls.pause();
        player_play_pause_button_container.title = "Play";
        player_play_pause_button_icon.classList.add("fa-circle-play");
        player_play_pause_button_icon.classList.remove("fa-circle-pause");
    }
}

function update_audio_seek_bar_and_time_stamp(){
    // updating seek bar current position and max value
    player_audio_seek_bar.value = player_audio_controls.currentTime;
    player_audio_seek_bar.max = player_audio_controls.duration;
    // updating current timestamp
    player_audio_current_duration_label.innerText = new Date(player_audio_controls.currentTime * 1000).toISOString().slice(14, 19);
}

function play_next_song(){
    // Play next song
    player_audio_controls.currentTime = 0;
    play_pause(true);
}

function repeat_on_off(){
    if (player_repeat_button_icon.classList.contains("inactive-button")){
        // turn repeat on
    }
    else{
        // turn repeat off
    }
    player_repeat_button_icon.classList.toggle("inactive-button");
}

function options_dialog_open_close(){
    // open or close options dialog
}

function queue_overlay_open_close(open = true){
    if (player_queue_button_icon.classList.contains("inactive-button") && open){
        player_queue_button_icon.classList.remove("inactive-button");
        floating_queue_overlay.classList.remove("shrunk-overlay");
        player_floating_part.style.height = player_floating_part_full_height;
    }
    else{
        player_queue_button_icon.classList.add("inactive-button");
        floating_queue_overlay.classList.add("shrunk-overlay");
        if (floating_lyrics_overlay.classList.contains("shrunk-overlay")){
            player_floating_part.style.height = 0;
        }
    }
}

function lyrics_overlay_open_close(open = true){
    if (player_lyrics_button_icon.classList.contains("fa-regular") && open){
        floating_lyrics_overlay.classList.remove("shrunk-overlay");
        player_floating_part.style.height = player_floating_part_full_height;
        player_lyrics_button_icon.classList.remove("inactive-button");
        player_lyrics_button_icon.classList.add("fa-solid");
        player_lyrics_button_icon.classList.remove("fa-regular");
    }
    else{
        floating_lyrics_overlay.classList.add("shrunk-overlay");
        if (floating_queue_overlay.classList.contains("shrunk-overlay")){
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

function update_volume_seek_bar(){
    player_audio_controls.volume = player_volume_seek_bar.value / 100;
    update_volume_icon();
}

function extend_shrink_player(){
    player_extended_overlay.classList.toggle("shrunk-overlay");
    content_window.classList.toggle("hidden-element");

    player_queue_button_container.classList.toggle("shrunk-overlay");
    player_queue_button_container.classList.toggle("hidden-element");
    queue_overlay_open_close(false);
    
    player_lyrics_button_container.classList.toggle("shrunk-overlay");
    player_lyrics_button_container.classList.toggle("hidden-element");
    lyrics_overlay_open_close(false);
    
    player_extend_button_icon.classList.toggle("rotate-180");
}


// Event Listeners
nav_home_button_container.onclick = render_home_page;

nav_explore_button_container.onclick = render_explore_page;

nav_library_button_container.onclick = render_library_page;

profile_button_container.onclick = profile_dropdown_open_close;

player_like_button_container.onclick = like_unlike_song;

player_shuffle_button_container.onclick = shuffle_on_off;

player_previous_song_button_container.onclick = play_previous_song;

player_play_pause_button_container.onclick = play_pause;

player_next_song_button_container.onclick = play_next_song;

player_repeat_button_container.onclick = repeat_on_off;

player_options_button_container.onclick = options_dialog_open_close;

document.onkeydown = (event) => {
    if (event.key == " " && !(document.activeElement.tagName == "INPUT" && document.activeElement.type == "text")){
        event.preventDefault();
        play_pause();
    }
}

player_audio_controls.onloadedmetadata = () => {
    player_audio_controls.currentTime = 0;
    player_audio_total_duration_label.innerText = new Date(player_audio_controls.duration * 1000).toISOString().slice(14, 19);
    // render lyrics when new song loads
    render_lyrics();
}

player_audio_controls.onended = () => {
    player_audio_controls.currentTime = 0;
    player_audio_seek_bar.value = 0;
    play_pause();
}

player_audio_controls.ontimeupdate = update_audio_seek_bar_and_time_stamp;

player_audio_seek_bar.oninput = () => {
    player_audio_controls.currentTime = player_audio_seek_bar.value;
}

player_queue_button_container.onclick = queue_overlay_open_close;

player_lyrics_button_container.onclick = lyrics_overlay_open_close;

player_volume_button_container.onclick = mute_unmute;

player_volume_seek_bar.oninput = update_volume_seek_bar;

player_extend_button_container.onclick = extend_shrink_player;


// Function Calls
render_home_page();
render_queue();