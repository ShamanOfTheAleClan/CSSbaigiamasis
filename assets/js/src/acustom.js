function fade(e) {
    // transparent
    if (e.length != undefined){
      for (i=0; i<e.length; i++) {
        e[i].classList.add('faded');
      }
    } else {
      e.classList.add('faded');
    }
  }
  
  function unfade(e) {
    if (e.length != undefined){
      for (i=0; i<e.length; i++) {
      e[i].classList.remove('faded');
      }
    } else {
      e.classList.remove('faded');
    }
  }
  
  function hide(e) {
    // opacity:0
    if (e.length != undefined){
      for (i=0; i<e.length; i++) {
      e[i].classList.add('hidden');
      }
    } else {
      e.classList.add('hidden');
    }
  }
  
  function unhide(e) {
    if (e.length != undefined){
      for (i=0; i<e.length; i++) {
      e[i].classList.remove('hidden');
      }
    } else {
      e.classList.remove('hidden');
    }
  }
  
  function remove(e) {
    // display: none;
    if (e.length != undefined){
      for (i=0; i<e.length; i++) {
      e[i].classList.add('removed');
      }
    } else {
      e.classList.add('removed');
    }
  }
  
  function unremove(e) {
    if (e.length != undefined){
      for (i=0; i<e.length; i++) {
      e[i].classList.remove('removed');
      }
    } else {
      e.classList.remove('removed');
    }
  }
  
  
  let doc = {
  
    /*
    * doc != document
    * getAll retrieves Array
    
    - get = querySelector
    - getAll = querySelectorAll
    - id = getElementById
    - create = creates element
    */
  
    
    get: function(query, location){
      switch (true) {
        case typeof location === 'string':
          return document.querySelector(location).querySelector(query);
        case location == null: 
          return document.querySelector(query);
        default: 
          return location.querySelector(query);
      }
    },
  
    getAll: function(query, location){
      switch (true) {
        case typeof location === 'string':
          return Array.prototype.slice.call(document.querySelector(location).querySelectorAll(query));
        case location == null:
          return Array.prototype.slice.call(document.querySelectorAll(query));
        default: 
          return Array.prototype.slice.call(location.querySelectorAll(query));
      }
    },
  
    id: function(query){
      return document.getElementById(query);
    },
  
    create: function(item, appendTo, setClass, style){
      let a = document.createElement(item);
      switch (true) {
        case appendTo == null:
        case appendTo == 0:
        case appendTo == '':
          break;
        default: 
          appendTo.appendChild(a);
      };
      switch(true) {
        case setClass == null:
        case setClass == 0:
        case setClass == '':
          break;
        default:
          a.classList.add(setClass);
      };
      switch(true){
        case style == null:
        case style == 0:
        case style == '':
          break;
        case typeof style === 'object':
          for (i=0; i<Object.entries(style).length; i++) {
            a.style.setProperty(Object.entries(style)[i][0], Object.entries(style)[i][1]);
          }
      };    
      return a;
    },
    
  };