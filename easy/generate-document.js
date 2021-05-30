function generateDocument(characters, document) {
  // Write your code here.
	let char = characters.split("")
	let doc = document.split("")
	let charUnique = {}
	let docUnique = {}
	let docUniqueArray = []
	
	for(let i = 0; i<char.length; i++) {
		if(charUnique[char[i]] > 0) {
			charUnique[char[i]]++
		} else {
			charUnique[char[i]] = 1
		}
	}
	
	for(let i = 0; i<doc.length; i++) {
		if(docUnique[doc[i]] > 0) {
			docUnique[doc[i]]++
		} else {
			docUnique[doc[i]] = 1
			docUniqueArray.push(doc[i])
		}
	}
	
	console.log(charUnique)
	console.log(docUnique)
	
	for(let item of docUniqueArray) {
		if(charUnique[item] >= docUnique[item]) {
			//Do Nothing
		} else {
			return false
		}
	}

  return true;
}