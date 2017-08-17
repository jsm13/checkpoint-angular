/* global angular */

angular.module('musingsApp', [])
.factory('musings', [function () {
  const musings = [
    {
      title: 'The Sothern Island',
      content: 'Antartica is an island with only a northern coast.',
      author: '/u/_The_Blockhead_'
    },
    {
      title: 'Heavy Machinery',
      content: 'When medication says "do not operate heavy machinery" they\'re probably mainly referring to cars, but my mind always goes to forklift.',
      author: '/u/megadumbbonehead'
    },
    {
      title: 'AC Repairman\'s Plight',
      content: 'It must suck to be an air conditioner repairman. You spend your day working in buildings that have no air conditioning. When it\'s fixed and finally cool, you leave.',
      author: '/u/SoDakMax'
    }
  ]

  return {
    all: _ => musings,
    create: musing => musings.push(musing),
    delete: idx => musings.splice(idx, 1)
  }
}])
.controller('musingsController', ['musings', function (musings) {
  this.musings = musings.all()
  this.newMusing = {
    title: '',
    content: '',
    author: ''
  }
  this.createMusing = _ => musings.create(this.newMusing)
  this.deleteMusing = idx => musings.delete(idx)
}])
