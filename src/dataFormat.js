const today = new Date()

const f = Intl.DateTimeFormat("en-us", {
	month: "long",
	day: "numeric",
	year: "numeric"
})

document.getElementById("date").innerHTML = f.format(today)
