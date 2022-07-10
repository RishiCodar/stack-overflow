import mongoose from 'mongoose';

const QuestionSchema = mongoose.Schema({
    questionTitle: {type: String , required:"Question must have a Title"},
    questionBody: {type: String , required:"Question must have a Body"},
    questionTags: {type: [String] , required:"Question must have Tags"},
    noOfAnswers: {type:Number, default:0},
    noOfComments: {type: Number, default:0},
    upVote:{type: [String], default:[]},
    downVote:{type: [String], default:[]},
    userPosted:{type: String, required:"Question must have an Author"},
    userId:{type:String},
    askedOn: {type: Date, default: Date.now},
    answer: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        comment: [{
            commentBody: String,
            userCommented: String,
            userId: String,
            commentedOn: {type: Date, default: Date.now},
        }],
        answeredOn: {type: Date, default: Date.now},
    }],
    comment: [{
        commentBody: String,
        userCommented: String,
        userId: String,
        commentedOn: {type: Date, default: Date.now},
    }]
})


export default mongoose.model("Question",QuestionSchema);