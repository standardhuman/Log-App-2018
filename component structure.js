App(){
    logIn() =>{
        signUp(){
            createUser()
            createPass()
            enterEmail()
            authGitHUb()
            authTwitter()
            }
        logIn(){
            enterUserPass()
            forgotPass(click) => {
                enterEmail()    
                sendResetLink()
                enterNewPass(pass) => newPass
                enterUserPass(pass) =>  
                }
        }    
    }
    logScreen() => {
        
        createNewPost() => {
            dayDisplay() => day++
            dateDisplay() => today.date
            enterProgressField() => progress
                charCount => (progress.length - 280)
            enterThoughtsField() => thoughts
            enterLinksField() => links, shortenLink()
                shortenLink() => shortLink 
            autoTweetDisplay(hashtags, day, links) => {tweet}
        // this is the only part I'm not sure about how to do yet. Prioroty 1: write a small node app that posts a tweet to my account.
            sendTweetAndPushButton(tweet, progress, thoughts, day, date, shortLinks) => (sendTweet(tweet), gitPush(git))
                sendTweet() => post.twitter.api 
                gitPush() => post.gituhub.api
                    // will need to use OAuth as OAuth uses tokens which the user can easily revoke and use to limit the access the app has to their account.
                    // will use a webflow to direct users to GH for auth and permissions setting.
                        // Woot! Now you know the basics of the GitHub API!
                            // Basic & OAuth authentication
                            // Fetching and creating repositories and issues
                            // Conditional requests
        }
        
        displayBacklog() => {
                map(backLog):
                day
                date
                thoughts
                progress
                links
            }
    }
}