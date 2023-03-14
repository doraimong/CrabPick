import csv
import os
import time
from urllib import parse

import pandas as pd
import requests

game_f = open(f"{os.path.dirname(__file__)}/games.csv", "r", newline='', encoding="utf-8")
review_f = open(f"{os.path.dirname(__file__)}/reviews.csv", "w", newline='', encoding="utf-8")
games = csv.reader(game_f)
review_csv = csv.writer(review_f)
review_csv.writerow([None,"game_id", "review_id", "author", "voted_up", "language"])
query = {
    "json": 1,    
    "num_per_page": 100,    
    "cursor": None,    
    }
i = 1
for game in games:
    if game[1].isnumeric():
        url = f"https://store.steampowered.com/appreviews/{game[1]}?" + parse.urlencode(query)
        # print(url)
        r = requests.get(url)
        if r.status_code == 200:
            result = r.json()
            # print(result)
            if result["success"] != 1:
                continue
            if query["cursor"] == result["cursor"]:
                query["cursor"] = None
                continue
            else:
                for review in result["reviews"]:
                    review_id = review["recommendationid"]
                    author = review["author"]
                    voted_up = review["voted_up"]
                    language = review["language"]
                    review_csv.writerow([i, game[1], review_id, author, voted_up, language])
                    # print(i)
                    end = time.time()
                    time.sleep(1.5 - end + start)
                    i += 1
                query["cursor"] = result["cursor"]

