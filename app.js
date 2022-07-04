var day = new Date();
var hour = day.getHours();
if (hour >= 0 && hour < 12) {
    alert("sabahiniz xeyir");
} else if (hour == 12) {
    alert("gunorta");
} else if (hour >= 12 && hour <= 17) {
    alert("axsham");
}



