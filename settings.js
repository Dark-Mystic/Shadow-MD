const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['923474187615'] //ur owner number
global.ownernomer = "923474187615" //ur owner number2
global.ownername = "⏤͟͟͞ ⌱ ˹َٰ𝙎.َ𝙃.َٰ𝘼.َٖ𝘿ِٰ.ُِ𝙊.ٍَ𝙒˼ 🫧🇵🇰⃝ ᐞ" //ur owner name
global.ytname = "⏤͟͟͞ ⌱ ˹َٰ𝙎.َ𝙃.َٰ𝘼.َٖ𝘿ِٰ.ُِ𝙊.ٍَ𝙒˼ 🫧🇵🇰⃝ ᐞ" //ur yt chanel name
global.socialm = "⏤͟͟͞ ⌱ ˹َٰ𝙎.َ𝙃.َٰ𝘼.َٖ𝘿ِٰ.ُِ𝙊.ٍَ𝙒˼ 🫧🇵🇰⃝ ᐞ" //ur github or insta name
global.location = "⏤͟͟͞ ⌱ ˹َٰ𝙎.َ𝙃.َٰ𝘼.َٖ𝘿ِٰ.ُِ𝙊.ٍَ𝙒˼ 🫧🇵🇰⃝ ᐞ" //ur location

//new
global.botname = "SHADOW-MD"
global.ownernumber = '923474187615'
global.ownername = '⏤͟͟͞ ⌱ ˹َٰ𝙎.َ𝙃.َٰ𝘼.َٖ𝘿ِٰ.ُِ𝙊.ٍَ𝙒˼ 🫧🇵🇰⃝ ᐞ'
global.ownerNumber = ["923474187615@s.whatsapp.net"]
global.ownerweb = "https://wa.me/+923474187615"
global.websitex = "https://wa.me/+923474187615"
global.wagc = "https://chat.whatsapp.com/E2GcOH4xsTrLs1PaJ6P7Ku"
global.themeemoji = '🪀'
global.wm = "Shadow Bot Inc."
global.botscript = 'https://wa.me/+923474187615' //script link
global.packname = "Sticker By"
global.author = "⏤͟͟͞ ⌱ ˹َٰ𝙎.َ𝙃.َٰ𝘼.َٖ𝘿ِٰ.ُِ𝙊.ٍَ𝙒˼ 🫧🇵🇰⃝ ᐞ\n\n+923474187615"
global.creator = "923474187615@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./ShadowMedia/theme/shadowpic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./ShadowMedia/theme/shadowpic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./ShadowMedia/theme/shadowpic.jpg") //ur error pic
global.thumb = fs.readFileSync("./ShadowMedia/theme/shadowpic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!🥳', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
