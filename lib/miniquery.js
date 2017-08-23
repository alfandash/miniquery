/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

let SweetSelector = {
  select: function(element) {
    return document.querySelectorAll(element)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
  hide: function(element) {
    return document.querySelectorAll(element).forEach((x)=>{
      x.style.display = "none"
    })

  },
  show: function(element) {
    return document.querySelectorAll(element).forEach((x)=>{
      x.style.display = "block"
    })
  },
  removeClass: function(element,newClass) {
    return document.querySelectorAll(element).forEach((x)=>{
      x.classList.remove(newClass);
    })
  },
  addClass: function(element,newClass) {
    return document.querySelectorAll(element).forEach((x)=>{
      x.classList.add(newClass);
    })
  }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on: function(element,addEvent,addFunction) {
    document.querySelectorAll(element).forEach((x)=>{
      x.addEventListener(addEvent,addFunction)
    })
  }

}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
  request: function(req) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", req.success);
    oReq.addEventListener("error", req.fail);
    oReq.open(req.type,req.url);
    oReq.send();
  }
}



/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
let miniquery = (element) => {
   let query = SweetSelector.select(element)
   query.hide = function(){DOM.hide(element)}
   query.show = function(){DOM.show(element)}
   return query
}


let $ = miniquery;
