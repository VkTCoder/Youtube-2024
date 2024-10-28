let optionButtons = document.querySelectorAll('.option-button');
let advancedOptionButton = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById('createLink');
let alignButtons = document.querySelectorAll('.align');
let spacingButtons = document.querySelectorAll('.spacing');
let formatButtons = document.querySelectorAll('.format');
let scriptButtons = document.querySelectorAll('.script');

// List of FontList

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];


// Initial Settings

const initializer = () => {
    // function calls for highlighting buttons
    // No highlights for link, list, undo, redo since they are one time operations

    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    // Create options for font names

    fontList.map((value) => {
        let option = document.createElement('option');
        option.value =value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // fontSize allows only till 7 (will will modify later)
    for(let i = 1; i <= 7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option)
    }

    //default size
    fontSizeRef.value = 3;

}


// main logic 

const modifyText = (command, defaultUi, value) => {
    // execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
};


// For Basic operations which don't need value parameter

optionButtons.forEach((button) =>{
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});


// Options that require value parameter (e.g. colors, fonts)

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});


// link

linkButton.addEventListener("click", () => {
    let userlink = prompt("Enter a URL");
    
    //if link has http than pass directly else add https
    if(/http/i.test(userlink)){
        modifyText(linkButton.id, false, userlink);
    }else{
        userlink = 'http://' + userlink;
        modifyText(linkButton.id, false, userlink);
    }
});


// Highlight Function for Clicked

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            
            // NeedsRemoval = true means only one button should be highlight
            if(needsRemoval){
                let alreadyActive = false;

                //If Currently clicked button is already active

                if(button.classList.contains("active")){
                    alreadyActive = true;
                }

                // Remove highlight from other buttons

                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                // if other button can be highlighted;
                button.classList.toggle("active");
            }
        });
    });
};


const highlighterRemover = (className) => {
    className.forEach((button) =>{
        button.classList.remove("active");
    });
};


// call the function

window.onload = initializer();