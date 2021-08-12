public Map<String, Long> getOutcomes(String[] ducks) { // массив родителей { "dddddddd", "gggggggg" }
    char[] tmp = new char[8];
    List<String> intermediates = new ArrayList<>();
    for (int i = 0; i < 256; i++) { // представляем байт i как битовую маску
        for (int j = 0; j < 8; j++) { // позиция бита в байте
            tmp[7-j] = ducks[(i >> j) & 1].charAt(7-j);
        }
        String canonic = toCanonicForm(String.valueOf(tmp)); // "2D6G"
        intermediates.add(canonic);
    }
    // Теперь для расчета вероятностей нам нужна мапа - канонический генотип, количество таких генотипов
    return intermediates.stream().collect(Collectors.groupingBy(e -> e, Collectors.counting()));
}

// "ABCDDBDA" -> "2A2B1C3D"
private String toCanonicForm(String name) {
    StringBuilder result = new StringBuilder();

    int a = StringUtils.countMatches(name, "A");
    if (a > 0) result.append(a).append('A');

    int b = StringUtils.countMatches(name, "B");
    if (b > 0) result.append(b).append('B');

    int c = StringUtils.countMatches(name, "C");
    if (c > 0) result.append(c).append('C');

    int d = StringUtils.countMatches(name, "D");
    if (d > 0) result.append(d).append('D');

    int e = StringUtils.countMatches(name, "E");
    if (e > 0) result.append(e).append('E');

    int f = StringUtils.countMatches(name, "F");
    if (f > 0) result.append(f).append('F');

    int g = StringUtils.countMatches(name, "G");
    if (g > 0) result.append(g).append('G');

    int h = StringUtils.countMatches(name, "H");
    if (h > 0) result.append(h).append('H');

    return result.toString();
}