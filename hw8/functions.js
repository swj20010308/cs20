function getSkills () {
    // normal method
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
            document.getElementById('method').innerHTML +=
                '<h3> Normal method </h3>';
            writeSkills(skills, 'method', '1');
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

    // fetch
    resFetch = fetch('https://mhw-db.com/skills?q={"name":"Critical Eye"}')
        .then(res => res.text())
        .then(s => {
            document.getElementById('method').innerHTML += '<h3> Fetch </h3>';
            writeSkills(JSON.parse(s), 'method', '2');
        })
        .catch(error => console.log(error));
}

function writeSkills (skills, id, getMethod) {
    for (let i = 0; i < skills.length; i++) {
        let skill = skills[i];
        document.getElementById(id).innerHTML +=
            '<table style="width: 50%" id="' + skill['name'] + getMethod + '">';
        document.getElementById(skill['name'] + getMethod).innerHTML +=
            '<tr><th style="width: 50%">' + skill['name'] + '</th></tr>';
        document.getElementById(skill['name'] + getMethod).innerHTML +=
            "<tr><th style='width:25%'> Level </th> <th style='width:25%'> Discription </th>";
        for (let j = 0; j < skill['ranks'].length; j++) {
            let rank = skill['ranks'][j];
            document.getElementById(skill['name'] + getMethod).innerHTML +=
                "<tr><th style='width:25%' class='elem'>" +
                rank['level'] +
                "</th><th style='width:25%' class='elem'>" +
                rank['description'] +
                '</th></tr>';
        }
        document.getElementById(id).innerHTML += '</table> <br>';
    }
}
