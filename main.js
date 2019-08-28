function update_current() {
    var current_active_tab = document.getElementsByClassName("activeTab");
    var current_active_page = document.getElementsByClassName("activePage");
    current_active_tab[0].className = "";
    current_active_page[0].className = "";
}


document.getElementById("home-tab").addEventListener("click", function(){
    update_current();
    this.classList.add("activeTab");
    var hp = document.getElementById("home-page");
    hp.classList.add("activePage");
});

document.getElementById('me-tab').addEventListener("click", function() {
    update_current();
    this.classList.add("activeTab");
    var ap = document.getElementById("me-page");
    ap.classList.add("activePage");
});

document.getElementById('projects-tab').addEventListener("click", function() {
    update_current();
    this.classList.add("activeTab");
    var ap = document.getElementById("projects-page");
    ap.classList.add("activePage");
});

document.getElementById("contact-tab").addEventListener("click", function() {
    update_current();
    this.classList.add("activeTab");
    var cp = document.getElementById("contact-page");
    cp.classList.add("activePage");
});

