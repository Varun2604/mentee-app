const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {UserCache} = require('./cache');
const {AnalyseAnswer} = require('./nlp');
const {Diagnose} = require('./diagnosis');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

// TODO - all error cases for the APIs to be handled

// serve the index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "index.html"));
})

// create users & usersession
app.post('/api/v1/users', (req, res) => {
    var userid =  UserCache.new_user(req.body.name);
    res.json({ 
      message: 'user added to list', 
      userid : UserCache.new_user(req.body.name),
      name : UserCache.name(userid)
    }); 
});

// returns the next question for the user
app.get('/api/v1/users/:uid/questions', (req, res) => {
    let [q, qid] = UserCache.next_question(req.params.uid)
    res.json({ 
      'question' : q,
      'id' : qid
    }); 
});

// stores the answer for the question, with the intent
app.post('/api/v1/users/:uid/questions/:qid/answers', (req, res) => {

    let answer = req.body.answer;
    let uid = req.params.uid;
    let qid = req.params.qid;
    AnalyseAnswer(answer, (analysis)=>{
        UserCache.store_analysis(uid, qid, analysis);
        res.json({ 
            message: 'User answer added to analysis', 
            analysis : analysis
        }); 
    });
});

// returns the next question for the user
app.get('/api/v1/users/:uid/analysis', (req, res) => {
    let uid = req.params.uid;
    let analysis = UserCache.get_analysis(uid);
    Diagnose(analysis, (diagnosis)=>{
        res.json(JSON.parse(diagnosis)); 
    })
});

app.listen(port, () => {
  console.log(`Example app listening at 0.0.0.0:${port}`)
})