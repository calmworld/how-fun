// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

import './styles.css';

function ProfileCard({ profile }) {
  const numBadges = profile.badges.length;
  
  return (
    <article className="profile-card">
      <header>
        <img
          alt={profile.imageAlt}
          src={profile.imageSrc}
        />

        <h2>{profile.name}</h2>
        <p className="joined">
          Joined {profile.joinDate}
        </p>
        {numBadges > 0 && (
          <ul className={ numBadges >= 3
            ? 'golden badge-list'
            : 'badge-list'}>
            {profile.badges.map((badge) => (
              <li key={badge.slug}>
                {badge.label}
              </li>
            ))}
          </ul>
          )}
      </header>
    </article>
  );
}

export default ProfileCard;

/*
renders in app.jsx

import ProfileCard from './ProfileCard/ProfileCard';

const userProfiles = [
  {
    id: 'penelope-june-p1oer6',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/sparkly-cat.png',
    imageAlt: 'A cat with illustrated groovy glasses and sparkles/rainbows',
    name: 'Penelope “bric-a-brac” June',
    joinDate: 'January 21st, 2022',
    badges: [
      {
        slug: 'ping-pong',
        label: '🏓  Athletic',
      },
      {
        slug: 'photographer',
        label: '📸 Photographer',
      },
      {
        slug: 'olympic-medalist',
        label: '🏅 Olympic Medalist',
      },
    ]
  },
  {
    id: 'baron-montgomerie-9si39d',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/fancy-cat.png',
    imageAlt: 'A very distinguished gentleman cat, with top hat and monocle',
    name: 'Baron Montgomerie of Eglinton III',
    joinDate: 'August 3rd, 1924',
    badges: []
  },
  {
    id: 'joan-clawmaker-5xch41',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/punk-cat.png',
    imageAlt: 'A punk rock cat with earrings and a pink mohawk',
    name: 'Joan Clawmaker',
    joinDate: 'October 15th, 2019',
    badges: [
      {
        slug: 'notable',
        label: '⭐️ Notable',
      },
      {
        slug: 'musician',
        label: '🎸 Musician',
      },
    ]
  },
]

function App() {
  return (
    <main className="app">
      {userProfiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
        />
      ))}
    </main>
  );
}

export default App;
*/