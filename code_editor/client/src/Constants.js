export const CODE_SNIPPETS = {
  "Simple Operations": `#Simple arithmetic\n\na = 5\nb = 2\nc = a + b\nprint("result =",c)`,
  "1lv if else":
    '#1 level if else statement\n\na = 12 + 2 * 2\nb = 23\n\nif a < 23:\n\tc = a + 19\nelse:\n\td = b - a\n\nprint("a =", a)\nprint("b =", b)\nprint("c =", c)',
  "2lv if else":
    '#2 level if else statements\n\na = 2 * 8 + 2 - 1\nb = 2 + 2 * 9 - 2\n\nif a < b:\n\tc = a * 3 - 2\n\tif c < b:\n\t\ta = 1\n\telse:\n\t\ta = 2\nelse:\n\tc = b + 2\n\nprint("a =", a)\nprint("b =", b)',
  Function:
    '#Functions with nested if/else\n\na = 10\nb = 16\nx = 3\ny = 9\nz = 0\nc = a + 5 + b * x * y - 30\ndef evaluate(x):\n    b = x * 2 \n    c = x - 4\n    d = c * b + 5\n    result = 0\n    if c > 13:\n        result = 0\n    else:\n        result = 6\n    return result\n\ndef increment(x):\n    scale = 0\n    val = 3 * x + 5 + 7 + 5 - 4 * 2\n    \n    if val > 45:\n        e = 1 + 3 + 6 - 5 + 7 - 3\n        if e > 7:\n            scale = 2\n        else:\n            scale = 4\n    else:\n        e = 8 * 3 - 6 - 5 + 7 - 11\n        if e > 23:\n            scale = 3\n        else:\n            #target\n            scale = 5 \n    x = x * scale\n    return x\n\n\nz = evaluate(x)\nresult = increment(y)\nprint("z =", z)\nprint("result =", result)',
};
