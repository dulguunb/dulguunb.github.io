let body = document.getElementById("body");
let ul = document.getElementById("feed_list");
posts.forEach(post => {
    let name = post.name;
    let date = post.date;
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.appendChild( document.createTextNode(`${name} - ${post.date} | #${post.topic} `) );
    link.href = `pages/${name.split(" ").join("")}.html`
    li.appendChild(link);
    ul.appendChild(li);
});