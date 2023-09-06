from collections import Counter

counter = Counter()

with open("./NORSK.txt", "rt") as f:
    data = f.read().splitlines()


for word in data:
    for i in range(len(word) - 1):
        
        counter[word[i:i+2]] += 1

x = counter.most_common(80)

print([i[0] for i in x])