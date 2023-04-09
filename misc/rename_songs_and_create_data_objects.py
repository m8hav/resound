print()
import os, glob, shutil, json
from pydub import AudioSegment

# go to parent directory and then to media/audio
files_dir = os.path.abspath(f"{os.path.dirname(__file__)}/../media")

print("Root DIR:\t", files_dir, "\n")

original_combined_files_dir = os.path.join(files_dir, "original_songs_data_combined")
audios_files_dir = os.path.join(files_dir, "audios")
covers_files_dir = os.path.join(files_dir, "covers")
lyrics_files_dir = os.path.join(files_dir, "lyrics")
obj_jsons_files_dir = os.path.join(files_dir, "obj_jsons")

# creating directories if they don't exist
os.makedirs(audios_files_dir, exist_ok=True)
os.makedirs(covers_files_dir, exist_ok=True)
os.makedirs(lyrics_files_dir, exist_ok=True)
os.makedirs(obj_jsons_files_dir, exist_ok=True)

# getting file paths of all files and folders in og_combined_files_dir and its subdirectories recursively
og_files_paths_list = glob.glob(f"{original_combined_files_dir}/**/*", recursive=True)

# renaming files ending with double extensions to single extension
# for og_file_path in og_files_paths_list:
#     ext = os.path.splitext(og_file_path)[1]
#     if ext in [".mp3", ".jpg", ".txt"]:
#         new_file_path = og_file_path.rstrip(ext) + ext
#         if og_file_path != new_file_path:
#             os.rename(og_file_path, new_file_path)

# getting updated file paths of all files and folders in og_combined_files_dir and its subdirectories recursively
og_files_paths_list = glob.glob(f"{original_combined_files_dir}/**/*", recursive=True)

# creating data objects
songs_obj = {}
songs_root_to_id_mapping_obj = {}

playlists_obj = {}
playlists_root_to_id_mapping_obj = {}

missing_covers_obj = {}
missing_lyrics_obj = {}

song_index = 1
playlist_index = 1

# file paths of data object jsons
songs_json_file_path = os.path.join(obj_jsons_files_dir, "songs.json")
playlists_json_file_path = os.path.join(obj_jsons_files_dir, "playlists.json")
songs_root_id_mapping_json_file_path = os.path.join(obj_jsons_files_dir, "songs_root_id_mapping.json")
playlists_root_id_mapping_json_file_path = os.path.join(obj_jsons_files_dir, "playlists_root_id_mapping.json")
missing_covers_json_file_path = os.path.join(obj_jsons_files_dir, "missing_covers.json")
missing_lyrics_json_file_path = os.path.join(obj_jsons_files_dir, "missing_lyrics.json")

# getting existing data objects from json files
print("Existing data objects:")
if os.path.exists(songs_json_file_path):
    with open(songs_json_file_path, "r") as songs_json_file:
        songs_obj = json.load(songs_json_file)
        song_index = len(songs_obj) + 1
        print(f"{len(songs_obj)} songs in (songs.json)")
if os.path.exists(playlists_json_file_path):
    with open(playlists_json_file_path, "r") as playlists_json_file:
        playlists_obj = json.load(playlists_json_file)
        playlist_index = len(playlists_obj) + 1
        print(f"{len(playlists_obj)} playlists in (playlists.json)")
if os.path.exists(songs_root_id_mapping_json_file_path):
    with open(songs_root_id_mapping_json_file_path, "r") as songs_root_id_mapping_json_file:
        songs_root_to_id_mapping_obj = json.load(songs_root_id_mapping_json_file)
        print(f"{len(songs_root_to_id_mapping_obj)} songs in (songs_root_id_mapping.json)")
if os.path.exists(playlists_root_id_mapping_json_file_path):
    with open(playlists_root_id_mapping_json_file_path, "r") as playlists_root_id_mapping_json_file:
        playlists_root_to_id_mapping_obj = json.load(playlists_root_id_mapping_json_file)
        print(f"{len(playlists_root_to_id_mapping_obj)} playlists in (playlists_root_id_mapping.json)")
print()


