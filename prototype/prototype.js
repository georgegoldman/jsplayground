function Gadget(name) {
    this.name = name;
    this.whatAreYou = function() {
        return 'I am a' + this.skill;
    }
}

Gadget.prototype = {
    name: 'name: Georgegoldman John onyi.',
    color: 'skin tone; light skin.',
    department: 'Decipline: math&stat.',
    rating: 'rating ' + 3,
    job: 'job: WEB DEV',
    skill: ' COMP PROGR',
    stateOfOrigin: 'state of origin ABIA',
    currentLocation: 'current location:  UKRAINE',
    address: 'Home address: ONTERIO CANADA',
    student: 'studying at UNN as best math student',
    getInfo: function() {
        return 'Rating: ' + this.rating + ', department ' + this.department + '.';
    },
    forWho: 'Georgegoldman John Onyi.'
};



exports.Gadget = Gadget;