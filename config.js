
module.exports = function() {

    var config = {

        url: {
            login: "http://46.225.234.116/samaweb/",
            lesson: "http://46.225.234.116/samaweb/stuUnitSelection.asp"
        },

        element: {
            login: {
                username: { name: "UserCode" },
                password: { name: "KeyCode" },
                submit: { id: "input" }
            },
            lesson: {
                form: { id: "frmSelect" },
                code: { id: "LessonCode" },
                group: { id: "LessonGroup" },
                ckeckbox: { css: "input[type=checkbox]" },
                submit: { xpath: "/html/body/center/table[4]/tbody/tr/td[4]/input" },
                submitAll: { id: "btnValidate" },
            }
        },

        data: {
            login: {
                username: "YOUR_USERNAME",
                password: "YOUR_PASSWORD"
            },

            lessons: [

                { code: "YOUR_LESSONCODE", group: "YOUR_LESSONGROUP" },
                { code: "YOUR_LESSONCODE", group: "YOUR_LESSONGROUP" }
            ],
            
        },

    }

    return config;
}
