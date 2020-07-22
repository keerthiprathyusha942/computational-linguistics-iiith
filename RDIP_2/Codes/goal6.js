var englishsentences = ['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday.','She decorated the cake carefully.','Mary wore a dress with polka dots.'];

var hindisentences   = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];


function tab() {
    show = "",partVal=[];
    document.getElementById("inp").innerHTML = "<i>Select the POS tag for corresponding words</i>";
    if(document.getElementById("englishh").selected){
    if(document.getElementById("one").selected)
        show=englishsentences[0];
    else if(document.getElementById("two").selected)
        show=englishsentences[1];
    else if(document.getElementById("three").selected)
        show=englishsentences[2];
    else if(document.getElementById("four").selected)
        show=englishsentences[3];
    else if(document.getElementById("five").selected)
        show=englishsentences[4];
    show=show.replace(".","");
    partdrop = "<option id='part1' value='Noun'>Noun</option><option id='part2' value='Pronoun'>Pronoun</option><option id='part3' value='Verb'>Verb</option><option id='part4' value='Adjective'>Adjective</option><option id='part5' value='Adverb'>Adverb</option><option id='part6' value='Determiner'>Determiner</option><option id='part7' value='Preposition'>Preposition</option><option id='part8' value='Conjunction'>Conjunction</option><option id='part9' value='Interjection'>Interjection</option>";
    }
    else if(document.getElementById("hindii").selected){
    if(document.getElementById("one").selected)
        show=hindisentences[0];
    else if(document.getElementById("two").selected)
        show=hindisentences[1];
    else if(document.getElementById("three").selected)
        show=hindisentences[2];
    else if(document.getElementById("four").selected)
        show=hindisentences[3];
    else if(document.getElementById("five").selected)
        show=hindisentences[4];
    show=show.replace("।","");
    partdrop = "<option id='part1' value='Noun'>Noun</option><option id='part2' value='Pronoun'>Pronoun</option><option id='part3' value='Verb'>Verb</option><option id='part4' value='Adjective'>Adjective</option><option id='part5' value='Adverb'>Adverb</option><option id='part6' value='Postposition'>Postposition</option><option id='part7' value='Conjunction'>Conjunction</option><option id='part8' value='Interjection'>Interjection</option>";
    }
    show=show.split(" ");
    var colum="<tr id='tablerow' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
    for(var i = 0; i < show.length; i++)
        colum = colum +"<tr id='id"+i+"'><td>"+show[i]+"</td><td><select id='partdropdown"+i+"' class='partdropdown' onchange='partselect(this.id,this.value)'>"+partdrop+"</select></td><td></td><td></td></tr>";
    document.getElementById("out").innerHTML = colum.trim();
        document.getElementById('submitbutton').innerHTML = "<button onclick='partofspeechvalues()'>Submit</button>";
}

function partselect(id, value) {
    if(id==='partdropdown0')
        partVal[0]=value;
    else if(id==='partdropdown1')
        partVal[1]=value;
    else if(id==='partdropdown2')
        partVal[2]=value;
    else if(id==='partdropdown3')
        partVal[3]=value;
    else if(id==='partdropdown4')
        partVal[4]=value;
    else if(id==='partdropdown5')
        partVal[5]=value;
    else if(id==='partdropdown6')
        partVal[6]=value;
}
function partofspeechvalues() {
    console.log(partVal,partVal.length);
} 




var show="", partdrop, partVal,show1="",enganswers=[],index,f=0;
function selection(){
    if(document.getElementById("default").selected)
        alert("Select a Language");
    else{
        document.getElementById("dropthree").innerHTML = "<select id='droptwo' onchange='tab()'><option id='defaultone' value='Select a sentence'>---Select a sentence---</option><option id='one'></option><option id='two'></option><option id='three'></option><option id='four'></option><option id='five'></option></select>";
        document.getElementById("inp").innerHTML = "";
        document.getElementById("out").innerHTML = "";
        document.getElementById("submitbutton").innerHTML = "";
        partVal=[];
        if(document.getElementById("englishh").selected){
            document.getElementById("one").innerHTML   = englishsentences[0];
            document.getElementById("two").innerHTML   = englishsentences[1];
            document.getElementById("three").innerHTML = englishsentences[2];
            document.getElementById("four").innerHTML  = englishsentences[3];
            document.getElementById("five").innerHTML  = englishsentences[4];
        }
        else if(document.getElementById("hindii").selected){
            document.getElementById("one").innerHTML   = hindisentences[0];
            document.getElementById("two").innerHTML   = hindisentences[1];
            document.getElementById("three").innerHTML = hindisentences[2];
            document.getElementById("four").innerHTML  = hindisentences[3];
            document.getElementById("five").innerHTML  = hindisentences[4];
        }
    }
} 