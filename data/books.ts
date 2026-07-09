export type Book = {
  title: string;
  author: string;
  coverUrl: string;
  summary: string;
  takeaway: string;
};

export const books: Book[] = [
  {
    title: "The Silk Roads",
    author: "Peter Frankopan",
    coverUrl: "https://covers.openlibrary.org/b/id/12514527-L.jpg",
    summary:
      "Frankopan argues that the region connecting East and West Asia has been the central axis of the world for centuries, the real prize conquerors sought, while northwestern Europe was more often a departure point than a destination. Most major religions trace their roots back to this stretch of the world.",
    takeaway:
      "It left me noticing how, even today, whichever power holds global dominance seems uneasy about real stability taking hold in this region.",
  },
  {
    title: "The Muqaddimah",
    author: "Ibn Khaldun",
    coverUrl: "https://covers.openlibrary.org/b/id/443783-L.jpg",
    summary:
      "Written by Ibn Khaldun, a 14th-century scholar often credited as the first sociologist, the book studies the patterns behind how societies and dynasties rise and fall, including his theory that a dynasty's average lifespan is around 110 years.",
    takeaway:
      "I don't agree with everything he concludes, but the depth and rigor of his analysis is hard to argue with.",
  },
  {
    title: "The Impossible State",
    author: "Wael Hallaq",
    coverUrl: "https://books.google.com/books/publisher/content?id=LTsgAAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73Uu6moxghngGnsJeet252hSgDiDG4RVKTVlkaZJNVp35eE5nRYyLmRXNuCBWu5YcbddyQslL58Ru5TIelf8tXPNT4Y8ofs2gh50BiGnsVdhZWW4d51iNXnO-s3n97bKnWOPxk0",
    summary:
      "Wael Hallaq, a professor from a Palestinian Christian background, argues that Islam can never be fully implemented within a modern nation-state, since the nation-state itself is a Euro-American construct that constrains Islam rather than letting it operate on its own terms.",
    takeaway:
      "I find it almost funny at times, a Christian scholar articulating this so clearly, while many Muslims still haven't fully grappled with it themselves.",
  },
  {
    title: "Lords of the Rose: An Afghan Saga",
    author: "Sultan Mahmud",
    coverUrl: "/books/lords-of-the-rose.jpg",
    summary:
      "The book traces Afghanistan's dilemma across roughly the last hundred years of its history. After reading The Silk Roads, I'd already come to understand how difficult it is to rule over nomadic peoples, and this book's account of Afghanistan's recent history only confirmed that, suggesting only an authoritative regime like the Taliban has been able to hold the country together.",
    takeaway:
      "My favorite part is where Sultan Mahmud lays out the Pashtun tribal code, including the line \u2018Zan, Zar, Zameen\u2019: women, gold, and land.",
  },
  {
    title: "When Only God Can See: The Faith of Muslim Political Prisoners",
    author: "Walaa Quisay & Asim Qureshi",
    coverUrl: "https://www.plutobooks.com/wp-content/uploads/2023/09/9780745348957.jpg",
    summary:
      "This book exposes something about the modern democratic system that Iqbal already warned of back in 1907:\n\n\u062a\u0645\u06c1\u0627\u0631\u06cc \u062a\u06c1\u0630\u06cc\u0628 \u0627\u067e\u0646\u06d2 \u062e\u0646\u062c\u0631 \u0633\u06d2 \u0622\u067e \u06c1\u06cc \u062e\u0648\u062f\u06a9\u0634\u06cc \u06a9\u0631\u06d2 \u06af\u06cc\n\u062c\u0648 \u0634\u0627\u062e \u0646\u0627\u0632\u06a9 \u067e\u06c1 \u0622\u0634\u06cc\u0627\u0646\u06c1 \u0628\u0646\u06d2 \u06af\u0627 \u0646\u0627\u067e\u0627\u0626\u06cc\u062f\u0627\u0631 \u06c1\u0648\u06af\u0627\n\nEven if you try to participate peacefully within this system, it will never fully accept you if your convictions are rooted in Islam or any other religion, because the system functions as a creed in itself, one that expels anyone it perceives as a threat to its own existence.",
    takeaway:
      "It\u2019s a reminder that no system, however democratic it claims to be, is neutral about what it allows to exist within it.",
  },
];
