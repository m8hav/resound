"use strict";

// import data from "./misc/testing/student.json" assert {type: 'json'};
// console.log(data);

const content_window = document.getElementById("content-window");

const home_content = {
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

function render_home(){
    content_window.innerHTML = "";

    for (let category_index in home_content.categories){
        let category = home_content.categories[category_index];

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

render_home();