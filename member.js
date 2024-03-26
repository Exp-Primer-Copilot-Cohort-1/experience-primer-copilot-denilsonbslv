function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'React', 'Node'],
        details: function() {
            console.log(this.name + ' is ' + this.age + ' years old. He knows ' + this.skills);
        }
    }
    return member;
}