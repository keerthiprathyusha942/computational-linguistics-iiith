var corpus = ['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.', 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.', 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'];

var para = "",stemarr=[],brr=[],stemwordcount=0;
function corpsel() {
	if(document.getElementById("default").selected)
		alert('Select a corpus');
	else {
        stemarr=[],brr=[],stemwordcount=0;
		document.getElementById('contbtn').innerHTML = "";
		document.getElementById('status').innerHTML = "";
		if(document.getElementById("c1").selected){
		document.getElementById("txt").innerHTML = corpus[0];
		para = corpus[0];
		}
	else if(document.getElementById("c2").selected){
		document.getElementById("txt").innerHTML = corpus[1];
		para = corpus[1];
		}
	else if(document.getElementById("c3").selected){
		document.getElementById("txt").innerHTML = corpus[2];
	 	para = corpus[2];
		}
	document.getElementById("tbletxt").innerHTML = "Enter the number of tokens and types for the above corpus:<table><tr><td>#tokens:</td><td><input type='text' id='token' value=''/></td></tr><tr><td>#types:</td><td><input type='text' id='type' value=''/></td></tr></table>";
	document.getElementById("submitbtn").innerHTML = "<button onclick='checkVal()'>Submit</button>";
	}
}
function checkVal() {
   	var words = para, arr=[], uniquewordcount = 0, f1=0, f2=0;
 	words = words.replace(/[^\w\s]/gi,"");
	words = words.replace(/[ ]{2,}/gi," ");
	var uniqueword = words.toLowerCase().split(' ');
	words = words.split(' ').length;
	
	for ( var i = 0; i <uniqueword.length; i++){
		arr[i]=0;
    }
	var i = 0, k,j=0;
	while(i!=uniqueword.length) {
		k = uniqueword[i];
		if(arr[uniqueword.indexOf(k)]==0){
			arr[uniqueword.indexOf(k)]=1;
			uniquewordcount++;
            stemarr[j]=stemwords(k);
			brr[j]=0;
			j++;
		}
		i++;
	}
	var tok = parseInt(document.getElementById('token').value);
	var typ = parseInt(document.getElementById('type').value);
	if(words===tok)
		document.getElementById("token").style.backgroundColor = "green";
	else {
		f1=1;
		document.getElementById("token").style.backgroundColor = "red";
	}
	if(uniquewordcount===typ)
		document.getElementById("type").style.backgroundColor = "green";
	else  	{	
		document.getElementById("type").style.backgroundColor = "red";
		f2=1;
	}
	if(f1==1 || f2==1)
		document.getElementById('status').innerHTML = "<p style='color:red'>Wrong Answer</p>";
	else	{
		document.getElementById('status').innerHTML = "<p style='color:green'>Right Answer</p>";
		document.getElementById('contbtn').innerHTML =  "<button onclick='newtypes()'>Continue</button>";
	}
	
}


function newtypes() {
	document.getElementById('submitbtn').innerHTML = "<br><p id='newtypestmt'>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.</p>";
	document.getElementById('status').innerHTML = "<p id='newtypetxt'>#new types:</p><input type='text' id='newtype' value=''/>";
	document.getElementById('contbtn').innerHTML =  "<button onclick='getstemans()'>Submit</button>";
}

function getstemans() {
	var stemmer = new Snowball('English');
	stemmer.setCurrent('abbreviations');
	stemmer.stem();
	console.log(stemmer.getCurrent());
} 
function stemwords(word) {
	var wordStemmer = new Snowball('English');
	wordStemmer.setCurrent(word);
	wordStemmer.stem();
	return wordStemmer.getCurrent();
} 	} 