var x = prompt("Enter a Message");
var res;
for(let i=1;i<=6;i++)
{
     res = "<h"+i+">"+x+"</h"+i+">";
    //document.write(`<h${i}>${x}</h${i}>`);
    document.write(res);
}
