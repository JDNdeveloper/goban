/*
 * Copyright (C) Online-Go.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GoTheme } from "./GoTheme";

export interface GoThemesInterface {
    white: { [name: string]: typeof GoTheme };
    black: { [name: string]: typeof GoTheme };
    board: { [name: string]: typeof GoTheme };

    // this exists so we can easily do GoThemes[what]
    [_: string]: { [name: string]: typeof GoTheme };
}

export const GoThemes: GoThemesInterface = {
    white: {},
    black: {},
    board: {},
};
export const GoThemesSorted: { [n: string]: Array<GoTheme> } = {
    white: [],
    black: [],
    board: [],
};

import init_board_plain from "./themes/board_plain";
import init_board_woods from "./themes/board_woods";
import init_plain_stones from "./themes/plain_stones";
import init_rendered from "./themes/rendered_stones";
import init_image_stones from "./themes/image_stones";

init_board_plain(GoThemes);
init_board_woods(GoThemes);
init_plain_stones(GoThemes);
init_rendered(GoThemes);
init_image_stones(GoThemes);

function theme_sort(a: GoTheme, b: GoTheme) {
    return a.sort() - b.sort();
}

for (const k in GoThemes) {
    GoThemesSorted[k] = Object.keys(GoThemes[k]).map((n) => {
        return new GoThemes[k][n]();
    });
    GoThemesSorted[k].sort(theme_sort);
}
