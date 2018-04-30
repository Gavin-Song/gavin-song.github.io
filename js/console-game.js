/* Console game for index.html */

/* IDEA
 * fake pong game
 * fancy clock and map display on side
 * fake chat scanner
 * list repos I own
 * obtain images from reddit
 * futuristic looking map
 * QAI
 * Solar system map
 * fake password cracker
 * fake bitcoin miner
 * fake wargames
 */



/* Handle the input */
let console_win = document.getElementById("console-window");
let console_input = document.getElementById("console");
let console_output = document.getElementById("console-content");

console_input
    .addEventListener("keyup", function(event){
    event.preventDefault();

    // On enter press
    if(event.keyCode === 13){
        let content = console_input.value;

        if(content.startsWith("./")) doProgram(content);
        else doCommand(content);
    }
});


/* Handles the file structure of a fake server */
let file_dir = {

}

/* Programs */
function doProgram(input){
    /* Clear console input */
    console_input.value = "";

    switch(input){
        case "crack_password":{
            break;
        }
    }
}


/* Commands */
function doCommand(input){
    /* Clear console input */
    console_input.value = "";

    /* Fix input */
    let args = input.split(" ").length > 1 ? input.substring(input.indexOf(" ") + 1) : "";


    /* Help command, returns a command listing */
    if(isCommand("help", input)){
        addOutput("<b>Command List: </b>", input);
    }

    /* Echo command, returns what the user inputted */
    else if(isCommand("echo", input)){
        addOutput(strip(args), input);
    }

    /* Eval command, evals javascript. Don't put anything dangerous here */
    else if(isCommand("eval", input)){
        if(!args || args.length === 0)
            addOutput("<b>Syntax: </b>eval [javascript code]", input);
        else{
            try{
                addOutput(strip(new String(eval(args))), input);
            }catch(e){
                addOutput(strip(e.toString()), input);
            }
        }
    }

    /* Clear command, clears all console lines */
    else if(isCommand("clear", input) || isCommand("cls", input)){
        document.getElementById("console-content").innerHTML = "";
    }

    /* Unknown command */
    else{
        addOutput(strip(input.split(" ")[0]) + ": command not found", input);
    }
}

function isCommand(command_name, input){
    return input.startsWith(command_name + " ") || input === command_name;
}

function addOutput(output, input){
    console_output.innerHTML += `<label class="console-label"><span style='color: #81D4FA'>web</span><span style='color: white'>@</span>gavin-github-site:~$</label> `
        + strip(input) + "<br>";
    console_output.innerHTML += output + "<br>";

    setTimeout(() => { console_win.scrollTop = console_win.scrollHeight + 400 }, 10);
}


function strip(html){
    return html.replace(/<\/?[a-z][a-z0-9]*[^>]*>/ig, "");
}
