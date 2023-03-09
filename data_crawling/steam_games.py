import pandas as pd
import os
import requests
import csv
import time

# appid = list()
# name = list()

# r = requests.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/").json()
# for app in r["applist"]["apps"]:
#     if app["name"].strip():
#         appid.append(int(app["appid"]))
#         name.append(app["name"])

# data = pd.DataFrame()
# data["appid"] = appid
# data["name"] = name

# data.to_csv("./applist.csv", encoding="utf-8-sig", index=False)
applist = open(f"{os.path.dirname(__file__)}/applist.csv", encoding="utf-8")

name = list()
age_limit = list()
developers = list()
genre = list()
release = list()
avg_playtime = list()
mood = list()
word_cloud = list()
steam_link = list()
image_link = list()
trailer_link = list()
i = 0
try:
    for a in applist:
        appid = a.split(",")
        if appid[0].isnumeric():
            r = requests.get(f"https://store.steampowered.com/api/appdetails?appids={appid[0]}")
            if r.status_code == 200:
                apps = r.json()
                for app in apps.values():
                    if app["success"]: # 요청 성공 실패 여부
                        data = app["data"]
                        if data["type"].strip() == "game": # 게임 정보만 저장
                            name.append(data["name"])
                            age_limit.append(data["required_age"])
                            developers.append(data["developers"])
                            genre.append(data["genres"])
                            release.append(data["release_date"]["date"])
                            avg_playtime.append(None)
                            mood.append(None)
                            word_cloud.append(None)
                            steam_link.append(f"https://store.steampowered.com/app/{appid[0]}")
                            image_link.append(data["screenshots"])
                            if "movies" in data.keys(): 
                                trailer_link.append(data["movies"])
                            else:
                                trailer_link.append(None)
                i += 1
                print(i)
            else:
                break
except:
    print(i)

games = pd.DataFrame()
games["name"] = name
games["age_limit"] = age_limit
games["developers"] = developers
games["genre"] = genre
games["release"] = release
games["avg_playtime"] = avg_playtime
games["mood"] = mood
games["word_cloud"] = word_cloud
games["steam_link"] = steam_link
games["image_link"] = image_link
games["trailer_link"] = trailer_link
games.to_csv("./games.csv", encoding="utf-8-sig", index=False)

