var text ="";
        function pressed(x) {
            text += x;
            document.getElementById("answer-box").innerHTML = text;
        }

        function calculate(){
            document.getElementById("answer-box").innerHTML = eval(text);
            text = ""+eval(text);
        }

        function clearer(){
            text = "";
            document.getElementById("answer-box").innerHTML = "";
        }