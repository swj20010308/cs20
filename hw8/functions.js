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
            alert(skills[0]['name']);
            for (let i = 0; i < skills.length; i++) {
                document.write(
                    '<table style="width: 100%" class="table">' +
                        skills[i]['name']
                );
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
