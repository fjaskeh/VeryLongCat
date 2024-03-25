const wrapper = document.querySelector('.wrapper')
const neck = document.querySelector('.neck')
const meowE1 = document.querySelector('#meows')
const lengthE1 = document.querySelector('#length')

let meows = 0 

const observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach((entry) => { 
			if (entry.intersectionRatio > 0) { 
				injectNeck(entry)			
			}
		});
}, {});

function injectNeck(entry) {

	// Stops observing the old neck element
  observer.unobserve(entry.target)

  const clonedNeck = neck.cloneNode(true)
  wrapper.appendChild(clonedNeck)
  observer.observe(clonedNeck)

  injectMeow()

}

function injectMeow(){
	meows++
	meowE1.innerText = meows; 

	const newMeow = document.createElement('div')
	newMeow.className = 'textMeow'
	newMeow.innerText = 'MEOW'
	newMeow.style.left = Math.random() * window.innerWidth - 50 + 'px'
	newMeow.style.top = wrapper.offsetHeight - 50 + 'px'
	document.body.appendChild(newMeow)

	if (meows === 10){ 
		lengthE1.innerText = 'meow meow'
	}
	if (meows === 50){ 
		lengthE1.innerText = 'MEOW meow'
	}
	if (meows === 100){ 
		lengthE1.innerText = 'Long meow meow'
	}
	if (meows === 150){ 
		lengthE1.innerText = 'Very Longer Meow Meow'
	}
	if (meows === 200){ 
		lengthE1.innerText = 'Very Very longer MEOW MEOW'
	}
	if (meows === 400){ 
		lengthE1.innerText = 'MEOW MEOW LONG MOEW LONGER'
	}
	if (meows === 500){ 
		lengthE1.innerText = '!! HIGHER MEOW MEOW LONGER MEOW !!'
	}
	if (meows === 1000){ 
		lengthE1.innerText = 'SUPER LONG MEOW MEOW MEOW'
	}
	if (meows === 2000){ 
		lengthE1.innerText = "mewomeowmowemowmeomeowmeomewomeowmowmew"
	}
	if (meows === 3000){ 
		lengthE1.innerText = 'MEOW'
	}

}

observer.observe(neck)