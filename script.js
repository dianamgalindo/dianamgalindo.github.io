

// Global HTML head elements
function addHTMLhead(title, description, dir) {
    let headItems = `
    <!-- Handling universal characters-->
    <meta charset="utf-8" />
    <meta name="author" content="Diana Galindo" />
   
    <title>${title}</title>
    <!--Meta description for SEO purposes/ ranking and Search Engines-->
    <meta name="description" content="${description}" />
    <link rel="icon" type="image/x-icon" href="${dir}images/avatar_test_4.png">

    <!-- Giving the browser instructions on how to handle scaling and dimensions. -->
     <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Linking CSS and JS files -->
    <!-- Latest compiled and minified CSS -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">   
      
    <!--Global local CSS-->
    <link rel="stylesheet" href="${dir}styles.css">

    `;
    document.head.innerHTML = headItems;
}

//Global Navigation/ dropdown JQuery had to be kept on every single page for it to work.
// Is there a way of making that script global too?  

function globalNav(dir) {
    let navigation = `
    <nav class="navbar_button margin-bottom">
    <div class="desktop_wrapper flexFix">
     <a class="logo" href="${dir}index.html"><img src="${dir}images/main_logo_black.png" width="40%" alt="Diana Galindo logo"></a>
            <!-- Collapse button -->
            <button type="button" data-toggle="collapse" data-target="#navbarOpenThis" aria-controls="navbarOpenThis"
                aria-expanded="false" aria-label="Toggle navigation">
                <div class="animated-icon">
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                </div>
            </button>
            <!-- Menu Content -->
            <div class="navbar_collapse collapse" id="navbarOpenThis">
                <div id="inner_global_nav">
                    <nav>
                        <ul>
                            <li><a href="${dir}index.html#about_me"><span class="menu-number">01</span> <span class="menu_text">Work</span></a></li>
                            <li><a href="${dir}Projects/portfolio_projects.html"><span class="menu-number">02</span> <span class="menu_text">Playground</span></a></li>
                            <li><a href="${dir}About/index.html"><span class="menu-number">03</span> <span class="menu_text">About</span></a></li>
                           <!-- <li><a href="${dir}"><span class="menu-number">04</span> <span class="menu_text">About</span></a></li> -->
                        </ul>
                    </nav>
                </div>
            </div>
    
    </div>
           
    </nav>    
    `;
    document.getElementById('global_nav').innerHTML = navigation;
}


// Global HTML footer
function addFooter(dir) {
    let content = `
    <p class="white-text">Copyright © 2024, <i>Diana Galindo</i>. 
    Designed and coded with <img src="${dir}images/heart_footer.png" width="15px" alt="emoji of a Heart">
    <img src="${dir}images/flag_footer.png" width="15px" alt="emoji of Colombian flag"></p>
    `;
    document.getElementById('globalFooter').innerHTML = content;
}









