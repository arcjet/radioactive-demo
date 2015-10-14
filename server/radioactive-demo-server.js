var elements = [
  {
    "name": "Technetium",
    "symbol": "Tc",
    "weight": 91,
    "type": "Transition Metal"
  },
  {
    "name": "Polonium",
    "symbol": "Po",
    "weight": 209,
    "type": "Metalloid"
  },
  {
    "name": "Radon",
    "symbol": "Rn",
    "weight": 222,
    "type": "Noble Gas"
  },
  {
    "name": "Francium",
    "symbol": "Fr",
    "weight": 223,
    "type": "Alkali Metal"
  },
  {
    "name": "Radium",
    "symbol": "Ra",
    "weight": 226,
    "type": "Alkali Earth Metal"
  },
  {
    "name": "Thorium",
    "symbol": "Th",
    "weight": 229,
    "type": "Rare Earth Metal"
  },
  {
    "name": "Uranium",
    "symbol": "U",
    "weight": 236,
    "type": "Rare Earth Metal"
  },
  {
    "name": "Plutonium",
    "symbol": "Pu",
    "weight": 244,
    "type": "Rare Earth Metal"
  }
];

Meteor.startup(function () {
  Elements.remove({});
  elements.forEach(function (element) {
    Elements.insert(element);
  });
});
