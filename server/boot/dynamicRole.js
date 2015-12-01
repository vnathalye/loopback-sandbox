module.exports = function (app) {
    var Role = app.models.Role;
    Role.registerResolver('teamMember', function (role, context, cb) {
        function reject(err) {
            if (err) {
                return cb(err);
            }
            cb(null, false);
        }

        console.log("teamMember resolver called");

        reject(null); // for the time being reject access to all teamMembers
    });
};
