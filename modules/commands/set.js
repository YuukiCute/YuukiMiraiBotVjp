module.exports.config = {
	name: "set",
  version: "1.0.9",
	hasPermssion: 0,
	credits: "Team Mirai",
	description: "Thay đổi một vài thứ trong nhóm của bạn",
	commandCategory: "box",
	usages: "[emoji/avt/Bname/poll/QTV/name] [args]",
	cooldowns: 5,
	dependencies: {"request":"",
                 "fs-extra":""},
};

module.exports.run = async function({ api, event, args, Threads }) {
	const request = require("request");
	const fs = require("fs-extra");
	if (args[0] == "emoji") {
		if (!args[1]) {
			var emoji = "😀,😃,😄,😁,😆,😅,😂,🤣,😊,😇,🙂,🙃,😉,😌,😍,🥰,😘,😗,😙,😚,😋,😛,😝,😜,🤪,🤨,🧐,🤓,😎,🤩,🥳,😏,😒,😞,😔,😟,😕,🙁,☹️,😣,😖,😫,😩,🥺,😢,😭,😤,😠,😡,🤬,🤯,😳,🥵,🥶,😱,😨,😰,😥,😓,🤗,🤔,🤭,🤫,🤥,😶,😐,😑,😬,🙄,😯,😦,😧,😮,😲,🥱,😴,🤤,😪,😵,🤐,🥴,🤢,🤮,🤧,😷,🤒,🤕,🤠,🤑,😈,👿,👹,💀,👺,👻,🤡,💩,☠️,👽,👾,🤖,🎃,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🤲,👐,🙌,👏,🤝,👍,👎,👊,✊,🤛,🤜,✌️,🤟,🤘,👌,🤏,👈,👉,👆,👇,☝️,✋,🤚,🖐️,🖖,👋,🤙,💪,🖕,✍️,🙏,🦾,🦿,🦶,🦵,💄,💋,👄,🦷,👅,👂,🦻,👃,👣,👁️,👀,🧠,🗣️,👤,👥,👶,👧,🧒,👦,👩,🧑,👨,👩‍🦱,👨‍🦱,👩‍🦰,👨‍🦰,👱‍♀️,👱‍♂️,👩‍🦳,👨‍🦳,👩‍🦲,👨‍🦲,🧔,👵,🧓,👴,👲,👳‍♀️,👳‍♂️,🧕,👮‍♀️,👮‍♂️,👷‍♀️,👷‍♂️,💂‍♀️,💂‍♂️,🕵️‍♀️,🕵️‍♂️,👩‍⚕️,👨‍⚕️,👩‍🌾,👨‍🌾,👩‍🍳,👨‍🍳,👩‍🎓,👨‍🎓,👩‍🎤,👨‍🎤,👩‍🏫,👨‍🏫,👩‍🏭,👨‍🏭,👩‍💻,👨‍💻,👩‍💼,👨‍💼,👩‍🔧,👨‍🔧,👩‍🔬,👨‍🔬,👩‍🎨,👨‍🎨,👩‍🚒,👨‍🚒,👩‍✈️,👨‍✈️,👩‍🚀,👨‍🚀,👩‍⚖️,👨‍⚖️,👰,🤵,👸,🤴,🦸‍♀️,🦸‍♂️,🦹‍♀️,🦹‍♂️,🤶,🎅,🧙‍♀️,🧙‍♂️,🧝‍♀️,🧝‍♂️,🧛‍♀️,🧟‍♀️,🧛‍♂️,🧟‍♂️,🧞‍♀️,🧞‍♂️,🧜‍♀️,🧜‍♂️,🧚‍♀️,🧚‍♂️,👼,🤰,🤱,🙇‍♀️,🙇‍♂️,💁‍♀️,💁‍♂️,🙅‍♀️,🙅‍♂️,🙆‍♀️,🙆‍♂️,🙋‍♀️,🙋‍♂️,🤦‍♀️,🤦‍♂️,🤷‍♀️,🤷‍♂️,🧏‍♀️,🧏‍♂️,🙎‍♀️,🙎‍♂️,🙍‍♀️,🙍‍♂️,💇‍♀️,💇‍♂️,💆‍♀️,💆‍♂️,🧖‍♀️,🧖‍♂️,💅,🤳,💃,🕺,👯‍♂️,👯‍♂️,🕴️,🚶‍♀️,🚶‍♂️,🧍‍♀️,🧍‍♂️,🧎‍♀️,🧎‍♂️,👩‍🦯,👨‍🦯,👩‍🦼,👨‍🦼,👩‍🦽,🏃‍♀️,🏃‍♂️,👫,👭,👬,💑,👩‍❤️‍👩,👨‍❤️‍👨,💏,👩‍❤️‍💋‍👩,👨‍❤️‍💋‍👨,👨‍👩‍👦,👨‍👩‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👩‍👧‍👨‍👩‍👧‍👧,👩‍👩‍👦,👩‍👩‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👩‍👩‍👧‍👧,👨‍👨‍👦,👨‍👨‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👨‍👨‍👧‍👧,👩‍👦,👩‍👧,👩‍👧‍👦,👩‍👦‍👦,👩‍👧‍👧,👨‍👦,👨‍👧,👨‍👧‍👦,👨‍👦‍👦,👨‍👧‍👧,🧶,🧵,🧥,🥼,👚,👕,👖,👔,👗,🩱,👙,🩳,🩲,👘,👞,🦺,🥿,👠,👡,👢,🩰,👞,👟,🥾,🧦,🧤,🧣,🎩,🧢,👒,🎓,⛑️,👑,💍,👝,👛,👜,💼,🎒,🧳,👓,🕶️,🌂,🥽,🐶,🐱,🐭,🐹,🐰,🦊,🐻,🐼,🐨,🐯,🦁,🐮,🐷,🐽,🐽,🐸,🐵,🙈,🙉,🙊,🐒,🐔,🐧,🐦,🐤,🐣,🐥,🦆,🦅,🦉,🦇,🐺,🐗,🐴,🦄,🐝,🐛,🦋,🐌,🐞,🐜,🦟,🦗,🕷️,🕸️,🦂,🐢,🐍,🦎,🦖,🦕,🐙,🦑,🦐,🦞,🦀,🦪,🐡,🐠,🐟,🐬,🐳,🐋,🦈,🐊,🐅,🐆,🦓,🦍,🦧,🦥,🐘,🦛,🦏,🐪,🐫,🦒,🦘,🐃,🐂,🐄,🐎,🐖,🐏,🐑,🦙,🐐,🦌,🐕,🦮,🐕‍🦺,🐩,🐈,🐓,🦃,🦚,🦜,🦩,🦢,🕊️,🐇,🦝,🦨,🦡,🦦,🐁,🐀,🐿️,🦔,🐾,🐉,🐲,🌵,🎄,🌲,🌳,🌴,🌱,🌿,☘️,🍀,🎍,🎋,🍃,🍂,🍁,🍄,🐚,🌾,💐,🌷,🌹,🥀,🌺,🌸,🌼,🌻,🌞,🌝,🌛,🌜,🌚,🌕,🌖,🌗,🌘,🌑,🌒,🌓,🌔,🌙,🌎,🌍,🌏,🪐,💫,⭐,🌟,✨,⚡,☄️,💥,🔥,🌪️,🌈,☀️,🌤️,⛅,🌥️,☁️,🌦️,🌧️,⛈️,🌩️,🌨️,❄️,☃️,⛄,🌬️,💨,💧,💦,☔,☂️,🌊,🌫️,🍏,🍎,🍐,🍊,🍋,🍌,🍉,🍇,🍓,🍈,🍒,🍑,🥭,🍍,🥥,🥝,🍅,🍆,🥑,🥦,🥬,🥒,🌶️,🌽,🥕,🥔,🧅,🧄,🍠,🥐,🥯,🍞,🥖,🥨,🧀,🧈,🥚,🍳,🥞,🧇,🥓,🥩,🍗,🍖,🦴,🌭,🍔,🍟,🍕,🥪,🧆,🥙,🌮,🌯,🥗,🥘,🥫,🍝,🍜,🍲,🍛,🍣,🍱,🥟,🍤,🍙,🍚,🍘,🍥,🥠,🥮,🍢,🍡,🍧,🍨,🍦,🥧,🧁,🍰,🎂,🍮,🍭,🍬,🍫,🍿,🍩,🍪,🌰,🥜,🍯,🥛,🍼,☕,🍵,🧉,🥤,🧃,🍶,🍺,🍻,🥂,🍷,🥃,🍸,🍹,🍾,🧊,🥄,🍴,🥡,🥡,🥢,🧂,⚽,🏀,🏈,⚾,🥎,🎾,🏉,🏐,🥏,🎱,🏓,🏸,🏒,🏑,🥍,🏏,🥅,⛳,🏹,🎣,🤿,🥊,🥋,🎽,🛹,🛷,⛸️,🥌,🎿,⛷️,🏂,🏋️‍♀️,🏋️‍♂️,🤼‍♀️,🤼‍♂️,🤸‍♀️,🤸‍♂️,⛹️‍♀️,⛹️‍♂️,🤺,🤾‍♀️,🤾‍♂️,🏌️‍♀️,🏌️‍♂️,🏇,🧘‍♀️,🧘‍♂️,🏄‍♂️,🏊‍♀️,🏊‍♂️,🤽‍♀️,🤽‍♂️,🚣‍♀️,🚣‍♂️,🧗‍♀️,🧗‍♂️,🚵‍♀️,🚵‍♂️,🚴‍♀️,🚴‍♂️,🏆,🥇,🥈,🥉,🏅,🎖️,🏵️,🎗️,🎫,🎟️,🎪,🤹‍♀️,🤹‍♂️,🎭,🎨,🎬,🎤,🎧,🎼,🎹,🥁,🎷,🎺,🎸,🪕,🎻,🎲,♟️,🪀,🎯,🎳,🎮,🎰,🪁,🧩,🚗,🚕,🚙,🚌,🚎,🏎️,🚓,🚑,🚒,🚐,🚚,🚛,🚜,🛴,🦽,🦼,🚲,🛵,🛺,🏍️,🚨,🚔,🚍,🚘,🚖,🚡,🚠,🚟,🚃,🚋,🚞,🚝,🚄,🚅,🚈,🚂,🚆,🚇,🚊,🚉,✈️,🛫,🛬,🛩️,💺,🪂,🛰️,🚀,🛸,🚁,🛶,⛵,🚤,🛥️,🛳️,⛴️,🚢,⚓,⛽,🚧,🚦,🚥,🚏,🗺️,🗿,🗽,🗼,🏰,🏯,🏟️,🎡,🎢,🎠,⛲,⛱️,🏖️,🏝️,🏜️,🌋,⛰️,🏔️,🗻,🏕️,⛺,🏠,🏡,🏘️,🏚️,🏗️,🏢,🏭,🏬,🏣,🏤,🏥,🏦,🏨,🏪,🏫,🏩,💒,🏛️,⛪,🕌,🛕,🕍,🕋,⛩️,🛤️,🛣️,🗾,🎑,🏞️,🌅,🌄,🌠,🎇,🎆,🌇,🌆,🏙️,🌃,🌌,🌉,🌁,⌚,📱,📲,💻,⌨️,🖥️,🖨️,🖱️,🖲️,🕹️,🗜️,💽,💾,💿,📀,📼,📷,📸,📹,🎥,📽️,🎞️,📞,☎️,📟,📠,📺,📻,🎙️,🎚️,🎛️,🧭,⏱️,⏲️,⏰,🕰️,⌛,⏳,📡,🔋,🔌,💡,🔦,🕯️,🪔,🧯,🛢️,💸,💵,💴,💶,💷,💰,💳,💎,⚖️,🦯,🧰,🔧,🔨,⚒️,🛠️,⛏️,🪓,🔩,⚙️,🧱,⛓️,🧲,🔫,💣,🧨,🔪,🗡️,⚔️,🛡️,🚬,⚰️,⚱️,🏺,🔮,📿,🧿,💈,⚗️,🔭,🔬,🕳️,🩹,💊,🩸,💉,🩺,🧬,🦠,🧫,🧪,🌡️,🧹,🧺,🧻,🚽,🚰,🚿,🛁,🛀,🧼,🧽,🪒,🧴,🛎️,🔑,🗝️,🚪,🪑,🛋️,🛏️,🛌,🧸,🖼️,🛍️,🛒,🎁,🎈,🎏,🎀,📩,📨,📧,💌,📥,📤,📦,🎊,✉️,🎉,🧧,🎎,🎐,🏮,🏷️,📪,📫,📬,📭,📮,📯,📜,📃,📄,📑,🧾,📊,📈,📉,🗒️,🗓️,📆,📅,🗑️,📇,🗃️,🗳️,🗄️,📋,📁,🗂️,📂,🗞️,📰,📓,📔,📒,📕,📗,📘,📙,📚,📖,🔖,🧷,🔗,📎,🖇️,📐,📏,🧮,📍,📌,✂️,🖊️,🖋️,✒️,🖌️,🖍️,📝,✏️,🔍,🔎,🔏,🔐,🔒,🔓,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💔,❣️,💕,💞,💓,💗,💖,💘,💝,💟,☮️,✝️,☪️,🕉️,☸️,✡️,🔯,🕎,☯️,☦️,🛐,⛎,♈,♉,♊,♋,♌,♍,♎,♏,♐,♑,♒,♓,🆔,⚛️,🉑,☢️,☣️,📴,📳,🈶,🈚,🈸,🈺,🈷️,✴️,🆚,💮,🉐,㊙️,㊗️,🈴,🈵,🈹,🈲,🅰️,🅱️,🆎,🆑,🅾️,🆘,❌,⭕,🛑,⛔,📛,🚫,💯,💢,♨️,🚷,🚳,🚱,🔞,📵,🚭,❗,❕,❓,❔,‼️,⁉️,🔅,🔆,〽️,⚠️,🚸,🔱,⚜️,🔰,♻️,✅,🈯,💹,❇️,✳️,❎,🌐,💠,Ⓜ️,🌀,💤,🏧,🚾,♿,🅿️,🈳,🈂️,🛂,🛃,🛄,🛅,🚹,🚺,🚼,🚻,🚮,🎦,📶,🈁,🔣,ℹ️,🔤,🔡,🔠,🆖,🆗,🆙,🆒,🆕,🆓,0️⃣,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,🔟,🔢,#️⃣,*️⃣,⏏️,▶️,⏸️,⏺️,⏭️,⏮️,⏩,⏪,⏫,⏬,◀️,🔼,🔽,➡️,⬅️,⬆️,⬇️,↗️,↘️,↙️,↖️,↕️,↪️,↪️,↩️,⤴️,⤵️,🔀,🔁,🔄,🔂,🔃,↔️,🎵,🎶,\➕,➖,✖️,➗,♾️,💲,👁️‍🗨️,💱,®️,™️,©️,🔚,➰,🔙,〰️,🔛,🔜,🔝,➿,✔️,☑️,🔘,⚪,⚫,🔴,🟠,🟡,🟢,🔵,🟣,🟤,🔺,🔻,🔸,🔹,🔶,🔷,🔳,🔲,▪️,▫️,◾,◽,◼️,◻️,⬛,⬜,🟥,🟧,🟨,🟩,🟪,🟦,🟫,🔈,🔇,🔉,🔊,🔔,🔕,📣,📢,💬,💭,🗯️,♠️,♣️,♥️,♦️,🃏,🎴,🀄,🕐,🕑,🕒,🕓,🕔,🕕,🕖,🕘,🕘,🕙,🕚,🕗,🕛,🕜,🕝,🕞,🕟,🕠,🕡,🕦,🕢,🕥,🕤,🕣,🕧".split(",");
			var random = emoji[Math.floor(Math.random() * emoji.length)];                        
			api.changeThreadEmoji(`${random}`, event.threadID)
			return;
		} else try {
			api.changeThreadEmoji(args[1], event.threadID)
		} catch (e) {
			api.sendMessage(`${e.name}: ${e.message}`, event.threadID, event.messageID);
		}
	}
	 
	if (args[0] == "Bname") {
		var name = args.slice(1,args.length).join(" ");
		api.setTitle(`${name}`, event.threadID)
	}
	
	if (args[0] == "name") {
		const name = args.slice(1,args.length).join(" ");
		const mention = Object.keys(event.mentions)[0];
		if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
		if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
	 }
	 
	if (args[0] == "avt") {
		if (event.type != "message_reply") return api.sendMessage("Vui lòng reply 1 bức ảnh",event.threadID,event.messageID);
		(event.messageReply.attachments[0] != "") ? (event.messageReply.attachments[0].type == "photo") ? request(event.messageReply.attachments[0].url).pipe(fs.createWriteStream(__dirname + `/cache/picture.png`)).on("close",()=> api.changeGroupImage(fs.createReadStream(__dirname + `/cache/picture.png`),event.threadID, () => fs.unlinkSync(__dirname + `/cache/picture.png`))) : api.sendMessage("Nghiêm túc coi,mày reply cái gì thế?",event.threadID,event.messageID) : ""
	}
  
  	if (args[0] == "poll") {
   		var content = args.join(" ");
    		var title = content.slice(4, content.indexOf(" => "));
    		var options = content.substring(content.indexOf(" => ") + 4)
    		var option = options.split(" | ");
    		var object = {};
    		if (option.length == 1 && option[0].includes(' |')) option[0] = option[0].replace(' |', '');
    		for (var i = 0; i < option.length; i++) object[option[i]] = false;
    		return api.createPoll(title, event.threadID, object, (err) => (err) ? api.sendMessage("Có lỗi xảy ra, hãy sử dụng poll theo format [<Tên cuộc thăm dòa> => <ý kiến 1> | <ý kiến n+1>]", event.threadID, event.messageID) : '');
  	}
  
  	if (args[0] == "QTV") {
		try {
			const mention = Object.keys(event.mentions)[0];
			if (!mention) {
				var data = (event.type == "message_reply") ? event.messageReply.senderID : args[1];   
				const threadAdmins = await Threads.getInfo(event.threadID);
        			const find_ = threadAdmins.adminIDs.find(el => el.id== event.senderID);
				const find = threadAdmins.adminIDs.find(el => el.id == data);
				(!find_) ? api.sendMessage("Bạn đéo phải QTV",event.threadID,event.messageID) : (!find) ? api.changeAdminStatus(event.threadID,data,true) : api.changeAdminStatus(event.threadID,data,false);
			}
			else {
				const threadAdmins = await Threads.getInfo(event.threadID);
      	const find_ = threadAdmins.adminIDs.find(el => el.id == event.senderID);
				const find = threadAdmins.adminIDs.find(el => el.id == mention);
				(!find_) ? api.sendMessage("Bạn đéo phải QTV",event.threadID,event.messageID) : (!find) ? api.changeAdminStatus(event.threadID,mention,true) : api.changeAdminStatus(event.threadID,mention,false);
			}
		}
		catch (e) {
			return api.sendMessage("Có lỗi xảy ra!",event.threadID,event.messageID);
		}
 	}
}