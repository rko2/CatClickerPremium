$(function() {

    var cats = [{
      name: 'cat1',
      count: 0,
      src: 'cat1.jpg'
    },
    {
      name: 'cat2',
      count: 0,
      src: 'cat2.jpg'
    },
    {
      name: 'cat3',
      count: 0,
      src: 'cat3.jpg'
    }];

    var octopus = {
      list: function(){
        var catlist = [];
        for (var i = 0; i < cats.length; i++) {
          catlist.push(cats[i]);
        }
        return catlist;
      },

      clickedcat: function(input){
        var imgclear = document.getElementById('image');
        imgclear.innerHTML = '';
        input.count += 1;
        var chosen = input;
        return catview.init(chosen);
      },

      init: function(){
        listview.init();
      }
    };

    var listview = {
      init: function(){
        for (var i = 0; i < octopus.list().length; i++) {
          var cat = octopus.list()[i];
          //$('#list').append('<li class="cat">' + cat + '</li>');
          var showlist = document.createElement('button');
          showlist.textContent = cat.name;
          $('#list').append(showlist);
          showlist.addEventListener('click', (function(catcopy) {
            return function(){
              octopus.clickedcat(catcopy);
            }
          }(cat)))
        }
      }
    };

    var catview = {
      init: function(input){
        $('#image').append('<img src="' + input.src + '"></img>');
        $('#image').append('<div>' + input.name + ": " + input.count + '</div>');
      }
    }

    octopus.init();
    console.log(octopus.list());
}());
