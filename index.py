import itertools
from datetime import datetime
import time

start_time = datetime.now()

# print list(itertools.permutations(["a","a","a","a","a","a","a","a", "b","b","b","b","b","b","b","b"], 8))
# print set(list(itertools.permutations(["a","a","a","a","a","a","a","a", "b","b","b","b","b","b","b","b"], 8)))
print len(list(itertools.permutations(["a","a","a","a","a","a","a","a", "b","b","b","b","b","b","b","b"], 8)))

print(datetime.now() - start_time)
