function changeHoursToMinutes(hour) {
    let arr = hour.split(":");
    return parseInt(arr[0]) * 60 + parseInt(arr[1]);
}

function computeDuration(start, end) {
    return changeHoursToMinutes(end) - changeHoursToMinutes(start);
}


function checkTimeHighLimit(shows, limit) {
    let result = 0;
    for (let i = 0; i < shows.length; i++) {
        result += computeDuration(shows[i][1], shows[i][2]);
    }
    if (result > changeHoursToMinutes(limit)) {
        return true;
    }
    return false;
}

function checkOverlapTime(hour1Start, hour1End, hour2Start, hour2End) {
    if (changeHoursToMinutes(hour1Start) <= changeHoursToMinutes(hour2End) && changeHoursToMinutes(hour1End) >= changeHoursToMinutes(hour2Start)) {
        return true;
    }

    if (changeHoursToMinutes(hour2Start) <= changeHoursToMinutes(hour1End) && changeHoursToMinutes(hour2End) >= changeHoursToMinutes(hour1Start)) {
        return true;
    }

    return false;
}

function checkEarliestDuration(start1,end1,start2,end2) {
    if (changeHoursToMinutes(result.hours1) > ) {
    }

}


function catflix(shows, limit, name) {
    if (checkTimeHighLimit(shows, limit)) {
        return "You are not allowed to watch so much TV, " + name;
    }

    var result = {
        hours1: 24,
        hours2: 24
    };
    var minutesResult = 24 * 60;

    for (let i = 0; i < shows.length - 1; i++) {
        for (let j = i + 1; j < shows.length; j++) {
            if (checkOverlapTime(shows[i][1], shows[i][2], shows[j][1], shows[j][2])) {
                if (changeHoursToMinutes(shows[i][1]) > changeHoursToMinutes(shows[j][1])) {
                    checkEarliestDuration(shows[i][1], shows[i][2], shows[j][1], shows[j][2]);
                }
                else checkEarliestDuration(shows[j][1], shows[j][2], shows[j][1], shows[j][2]);


            }
        }
    }


    return "You may watch your shows, " + name;
}

// console.log(catflix(shows = [["Cat and Morty", "11:15", "11:45"], ["Doctor Cat", "13:30", "14:45"]], limit = "01:30", name = "Pluffy"));
// console.log(catflix(shows = [["House of Cats", "12:30", "13:30"], ["Game of Paws", "11:00", "12:30"], ["Better Call Cat", "13:35", "14:15"]], limit = "05:30", name = "Pussycat"));
console.log(catflix(shows = [["House of Cats", "12:30", "13:30"], ["Game of Paws", "11:00", "12:30"], ["Better Call Cat", "12:25", "14:15"]], limit = "05:30", name = "Pussycat"));
