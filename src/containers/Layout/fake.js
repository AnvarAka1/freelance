state = {
  user: {
    photo: Photo,
    name: "John Doe",
    position: "Unitel Ltd. / Manager",
    description:
      "This job entailed communicating with various consumers, giving solid information about company",
    isUserShown: true
  },
  worker: {
    photo: Photo1,
    name: "Miyah Miles",
    position: "Front-end developer",
    rating: "4.5/5.0",
    description:
      "I worked at the PCAD convention downtown Toronto for two consecutive years representing CanAlaska...",
    skills: [
      {
        id: 1,
        name: "Web-development"
      },
      {
        id: 2,
        name: "Front-end"
      },
      {
        id: 3,
        name: "Back-end"
      },
      {
        id: 4,
        name: "Design"
      },
      {
        id: 5,
        name: "UI/UX"
      },
      {
        id: 6,
        name: "Mobile Applications"
      },
      {
        id: 7,
        name: "iOS"
      }
    ],
    isUserShown: false
  },
  touched: false,
  drawerOpened: {
    right: false
  },
  redirect: null
};
