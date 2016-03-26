

var now = moment(new Date());
var end = moment('04/10/2016 07:30 PM');
var duration = moment.duration(now.diff(end));
var days = Math.abs(duration.asDays());
var hours = Math.abs(duration.asHours());
var minutes = Math.abs(duration.asMinutes());
var seconds = Math.abs(duration.asSeconds());

console.log('duration', duration);
console.log('days', days);
console.log('hours', hours);
console.log('minutes', minutes);
console.log('seconds', seconds);

var clock = $('.clock').FlipClock(seconds, {
	clockFace: 'DailyCounter',
	countdown: true
});