import random
from textblob import TextBlob

# The text file for this project is called "blackcat.txt" 
# referring to the story by Edgar Allan Poe.
with open('blackcat.txt', 'r') as file:
    text = file.read()

blob = TextBlob(text)
#five word lists for our poetry
adject = []
noun = []
verb = []
prep = []
determ = []
#loading lists based on word tags
for word,pos in blob.tags:
    if (pos == 'JJ'):
        adject.append(word)
    if (pos == 'NN'):
        noun.append(word)
    if (pos == 'VB'):
        verb.append(word)
    if (pos == 'IN'):
        prep.append(word)
    if (pos == 'DT'):
        determ.append(word)
#Takes a determiner, two nouns, two adjectives, two prepositions and a verb
#to form four couplets for each poem
for i in range(4):
    n1 = random.choice(noun)
    n2 = random.choice(noun)
    a1 = random.choice(adject)
    a2 = random.choice(adject)
    vb = random.choice(verb)
    p1 = random.choice(prep)
    p2 = random.choice(prep)
    dt = random.choice(determ)
    print(dt + " " + n1 + " " + p1 + " " + a2 +"\n" +
          vb  + " " + p2 + " " + a1 + " " + n2 + "\n")
