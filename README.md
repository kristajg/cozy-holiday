# cozy-holiday

🎁 Add cozy pixelated holiday cheer to your React site!
🎄 Features animation options for: snow, decorative lights, crackling fireplace, unlimited eggnog, and a festive boi.
❄️ Activate all at once for pure retro holiday chaos, with and new features coming out soon.


![Cozy Holiday Demo](https://j.gifs.com/5Qwrmx.gif)


### Installation

```
npm i --save-dev cozy-holiday
```


### Usage

Most simple, all options available by default:
```
import CozyHoliday from 'cozy-holiday';

const MyComponent = () => (
  <CozyHoliday />
);
```

Configuring prop options:
  prop name: snowIntensity
  type: string
  description: Controls amount of flakes visible on screen
  options:
  - 'mild' (default)
  - 'flurry'
  - 'blizzard'
  - 'snowDayDontComeIntoWork'
  example: ```<CozyHoliday snowIntensity='flurry' />```


  prop name: hideIcons
  type: array of strings
  description: Controls which holiday features are available in the navigation & render. By adding the feature to the array, it becomes unavailable. All features are available by default.
  options:
  - 'fire'
  - 'snow'
  - 'lights'
  - 'eggnog'
  - 'cat'
  example: ```<CozyHoliday hideIcons={['fire', 'eggnog', 'cat']} />```


  prop name: fireSoundOn
  type: boolean
  description: If you don't love the soothing sound of a crackling fireplace you totally don't have to listen to it. This isn't Tik Tok.
  options:
  - true (default)
  - false
  example: ```<CozyHoliday fireSoundOn={false} />```
  
