import { ImageProps } from 'next/image';

type PostTypes = {
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: {
    url: string;
    width: ImageProps['width'];
    height: ImageProps['height'];
    alt: string;
  };
};

export const posts: PostTypes[] = [
  {
    title: 'Being Different',
    slug: 'being-different',
    date: '2023-09-29 • 18:12',
    description: `I love this quote by Mitchell Pritchett:
    <br><br>
    "This is the funny thing about growing up. For years and years, everybody's desperately afraid, to be different, you know, in any way. And then, suddenly, almost overnight, Everybody wants to be different"`,
  },
  {
    title: 'Writing & The Promise of Living Forever',
    slug: 'writing-and-the-promise-of-living-forever',
    date: '2023-01-20 • 21:23',
    description: `Leonardo da Vinci, Ramanujan, and Aaron Swartz.
    <br><br>
    They are all eternalized in their writings.
    <br><br>
    <a href="https://www.amazon.com/Leonardo-Vinci-Walter-Isaacson/dp/1501139150">Leonardo da Vinci</a> wrote about his ideas, thoughts, and illustrations in his notebooks. He is eternalized in history through his writings, art, and biographies.
    <br><br>
    <a href="https://www.youtube.com/watch?v=8WwLPep9xNg&ab_channel=HOLLYWOODWORLD">Ramanujan</a> didn't want his ideas to die with himself and publishing was his own goal to spread all the work he did. He is eternalized in history through his publication.
    <br><br>
    <a href="https://www.youtube.com/watch?v=9vz06QO3UkQ&ab_channel=moviemaniacsDE">Aaron Swartz</a> wrote software and his idea about the open web and open knowledge. He is eternalized in history through his writings and his work on knowledge freedom.
    <br><br>
    And this, I write to you TK. Do you want to be eternalized in history through your writings and ideas? Keep asking yourself this and you'll find answers and more answers throughout your life.`,
  },
  {
    title: 'Getting Better',
    slug: 'getting-better',
    date: '2022-09-07 • 15:32',
    description: `You're not gonna get better by doing things that are easy, this is why I want to take the hard way, that's when you build the character, that's when you become resilient, is going through tough times.
    <br><br>
    Comfort is good. But constant comfort is not what I'm looking for. I want the next step. I want to become better. Tiny improvements every single day.`,
  },
  {
    title: 'Blogging as an excuse',
    slug: 'blogging-as-an-excuse',
    date: '2022-09-03 • 16:50',
    description: `The process of writing is so fun. But I think it's not the writing part that I find most interesting.
    <br><br>
    Yes, writing is fun too, but the most interesting part for me is the research, learning, taking notes, getting data, reflecting on the topics, doing a lot of drafts, and then, writing the actual article.
    <br><br>
    I guess I use writing as an excuse (or a tool) to learn and think.`,
  },
  {
    title: 'Bigger than me',
    slug: 'bigger-than-me',
    date: '2022-09-02 • 21:44',
    description: `I plan, I plan, and I plan. But I never know what are the next steps for me. This is something I feel I can control. But sometimes it's not that way.
    <br><br>
    I dream about something bigger than me. This legacy should be bigger than me.`,
  },
  {
    title: 'Different Perspectives',
    slug: 'different-perspectives',
    date: '2022-08-28 • 20:02',
    description: `People always tell me: "you're a really good developer", "you're a talented engineer". And instead of nodding and saying "No way, I'm not", I just wanted to say what Mori said to Yatora on Blue Period:
    <br><br>
    "It's not talent, I just spend more time thinking about art than most people... To say I have talent is to ignore all my effort."
    <br><br>
    I feel the same way as her. I spend so much time on my own craft, improving, learning, doing research, writing, sharing. "But why?", they ask, "Why spend so much time on it?". And I need to quote Masako Saeki, Yatori's teacher:
    <br><br>
    "Doesn't it make sense to dedicate yourself to the maximum in the search for what you really like? When a person does what he likes, he is unbeatable."
    <br><br>
    I feel exactly like that. Most people don't. I don't judge them for staying comfortable, I know it feels good. But I'm not like that. I'm always in search of the next step, thinking about how I can improve myself and things. It's just how my brain works. It's just a different perspective.
    `,
  },
  {
    title: 'Outcome vs Output',
    slug: 'outcome-vs-output',
    date: '2022-07-20 • 14:46',
    description: `In the "output" mindset, you focus on making things faster. The more, the better. In the "outcome" mindset, you focus on the impact of your decisions and the most important things. It all comes down to prioritization, strategy, and planning. After figuring out the most impactful outputs, you focus on making it faster. The more impactful output, the better.`,
  },
  {
    title: 'Knowledge Sharing & Education',
    slug: 'knowledge-sharing-and-education',
    date: '2022-07-17 • 11:32',
    description: `One of the things that I want to keep doing in my life is knowledge sharing. The ability to share any experience, learnings, or failures that I had in the past. Knowledge and education are the way to keep evolving our society and I want to be part of this. When I get older, I want to look back and see everything I've done to contribute to this goal and leave my legacy for future generations.`,
  },
  {
    title: 'Discipline & Regret',
    slug: 'discipline-and-regret',
    date: '2022-07-15 • 10:01',
    description: `Whenever I have time to reflect, the thought of the relationship between discipline and regret always comes to my mind. Discipline is hard, it's painful but transitory. Regret is forever. For every decision in my life, I should keep asking if I choose discipline or regret.`,
  },
  {
    title: 'Intellectual Freedom',
    slug: 'intellectual-freedom',
    date: '2022-07-13 • 22:37',
    description: `In the last micropost I talked about my independent research and a little about freedom. Intellectual freedom keeps coming into my head and it's definitely challenging to stop these thoughts. This is the next question I want to answer: "How can I balance intellectual freedom and financial independence?"`,
  },
  {
    title: 'Independent Research and Freedom',
    slug: 'independent-research-and-freedom',
    date: '2022-04-17 • 16:41',
    description: `I keep debating with myself what I want to do in my life. What's the next step. "Freedom" is one of the words that come to my mind. Freedom to be wherever I want. Freedom to do whaterver I want. And I started to imagine myself studying, learning, and sharing for a living. Doing a PhD is a possibility in the future but not for now. Independent research is one of the greater possibilities I have for now and my eyes light up when I think about it. I started three main projects: <a href="https://github.com/imteekay/web-performance-research">web performance</a>, <a href="https://github.com/imteekay/frontend-infrastructure">frontend infrastructure</a>, and <a href="https://github.com/imteekay/programming-language-theory">programming language theory</a>. Still figuring out how to push it forward in my life and how to do things. I truly want to make this works and I'll keep you up to date!`,
  },
  {
    title: 'First post',
    slug: 'first-post',
    date: '2022-04-16 • 22:52',
    description:
      '3 years ago I remember I wrote what type of person I wanted to be. One of the things I wrote was "a person who does whatever, however, whenever, wherever he wants". This stuck with me because this is my definition of `freedom`. I want to taste this feeling now, to bring this concept to real life. This is why I built this microblog. A place I can share anything I want. There\'s no limitation. There\'s no 180 characters, no expectations from other people, no need to capitalize this. Just me and my own thoughts.',
  },
];
