const UL = document.getElementById("authors");
const URL = 'https://randomuser.me/api/?results=10';

const CREATE_NODE = element => document.createElement(element);

const APPEND = (parent, el) => parent.appendChild(el);

fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
        let authors = data.results;
        return authors.map(function (author) {
            let li = CREATE_NODE('li'),
                img = CREATE_NODE('img'),
                span = CREATE_NODE('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            APPEND(li, img);
            APPEND(li, span);
            APPEND(ul, li)
        })
    })
    .catch(function (error) {
        console.error();
    });
    /*
     function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://randomuser.me/api/?results=10';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data.results;
    return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });   */