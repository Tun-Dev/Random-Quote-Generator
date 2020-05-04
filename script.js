var quotes = [ 'Success is not final; failure is not fatal: It is the courage to continue that counts.  <br> - Winston S. Churchill',
'It is better to fail in originality than to succeed in imitation. <br> - Herman Melville',
'The road to success and the road to failure are almost exactly the same. <br> - Colin R. Davis',
'Success usually comes to those who are too busy to be looking for it. <br> - Henry David Thoreau',
'Opportunities don\'t happen. You create them. <br> - Chris Grosser',
'Don\'t be afraid to give up the good to go for the great. <br> - John D. Rockefeller',
'I find that the harder I work, the more luck I seem to have.<br> - Thomas Jefferson',
'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. <br> - Ray Goforth',
'Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better. <br> - Jim Rohn',
'Try not to become a man of success. Rather become a man of value. <br> - Albert Einstein'
]

function displayQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteGenerate').innerHTML = quotes[randomNum];
    var e = document.getElementById('btn1');
    e.style.display = 'none';
}

setInterval(displayQuote, 30000);

