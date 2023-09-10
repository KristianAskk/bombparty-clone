

with open("./enable2k.txt", "rt") as f:
    data = f.read().splitlines()

words = []

for w in data:
    if "." in w:
        continue
    else:
        words.append(w)

with open("./enable2k.txt", "wt") as f:
    f.write("\n".join(words))
