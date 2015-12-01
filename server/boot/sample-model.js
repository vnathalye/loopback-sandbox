module.exports = function(app) {
    var User = app.models.Member;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Team = app.models.Team;

    User.create([
        {username: 'John', email: 'john@doe.com', password: 'opensesame'},
        {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
        {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
    ], function(err, users) {
        if (err) throw err;
        console.log('Created users:', users);
        // create project 1 and make john the owner
        users[0].projects.create({
            name: 'project1'
        }, function(err, project) {
            if (err) throw err;
            console.log('Created project:', project);
            // add team members
            Team.create([
            { projectId: project.id, memberId: users[0].id},
            { projectId: project.id, memberId: users[1].id }
            ], function(err, team) {
                if (err) throw err;
                console.log('Created team:', team);
            });

            //create tasks
            project.tasks.create([
                { name: "p1-task1", status: "Completed" },
                { name: "p1-task2", status: "In Progress" },
                { name: "p1-task3", status: "Not started" }
            ], function (err, tasks) {
                if (err) throw err;
                console.log('Created tasks:', tasks);
            })
        });
        //create project 2 and make jane the owner
        users[1].projects.create({
            name: 'project2'
        }, function(err, project) {
            if (err) throw err;
            console.log('Created project:', project);
            //add team members
            Team.create({
                projectId: project.id,
                memberId: users[1].id
            }, function(err, team) {
                if (err) throw err;
                console.log('Created team:', team);
            });

            //create tasks
            project.tasks.create([
                { name: "p2-task1", status: "Completed" },
                { name: "p2-task2", status: "In Progress" },
                { name: "p2-task3", status: "Not started" }
            ], function (err, tasks) {
                if (err) throw err;
                console.log('Created tasks:', tasks);
            })
        });
        /*
        Role.create({
            name: 'admin'
        }, function (err, role) {
            if (err) throw err;
            console.log('Created role:', role);
            //make bob an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: users[2].id
            }, function (err, principal) {
                if (err) throw err;
                console.log('Created principal:', principal);
            });
        });
        */
    });
};
