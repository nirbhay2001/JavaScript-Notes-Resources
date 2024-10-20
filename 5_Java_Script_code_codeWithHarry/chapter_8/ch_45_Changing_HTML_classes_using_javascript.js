first.className = "text-black red" // esase class name change hokar text-black red ho jayega ye us element ka hoga jiska id first hoga

first.classList // output: DOMTokenList [ "text-black", "red" ]

first.classList.remove("red") // output: DOMTokenList [ "text-black" ]

first.classList.add("red") // output: DOMTokenList [ "text-black", "red" ]

first.classList.toggle("red") // ye class red laga hoga to use hata dega lekin jab nahi hoga to  usme laga dega
first.classList.toggle("red")

first.classList.contains("red") // esase pata chalta hai ki es nam ka class hai ki nahi , yadi hoga to true return karega jab nahi hoga to false terurn karega