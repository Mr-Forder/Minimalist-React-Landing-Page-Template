//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/Work/the-athlete",
      awards: [
        {
          title: "Chillwave vegan brunch forage JOMO",
          description: "“Echo park tonx palo santo stumptown dreamcatcher.”",
        },
        {
          title: "YOLO palo santo poutine",
          description:
            "“. Biodiesel franzen polaroid, 8-bit quinoa fit vape mlkshk air plant +1 drinking vinegar yuccie. ”",
        },
        {
          title: " Vegan intelligentsia occupy direct trade",
          description:
            "“Hot chicken aesthetic vibecession, coloring book deep v affogato narwhal raclette artisan pinterest salvia locavore tilde quinoa.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/Work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: " Vegan intelligentsia occupy direct trade",
          description:
            "“Hot chicken aesthetic vibecession, coloring book deep v affogato narwhal raclette artisan pinterest salvia locavore tilde quinoa.”",
        },
        {
          title: "YOLO palo santo poutine",
          description: "“Direct trade organic hashtag”",
        },
        {
          title: "Tattooed fanny pack.",
          description:
            "“Tattooed fanny pack distillery, stumptown literally knausgaard godard.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/Work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "JOMO man bun poutine.",
          description:
            "“Flexitarian sus you probably haven't heard of them typewriter gastropub tbh.”",
        },
        {
          title: "Retro salvia vaporware",
          description:
            "“L Unicorn keytar actually vinyl mukbang intelligentsia.”",
        },
        {
          title: "flannel DIY migas",
          description:
            "“n pinterest salvia locavore tilde quinoa. Tattooed fanny pack distillery, stumptown literally.”",
        },
      ],
    },
  ];
};
