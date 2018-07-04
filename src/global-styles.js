import { injectGlobal } from 'styled-components';
import Alverata from '../src/fonts/Alverata-Black.otf';

injectGlobal`
  @font-face {
     font-family: 'alverata-black';
     src: url('${Alverata}') format('opentype');
  }
`
