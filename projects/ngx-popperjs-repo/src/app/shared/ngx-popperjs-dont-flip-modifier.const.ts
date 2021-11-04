import {Modifier} from "@popperjs/core";
import {Options} from "@popperjs/core/lib/modifiers/flip";

export const NGX_POPPERJS_DONT_FLIP_MODIFIER: Partial<Modifier<"flip", Options>> = {
    name: "flip",
    options: {
        fallbackPlacements: [],
        flipVariations: false, // true by default
    },
};
