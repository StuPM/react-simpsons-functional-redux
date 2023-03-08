export const initialState = {
  count: 1,
  name: "Russells Counter Demo",

  readQuotes: 0,
  simpsons: [
    {
      quote: "They taste like...burning.",
      character: "Ralph Wiggum",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
      characterDirection: "Left",
      quoteRead: "notRead",
      visible: true,
    },
    {
      quote:
        "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
      character: "Milhouse Van Houten",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
      characterDirection: "Right",
      quoteRead: "notRead",
      visible: true,
    },
  ],
};
