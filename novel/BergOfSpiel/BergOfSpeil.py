import markovify
import dominate 
from dominate.tags import *
import pdfkit
import random
#text for pdf file
novel = ""
#reads in input screenplays
with open("rpo.txt") as r:
	rpo = r.read() #Ready Player One
r.close()
with open("jaws.txt") as j:
	jaw = j.read() #Jaws
j.close()
with open("et.txt") as e:
	et = e.read() #E.T.: Extra-Terristrial
e.close()
with open("jurassic.txt") as d:
	jur = d.read() #Jurassic Park
d.close()
with open("catchme.txt") as c:
	cmi = c.read() #Catch Me If You Can
c.close()
#text models
rpo_model = markovify.Text(rpo)
jaw_model = markovify.Text(jaw)
et_model = markovify.Text(et)
cmi_model = markovify.Text(cmi)
jur_model = markovify.Text(jur)
#model combo
model = markovify.combine([rpo_model,jaw_model,et_model,cmi_model,jur_model])
#different loops in an attempt of separating narration from dialogue.
for i in range(1000):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 10):
		novel += "\n\n"
for i in range(20):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 80):
		novel += "\n\n"

for i in range(2000):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 10):
		novel += "\n\n"
for i in range(10):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 80):
		novel += "\n\n"

for i in range(2000):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 10):
		novel += "\n\n"
for i in range(30):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 80):
		novel += "\n\n"

for i in range(2000):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 10):
		novel += "\n\n"
for i in range(30):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 80):
		novel += "\n\n"

#epilogue
for i in range(80):
	novel += str(model.make_sentence()) + " "
novel += "\n\n"
for i in range(7):
	novel += str(model.make_sentence()) + " "
	r = random.randint(0,100)
	if (r < 80):
		novel += "\n\n"
for i in range(20):
	novel += str(model.make_sentence()) + " "
novel += "\n\n"
novel += str(model.make_sentence()) + "\n\n"
#split up novel
chunked = novel.split("\n")
#algorithm used from github example
#create document
doc = dominate.document(title="Berg of Spiel")
#traditional style
with doc.head:
	style("body {background-color: #fff, color: #333; font-size: 15pt}")
#title
with doc:
	h1("Berg of Spiel")
	#add in portion by portion of novel
	for c in chunked:
		p(c)
	#signature
	h2("A NaNoGenMo novel by Bruno Menezes")
#PDF file
pdfkit.from_string(str(doc.render()), 'BoS.pdf')
