function getSkills () {
    request = new XMLHttpRequest();
    request.open(
        'GET',
        'https://mhw-db.com/skills?q={"name":"Critical Eye"}',
        true
    );
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var skills = JSON.parse(request.responseText);
            //alert(request.responseText);
            for (let i = 0; i < skills.length; i++) {
                let skill = skills[i];
                document.write('<p>' + skill['name'] + '</p>');
                document.write(
                    '<table style="width: 50%" id="' + skill['name'] + '">'
                );
                document.getElementById(skill['name']).innerHTML +=
                    "<tr><th style='width:25%'> Level </th> <th style='width:25%'> Discription </th>";
                for (let j = 0; j < skill['ranks'].length; j++) {
                    let rank = skill['ranks'][j];
                    document.getElementById(skill['name']).innerHTML +=
                        "<tr><th style='width:25%' class='elem'>" +
                        rank['level'] +
                        "</th><th style='width:25%' class='elem'>" +
                        rank['description'] +
                        '</th></tr>';
                }
            }
        } else {
            console.log(
                'readyState: ' +
                    request.readyState +
                    ', status: ' +
                    request.status
            );
        }
    };
    request.send();
}
