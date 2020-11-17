# cozy-holiday

🎁 Add cozy pixelated holiday cheer to your React site!

🎄 Featuring: snow, lights, crackling fireplace, eggnog, & a festive boi.


![Cozy Holiday Demo](https://j.gifs.com/5Qwrmx.gif)


## Installation

```
npm i --save-dev cozy-holiday
```


## Basic Usage

```
import CozyHoliday from 'cozy-holiday';

const MyComponent = () => (
  <CozyHoliday />
);
```

## Configuration

  prop name: snowIntensity<br/>
  type: string<br/>
  description: Controls amount of flakes visible on screen<br/>
  options:<br/>
  - 'mild' (default)
  - 'flurry'
  - 'blizzard'
  - 'snowDayDontComeIntoWork'

example:<br/>
  ```<CozyHoliday snowIntensity='flurry' />```


  prop name: hideIcons<br/>
  type: array of strings<br/>
  description: Controls which holiday features are available in the navigation & render. By adding the feature to the array, it becomes unavailable. All features are available by default.<br/>
  options:<br/>
  - 'fire'
  - 'snow'
  - 'lights'
  - 'eggnog'
  - 'cat'

example:<br/>
  ```<CozyHoliday hideIcons={['fire', 'eggnog', 'cat']} />```


  prop name: fireSoundOn<br/>
  type: boolean<br/>
  description: If you don't love the soothing sound of a crackling fireplace you totally don't have to listen to it. This isn't Tik Tok.<br/>
  options:<br/>
  - true (default)
  - false

  example:<br/>
  ```<CozyHoliday fireSoundOn={false} />```
  
