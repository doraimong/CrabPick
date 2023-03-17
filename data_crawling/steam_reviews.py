import csv
import os
import time
from urllib import parse

import requests

roooooot = os.path.dirname(__file__)

try:
    if not os.path.exists(f"{roooooot}/reviews.csv"):
        with open(f"{roooooot}/reviews.csv", "a", newline='', encoding="utf-8") as games:
            csv_writer = csv.writer(games)
            csv_writer.writerow([None,"game_id", "review_id", "author", "voted_up", "language", "steam_purchase"])

    with open(f"{roooooot}/games.csv", "r", newline='', encoding="utf-8") as game_f:
        with open(f"{roooooot}/reviews.csv", "w", newline='', encoding="utf-8") as review_f:
            if os.path.exists(f"{roooooot}/error_log2.txt"):
                    with open(f"{roooooot}/error_log2.txt", "r", encoding="utf-8") as log:
                        log_lines = log.readlines()
                        games_line, review_line = map(int, log_lines[-1].split())
            else:
                review_line = 1
                games_line = 1
            games = csv.reader(game_f)
            review_csv = csv.writer(review_f)
            # review_csv.writerow([None,"game_id", "review_id", "author", "voted_up", "language", "steam_purchase"])
            query = {
                "json": 1,    
                "num_per_page": 100,    
                "cursor": None,    
                }
            review_line = 1
            for game in games:
                if game[1].isnumeric():
                    print("이까지 실행됨")
                    while True:
                        url = f"https://store.steampowered.com/appreviews/{game[1]}?" + parse.urlencode(query)
                        # print(url)
                        start = time.time()
                        r = requests.get(url)
                        if r.status_code == 200:
                            try:
                                result = r.json()
                            except:
                                with open(f"{roooooot}/error_log2.txt", "a", encoding="utf-8") as f:
                                    f.writelines([f"JSON Decode Error {game[1]}"])
                                continue
                            # print(result)
                            if result["success"] != 1:
                                break
                            if query["cursor"] == result["cursor"]:
                                query["cursor"] = None
                                break
                            else:
                                for review in result["reviews"]:
                                    review_id = review["recommendationid"]
                                    author = review["author"]
                                    voted_up = review["voted_up"]
                                    language = review["language"]
                                    steam_purchase = review["steam_purchase"]
                                    review_csv.writerow([review_line, game[1], review_id, author, voted_up, language, steam_purchase])
                                    print(review_line, game[1])
                                    end = time.time()
                                    time.sleep(1.5 - end + start)
                                    review_line += 1
                                query["cursor"] = result["cursor"]
                        elif r.status_code == 429:
                            time.sleep(300)
                        elif r.status_code > 500:
                            time.sleep(1200)
                games_line += 1
except KeyboardInterrupt as e:
        with open(f"{roooooot}/error_log2.txt", "a", encoding="utf-8") as f:
            f.writelines(["Manualy shutdown" + "\n", f"{games_line} {review_line}", "\n"])
            print(e)
except Exception as e:
    with open(f"{roooooot}/error_log2.txt", "a", encoding="utf-8") as f:
        f.writelines([e.__str__() + "\n", f"{games_line} {review_line}", "\n"])
        print(e)
    