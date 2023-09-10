

with open("./enable2k.txt", "rt") as f:
    data = f.read().splitlines()

data = list(set(data))

with open("./enable2k.txt", "wt") as f:
    f.write("\n".join([x.lower() for x in data]))