print()
import os, glob, shutil, json, sys
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
for og_file_path in og_files_paths_list:
    ext = os.path.splitext(og_file_path)[1]
    if ext in [".mp3", ".jpg", ".txt"]:
        new_file_path = og_file_path.rstrip(ext) + ext
        if og_file_path != new_file_path:
            os.rename(og_file_path, new_file_path)

# getting updated file paths of all files and folders in og_combined_files_dir and its subdirectories recursively
og_files_paths_list = glob.glob(f"{original_combined_files_dir}/**/*", recursive=True)

songs_obj = {}
song_names_and_ids_obj = {}

playlists_obj = {}
playlist_names_and_ids_obj = {}

missing_covers_obj = {}
missing_lyrics_obj = {}

song_index = 1
playlist_index = 1

for og_file_path in og_files_paths_list:
    
    og_file_dir = os.path.dirname(og_file_path)

    og_file_name = os.path.basename(og_file_path)
    og_file_name_root = os.path.splitext(og_file_name)[0]
    file_name_ext = os.path.splitext(og_file_name)[1]

    # song and playlist info
    artist_name = og_file_name_root.split("-")[0].replace("_", " ")
    song_name = og_file_name_root.split("-")[-1].replace("_", " ")
    playlist_name = og_file_dir.split("\\")[-1]
    
    # files old paths
    audio_file_old_path = os.path.join(og_file_dir, og_file_name_root + ".mp3")
    cover_file_old_path = os.path.join(og_file_dir, og_file_name_root + ".jpg")
    lyric_file_old_path = os.path.join(og_file_dir, og_file_name_root + ".txt")

    if file_name_ext == ".mp3":

        if cover_file_old_path in og_files_paths_list:
            if lyric_file_old_path in og_files_paths_list:

                # files new paths
                audio_file_new_path = os.path.join(audios_files_dir, str(song_index) + ".mp3")
                cover_file_new_path = os.path.join(covers_files_dir, str(song_index) + ".jpg")
                lyric_file_new_path = os.path.join(lyrics_files_dir, str(song_index) + ".txt")

                audio_file = AudioSegment.from_mp3(audio_file_old_path)
                song_duration = audio_file.duration_seconds

                # audio_file.export(audio_file_new_path, format="mp3", bitrate="128k")  # too slow
                shutil.copyfile(audio_file_old_path, audio_file_new_path)
                shutil.copyfile(cover_file_old_path, cover_file_new_path)

                with open(lyric_file_old_path, "r", encoding="utf-8") as f:
                    song_lyrics_html = f.read().replace("\n", "<br>")

                with open(lyric_file_new_path, "w", encoding="utf-8") as f:
                    f.write(song_lyrics_html)
                
                # adding song to songs_obj
                songs_obj[song_index] = {
                    "song_name": song_name,
                    "artist_name": artist_name,
                    "song_duration": song_duration,
                    "song_lyrics_html": song_lyrics_html,
                }
                song_names_and_ids_obj[song_name] = song_index
                
                # adding song to playlists_obj
                if playlist_name not in playlist_names_and_ids_obj:
                    playlist_names_and_ids_obj[playlist_name] = playlist_index
                    playlists_obj[playlist_index] = {
                        "playlist_name": playlist_name,
                        "playlist_artists": [artist_name],
                        "playlist_songs": [song_index],
                    }
                    playlist_index += 1
                else:
                    playlist_id = playlist_names_and_ids_obj[playlist_name]
                    playlists_obj[playlist_id]["playlist_songs"].append(song_index)
                    if artist_name not in playlists_obj[playlist_id]["playlist_artists"]:
                        playlists_obj[playlist_id]["playlist_artists"].append(artist_name)
                
                print(f"SONG {song_index} DONE")

            else:
                missing_lyrics_obj[song_index] = {
                    "song_name": song_name,
                    "artist_name": artist_name,
                    "lyric_file_path": lyric_file_old_path,
                }
        else:
            missing_covers_obj[song_index] = {
                "song_name": song_name,
                "artist_name": artist_name,
                "cover_file_path": cover_file_old_path,
            }
        song_index += 1


# dumping objects to json files
songs_json_file_path = os.path.join(obj_jsons_files_dir, "songs.json")
playlists_json_file_path = os.path.join(obj_jsons_files_dir, "playlists.json")
missing_covers_json_file_path = os.path.join(obj_jsons_files_dir, "missing_covers.json")
missing_lyrics_json_file_path = os.path.join(obj_jsons_files_dir, "missing_lyrics.json")

with open(songs_json_file_path, "w", encoding="utf-8") as f:
    json.dump(songs_obj, f, indent=4)
with open(playlists_json_file_path, "w", encoding="utf-8") as f:
    json.dump(playlists_obj, f, indent=4)
with open(missing_covers_json_file_path, "w", encoding="utf-8") as f:
    json.dump(missing_covers_obj, f, indent=4)
with open(missing_lyrics_json_file_path, "w", encoding="utf-8") as f:
    json.dump(missing_lyrics_obj, f, indent=4)

# printing missing covers and lyrics
print("\n\nMISSING COVERS:")
[print(missing_cover_id) for missing_cover_id in missing_covers_obj]
print("\n\nMISSING LYRICS:")
[print(missing_lyric_id) for missing_lyric_id in missing_lyrics_obj]


print("\n\n\nSUCCESSFULLY DONE!")