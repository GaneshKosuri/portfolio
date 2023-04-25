// import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
import jobbyApp from "../assets/png/projects/jobbyApp.png"
import games from "../assets/png/projects/games.png"

// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Jobs App',
        projectDesc: 'A responsive website similar to Job platforms like Noukari, Angel, Indeed. built using NxtWave CCBP APIs.',
        tags: ['React', 'CSS', 'JavaScript', 'HTML'],
        code: 'https://github.com/GaneshKosuri/jobsApp',
        demo: 'https://jobs-app-topaz.vercel.app/login',
        image: jobbyApp
    },
    {
        id: 2,
        projectName: 'Emoji Game',
        projectDesc: 'A Simple Responsive Game using Emojis, Clicking all the emojis only once wins the Game.',
        tags: ['React', 'CSS', 'JavaScript', 'HTML'],
        code: 'https://github.com/GaneshKosuri/emojisFinder',
        demo: 'https://emoji-game-one.vercel.app/',
        image: games
    },
    {
        id: 3,
        projectName: 'Rock Paper Scissors Game',
        projectDesc: 'A Simple Responsive Game which resembles Rock Paper Scissors, you will get +1 or -1 when you win / lose the game.',
        tags: ['React', 'CSS', 'JavaScript', 'HTML'],
        code: 'https://github.com/GaneshKosuri/rockPaperScissors',
        demo: 'https://rock-paper-scissors-lake-nu.vercel.app/',
        image: games
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/