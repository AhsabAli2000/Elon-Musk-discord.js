const discord = require('discord.js')
const { prefix, token } = require("./config.json")
const client = new discord.Client()

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    console.log(message.content)

    let member = message.mentions.members.first()
    if (message.content.startsWith(`${prefix} who are you`)) message.channel.send(`My name is Elon Musk, I am the founder of Tesla and SpaceEX. I am The second richest person on Earth (EVEN MORE THAN BILL GATES). I am also to be said the most coolest person on Earth`) 
    else if(message.content.startsWith(`${prefix} show me the monster`)) message.channel.send(`<:monster:773043823009071105>`)
    else if(message.content === prefix) message.channel.send(`hi ${message.author.username} :wave:`)
    else if(message.content.startsWith(`${prefix} annoy`)) {
        for (let i = 0; i < 100; i++) {
            message.channel.send(`hi, I am Elon Musk`)
        }
    }
})

client.login(token)

// add elon musk to the server https://discord.com/oauth2/authorize?client_id=761890025528623114&scope=bot&permissions=2147483647