function customRender(reactElement, container)
{
    const dom_element=document.createElement(reactElement.type);
    dom_element.innerHTML=reactElement.children;
    // dom_element.setAttribute('href', reactElement.props.href);
    // dom_element.setAttribute('target', reactElement.props.target);
    // container.appendChild(dom_element);
    for (const prop in reactElement.props)
    {
        if(prop === 'childern') continue;
        dom_element.setAttribute(prop,reactElement.props[prop]);

    }
    container.appendChild(dom_element);
}
const React = {
    type:'a',
    props:{
        href:'https//www.google.com',
    target:'_blank'},
    children: 'Click me to visit Google'
}
const container = document.getElementById('root')

customRender(React, container)