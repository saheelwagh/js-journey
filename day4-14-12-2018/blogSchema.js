const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{
        body: String,
        date: Date
    }],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})

const Blog = mongoose.model('Blog', blogSchema)