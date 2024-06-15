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

import { GoTheme, GoThemeBackgroundCSS } from "../GoTheme";
import { GoThemesInterface } from "../GoThemes";
import { _ } from "engine/translate";
import { callbacks } from "../callbacks";

function getCDNReleaseBase() {
    if (callbacks.getCDNReleaseBase) {
        return callbacks.getCDNReleaseBase();
    }
    return "";
}

export default function (GoThemes: GoThemesInterface) {
    class Kaya extends GoTheme {
        override sort(): number {
            return 10;
        }
        override get theme_name(): string {
            return "Kaya";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DCB35C",
                "background-image": "url('" + getCDNReleaseBase() + "/img/kaya.jpg')",
            };
        }
        override getLineColor(): string {
            return "#000000";
        }
        override getFadedLineColor(): string {
            return "#888888";
        }
        override getStarColor(): string {
            return "#000000";
        }
        override getFadedStarColor(): string {
            return "#888888";
        }
        override getBlankTextColor(): string {
            return "#000000";
        }
        override getLabelTextColor(): string {
            return "#444444";
        }
    }

    _("Kaya"); // ensure translation
    GoThemes["board"]["Kaya"] = Kaya;

    class RedOak extends GoTheme {
        override sort(): number {
            return 20;
        }
        override get theme_name(): string {
            return "Red Oak";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DCB35C",
                "background-image": "url('" + getCDNReleaseBase() + "/img/oak.jpg')",
            };
        }
        override getLineColor(): string {
            return "#000000";
        }
        override getFadedLineColor(): string {
            return "#888888";
        }
        override getStarColor(): string {
            return "#000000";
        }
        override getFadedStarColor(): string {
            return "#888888";
        }
        override getBlankTextColor(): string {
            return "#000000";
        }
        override getLabelTextColor(): string {
            return "#000000";
        }
    }

    _("Red Oak"); // ensure translation
    GoThemes["board"]["Red Oak"] = RedOak;

    class Persimmon extends GoTheme {
        override sort(): number {
            return 30;
        }
        override get theme_name(): string {
            return "Persimmon";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DCB35C",
                "background-image": "url('" + getCDNReleaseBase() + "/img/persimmon.jpg')",
            };
        }
        override getLineColor(): string {
            return "#000000";
        }
        override getFadedLineColor(): string {
            return "#888888";
        }
        override getStarColor(): string {
            return "#000000";
        }
        override getFadedStarColor(): string {
            return "#888888";
        }
        override getBlankTextColor(): string {
            return "#000000";
        }
        override getLabelTextColor(): string {
            return "#000000";
        }
    }

    _("Persimmon"); // ensure translation
    GoThemes["board"]["Persimmon"] = Persimmon;

    class BlackWalnut extends GoTheme {
        override sort(): number {
            return 40;
        }
        override get theme_name(): string {
            return "Black Walnut";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DCB35C",
                "background-image": "url('" + getCDNReleaseBase() + "/img/black_walnut.jpg')",
            };
        }
        override getLineColor(): string {
            return "#000000";
        }
        override getFadedLineColor(): string {
            return "#4A2F24";
        }
        override getStarColor(): string {
            return "#000000";
        }
        override getFadedStarColor(): string {
            return "#4A2F24";
        }
        override getBlankTextColor(): string {
            return "#000000";
        }
        override getLabelTextColor(): string {
            return "#000000";
        }
    }

    _("Black Walnut"); // ensure translation
    GoThemes["board"]["Black Walnut"] = BlackWalnut;

    class Granite extends GoTheme {
        override sort(): number {
            return 40;
        }
        override get theme_name(): string {
            return "Granite";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DCB35C",
                "background-image": "url('" + getCDNReleaseBase() + "/img/granite.jpg')",
            };
        }
        override getLineColor(): string {
            return "#cccccc";
        }
        override getFadedLineColor(): string {
            return "#888888";
        }
        override getStarColor(): string {
            return "#cccccc";
        }
        override getFadedStarColor(): string {
            return "#888888";
        }
        override getBlankTextColor(): string {
            return "#ffffff";
        }
        override getLabelTextColor(): string {
            return "#cccccc";
        }
    }

    _("Granite"); // ensure translation
    GoThemes["board"]["Granite"] = Granite;

    class Anime extends GoTheme {
        override sort(): number {
            return 10;
        }
        override get theme_name(): string {
            return "Anime";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DCB35C",
                "background-image": "url('" + getCDNReleaseBase() + "/img/anime_board.svg')",
                "background-size": "cover",
            };
        }
        override getLineColor(): string {
            return "#000000";
        }
        override getFadedLineColor(): string {
            return "#888888";
        }
        override getStarColor(): string {
            return "#000000";
        }
        override getFadedStarColor(): string {
            return "#888888";
        }
        override getBlankTextColor(): string {
            return "#000000";
        }
        override getLabelTextColor(): string {
            return "#444444";
        }
    }

    _("Anime"); // ensure translation
    GoThemes["board"]["Anime"] = Anime;

    class BrightKaya extends GoTheme {
        override sort(): number {
            return 15;
        }
        override get theme_name(): string {
            return "Bright Kaya";
        }
        override getBackgroundCSS(): GoThemeBackgroundCSS {
            return {
                "background-color": "#DBB25B",
                "background-image": "url('" + getCDNReleaseBase() + "/img/kaya.jpg')",
            };
        }
        override getLineColor(): string {
            return "#FFFFFF";
        }
        override getFadedLineColor(): string {
            return "#FFFFFF";
        }
        override getStarColor(): string {
            return "#FFFFFF";
        }
        override getFadedStarColor(): string {
            return "#999999";
        }
        override getBlankTextColor(): string {
            return "#FFFFFF";
        }
        override getLabelTextColor(): string {
            return "#FFFFFF";
        }
    }

    _("Bright Kaya"); // ensure translation
    GoThemes["board"]["Bright Kaya"] = BrightKaya;
}
