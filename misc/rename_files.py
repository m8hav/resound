print()
import os, glob, shutil

files_dir = os.path.abspath(f"{os.path.dirname(__file__)}/../media/audio")

print("Root DIR:\t", files_dir, "\n")

og_files_dir = os.path.join(files_dir, "original")
renamed_files_dir = os.path.join(files_dir, "renamed")

og_files_paths_list = glob.glob(f"{og_files_dir}/**/*", recursive=True)

for index, og_file_path in enumerate(og_files_paths_list, 1):
    og_file_dir = os.path.dirname(og_file_path)
    renamed_file_dir = og_file_dir.replace(og_files_dir, renamed_files_dir)
    og_file_name = os.path.basename(og_file_path)
    og_file_name_root = os.path.splitext(og_file_name)[0]
    file_name_ext = os.path.splitext(og_file_name)[1]

    if file_name_ext in ["", ".ini"]: continue

    renamed_file_name_root = "".join([c if c.isalnum() else "_" for c in og_file_name_root])

    renamed_file_name = renamed_file_name_root + file_name_ext
    renamed_file_path = os.path.join(renamed_file_dir, renamed_file_name)

    print(f"{index}\t{renamed_file_path}\tDONE\n")
    os.makedirs(renamed_file_dir, exist_ok=True)
    shutil.copyfile(og_file_path, renamed_file_path)