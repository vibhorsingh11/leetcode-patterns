const suggestedProducts = require("../main/Problem71_SearchSuggestionsSystem");

test("should return searched products", () => {
  const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    searchWord = "mouse";

  const expected = [
    ["mobile", "moneypot", "monitor"],
    ["mobile", "moneypot", "monitor"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
  ];

  expect(suggestedProducts(products, searchWord)).toStrictEqual(expected);
});
