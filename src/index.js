define([
    "text!src/templates/command.html"
], function(commandTemplate) {
    var commands = codebox.require("core/commands");
    var dialogs = codebox.require("utils/dialogs");

    commands.register({
        id: "palette.open",
        title: "Command Palette: Open",
        shortcuts: [
            "mod+shift+p"
        ],
        hidden: true,
        run: function() {
            return dialogs.list(commands, {
                template: commandTemplate,
                filter: function(command) {
                    return command.get("hidden") !== true && command.isValidContext();
                }
            })
            .then(function(command) {
                return command.run();
            });
        }
    });
});