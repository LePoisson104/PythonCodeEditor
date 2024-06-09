export const CODE_SNIPPETS = {
  "Simple Operations": `a = 5\nb = 2\nc = a + b\nprint(c)`,
  "1lv if else":
    "a = 12 + 2 * 2\nb = 23\n\nif a < 23:\n\tc = a + 19\nelse:\n\td = b - a\n\nprint(a)\nprint(b)\nprint(c)",
  "2lv if else":
    'a = 2 * 8 + 2 - 1\nb = 2 + 2 * 9 - 2\n\nif a < b:\n\tc = a * 3 - 2\n\tif c < b:\n\t\ta = 1\n\telse:\n\t\ta = 2\nelse:\n\tc = b + 2\n\nprint("a =", a)\nprint("b =", b)',
  Function:
    'a = 10\nb = 9\n\ndef sum(x):\n\tx = x + b\n\treturn x\n\nresult = sum(a)\nprint("result:", result)',
};
