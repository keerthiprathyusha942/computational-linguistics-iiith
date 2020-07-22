var englishsentences = ['The child liked the chocolate.', 'She was stopped by the bravest knight.', 'Mary baked a cake for his birthday.', 'She decorated the cake carefully.', 'Mary wore a dress with polka dots.'];

var hindisentences = ['राम ने सीता के लिए फल तोड़ा।', 'छोटे बच्चे पाठशाला जल्दी आयेंगे।', 'मेहनत का फल मीठा होता है।', 'वाह! वह खूबसूरत है।', 'पेड़ से पत्ते गिर गए।'];


function selection() {
    if (document.getElementById("default").selected)
        alert("Select a Language");
    else {
        document.getElementById("dropthree").innerHTML = "<select id='droptwo'><option id='defaultone' value='Select a sentence'>---Select a sentence---</option><option id='one'> one</option><option id='two'></option><option id='three'></option><option id='four'></option><option id='five'></option></select>";
        if (document.getElementById("englishh").selected) {
            document.getElementById("one").innerHTML = englishsentences[0];
            document.getElementById("two").innerHTML = englishsentences[1];
            document.getElementById("three").innerHTML = englishsentences[2];
            document.getElementById("four").innerHTML = englishsentences[3];
            document.getElementById("five").innerHTML = englishsentences[4];
        } else if (document.getElementById("hindii").selected) {
            document.getElementById("one").innerHTML = hindisentences[0];
            document.getElementById("two").innerHTML = hindisentences[1];
            document.getElementById("three").innerHTML = hindisentences[2];
            document.getElementById("four").innerHTML = hindisentences[3];
            document.getElementById("five").innerHTML = hindisentences[4];
        }
    }
}
