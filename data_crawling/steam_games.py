import pandas as pd
import os
import requests
import csv
import time

def makeapplist():

    appid = list()
    name = list()

    r = requests.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/").json()
    for app in r["applist"]["apps"]:
        if app["name"].strip():
            appid.append(int(app["appid"]))
            name.append(app["name"])

    data = pd.DataFrame()
    data["appid"] = appid
    data["name"] = name

    data.to_csv("./applist.csv", encoding="utf-8-sig", index=False)

def makegames():
    if not os.path.exists(f"{os.path.dirname(__file__)}/games.csv"):
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
        games.to_csv("./games.csv", encoding="utf-8-sig", index=True)
    try:
        with open(f"{os.path.dirname(__file__)}/applist.csv", "r", encoding="utf-8") as f:
            with open(f"{os.path.dirname(__file__)}/games.csv", "a", newline='', encoding="utf-8") as ff:
                if os.path.exists(f"{os.path.dirname(__file__)}/error_log.txt"):
                    with open(f"{os.path.dirname(__file__)}/error_log.txt", "r", encoding="utf-8") as log:
                        log_lines = log.readlines()
                        applist_line, games_line = map(int, log_lines[-1].split())
                else:
                    applist_line = 1
                    games_line = 1
                start_line = applist_line
                applist = csv.reader(f)
                while start_line:
                    next(applist)   # 첫 줄 스킵
                    start_line -= 1
                for appid in applist:
                    # start = time.time()
                    r = requests.get(f"https://store.steampowered.com/api/appdetails?appids={appid[0]}")
                    if r.status_code == 200:
                        apps = r.json()
                        for app in apps.values():
                            if app["success"]: # 요청 성공 실패 여부
                                data = app["data"]
                                if data["type"].strip() == "game": # 게임 정보만 저장
                                    name = data["name"]
                                    age_limit = data["required_age"]
                                    developers = data["developers"]
                                    genre = data["genres"]
                                    release = data["release_date"]["date"]
                                    steam_link = f"https://store.steampowered.com/app/{appid[0]}"
                                    if "screenshots" in data.keys(): 
                                        image_link = data["screenshots"]
                                    else:
                                        image_link = None
                                    if "movies" in data.keys(): 
                                        trailer_link = data["movies"]
                                    else:
                                        trailer_link = None
                                    # csv 쓰기
                                    games = csv.writer(ff)
                                    games.writerow([games_line, name, age_limit, developers, genre, release, None, None, None, steam_link, image_link])
                                    print(games_line)
                                    games_line += 1
                        # 시간 딜레이 하기
                        # end = time.time()
                        # gap = 1.5 - end + start
                        # if gap > 0 :
                        #     time.sleep(gap) 
                        applist_line += 1
                    else:
                        print(r.status_code)
                        raise Exception("API fail")
                        break
    except Exception as e:
        with open(f"{os.path.dirname(__file__)}/error_log.txt", "a", encoding="utf-8") as f:
            f.writelines([e.__str__() + "\n", f"{applist_line} {games_line}", "\n"])
            print(e)
        


makegames()