def mayor_par(A):
  res = 0

  for i in range(len(A)):
    if(A[i] & 1 == 0 and A[res] < A[i]):
      res = i

  return res

print(mayor_par([1,7]))