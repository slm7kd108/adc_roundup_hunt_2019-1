var express = require('express');
var router = express.Router();

/* GET home page. */
/* eslint-disable no-unused-vars */
router.get('/', function(req, res, next) {
    var locals = {
        blog_posts: [
            {
                title: "Does Anyone Have Any Laser Parts?",
                subtitle: "Asking for a friend",
                imagePath: "img/puppy1.jpg", 
                dateString: "September 27, 2019", 
                timeString: "10:56 am", 
                author: "bbg", 
                teaserText: "So the original laser company I was working with on my Super Duper Laser Ray Gun (SDLRG) was acquired by another larger company … a company called Alarm.com. They also acquired the laser parts that I need to complete my SDLRG, so I attempted...",
                isNew: false
            },
            {
                title: "Does Anyone Have Any Laser Parts???",
                subtitle: "Asking for a friend",
                imagePath: "img/puppy1.jpg", 
                dateString: "September 27, 2019", 
                timeString: "10:56 am", 
                author: "bbg", 
                teaserText: "So the original laser company I was working with on my Super Duper Laser Ray Gun (SDLRG) was acquired by another larger company … a company called Alarm.com. They also acquired the laser parts that I need to complete my SDLRG, so I attempted...",
                isNew: false
            },
            {
                title: "The Title",
                subtitle: "The subtitle",
                imagePath: "img/puppy1.jpg", 
                dateString: "Morched 33 2024", 
                timeString: "98:98 pm", 
                author: "bbg", 
                teaserText: "This is the teaser",
                isNew: true
            },
            {
                title: "First Blog Post Please Ignore",
                subtitle: "Just testing for now",
                imagePath: "img/puppy1.jpg", 
                dateString: "September 27, 2019", 
                timeString: "10:56 am", 
                author: "bbg", 
                teaserText: "So the original laser company I was working with on my Super Duper Laser Ray Gun (SDLRG) was acquired by another larger company … a company called Alarm.com. They also acquired the laser parts that I need to complete my SDLRG, so I attempted...",
                isNew: false
            },
        ]
    };

    res.render('blog_index', locals);
});

router.get('/about', function(req, res, next) {
    res.render('game_info_page');
});

router.get('/blog/entry/:entryId', function(req, res, next) {
        var blog_posts = [
            {
                title: "Does Anyone Have Any Laser Parts?",
                subtitle: "Asking for a friend",
                imagePath: "/img/puppy1.jpg", 
                dateString: "September 27, 2019", 
                timeString: "10:56 am", 
                author: "bbg", 
                teaserText: "I’ve never been to Florida, but it looks like a prime piece of real estate for an evil villain like me to take over. In fact, it might be the perfect state to test my newest laser cutting technology on… I could cut off the peninsula and have my very own private island to develop my evil plans without being interrupted by pesky neighbors. Of course this would be a tremendous undertaking, so I have to put a lot of plans into place to make this happen….  I also need to lock down access to the Death Laser control page, don't want just anyone hacking in and stopping my plan from being set into motion!",
                isNew: false
            },
            {
                title: "Does Anyone Have Any Laser Parts???",
                subtitle: "Asking for a friend",
                imagePath: "/img/puppy1.jpg", 
                dateString: "September 27, 2019", 
                timeString: "10:56 am", 
                author: "bbg", 
                teaserText: "So the original laser company I was working with on my Super Duper Laser Ray Gun (SDLRG) was acquired by another larger company … a company called Alarm.com. They also acquired the laser parts that I need to complete my SDLRG, so I attempted...",
                isNew: false
            },
            {
                title: "The Title",
                subtitle: "The subtitle",
                imagePath: "/img/puppy1.jpg", 
                dateString: "Morched 33 2024", 
                timeString: "98:98 pm", 
                author: "bbg", 
                teaserText: "This is the teaser",
                isNew: true
            },
            {
                title: "First Blog Post Please Ignore",
                subtitle: "Just testing for now",
                imagePath: "/img/puppy1.jpg", 
                dateString: "September 27, 2019", 
                timeString: "10:56 am", 
                author: "bbg", 
                teaserText: "So the original laser company I was working with on my Super Duper Laser Ray Gun (SDLRG) was acquired by another larger company … a company called Alarm.com. They also acquired the laser parts that I need to complete my SDLRG, so I attempted...",
                isNew: false
            },
        ];
    if (req.params.entryId < blog_posts.length) {
        var locals = {blog: {}};
        locals.blog = blog_posts[req.params.entryId];
        res.render('blog_entry', locals);
    }
    else {
        res.render('error');
    }
});
/* eslint-enable no-unused-vars */

module.exports = router;
