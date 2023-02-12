function returnMenu(){
    return `
    <div class="menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            ${li()}
        </ul>
    </div>
    `
}

function li(){
    return`<li><a href="https://elecodeiranzamin.com">elecode</a></li>`
}

document.write(returnMenu())