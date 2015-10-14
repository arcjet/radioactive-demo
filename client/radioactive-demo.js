Template.radioactiveDemo.onCreated(function () {
  this.filter = new ReactiveVar({});

  this.sortBy = new ReactiveVar({
    name: false,
    symbol: false,
    weight: true
  });

  this.sortAscending = new ReactiveVar({
    name: false,
    symbol: false,
    weight: true
  });
});

function elementHelper(className, propertyName, isSelect) {
  return () => {
    var obj = Template.instance()[propertyName].get();

    this.$(`.${className}`).removeClass(`${className}-active`);

    _.keys(obj).forEach((key) => {
      if (obj[key] && isSelect) {
        this.$(`select.${className} option`).filter(function () {
          return $(this).text() === obj[key];
        }).prop('selected', true);
      }
      else if (obj[key]) {
        this.$(`.${className}-${key}`).addClass(`${className}-active`);
      }
    });

    return Template.instance()[propertyName];
  }
}

Template.radioactiveDemo.helpers({
  filter: elementHelper('filter-by-type', 'filter', true),
  sortBy: elementHelper('sort-by', 'sortBy'),
  sortAscending: elementHelper('sort-ascending', 'sortAscending'),

  items: function () {
    return Elements.find({});
  }
});

Template.radioactiveDemo.onRendered(function () {
  elementHelper('sort-by', 'sortBy')();
  elementHelper('sort-ascending', 'sortAscending')();
})

function elementEvent(className, propertyName, isSelect) {
  return function (evt, tpl) {
    var obj = tpl[propertyName].get();
    var value = $(evt.target).data(className);

    if (isSelect) {
      var text = $(evt.target).val();
      if (text === 'All') {
        obj = {};
      }
      else {
        obj[value] = text;
      }
    }
    else {
      obj[value] = !obj[value];
    }

    tpl[propertyName].set(obj);
  }
}

Template.radioactiveDemo.events({
  'change .filter-by-type': elementEvent('filter-by-type', 'filter', true),
  'click .sort-by': elementEvent('sort-by', 'sortBy'),
  'click .sort-ascending': elementEvent('sort-ascending', 'sortAscending')
});
