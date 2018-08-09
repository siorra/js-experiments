import React from 'react';
import * as R from 'ramda';
import { interpolationSearch } from './interpolationSearch';

const arr = [
  10, 11, 12, 13, 14, 18, 26, 33,
  50, 51, 52, 53, 55, 57, 59, 74,
  75, 76, 77, 78, 79, 85, 86, 87,
  90, 91, 92, 93, 94, 95, 96, 97,
  110, 111, 112, 113, 114, 118, 126, 133,
  150, 151, 152, 153, 155, 157, 159, 174,
  175, 176, 177, 178, 179, 185, 186, 187,
  190, 191, 192, 193, 194, 195, 196, 197,

  210, 211, 212, 213, 214, 218, 226, 233,
  250, 251, 252, 253, 255, 257, 259, 274,
  275, 276, 277, 278, 279, 285, 286, 287,
  290, 291, 292, 293, 294, 295, 296, 297,
  310, 311, 312, 313, 314, 318, 326, 333,
  350, 351, 352, 353, 355, 357, 359, 374,
  375, 376, 377, 378, 379, 385, 386, 387,
  390, 391, 392, 393, 394, 395, 396, 397,

  410, 411, 412, 413, 414, 418, 426, 433,
  450, 451, 452, 453, 455, 457, 459, 474,
  475, 476, 477, 478, 479, 485, 486, 487,
  490, 491, 492, 493, 494, 495, 496, 497,
  510, 511, 512, 513, 514, 518, 526, 533,
  550, 551, 552, 553, 555, 557, 559, 574,
  575, 576, 577, 578, 579, 585, 586, 587,
  590, 591, 592, 593, 594, 595, 596, 597,

  610, 611, 612, 613, 614, 618, 626, 633,
  650, 651, 652, 653, 655, 657, 659, 674,
  675, 676, 677, 678, 679, 685, 686, 687,
  690, 691, 692, 693, 694, 695, 696, 697,
  710, 711, 712, 713, 714, 718, 726, 733,
  750, 751, 752, 753, 755, 757, 759, 774,
  775, 776, 777, 778, 779, 785, 786, 787,
  790, 791, 792, 793, 794, 795, 796, 797,
];

type Props = {
};
type State = {
};

export class InterpolationSearch extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>InterpolationSearch</h3>
        <h5>Time efficiency is O(log(log(n)))</h5>
        <h5>Array size is 256, log(256) = 8, log(8) = 3</h5>
        <h3>Array</h3>
        {arr.join(', ')}

        <h3>Array with positions</h3>
        {R.pipe(
          R.toPairs,
          // R.tap(console.log),
          R.map(item => [++item[0], item[1]]),
          R.map(R.join(': ')),
          R.join(', '))(arr)
        }

        <h3>Search</h3>
        {arr.map(item =>
          (<div key={item}>{`Position of item ${item} is ${interpolationSearch(arr, item)}`}</div>)
        )}
      </div>
    );
  }
}
