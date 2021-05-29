const {v4} = require('uuid');

const UserCache = {
    user_details : {
        'sessionid' : {
            'name' : 'username',
            'questions_answered' : 0,
            'analysis' : {}
        }
    },
    new_user : function(user_name) {
        let userid = v4();
        UserCache.user_details[userid] = {
            name : user_name,
            questions_answered : 0,
            analysis : {}
        };
        return userid;
    },
    name : function(userid){
        return UserCache.user_details[userid].name;
    },
    next_question : function(user_id) {
        let question_idx = UserCache.user_details[user_id].questions_answered;
        return [Questions[question_idx], question_idx];
    },
    store_analysis : function(user_id, qid, analysis) {
        UserCache.user_details[user_id].questions_answered += 1;
        UserCache.user_details[user_id].analysis[qid] = analysis;
    },
    get_analysis : function(user_id) {
        return Object.values(UserCache.user_details[user_id].analysis);
    }
};

const Questions = [
    "What's the most recent concern that has been in your mind? Elaborate.",
    "Whats your mood been like this past month? Sad? Worthless? Hopeless?",
    "How do you picture yourself right now? Elaborate.",
    "What is your sleep pattern? Do you find troubles falling asleep? ",
    "How has your appetite been in the past month? Are you eating normally?",
    "How would you describe your level of interest or motivation while completing daily activities? Elaborate.",
    "How is your physical health according to you? Elaborate.",
    "Have you easily felt rejected or criticized by others? How do you respond when that happens? Elaborate."
];

module.exports = {
    UserCache,
}