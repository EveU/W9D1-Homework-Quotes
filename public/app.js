// Quote Lab
// The quotes are all hardcoded in our web page. Let's start moving towards having a dynamic web application and set the existing quotes programatically via Javascript.

// Even Further:
// Add functionality to delete quotes

var init = function(){

  // Create an array of the existing quotes, each quote having text and author
  var quoteArray = [
    {
      text:"Visual Basic is the way forward, I don't know why we are doing Javascript.",
      author:"Jay Chetty"
    },
    {
      text:"The only CSS you need to know is background-color: tomato",
      author:"Rick"
    },
    {
      text:"No Blockers *smug tone*",
      author:"Keith"
    },
    {
      text:"Scaffold is nothing but a fiery hell.",
      author:"Valerie"
    },
    {
      text:"CSS is stupid and I hate it.",
      author:"Oscar Brooks"
    }
  ]

  // Add the quotes to the page dynamically with Javascript
  var addNewQuote = function(){
    var blockquote = document.createElement('blockquote');
    blockquote.innerText = quoteArray[i].text;
    var cite = document.createElement('cite');
    cite.innerText = quoteArray[i].author;
    blockquote.appendChild(cite);
    newQuote.appendChild(blockquote);
    quoteSection.appendChild(newQuote);
  }

  var quoteSection = document.getElementsByClassName('quote-section')[0];
  var newQuote = document.createElement('article');
  newQuote.classList.add("quote");

  for(var i=0;i<quoteArray.length;i++){
    addNewQuote();
  }

  // Further:
  // Extend our quote application so that a user can add quotes. (Don't worry about these saving between refreshing page, will do this tomorrow)
  var quoteForm = document.createElement("form");
  var quoteFormLabel = document.createElement("label");
  quoteFormLabel.innerText = "Add Quote:"
  var quoteTextInput = document.createElement("input");
  quoteTextInput.type = "text";
  quoteTextInput.id = "quote-text-input";
  quoteTextInput.size = "30";
  quoteTextInput.placeholder = "type quote here";

  var quoteAuthorInput = document.createElement("input");
  quoteAuthorInput.type = "text";
  quoteAuthorInput.id = "quote-author-input";
  quoteAuthorInput.size = "15";
  quoteAuthorInput.placeholder = "who said it?";

  var quoteFormButton = document.createElement("button");
  quoteFormButton.id = "add-button";
  quoteFormButton.value = "Add Quote";

  quoteForm.appendChild(quoteFormLabel);
  quoteForm.appendChild(quoteTextInput);
  quoteForm.appendChild(quoteAuthorInput);
  quoteForm.appendChild(quoteFormButton);

  var header = document.getElementsByTagName('header')[0];
  header.appendChild(quoteForm);

  var button = document.getElementById('add-button');
  
  var handleClick = function(event){
    event.preventDefault();
    var newQuoteText = document.getElementById('quote-text-input').value;
    var newQuoteAuthor = document.getElementById('quote-author-input').value;
    var blockquote = document.createElement('blockquote');
    blockquote.innerText = newQuoteText;
    var cite = document.createElement('cite');
    cite.innerText = newQuoteAuthor;
    blockquote.appendChild(cite);
    newQuote.appendChild(blockquote);
    quoteSection.appendChild(newQuote);
    // blockquote.innerText = "";
    document.getElementById('quote-text-input').value = "";
    document.getElementById('quote-author-input').value = "";
  };
  
  button.onclick = handleClick;

  // Even Even Further:
  // While typing show the quote being created at real time.
  var blockquote = document.createElement('blockquote');
  var cite = document.createElement('cite');
  
  var whileTyping = function(){
    var newQuoteText = document.getElementById('quote-text-input').value;
    var newQuoteAuthor = document.getElementById('quote-author-input').value;
    var newQuote = document.createElement('article');
    newQuote.classList.add("quote");
    newQuoteText = document.getElementById('quote-text-input').value;
    newQuoteAuthor = document.getElementById('quote-author-input').value;
    blockquote.innerText = newQuoteText;
    cite.innerText = newQuoteAuthor;
    blockquote.appendChild(cite);
    newQuote.appendChild(blockquote);
    quoteSection.appendChild(newQuote);
  }

  var input = document.getElementById('quote-text-input');
  input.onkeyup = whileTyping;
  var input2 = document.getElementById('quote-author-input');
  input2.onkeyup = whileTyping;


  // Even Further:
  // Style page
  var quoteBox = document.getElementsByTagName('blockquote');
  for(i=0; i<quoteBox.length; i++){
    // quoteBox[0].style.position = "absolute";
    // quoteBox[0].style.top = "2px";
    // quoteBox[0].style.left = "0px";
    quoteBox[i].style.width = "300px";
    quoteBox[i].style.margin = "8px";
    quoteBox[i].style.padding = "2px";
    quoteBox[i].style.float = "left";
    quoteBox[i].style.fontWeight = "300";
    quoteBox[i].style.border = "1px solid #c4c4c4";
    quoteBox[i].style.borderRadius = "6px";
    quoteBox[i].style.textAlign = "left";
    quoteBox[i].style.background = "#fff";
    quoteBox[i].style.boxSizing = "border-box";
    quoteBox[i].style.display = "block";
    quoteBox[i].style.background = "linear-gradient(wheat, tomato, wheat)";
    var cite = quoteBox[i].getElementsByTagName('cite')[0];
    cite.style.display = "block";
    cite.style.padding = "2px";
    cite.style.textAlign = "right";
  }

  var asides = document.getElementsByTagName('aside');
  for(i=0; i<asides.length; i++){
    asides[i].style.display = "block";
    asides[i].style.clear = "both";
  }

  var form = document.getElementById('sign-up');
  form.style.background = "linear-gradient(wheat, tomato, wheat)";

  // var quoteArticle = document.createElement("article");
  // quoteArticle.classList.add("quote");

  // var blockquote = document.createElement('blockquote');
  // blockquote.innerText = "New Quote, shiny!";

  // var cite = document.createElement('cite');
  // cite.innerText = "Some dude";

  // blockquote.appendChild(cite);
  // quoteArticle.appendChild(blockquote);

  // var quotes = document.querySelector('section');
  // quotes.appendChild(quoteArticle);

  // var articles = document.querySelectorAll('article');
  // for(var i=0; i<articles.length; i++){
  //   if(i%2 === 0){
  //     articles[i].style.background = "tomato";
  //     articles[i].style.color = "wheat";
  //   } else {
  //     articles[i].style.backgroundColor = "wheat";
  //     articles[i].style.color = "tomato";
  //   }
  // };

  // var qotd = document.querySelector('h2');
  // qotd.innerText = "Featured Quotes";

  // var featuredQuotes = document.getElementsByTagName('aside')[0];
  // var newQuoteArticle = document.createElement('article');
  // newQuoteArticle.classList.add("quote");
  // var newBlockquote = document.createElement('blockquote');
  // newBlockquote.innerText = "Ooh... featured... ";
  // var newCite = document.createElement('cite');
  // newCite.innerText = "Me";
  // newBlockquote.appendChild(newCite);
  // newQuoteArticle.appendChild(newBlockquote);
  // featuredQuotes.appendChild(newQuoteArticle);
}

window.onload = init;


  // var quotesArray = [];
  // var quotes = document.getElementsByClassName('quote');
  // for(i=0;i<quotes.length;i++){
  //   var quoteText = quotes[i].children[0].innerText;
  //   var quoteAuthor = quotes[i].children[0].children[0].innerText;
  //   quotesArray.push({quote: quoteText, author: quoteAuthor});
  // }
  // console.log(quotesArray);