for og_file_path in og_files_paths_list:
    
    og_file_dir = os.path.dirname(og_file_path)

    og_file_name = os.path.basename(og_file_path)
    og_file_name_root = os.path.splitext(og_file_name)[0]
    file_name_ext = os.path.splitext(og_file_name)[1]

    # song and playlist info
    song_artist_names = og_file_name_root.split("-")[0].replace("_", " ").title().strip()
    song_name = og_file_name_root.split("-")[-1].replace("_", " ").title().strip()
    playlist_name = og_file_dir.split("\\")[-1].title().strip()
    
    # files old paths
    audio_file_old_path = os.path.join(og_file_dir, og_file_name_root + ".mp3")
    cover_file_old_path = os.path.join(og_file_dir, og_file_name_root + ".jpg")
    lyric_file_old_path = os.path.join(og_file_dir, og_file_name_root + ".txt")

    if file_name_ext == ".mp3":

        if cover_file_old_path.lower() in map(str.lower, og_files_paths_list):
            if lyric_file_old_path.lower() in map(str.lower, og_files_paths_list):

                # adding song to songs_obj only if it doesn't already exist under the same playlist
                if og_file_name_root not in songs_root_to_id_mapping_obj or playlist_name not in playlists_root_to_id_mapping_obj or playlists_root_to_id_mapping_obj[playlist_name] not in songs_obj[str(songs_root_to_id_mapping_obj[og_file_name_root])]["song_playlist_ids"]:

                    # files new paths
                    audio_file_new_path = os.path.join(audios_files_dir, str(og_file_name_root) + ".mp3")
                    cover_file_new_path = os.path.join(covers_files_dir, str(og_file_name_root) + ".jpg")
                    lyric_file_new_path = os.path.join(lyrics_files_dir, str(og_file_name_root) + ".txt")

                    audio_file = AudioSegment.from_mp3(audio_file_old_path)
                    song_duration = audio_file.duration_seconds

                    # audio_file.export(audio_file_new_path, format="mp3", bitrate="128k")  # too slow
                    shutil.copyfile(audio_file_old_path, audio_file_new_path)
                    shutil.copyfile(cover_file_old_path, cover_file_new_path)

                    # writing lyrics markup to new lyric file
                    with open(lyric_file_old_path, "r", encoding="utf-8") as f:
                        song_lyrics_markup = f.read().strip().replace("\n", "<br>")
                    with open(lyric_file_new_path, "w", encoding="utf-8") as f:
                        f.write(song_lyrics_markup)
                    
                    # adding song to song name-id relation object
                    if og_file_name_root not in songs_root_to_id_mapping_obj:
                        songs_root_to_id_mapping_obj[og_file_name_root] = song_index
                        song_index += 1
                    song_id = str(songs_root_to_id_mapping_obj[og_file_name_root])
                    
                    # adding playlist to playlist name-id relation object
                    if playlist_name not in playlists_root_to_id_mapping_obj:
                        playlists_root_to_id_mapping_obj[playlist_name] = playlist_index
                        playlist_index += 1
                    playlist_id = playlists_root_to_id_mapping_obj[playlist_name]
                    
                    # adding song to songs_obj
                    if song_id not in songs_obj:
                        songs_obj[song_id] = {
                            "song_name": song_name,
                            "song_artist_names": [],
                            "song_duration": song_duration,
                            "song_lyrics_markup": song_lyrics_markup,
                            "song_file_name_root": og_file_name_root,
                            "song_playlist_ids": []
                        }
                    if song_artist_names not in songs_obj[song_id]["song_artist_names"]:
                        songs_obj[song_id]["song_artist_names"].append(song_artist_names)
                    if playlist_id not in songs_obj[song_id]["song_playlist_ids"]:
                        songs_obj[song_id]["song_playlist_ids"].append(playlist_id)
                    
                    # adding song to playlists_obj
                    if playlist_id not in playlists_obj:
                        playlists_obj[playlist_id] = {
                            "playlist_name": playlist_name,
                            "playlist_song_artist_names": [],
                            "playlist_song_ids": []
                        }
                    for song_artist_name in songs_obj[song_id]["song_artist_names"]:
                        if song_artist_name not in playlists_obj[playlist_id]["playlist_song_artist_names"]:
                            playlists_obj[playlist_id]["playlist_song_artist_names"].append(song_artist_name)
                    if song_id not in playlists_obj[playlist_id]["playlist_song_ids"]:
                        playlists_obj[playlist_id]["playlist_song_ids"].append(song_id)
                    
                    print(f"SONG {song_id}: {og_file_name_root} DONE")
                    if int(song_id) % 5 == 0: print()

            else:
                missing_lyrics_obj[og_file_name_root] = {
                    "song_name": song_name,
                    "song_artist_names": song_artist_names,
                    "song_lyric_file_path": lyric_file_old_path,
                }
        else:
            missing_covers_obj[og_file_name_root] = {
                "song_name": song_name,
                "song_artist_names": song_artist_names,
                "song_cover_file_path": cover_file_old_path,
            }


# dumping data objects to json files
with open(songs_json_file_path, "w", encoding="utf-8") as f:
    json.dump(songs_obj, f, indent=4)
with open(playlists_json_file_path, "w", encoding="utf-8") as f:
    json.dump(playlists_obj, f, indent=4)
with open(songs_root_id_mapping_json_file_path, "w", encoding="utf-8") as f:
    json.dump(songs_root_to_id_mapping_obj, f, indent=4)
with open(playlists_root_id_mapping_json_file_path, "w", encoding="utf-8") as f:
    json.dump(playlists_root_to_id_mapping_obj, f, indent=4)
with open(missing_covers_json_file_path, "w", encoding="utf-8") as f:
    json.dump(missing_covers_obj, f, indent=4)
with open(missing_lyrics_json_file_path, "w", encoding="utf-8") as f:
    json.dump(missing_lyrics_obj, f, indent=4)

# printing missing covers and lyrics
print("\n\nMISSING COVERS:")
[print(missing_cover_id) for missing_cover_id in missing_covers_obj]
print("\n\nMISSING LYRICS:")
[print(missing_lyric_id) for missing_lyric_id in missing_lyrics_obj]


print("\n\nSUCCESSFULLY DONE!")