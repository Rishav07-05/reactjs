function customRender(reactElement, mainContainer){
    // const domElemnet = document.createElement
    // (reactElement.type)
    // domElemnet.innerHTML = reactElement.children
    // domElemnet.setAttribute('href', reactElement.props.href)
    // domElemnet.setAttribute('target', reactElement.props.target)

    // mainContainer.appendChild(domElemnet)


    // writing the code in a way better modular form 

    const domElemnet = document.createElement
    (reactElement.type)
    domElemnet.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElemnet.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElemnet)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)