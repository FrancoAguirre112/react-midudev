import { TwitterFollowCard } from './TwitterFollowCard';

import './App.css';

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard username="midudev" initialIsFollowing={true}>
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard username="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard username="clint">
        Clint Stevens
      </TwitterFollowCard>
    </section>
  );
}
