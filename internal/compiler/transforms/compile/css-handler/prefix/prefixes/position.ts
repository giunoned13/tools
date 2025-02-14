import {
	createPrefixVisitor,
	prefixCSSValue,
} from "@internal/compiler/transforms/compile/css-handler/prefix/utils";

// https://github.com/Fyrd/caniuse/blob/main/features-json/css-sticky.json
export default [
	createPrefixVisitor({
		name: "position/sticky",
		enter(path) {
			return prefixCSSValue({
				path,
				propertyName: "position",
				value: "sticky",
				browserFeaturesKey: "css-sticky",
			});
		},
	}),
];
