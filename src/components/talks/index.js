import { withStyles } from '../../utils/withStyles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import talk1 from '../../assets/talk1.svg';
import talk2 from '../../assets/talk2.svg';
import talk3 from '../../assets/talk3.svg';
import talk4 from '../../assets/talk4.svg';
import talk5 from '../../assets/talk5.svg';
import './Talks.css';
import styles from './styles';

function Talks({ classes }) {
  return (
    <Container maxWidth="lg" className={classes.container}>

      {/* ── Game scene banner ── */}
      <div className="gameStageBanner">
        <div className="gsb-top">
          <span className="gsb-badge">STAGE 02</span>
          <div className="gsb-line" />
          <span className="gsb-title">THE SPEAKING ARENA</span>
          <div className="gsb-line" />
        </div>
        <p className="gsb-desc">⚔ Complete quests to unlock new talks  ·  XP REWARD: 500</p>
      </div>

      <h3 className="talkHeader">
        <div className="talkTitle">
          <span role="img" aria-label="speaker">🔊</span>
          <span>{" Talks"}</span>
        </div>
      </h3>

      <div>
        <ul className="timelineList">
          <li className="timelineItem year">
            <div className="timelineTitle">{"2019"}</div>
          </li>
          <li className="timelineItem">
            <button
              className="timelineButton"
              onClick={() => window.open('https://drive.google.com/file/d/1h762DRabg7DKZzEzBY76B_8t02EudT4B/view?usp=sharing')}
              aria-label="View talk: Let's Cache! - Introduction to Service Workers"
            >
              <Grid2 container className="timelineContentWrapper">
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <img loading="lazy" src={talk5} alt="GDG SF DevFest 2019" />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 9 }} className="timelineContent">
                  <div className="talkQuestTag">QUEST COMPLETE ✓</div>
                  <h4>{"Let's Cache! - Introduction to Service Workers"}</h4>
                  <p>{"Presented at GDG San Francisco DevFest Conference 2019."}</p>
                </Grid2>
              </Grid2>
            </button>
          </li>
          <li className="timelineItem year">
            <div className="timelineTitle">{"2018"}</div>
          </li>
          <li className="timelineItem">
            <button
              className="timelineButton"
              onClick={() => window.open('https://drive.google.com/file/d/1vE7RSqLI83zBjwJlrCB4C7RxpgA94s-x/view?usp=sharing')}
              aria-label="View talk: Google I/O Extended Keynote 2018"
            >
              <Grid2 container className="timelineContentWrapper">
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <img loading="lazy" src={talk4} alt="Google I/O Extended (GDG Berkeley) 2018" />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 9 }} className="timelineContent">
                  <div className="talkQuestTag">QUEST COMPLETE ✓</div>
                  <h4>{"Google I/O Extended Keynote 2018"}</h4>
                  <p>{"Presented at GDG Berkeley I/O Extended Meetup 2018."}</p>
                </Grid2>
              </Grid2>
            </button>
          </li>
          <li className="timelineItem year">
            <div className="timelineTitle">{"2016"}</div>
          </li>
          <li className="timelineItem">
            <button
              className="timelineButton"
              onClick={() => window.open('https://pattishin.github.io/')}
              aria-label="View talk: Google I/O Highlights 2016"
            >
              <Grid2 container className="timelineContentWrapper">
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <img loading="lazy" src={talk3} alt="Google I/O 2016 Re-cap" />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 9 }} className="timelineContent">
                  <div className="talkQuestTag">QUEST COMPLETE ✓</div>
                  <h4>{"Google I/O Highlights 2016"}</h4>
                  <p>{"Presented at GDG Triangle (Durham, NC) to share major talks from Google I/O 2016."}</p>
                </Grid2>
              </Grid2>
            </button>
          </li>
          <li className="timelineItem year">
            <div className="timelineTitle">{"2015"}</div>
          </li>
          <li className="timelineItem">
            <button
              className="timelineButton"
              onClick={() => window.open('https://pattishin.github.io/techtalks')}
              aria-label="View talk: Build with Confidence"
            >
              <Grid2 container className="timelineContentWrapper">
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <img loading="lazy" src={talk2} alt="Build with confidence 2015" />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 9 }} className="timelineContent">
                  <div className="talkQuestTag">QUEST COMPLETE ✓</div>
                  <h4>{"Build with Confidence - Jive into front-end development"}</h4>
                  <p>{"Presented at DiamondHacks hackathon event at NC State University."}</p>
                </Grid2>
              </Grid2>
            </button>
          </li>
          <li className="timelineItem year">
            <div className="timelineTitle">{"2014"}</div>
          </li>
          <li className="timelineItem">
            <button
              className="timelineButton"
              onClick={() => window.open('https://drive.google.com/file/d/1MQuC407xpHwos3-yKTKIh3RZPb_P3b1a/view?usp=sharing')}
              aria-label="View talk: JSConf 2014 Highlights"
            >
              <Grid2 container className="timelineContentWrapper">
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <img loading="lazy" src={talk1} alt="JSConf 2014" />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 9 }} className="timelineContent">
                  <div className="talkQuestTag">QUEST COMPLETE ✓</div>
                  <h4>{"JSConf 2014 Highlights"}</h4>
                  <p>{"Presented at WillowTree, Inc Lunch & Learn event to share learnings from JSConf 2014."}</p>
                </Grid2>
              </Grid2>
            </button>
          </li>
          <li className="timelineItem year" />
        </ul>
      </div>
    </Container>
  );
}

export default withStyles(styles)(Talks);
