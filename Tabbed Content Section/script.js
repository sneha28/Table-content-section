function openTab(tabId) {

    // hide all content
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content){
        content.classList.remove('active');
    });

    //remove active from all buttons

    let buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(function(button){
        button.classList.remove('active');
    });

    //show selected tab content

    document.getElementById(tabId).classList.add('active');

    //highlight active button

    event.target.classList.add('active');
}